import type {
  EnrichmentListResponse,
  EnrichmentProviderMeta,
  EnrichmentResult,
} from '~/models/enrichment'

import { request } from '~/utils/request'

const encodeId = (id: string) => encodeURIComponent(id)

export const enrichmentApi = {
  resolve: (url: string) =>
    request.get<EnrichmentResult>('/enrichment/resolve', {
      params: { url },
    }),

  list: (params: { page?: number; size?: number; onlyFailed?: boolean } = {}) =>
    request.get<EnrichmentListResponse>('/enrichment/admin/list', {
      params: {
        ...params,
        ...(params.onlyFailed ? { onlyFailed: true } : {}),
      },
    }),

  providers: () =>
    request.get<EnrichmentProviderMeta[]>('/enrichment/admin/providers'),

  refresh: (provider: string, externalId: string) =>
    request.post<EnrichmentResult>(
      `/enrichment/admin/refresh/${encodeURIComponent(provider)}/${encodeId(externalId)}`,
    ),

  invalidate: (provider: string, externalId: string) =>
    request.delete<void>(
      `/enrichment/admin/cache/${encodeURIComponent(provider)}/${encodeId(externalId)}`,
    ),
}
