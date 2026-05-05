# 08 · Form System

**Date**: 2026-05-06
**Owner spec**: [00-roadmap.md](./00-roadmap.md)
**Phase**: P2
**Depends on**: 03 (Input, Select, Switch, Checkbox, Radio, Textarea), 02 (tokens for spacing / typography)
**Feeds**: 11 (every CRUD view), 06 (login form), 09 (write-editor metadata drawer)

Defines the form binding layer (`react-hook-form` + `zod`), the field-renderer registry, and the port plan for the existing dynamic-form DSL used in `/setting`. The system serves both static forms (login, project create) and the runtime-schema-driven forms (settings panels, snippet metadata, friend application form).

---

## Scope

- **In**: form library choice, schema-validation contract, field-renderer registry, ConfigForm DSL port, error-state rendering, submit behavior, dirty/touched semantics, dynamic field arrays (kv-editor, dynamic-tags), file-input handling shell.
- **Out**: Upload component internals (covered in 11 — `manage-files`), Table column form (in 12), specific view forms (composed inside 11).

---

## Decisions

- **`react-hook-form` + `@hookform/resolvers/zod`**. Zero overlap with existing deps (zod already in source).
- **One canonical wrapper component per primitive.** `<FormField>`, `<FormLabel>`, `<FormControl>`, `<FormMessage>`. They wire up `react-hook-form` context to the Base UI primitive.
- **Schemas live next to the form.** No central schema repo; each form owns its zod schema (or imports a shared one from `~/models/schemas/*` when reuse is genuine).
- **Runtime schemas (`/setting`) ship a `FormFieldRenderer`** that consumes the source's existing form descriptor JSON. The descriptor is converted to zod at runtime; values flow through the same `react-hook-form` machinery.
- **No `<form>` without zod.** Even simple forms (login) declare a schema. Cost is low, payoff (consistent error rendering) is high.

---

## File layout

```
src/components/form/
├── Form.tsx                   # FormProvider wrapper + onSubmit helper
├── FormField.tsx              # Controller + label + control + message
├── FormLabel.tsx
├── FormControl.tsx
├── FormMessage.tsx
├── FormSection.tsx            # spacing wrapper, optional title/description
├── FormFieldArray.tsx         # useFieldArray wrapper for kv / tags / repeats
├── ConfigForm/                # runtime DSL renderer
│   ├── index.tsx              # ConfigFormRenderer
│   ├── descriptorToSchema.ts  # converts descriptor → zod
│   ├── fieldRegistry.ts       # type → renderer map
│   └── renderers/             # text, number, switch, select, kv-editor, ...
└── form.css.ts
```

---

## Static form pattern

```tsx
// example: project-create form
const schema = z.object({
  name: z.string().min(1, '名称不能为空').max(80),
  url: z.string().url('请输入合法的 URL'),
  description: z.string().max(200).optional(),
  hidden: z.boolean().default(false),
})

type ProjectFormValues = z.infer<typeof schema>

export function ProjectForm({ initial, onSubmit }: { initial?: ProjectFormValues, onSubmit: (v: ProjectFormValues) => Promise<void> }) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(schema),
    defaultValues: initial,
  })

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormField name="name" label="名称">
        {(field) => <Input {...field} placeholder="项目名称" />}
      </FormField>
      <FormField name="url" label="URL">
        {(field) => <Input {...field} placeholder="https://..." />}
      </FormField>
      <FormField name="description" label="说明">
        {(field) => <Textarea {...field} rows={3} />}
      </FormField>
      <FormField name="hidden" label="隐藏">
        {(field) => <Switch {...field} />}
      </FormField>
      <div className={styles.actions}>
        <Button type="submit" intent="primary" loading={form.formState.isSubmitting}>保存</Button>
      </div>
    </Form>
  )
}
```

`<FormField>` accepts a render-prop `(field) => …` to keep field control explicit, or accepts a string `as` prop for trivial mapping (`<FormField name="name" label="名称" as={Input} />`).

`<Form>` wraps `react-hook-form`'s `FormProvider` plus the `<form onSubmit={handleSubmit(...)}>`. It catches `BusinessError` from the submit handler and surfaces it as either an inline error (`form.setError('root', { message })`) or a toast — caller chooses via prop.

---

## Field renderers (registry)

```ts
// src/components/form/ConfigForm/fieldRegistry.ts
type FieldRenderer = (props: {
  name: string
  descriptor: FieldDescriptor
}) => ReactNode

export const fieldRegistry: Record<string, FieldRenderer> = {
  text: TextRenderer,
  number: NumberRenderer,
  textarea: TextareaRenderer,
  switch: SwitchRenderer,
  checkbox: CheckboxRenderer,
  radio: RadioRenderer,
  select: SelectRenderer,
  multiselect: MultiSelectRenderer,
  date: DateRenderer,
  kv: KVRenderer,
  tags: TagsRenderer,
  upload: UploadRenderer,
  json: JSONRenderer,
  monaco: MonacoRenderer,
  color: ColorRenderer,           // delegates to a deferred ColorPicker
  custom: CustomRenderer,         // descriptor.render escape hatch
}
```

A view extending the registry locally:

```tsx
const renderers = useMemo(() => ({ ...fieldRegistry, customWidget: MyWidget }), [])
<ConfigFormRenderer descriptor={schema} renderers={renderers} />
```

---

## ConfigForm DSL port

Source repo's `/src/components/config-form/` consumes a JSON descriptor like:

