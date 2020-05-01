/**
 * buildElementStr:
 * { element: Object } => { element: String }
 * opt: renderNode 引用优化
 */

const { renderNode } = require('../helper/render.helper')

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

const buildElement = o => {
  const { tagName, children, ...attrs } = o;
  const tplstr = renderElement(tagName, attrs, children)
  return tplstr
}

module.exports = ctx => {
  const json = ctx.json
  ctx.element = {}
  for(let key in json) {
    ctx.element[key] = buildElement(json[key].element)
  }
}