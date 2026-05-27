// @see https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript

import { rgbaToThumbHash } from 'thumbhash'

import { computeImageMeta } from '@haklex/rich-editor/renderers'

export function getDominantColor(imageObject: HTMLImageElement) {
  const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d')!

  canvas.width = 1
  canvas.height = 1

  ctx.drawImage(imageObject, 0, 0, 1, 1)

  const i = ctx.getImageData(0, 0, 1, 1).data

  return `#${((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1)}`
}

// @see: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function rgbToHex(red: number, green: number, blue: number) {
  const rgb = (red << 16) | (green << 8) | (blue << 0)
  return `#${(0x1000000 + rgb).toString(16).slice(1)}`
}

export function rgbObjectToHex(rgb: { r: number; g: number; b: number }) {
  return rgbToHex(rgb.r, rgb.g, rgb.b)
}

export function getThumbhash(img: HTMLImageElement): string {
  const scale = Math.min(100 / img.naturalWidth, 100 / img.naturalHeight, 1)
  const sw = Math.max(1, Math.round(img.naturalWidth * scale))
  const sh = Math.max(1, Math.round(img.naturalHeight * scale))
  const canvas = document.createElement('canvas')
  canvas.width = sw
  canvas.height = sh
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(img, 0, 0, sw, sh)
  const rgba = ctx.getImageData(0, 0, sw, sh).data
  const u8 = rgbaToThumbHash(sw, sh, rgba)
  let bin = ''
  for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i])
  return btoa(bin)
}

export const encodeImageToThumbhash = async (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight

  const context = canvas.getContext('2d')!
  context.drawImage(image, 0, 0)

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((nextBlob) => {
      if (nextBlob) {
        resolve(nextBlob)
        return
      }
      reject(new Error('Failed to encode image thumbhash'))
    })
  })

  const file = new File([blob], 'image.png', { type: blob.type || 'image/png' })
  const { thumbhash } = await computeImageMeta(file)
  return thumbhash
}
