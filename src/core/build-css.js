const resolveSketch = require('../helper/css.helper')

const buildStyle = o => {
  const style = {}
  const { className, children = [], ...attrs } = o
  if(!className) return style
  style[className] = resolveSketch(attrs)
  children.length > 0 && children.forEach(item => {
    Object.assign(style, buildStyle(item))
  })
  return style
}

const buildCss = ctx => {
  const json = ctx.json
  ctx.css = {}
  for(let key in json) {
    ctx.css[key] = buildStyle(json[key].cssSketch)
  }
}

module.exports = buildCss

