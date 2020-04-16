class CssPropsSorter {
  constructor() {
    this.ruleTypeMap = {
      layout:
    }
  }
  // 解析css json
  resolveSketch(cssSketch) {
    const scssRules = cssSketch.map(rule => this.resolveRule(rule))
    this.exportScssFile(scssRules)
  }
  // 根据每个json rule 生成 class string
  resolveRule(rule) {
    const {
      layout,
      rect,
      isrefer,
      backgroud,
      coordinate,
      className
    } = rule
    return `
      .${className}{
        ${handleLayout(layout)}
      }
    `
  }

  exportScssFile() {}
}

function handleLayout({layout, params = 0}) {
  let cssRules = ''
  switch (layout) {
    case 'flex':
      cssRules = `@include flex`
      break
    case 'columns-flex':
      cssRules = `@include columns-flex`
      break
    case 'absoluteLayout':
      cssRules = `@include absoluteLayout(${params[0]},${params[1]})`
      break
    case 'flex':
      cssRules = `@include flex`
      break
    case 'flex':
      cssRules = `@include flex`
      break
    case 'flex':
      cssRules = `@include flex`
      break
    case 'flex':
      cssRules = `@include flex`
      break
  }
}



module.exports = {
  cssPropSorter: new CssPropsSorter()
}