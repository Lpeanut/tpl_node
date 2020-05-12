const { renderNode } = require('./element-render')

 // 解析vnode树，生成元素字符串
 const renderElement = (tagName, attrs, children = []) => {
  const childrenNode = !children.length
    ? ''
    : children.map(item => {
        const { tagName, children, ...attrs} = item
        return renderElement(tagName, attrs, children)
      }).reduce((pre, next) => pre+=next, '')
  return renderNode(tagName, attrs, childrenNode)
}

const elementToString = o => {
  const { tagName, children, ...attrs } = o;
  const tplstr = renderElement(tagName, attrs, children)
  return tplstr
}

const buildElement = json => {
  const elements = {}
  for(let key in json) {
    elements[key] = elementToString(json[key].element)
  }
  return elements
}

module.exports = {
  buildElement
}