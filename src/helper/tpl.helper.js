const deconstructAttrs = attrs => {
  const attrKey = Object.keys(attrs)
  return attrKey.reduce((current, next) => current += `${next}="${attrs[next]}" `, '')
}

// const renderText = text => text

// const renderDiv = 

const renderTpl = props => {
  return `
    <template>${props}</template>
  `
}

/**
 * 渲染元素
 * @param {*} name elementName
 * @param {*} attrs elementAttrs
 */
const renderElement = (name, attrs, children) => {
  if (name === 'text') return attrs.content
  const childrenNode = !children
    ? ''
    : children.map(item => {
      const { tagName, children, ...atrrs} = item
      return renderElement(tagName, atrrs, children)
    }).reduce((pre, next) => pre+=next, '')
  // console.log('childrenNode', childrenNode)
  return `
    <${name} ${deconstructAttrs(attrs)}>
      ${childrenNode}
    </${name}>
  `
}

module.exports = {
  renderTpl, renderElement
}