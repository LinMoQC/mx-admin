import { uniqBy } from 'es-toolkit/compat'
import { ChevronDownIcon, ExternalLinkIcon, Trash2Icon } from 'lucide-vue-next'
import { NButton, NColorPicker, NInput, NInputNumber } from 'naive-ui'
import { thumbHashToDataURL } from 'thumbhash'
import { computed, defineComponent, ref } from 'vue'
import type { Image as ImageModel } from '~/models/base'
import type { PropType } from 'vue'

import { pickImagesFromMarkdown } from '~/utils/markdown'

export const ImageDetailSection = defineComponent({
  props: {
    images: {
      type: Array as PropType<ImageModel[]>,
      required: true,
    },
    onChange: {
      type: Function as PropType<(images: ImageModel[]) => void>,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    extraImages: {
      type: Array as PropType<string[]>,
      required: false,
    },
  },
  setup(props) {
    const originImageMap = computed(() => {
      const map = new Map<string, ImageModel>()
      props.images.forEach((image) => {
        if (image?.src) {
          map.set(image.src, image)
        }
      })
      return map
    })

    const images = computed<ImageModel[]>(() => {
      // 过滤掉 null/undefined 值，防止数据崩坏
      const validPropsImages = props.images.filter(
        (img): img is ImageModel => img != null && !!img.src,
      )
      const basedImages: ImageModel[] = props.text
        ? uniqBy(
            pickImagesFromMarkdown(props.text)
              .map((src) => {
                const existImageInfo = originImageMap.value.get(src)
                return {
                  src,
                  height: existImageInfo?.height,
                  width: existImageInfo?.width,
                  type: existImageInfo?.type,
                  accent: existImageInfo?.accent,
                  thumbhash: existImageInfo?.thumbhash,
                } as any
              })
              .concat(validPropsImages),
            'src',
          )
        : validPropsImages
      const srcSet = new Set<string>()

      for (const image of basedImages) {
        srcSet.add(image.src)
      }
      const nextImages = basedImages.concat()
      if (props.extraImages) {
        // 需要过滤存在的图片
        props.extraImages.forEach((src) => {
          if (!srcSet.has(src)) {
            nextImages.push({
              src,
              height: 0,
              width: 0,
              type: '',
              accent: '',
            })
          }
        })
      }

      return nextImages
    })

    // 展开状态管理
    const expandedIndex = ref<number | null>(null)

    return () => (
      <div class="flex w-full flex-col">
        {/* 头部 */}
        <div class="flex items-center justify-between gap-3">
          <span class="text-sm text-neutral-500">
            Markdown 中的图片信息（由服务端自动写入）
          </span>
        </div>

        {/* 图片列表 */}
        {images.value.length > 0 && (
          <div class="mt-4 space-y-2">
            {images.value.map((image: ImageModel, index: number) => {
              const isExpanded = expandedIndex.value === index
              const fileName = image.src.split('/').pop() || image.src

              return (
                <div
                  key={image.src}
                  class="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700"
                >
                  {/* 折叠头部 */}
                  <button
                    type="button"
                    class="flex w-full items-center justify-between gap-2 bg-neutral-50 px-3 py-2.5 text-left transition-colors hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-800"
                    onClick={() => {
                      expandedIndex.value = isExpanded ? null : index
                    }}
                    aria-expanded={isExpanded}
                    aria-controls={`image-detail-${index}`}
                  >
                    <span class="min-w-0 flex-1 truncate text-sm text-neutral-700 dark:text-neutral-200">
                      {fileName}
                    </span>
                    <div class="flex items-center gap-1 text-xs text-neutral-400">
                      {image.width && image.height && (
                        <span>
                          {image.width}×{image.height}
                        </span>
                      )}
                      <ChevronDownIcon
                        class={[
                          'size-4 transition-transform',
                          isExpanded && 'rotate-180',
                        ]}
                      />
                    </div>
                  </button>

                  {/* 展开内容 */}
                  {isExpanded && (
                    <div
                      id={`image-detail-${index}`}
                      class="space-y-3 border-t border-neutral-200 p-3 dark:border-neutral-700"
                    >
                      {/* 尺寸 */}
                      <div class="grid grid-cols-2 gap-3">
                        <div>
                          <label class="mb-1 block text-xs text-neutral-500">
                            宽度
                          </label>
                          <NInputNumber
                            class="w-full"
                            size="small"
                            value={image.width}
                            onUpdateValue={(n) => {
                              if (!n) return
                              props.images[index].width = n
                            }}
                            aria-label="图片宽度"
                          />
                        </div>
                        <div>
                          <label class="mb-1 block text-xs text-neutral-500">
                            高度
                          </label>
                          <NInputNumber
                            class="w-full"
                            size="small"
                            value={image.height}
                            onUpdateValue={(n) => {
                              if (!n) return
                              props.images[index].height = n
                            }}
                            aria-label="图片高度"
                          />
                        </div>
                      </div>

                      {/* 类型和主色调 */}
                      <div class="grid grid-cols-2 gap-3">
                        <div>
                          <label class="mb-1 block text-xs text-neutral-500">
                            类型
                          </label>
                          <NInput
                            class="w-full"
                            size="small"
                            value={image.type || ''}
                            onUpdateValue={(n) => {
                              if (!n) return
                              props.images[index].type = n
                            }}
                            placeholder="jpg, png..."
                            aria-label="图片类型"
                          />
                        </div>
                        <div>
                          <label class="mb-1 block text-xs text-neutral-500">
                            主色调
                          </label>
                          <NColorPicker
                            size="small"
                            value={image.accent || ''}
                            onUpdateValue={(n) => {
                              if (!n) return
                              props.images[index].accent = n
                            }}
                            aria-label="主色调"
                          />
                        </div>
                      </div>

                      {/* Thumbhash 预览 */}
                      {image.thumbhash && (
                        <div>
                          <label class="mb-1 block text-xs text-neutral-500">
                            Thumbhash 预览
                          </label>
                          <ThumbhashPreview hash={image.thumbhash} />
                        </div>
                      )}

                      {/* 操作按钮 */}
                      <div class="flex justify-end gap-2 pt-1">
                        <NButton
                          size="small"
                          quaternary
                          onClick={() => {
                            window.open(image.src)
                          }}
                          aria-label="在新窗口查看图片"
                        >
                          {{
                            icon: () => <ExternalLinkIcon class="size-4" />,
                            default: () => '查看',
                          }}
                        </NButton>

                        <NButton
                          size="small"
                          quaternary
                          type="error"
                          onClick={() => {
                            props.images.splice(index, 1)
                            if (expandedIndex.value === index) {
                              expandedIndex.value = null
                            }
                          }}
                          aria-label="删除图片"
                        >
                          {{
                            icon: () => <Trash2Icon class="size-4" />,
                            default: () => '删除',
                          }}
                        </NButton>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* 空状态 */}
        {images.value.length === 0 && (
          <div class="mt-4 rounded-lg border border-dashed border-neutral-200 py-6 text-center text-sm text-neutral-400 dark:border-neutral-700">
            文章中暂无图片
          </div>
        )}
      </div>
    )
  },
})

const ThumbhashPreview = defineComponent({
  props: {
    hash: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const dataUrl = computed(() => {
      try {
        const u8 = Uint8Array.from(atob(props.hash), (c) => c.charCodeAt(0))
        return thumbHashToDataURL(u8)
      } catch {
        return undefined
      }
    })
    return () =>
      dataUrl.value ? (
        <img
          src={dataUrl.value}
          class="rounded"
          alt="Thumbhash 预览图"
          aria-label="Thumbhash 预览图"
        />
      ) : null
  },
})
