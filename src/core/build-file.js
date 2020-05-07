const { renderTpl } = require('../helper/render.helper')
const { pdfZoomFn, thumbnailZoomFn, h5ZoomFn } = require('./zoom-script')

const MODE = ['pdf', 'thumbnail', 'h5']

// 处理css样式， object => string
const qsStyle = styles => {
  const styleKeys = Object.keys(styles)
  return styleKeys.reduce((current, key) => current + `.${key}${styles[key]}\n`, '')
}
// 导出pdf文件
const buildModePdf = (ctx) => {
  const { element: { container, ...otherElement }, css } = ctx
  const array = container.split('**slot**')
  array.splice(1, 0, Object.values(otherElement).reduce((c, n) => `${c}\n${n}`, ''))
  const tpl = array.join('\n')
  const style = Object.values(css).reduce((c, n) => c + qsStyle(n), '')
  ctx.pdfFile = renderTpl({tpl, style, script: pdfZoomFn})
}
// 导出缩略图文件
const buildModeThumbnail = (ctx) => {
  const { element: { fm }, css: { fm: fmCss } } = ctx
  const tpl = fm
  const style = qsStyle(fmCss)
  ctx.thumbnail = renderTpl({tpl, style, script: thumbnailZoomFn})
}
// 导出h5文件
const buildModeH5 = (ctx) => {
  // console.log(JSON.stringify(ctx.json))
  const { element: { fm }, h5css: fmCss } = ctx
  const tpl = fm
  const style = qsStyle(fmCss)
  ctx.h5 = renderTpl({tpl, style, script: h5ZoomFn})
}

module.exports = ctx => {
  // buildModePdf(ctx)
  buildModeThumbnail(ctx)
  buildModeH5(ctx)
}