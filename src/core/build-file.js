const { renderTpl } = require('../helper/render.helper')

const MODE = ['pdf', 'thumbnail', 'h5']

// 处理css样式， object => string
const qsStyle = styles => {
  const styleKeys = Object.keys(styles)
  return styleKeys.reduce((current, key) => current + `.${key}${styles[key]}\n`, '')
}

const buildModePdf = (ctx) => {
  const { element: { container, ...otherElement }, css } = ctx
  const array = container.split('**slot**')
  array.splice(1, 0, Object.values(otherElement).reduce((c, n) => `${c}\n${n}`, ''))
  const tpl = array.join('\n')
  const style = Object.values(css).reduce((c, n) => c + qsStyle(n), '')
  ctx.pdfFile = renderTpl({tpl, style})
}

const buildModeThumbnail = (ctx) => {
  const { element: { fm }, css: { fm: fmCss } } = ctx
  // const array = container.split('**slot**')
  // array.splice(1, 0, Object.values(otherElement).reduce((c, n) => `${c}\n${n}`, ''))
  // const tpl = array.join('\n')
  const tpl = fm
  // const style = Object.values(css).reduce((c, n) => c + qsStyle(n), '')
  const style = qsStyle(fmCss)
  ctx.thumbnail = renderTpl({tpl, style})
} 

module.exports = ctx => {
  buildModePdf(ctx)
  buildModeThumbnail(ctx)
}