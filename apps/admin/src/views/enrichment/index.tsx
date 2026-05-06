import {
  AlertCircle as AlertCircleIcon,
  CheckCircle2 as CheckIcon,
  ExternalLink as ExternalLinkIcon,
  Loader2 as LoaderIcon,
  AlertTriangle as MissingIcon,
  CircleSlash as OffIcon,
  RefreshCw as RefreshIcon,
  RotateCcw as RetryIcon,
  Trash2 as TrashIcon,
} from 'lucide-vue-next'
import {
  NButton,
  NPagination,
  NPopconfirm,
  NScrollbar,
  NTag,
  NTooltip,
} from 'naive-ui'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import type { EnrichmentProviderMeta, EnrichmentRow } from '~/models/enrichment'
import type { PropType } from 'vue'

import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

import { enrichmentApi } from '~/api/enrichment'
import { HeaderActionButton } from '~/components/button/header-action-button'
import { RelativeTime } from '~/components/time/relative-time'
import { queryKeys } from '~/hooks/queries/keys'
import { useLayout } from '~/hooks/use-layout'
import { RouteName } from '~/router/name'

type FilterMode = 'all' | 'failed'

export default defineComponent({
  name: 'EnrichmentPage',
  setup() {
    const queryClient = useQueryClient()
    const pageRef = ref(1)
    const sizeRef = ref(20)
    const filterMode = ref<FilterMode>('all')

    const { data, isPending, isFetching, refetch } = useQuery({
      queryKey: computed(() =>
        queryKeys.enrichment.list({
          page: pageRef.value,
          size: sizeRef.value,
          onlyFailed: filterMode.value === 'failed',
        }),
      ),
      queryFn: () =>
        enrichmentApi.list({
          page: pageRef.value,
          size: sizeRef.value,
          onlyFailed: filterMode.value === 'failed' ? true : undefined,
        }),
      placeholderData: (prev) => prev,
    })

    const rows = computed<EnrichmentRow[]>(() => data.value?.data || [])
    const total = computed(() => data.value?.pagination.total || 0)
    const pageCount = computed(() => data.value?.pagination.totalPage || 1)

    const refreshMutation = useMutation({
      mutationFn: ({
        provider,
        externalId,
      }: {
        provider: string
        externalId: string
      }) => enrichmentApi.refresh(provider, externalId),
      onSuccess: () => {
        toast.success('已刷新')
        queryClient.invalidateQueries({ queryKey: queryKeys.enrichment.all })
      },
      onError: (e: any) => {
        toast.error(e?.message || '刷新失败')
      },
    })

    const invalidateMutation = useMutation({
      mutationFn: ({
        provider,
        externalId,
      }: {
        provider: string
        externalId: string
      }) => enrichmentApi.invalidate(provider, externalId),
      onSuccess: () => {
        toast.success('已失效')
        queryClient.invalidateQueries({ queryKey: queryKeys.enrichment.all })
      },
      onError: (e: any) => {
        toast.error(e?.message || '失效失败')
      },
    })

    const { setActions } = useLayout()
    watchEffect(() => {
      setActions(
        <div class="flex items-center gap-2">
          <span class="hidden text-xs tabular-nums text-neutral-500 md:inline">
            共 {total.value} 条
          </span>
          <HeaderActionButton
            icon={
              isFetching.value ? (
                <LoaderIcon class="animate-spin" />
              ) : (
                <RefreshIcon />
              )
            }
            name="刷新"
            onClick={() => refetch()}
          />
        </div>,
      )
    })

    return () => (
      <div class="flex h-full flex-col">
        <NScrollbar class="min-h-0 flex-1">
          <div class="space-y-4 p-4">
            <ProvidersStatusBar />

            <div class="flex items-center gap-2">
              <FilterSegment
                value={filterMode.value}
                onChange={(v) => {
                  filterMode.value = v
                  pageRef.value = 1
                }}
              />
            </div>

            {isPending.value && rows.value.length === 0 ? (
              <div class="flex items-center justify-center py-16">
                <LoaderIcon class="size-5 animate-spin text-neutral-400" />
              </div>
            ) : rows.value.length === 0 ? (
              <EmptyState filtered={filterMode.value === 'failed'} />
            ) : (
              <div class="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                <table class="w-full text-sm">
                  <thead class="bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                    <tr>
                      <th class="px-3 py-2 text-left font-medium">Provider</th>
                      <th class="px-3 py-2 text-left font-medium">标题</th>
                      <th class="px-3 py-2 text-left font-medium">外部 ID</th>
                      <th class="px-3 py-2 text-left font-medium">抓取于</th>
                      <th class="px-3 py-2 text-left font-medium">失败</th>
                      <th class="px-3 py-2 text-right font-medium">操作</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {rows.value.map((row) => (
                      <EnrichmentRowItem
                        key={row.id}
                        row={row}
                        refreshing={
                          refreshMutation.isPending.value &&
                          refreshMutation.variables.value?.provider ===
                            row.provider &&
                          refreshMutation.variables.value?.externalId ===
                            row.externalId
                        }
                        onRefresh={() =>
                          refreshMutation.mutate({
                            provider: row.provider,
                            externalId: row.externalId,
                          })
                        }
                        onInvalidate={() =>
                          invalidateMutation.mutate({
                            provider: row.provider,
                            externalId: row.externalId,
                          })
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </NScrollbar>

        {pageCount.value > 1 && (
          <div class="flex shrink-0 items-center justify-end border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <NPagination
              page={pageRef.value}
              pageCount={pageCount.value}
              pageSize={sizeRef.value}
              onUpdatePage={(p) => (pageRef.value = p)}
              showSizePicker
              pageSizes={[10, 20, 50, 100]}
              onUpdatePageSize={(s) => {
                sizeRef.value = s
                pageRef.value = 1
              }}
            />
          </div>
        )}
      </div>
    )
  },
})

// ======================== Filter segment ========================

const FilterSegment = defineComponent({
  props: {
    value: { type: String as PropType<FilterMode>, required: true },
    onChange: {
      type: Function as PropType<(v: FilterMode) => void>,
      required: true,
    },
  },
  setup(props) {
    const items: Array<{ key: FilterMode; label: string }> = [
      { key: 'all', label: '全部' },
      { key: 'failed', label: '仅失败' },
    ]
    return () => (
      <div class="inline-flex items-center gap-0.5 rounded-md border border-neutral-200 p-0.5 dark:border-neutral-800">
        {items.map((it) => {
          const active = props.value === it.key
          return (
            <button
              key={it.key}
              type="button"
              class={[
                'rounded px-2.5 py-1 text-xs transition-colors',
                active
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                  : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800',
              ]}
              onClick={() => props.onChange(it.key)}
            >
              {it.label}
            </button>
          )
        })}
      </div>
    )
  },
})

// ======================== Providers status bar ========================

type ProviderState = 'ok' | 'missing' | 'disabled'

const SELF_GROUP_KEY = '__self__'

// Display label per gate section. Backend keys (`thirdPartyServiceIntegration`
// section names) are stable; this map only handles presentation.
const configKeyLabel: Record<string, string> = {
  github: 'GitHub',
  tmdb: 'TMDB',
  bangumi: 'Bangumi',
  neodb: 'NeoDB',
  arxiv: 'Arxiv',
  leetcode: 'LeetCode',
  neteaseMusic: '网易云',
  qqMusic: 'QQ 音乐',
}

const ProvidersStatusBar = defineComponent({
  setup() {
    const router = useRouter()

    const { data: providers } = useQuery({
      queryKey: queryKeys.enrichment.providers(),
      queryFn: () => enrichmentApi.providers(),
      staleTime: 60_000,
    })

    // Group by `featureGateConfigKey` and derive state directly from the
    // server-computed `enabled` / `ready` / `missingKeys`. The dashboard no
    // longer mirrors backend gate-mapping logic — readiness is one source.
    const groups = computed(() => {
      const list = providers.value || []
      const byGate = new Map<
        string,
        {
          configKey: string
          label: string
          state: ProviderState
          providers: EnrichmentProviderMeta[]
          missingKeys: string[]
        }
      >()

      for (const p of list) {
        const configKey = p.featureGateConfigKey ?? SELF_GROUP_KEY
        const existing = byGate.get(configKey)
        if (existing) {
          existing.providers.push(p)
          // Promote to worst state across providers in the same group.
          if (existing.state === 'ok') {
            if (!p.enabled) existing.state = 'disabled'
            else if (!p.ready) existing.state = 'missing'
          } else if (existing.state === 'missing' && !p.enabled) {
            existing.state = 'disabled'
          }
          for (const k of p.missingKeys ?? [])
            if (!existing.missingKeys.includes(k)) existing.missingKeys.push(k)
          continue
        }
        const state: ProviderState =
          configKey === SELF_GROUP_KEY
            ? 'ok'
            : !p.enabled
              ? 'disabled'
              : !p.ready
                ? 'missing'
                : 'ok'
        byGate.set(configKey, {
          configKey,
          label:
            configKey === SELF_GROUP_KEY
              ? '本站'
              : (configKeyLabel[configKey] ?? configKey),
          state,
          providers: [p],
          missingKeys: [...(p.missingKeys ?? [])],
        })
      }

      return Array.from(byGate.values())
    })

    const handleClick = (configKey: string) => {
      if (configKey === SELF_GROUP_KEY) return
      router.push({
        name: RouteName.Setting,
        query: { group: 'integrations' },
      })
    }

    return () => {
      if (!providers.value || providers.value.length === 0) return null
      return (
        <div class="flex flex-wrap gap-1.5">
          {groups.value.map((g) => (
            <ProviderChip
              key={g.configKey}
              label={g.label}
              state={g.state}
              providers={g.providers}
              missingHint={
                g.state === 'missing'
                  ? `缺 ${g.missingKeys.length > 0 ? g.missingKeys.join(', ') : '凭证'}`
                  : undefined
              }
              onClick={() => handleClick(g.configKey)}
              clickable={g.configKey !== SELF_GROUP_KEY}
            />
          ))}
        </div>
      )
    }
  },
})

const ProviderChip = defineComponent({
  props: {
    label: { type: String, required: true },
    state: { type: String as PropType<ProviderState>, required: true },
    providers: {
      type: Array as PropType<EnrichmentProviderMeta[]>,
      required: true,
    },
    missingHint: String,
    clickable: { type: Boolean, default: true },
    onClick: Function as PropType<() => void>,
  },
  setup(props) {
    const stateConfig = computed(() => {
      switch (props.state) {
        case 'ok':
          return {
            cls: 'border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400',
            Icon: CheckIcon,
          }
        case 'missing':
          return {
            cls: 'border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900/50 dark:bg-yellow-950/30 dark:text-yellow-400',
            Icon: MissingIcon,
          }
        case 'disabled':
          return {
            cls: 'border-neutral-200 bg-neutral-50 text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500',
            Icon: OffIcon,
          }
      }
    })
    return () => {
      const sc = stateConfig.value
      const tooltipLines = [
        ...props.providers.map((p) => `· ${p.displayName}`),
        ...(props.missingHint ? ['', props.missingHint] : []),
      ]
      const chip = (
        <button
          type="button"
          class={[
            'inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-opacity',
            sc.cls,
            props.clickable
              ? 'cursor-pointer hover:opacity-80'
              : 'cursor-default',
          ]}
          onClick={() => props.clickable && props.onClick?.()}
        >
          <sc.Icon class="size-3" aria-hidden="true" />
          <span class="font-medium">{props.label}</span>
          {props.missingHint && (
            <span class="text-yellow-600 dark:text-yellow-500">⚠</span>
          )}
        </button>
      )
      return (
        <NTooltip trigger="hover" placement="top">
          {{
            trigger: () => chip,
            default: () => (
              <div class="text-xs">
                {tooltipLines.map((l, i) => (
                  <div key={i}>{l || ' '}</div>
                ))}
              </div>
            ),
          }}
        </NTooltip>
      )
    }
  },
})

// ======================== List item & empty ========================

const EmptyState = defineComponent({
  props: { filtered: { type: Boolean, default: false } },
  setup(props) {
    return () => (
      <div class="flex flex-col items-center justify-center py-16">
        <AlertCircleIcon
          class="mb-3 size-10 text-neutral-300 dark:text-neutral-600"
          aria-hidden="true"
        />
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
          {props.filtered ? '无失败项' : '暂无 enrichment 缓存'}
        </p>
      </div>
    )
  },
})

const EnrichmentRowItem = defineComponent({
  props: {
    row: { type: Object as PropType<EnrichmentRow>, required: true },
    refreshing: { type: Boolean, default: false },
    onRefresh: { type: Function as PropType<() => void>, required: true },
    onInvalidate: { type: Function as PropType<() => void>, required: true },
  },
  setup(props) {
    return () => {
      const { row } = props
      const hasFailures = row.failureCount > 0
      return (
        <tr class="transition-colors hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
          <td class="px-3 py-2 align-top">
            <NTag size="small" type="info">
              {row.provider}
            </NTag>
            <div class="mt-1 text-xs text-neutral-400">
              {row.normalized.category}
              {row.normalized.subtype ? ` · ${row.normalized.subtype}` : ''}
            </div>
          </td>
          <td class="px-3 py-2 align-top">
            <a
              href={row.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-neutral-900 hover:underline dark:text-neutral-100"
            >
              <span class="line-clamp-1 max-w-[28ch]">
                {row.normalized.title}
              </span>
              <ExternalLinkIcon
                class="size-3 shrink-0 text-neutral-400"
                aria-hidden="true"
              />
            </a>
          </td>
          <td class="px-3 py-2 align-top">
            <code class="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">
              {row.externalId}
            </code>
          </td>
          <td class="px-3 py-2 align-top text-xs text-neutral-500">
            <RelativeTime time={new Date(row.fetchedAt)} />
          </td>
          <td class="px-3 py-2 align-top">
            {hasFailures ? (
              <NTag size="small" type="warning">
                {row.failureCount}
              </NTag>
            ) : (
              <span class="text-xs text-neutral-400">—</span>
            )}
            {row.lastError && (
              <div
                class="mt-1 line-clamp-1 max-w-[24ch] text-xs text-red-500"
                title={row.lastError}
              >
                {row.lastError}
              </div>
            )}
          </td>
          <td class="px-3 py-2 text-right align-top">
            <div class="flex justify-end gap-1">
              <NButton
                size="tiny"
                secondary
                loading={props.refreshing}
                onClick={() => props.onRefresh()}
              >
                {{
                  icon: () => <RetryIcon class="size-3" aria-hidden="true" />,
                  default: () => '刷新',
                }}
              </NButton>
              <NPopconfirm
                positiveText="保留"
                negativeText="失效"
                onNegativeClick={() => props.onInvalidate()}
              >
                {{
                  trigger: () => (
                    <NButton size="tiny" type="error" tertiary>
                      {{
                        icon: () => (
                          <TrashIcon class="size-3" aria-hidden="true" />
                        ),
                        default: () => '失效',
                      }}
                    </NButton>
                  ),
                  default: () => '将此缓存项失效？',
                }}
              </NPopconfirm>
            </div>
          </td>
        </tr>
      )
    }
  },
})
