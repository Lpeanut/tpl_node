class CssPropsSorter {
  constructor() {
    this.ruleTypeMap = {
      rect: handleRect,
      coordinate: handleCoordinate,
      // src: '',
      font: handleFont,
      color: handleColor,
      backgroud: handleBgColor,
      style: handleStyle
    }
  }
  // 解析css json
  resolveSketch(cssSketch) {
    const keys = Object.keys(cssSketch)
    const scssRules = keys.map(key => this.resolveRule({className: key, ...cssSketch[key]}))
    return scssRules.join('\n')
    console.log(scssRules)
    // this.exportScssFile(scssRules)
  }
  // 根据每个json rule 生成 class string
  resolveRule(rule) {
    const { className, ...res } = rule
    let strings = ''
    for(let i in res) {
      const fn = this.ruleTypeMap[i]
      const config = res[i]
      // console.log(typeof fn(config))
      strings += fn(config)
    }
    // console.log(strings)
    return `
      .${className}{
        ${strings}
      }
    `
  }

  exportScssFile() {}
}

// rect[w,h]
function handleRect ([w, h]) {
  return `
    width: ${w}px;
    height: ${h}px;`
}

// rect[w,h]
function handleCoordinate ([l, t]) {
  return `
    position: absolute;
    left: ${l}px;
    top: ${t}px;`
}

function handleFont ([weight, size, lineHeight]) {
  return `font: ${weight} ${size}px/${lineHeight}px;`
}

function handleColor (color) {
  return `color: ${color};`
}

function handleBgColor (color) {
  return `background: ${color};`
}

function handleStyle (style) {
  let str = ''
  for(let key in style) {
    str += `${key}: ${style[key]};`
  }
  return str
}


module.exports = new CssPropsSorter()