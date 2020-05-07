const resolveSketch = require('../helper/css.helper')

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

const buildStyleH5 = o => buildStyle(o, 690 / 1510)

const buildCss = ctx => {
  const json = ctx.json
  ctx.css = {}
  ctx.h5css = buildStyleH5(json.fm.cssSketch)
  // console.log(JSON.stringify(buildStyleH5(json.fm.cssSketch)))
  for(let key in json) {
    ctx.css[key] = buildStyle(json[key].cssSketch)
  }
}

module.exports = buildCss