```json
{
  "groupKey": "seo",
  "fields": [
    { "key": "title", "type": "text", "label": "默认标题", "required": true },
    { "key": "keywords", "type": "tags", "label": "关键词" },
    { "key": "showFloor", "type": "switch", "label": "显示楼层", "default": true,
      "showWhen": { "field": "enableComments", "equals": true } }
  ]
}
```

### Descriptor → zod converter

```ts
// src/components/form/ConfigForm/descriptorToSchema.ts
export function descriptorToSchema(fields: FieldDescriptor[]): z.ZodObject<any> {
  const shape: Record<string, z.ZodTypeAny> = {}
  for (const f of fields) {
    let z_ = primitiveSchemaForType(f.type)
    if (f.required) z_ = z_
    else z_ = z_.optional()
    if (f.default !== undefined) z_ = z_.default(f.default)
    shape[f.key] = z_
  }
  return z.object(shape)
}
```

Strict typing requires per-type primitives; runtime descriptors lose the type info that static zod usually carries, so `ConfigForm` accepts `Record<string, unknown>` values.

### Conditional fields (`showWhen`)

`<ConfigFormRenderer>` watches `form.watch(condition.field)` and conditionally mounts the field. Conditional fields are not required in the schema even if marked `required: true` when their condition is false — the converter applies a `superRefine` that only validates when the dependency holds.

### Live-editing UX

`/setting` saves on blur per-field (mirrors source). Implementation: each renderer invokes a debounced `onSave(value)` after blur if `form.formState.dirtyFields[name]` is true. The wrapper component owns the API call and toast.

Alternative: explicit "Save" button per group. Source uses field-level autosave; preserve unless P1 reveals UX regressions.

---

## Field arrays

`useFieldArray` wraps repeated structures: `kv-editor` (key-value pairs), `dynamic-tags`, repeated webhook headers, etc.

```tsx
// src/components/form/FormFieldArray.tsx
export function FormFieldArray<T>({ name, render }: { name: string, render: (controls) => ReactNode }) {
  const { fields, append, remove, move } = useFieldArray({ name })
  return render({ fields, append, remove, move })
}
```

`<KVEditor>` (consumer):

```tsx
<FormFieldArray name="headers" render={({ fields, append, remove }) => (
  <div className={styles.kv}>
    {fields.map((row, i) => (
      <div key={row.id} className={styles.row}>
        <FormField name={`headers.${i}.key`}>{(f) => <Input {...f} />}</FormField>
        <FormField name={`headers.${i}.value`}>{(f) => <Input {...f} />}</FormField>
        <Button intent="tertiary" onClick={() => remove(i)} aria-label="删除">×</Button>
      </div>
    ))}
    <Button intent="tertiary" onClick={() => append({ key: '', value: '' })}>添加</Button>
  </div>
)} />
```

---

## Error rendering

- Field-level: `<FormMessage name="..." />` reads `form.formState.errors.<name>?.message` and renders below the control with `intent="danger"`.
- Form-level: `form.setError('root', { message })` from the submit handler. Rendered at the top or bottom of the form per layout.
- Server-derived: when the API returns `BusinessError` with field-specific issues, the submit wrapper maps `error.raw.fields[k]` → `form.setError(k, { message })`.

---

## Dirty / touched / submit behavior

- **Dirty tracking**: `react-hook-form` default. `form.formState.isDirty` controls Save button enable.
- **Block navigation on dirty**: views call `useBlocker(form.formState.isDirty)` (port from source's `beforeRouteLeave` pattern). Confirms before navigating away.
- **Reset after save**: `form.reset(form.getValues())` clears dirty without losing values.
- **Submit on Enter** is the browser default — keep. Use `<Button type="button">` for non-submit actions.

---

## File-input handling (shell)

`UploadRenderer` (registry) wraps the future Upload component (spec 11 — manage-files):

```tsx
function UploadRenderer({ name, descriptor }: RendererProps) {
  return (
    <FormField name={name} label={descriptor.label}>
      {(field) => (
        <Upload
          accept={descriptor.accept}
          multiple={descriptor.multiple}
          value={field.value}
          onChange={(value) => field.onChange(value)}
        />
      )}
    </FormField>
  )
}
```

`Upload` itself manages the actual file → URL pipeline (POST to file API, return URL). The form sees only the resulting URLs / IDs.

---

## Acceptance for spec 08

### P2 acceptance

1. `Form`, `FormField`, `FormLabel`, `FormControl`, `FormMessage`, `FormSection`, `FormFieldArray` exist and pass smoke tests.
2. A static `ProjectForm` example renders, validates with zod, submits, and round-trips dirty / reset state.
3. `ConfigFormRenderer` consumes a sample descriptor (port one `/setting` group) and renders the right fields with the right defaults.
4. `descriptorToSchema` produces a valid zod schema; conditional `showWhen` fields validate correctly.
5. `useBlocker(isDirty)` prevents navigation when the form has unsaved changes (smoke test).
6. Field-level autosave (per `/setting` semantics) debounces correctly.

---

## Open questions

- **JSON / Monaco field rendering inside ConfigForm.** Renderers exist but Monaco mount costs first-paint. Consider lazy-loading `MonacoRenderer` only when the descriptor contains `type: 'monaco'`. Track during P3 settings port.
- **DatePicker / TimePicker.** Deferred to 03b. ConfigForm `date` renderer renders a fallback `<Input type="date">` until 03b lands.
- **i18n.** Form labels and validation messages are Chinese-only (mirrors source). If i18n becomes a goal later, schemas need to thread message keys instead of literal strings.
- **Form-level optimistic updates.** Some `/setting` autosave flows want optimistic UX. Decide per-field; default to "save → invalidate → refetch."
