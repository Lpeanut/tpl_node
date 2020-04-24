const resolveSketch = require('./css.helper')
const { renderTpl, renderNode } = require('./render.helper')
let styles = Object.create(null)

// 重新处理 vnode 结构，将非 container 的内容全部放到 container children 中
const formatVnodeStructure = vnodes => {
  const { container, ...children } = vnodes
  return { ...container, children: Object.values(children) }
}

// 解析vnode树，生成元素字符串
const renderElement = (name, attrs, children) => {
  const childrenNode = !children
    ? ''
    : children.map(item => {
        const { tagName, children, sketch = {}, ...attrs} = item
        const { class: className } = item
        styles[className] = resolveSketch(sketch)
        return renderElement(tagName, attrs, children)
      }).reduce((pre, next) => pre+=next, '')
  return renderNode(name, attrs, childrenNode)
}

// 处理css样式， object => string
const qsStyle = styles => {
  const styleKeys = Object.keys(styles)
  return styleKeys.reduce((current, key) => current + `.${key}${styles[key]}\n`, '')
}


const resolveVnodes = vnodes => {
  vnodes = formatVnodeStructure(vnodes) // 数据标准化
  const { tagName, sketch, children, ...attrs } = vnodes;
  const { class: className } = vnodes
  styles[className] = resolveSketch(sketch)
  const tplstr = renderElement(tagName, attrs, children)
  const renderData = {
    tpl: tplstr,
    script: '',
    style: qsStyle(styles)
  }
  return {
    tpl: renderTpl(renderData)
  }
}

module.exports = {
  resolveVnodes
}