const resolveSketch = require('./css.helper')

const buildStyle = (o, rate = 1) => {
  const style = {}
  const { className, children = [], ...attrs } = o
  if(!className) return style
  style[className] = resolveSketch(attrs, rate)
  children.length > 0 && children.forEach(item => {
    Object.assign(style, buildStyle(item, rate))
  })
  return style
}

// 处理css样式， object => string
const qsStyle = styles => {
  const styleKeys = Object.keys(styles)
  return styleKeys.reduce((current, key) => current + `.${key}${styles[key]}\n`, '')
}

const buildCss = (json, wrapperStyle)  => {
  const css = {}
  for(let key in json) {
    css[key] = buildStyle(json[key].cssSketch)
  }
  let cssString = Object.values(css).reduce((c, n) => c + qsStyle(n), '')
  cssString += wrapperStyle
  return cssString
}

module.exports = {
  buildCss
}