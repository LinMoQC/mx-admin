import { Loader2 as LoaderIcon } from 'lucide-vue-next'
import { NButton, NInput, NSpace, useDialog } from 'naive-ui'
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import type { EnrichmentResult } from '~/models/enrichment'
import type { RecentlyModel } from '~/models/recently'
import type { PropType } from 'vue'

import { recentlyApi } from '~/api'
import { enrichmentApi } from '~/api/enrichment'
import { EnrichmentCard } from '~/components/enrichment-card'

const URL_REGEX = /https?:\/\/\S+/i
// Trailing punctuation that should not be part of the URL (ASCII + CJK)
const URL_TAIL_TRIM = /[)\].,;:!?'"`>}）。，、；：！？「」『』《》〉〕—…]+$/

function firstUrl(text: string): string | null {
  const m = text.match(URL_REGEX)
  if (!m) return null
  let url = m[0]
  // Strip trailing punctuation iteratively (handles "(url).")
  while (URL_TAIL_TRIM.test(url)) {
    url = url.replace(URL_TAIL_TRIM, '')
  }
  return url || null
}

function cleanErrorMessage(raw: string | null | undefined): string {
  if (!raw) return '解析失败'
  // Strip embedded URLs (often docs links) and excess whitespace
  let msg = raw.replace(/https?:\/\/\S+/g, '').trim()
  // Common patterns we shorten
  if (/\(404\)|\b404\b/.test(msg)) {
    return '404 — 资源不存在，或私有内容无访问权（请检查 GitHub Token 等凭证）'
  }
  if (/\b401\b|\b403\b|unauthor|forbidden/i.test(msg)) {
    return '401/403 — 凭证缺失或权限不足'
  }
  if (/Provider disabled/i.test(msg)) {
    return '未启用对应 provider，或链接未匹配任何 provider'
  }
  if (/Token missing/i.test(msg)) {
    return '此 provider 需配置凭证（请至「第三方集成」设置）'
  }
  // Generic fallback — cap length
  msg = msg.replace(/[\s—-]+$/, '').trim()
  return msg.length > 100 ? msg.slice(0, 100) + '…' : msg || '解析失败'
}

function buildPayload(text: string): {
  type: 'text' | 'link'
  content: string
  metadata?: { url: string }
} {
  const url = firstUrl(text)
  if (url) {
    return { type: 'link', content: text, metadata: { url } }
  }
  return { type: 'text', content: text }
}

const ShorthandForm = defineComponent({
  name: 'ShorthandForm',
  props: {
    initialContent: { type: String, default: '' },
    onUpdate: {
      type: Function as PropType<(text: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const text = ref(props.initialContent)
    const detectedUrl = ref<string | null>(null)
    const previewLoading = ref(false)
    const previewResult = ref<EnrichmentResult | null>(null)
    const previewError = ref<string | null>(null)
    let debounceTimer: ReturnType<typeof setTimeout> | null = null

    const triggerResolve = (url: string) => {
      previewLoading.value = true
      previewError.value = null
      // cancel previous in-flight via stale check
      const myUrl = url
      enrichmentApi
        .resolve(url)
        .then((result) => {
          if (detectedUrl.value !== myUrl) return
          previewResult.value = result
          previewError.value = null
        })
        .catch((e: any) => {
          if (detectedUrl.value !== myUrl) return
          previewResult.value = null
          previewError.value = e?.message || '解析失败'
        })
        .finally(() => {
          if (detectedUrl.value !== myUrl) return
          previewLoading.value = false
        })
    }

    watch(
      text,
      (val) => {
        props.onUpdate(val)
        const url = firstUrl(val)
        if (url !== detectedUrl.value) {
          detectedUrl.value = url
          previewResult.value = null
          previewError.value = null
          previewLoading.value = false
          if (debounceTimer) clearTimeout(debounceTimer)
          if (url) {
            debounceTimer = setTimeout(() => triggerResolve(url), 500)
          }
        }
      },
      { immediate: true },
    )

    onBeforeUnmount(() => {
      if (debounceTimer) clearTimeout(debounceTimer)
    })

    return () => (
      <div class="space-y-3">
        <NInput
          type="textarea"
          value={text.value}
          onUpdateValue={(v: string | null) => (text.value = v || '')}
          placeholder="写点什么... 或粘个链接，将自动识别并预览"
          autosize={{ minRows: 4, maxRows: 12 }}
        />

        {detectedUrl.value && (
          <div>
            <div class="mb-1.5 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span>检测到链接：</span>
              <code class="truncate rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[11px] dark:bg-neutral-800">
                {detectedUrl.value}
              </code>
              {previewLoading.value && (
                <LoaderIcon class="size-3 animate-spin" aria-hidden="true" />
              )}
            </div>

            {previewResult.value && (
              <EnrichmentCard enrichment={previewResult.value} />
            )}

            {previewError.value && !previewLoading.value && (
              <div class="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                <div class="font-medium text-neutral-700 dark:text-neutral-300">
                  未识别该链接
                </div>
                <div class="mt-0.5">
                  {cleanErrorMessage(previewError.value)}
                </div>
                <div class="mt-1 text-neutral-400">仍可保存，按链接处理。</div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  },
})

export const useShorthand = () => {
  const modal = useDialog()
  const formText = ref('')

  const openDialog = ({
    title,
    type,
    initialContent,
    submitLabel,
    onSubmit,
  }: {
    title: string
    type: 'success' | 'info'
    initialContent: string
    submitLabel: string
    onSubmit: (
      payload: ReturnType<typeof buildPayload>,
    ) => Promise<RecentlyModel>
  }) => {
    formText.value = initialContent
    return new Promise<RecentlyModel | null>((resolve, reject) => {
      const dialog = modal.create({
        title,
        type,
        style: 'width: 600px; max-width: calc(100vw - 32px);',
        content: () => (
          <ShorthandForm
            initialContent={initialContent}
            onUpdate={(t) => (formText.value = t)}
          />
        ),
        action: () => (
          <NSpace>
            <NButton
              round
              onClick={() => {
                formText.value = ''
                void dialog.destroy()
                resolve(null)
              }}
            >
              取消
            </NButton>
            <NButton
              round
              type="primary"
              onClick={async () => {
                const text = formText.value.trim()
                if (!text) {
                  toast.error('内容不可为空')
                  return
                }
                try {
                  const res = await onSubmit(buildPayload(text))
                  formText.value = ''
                  toast.success('保存成功')
                  dialog.destroy()
                  resolve(res)
                } catch (error) {
                  reject(error)
                }
              }}
            >
              {submitLabel}
            </NButton>
          </NSpace>
        ),
      })
    })
  }

  return {
    create() {
      return openDialog({
        title: '速记',
        type: 'success',
        initialContent: '',
        submitLabel: '保存',
        onSubmit: (payload) => recentlyApi.create(payload),
      })
    },
    edit(item: RecentlyModel) {
      return openDialog({
        title: '编辑速记',
        type: 'info',
        initialContent: item.content,
        submitLabel: '保存',
        onSubmit: (payload) => recentlyApi.update(item.id, payload),
      })
    },
  }
}
