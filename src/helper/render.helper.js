// 解构属性
// 将一组 attrs 变成的attr的 key=value字符串, 用于挂在到元素上
const deconstructAttrs = attrs => {
  attrs.class = attrs.className
  delete attrs.className
  const attrKeys = Object.keys(attrs)
  return attrKeys.reduce((current, next) => current + `${next}="${attrs[next]}" `, '')
}

// 渲染vue文件的三大层
const renderTpl = props => {
  const { tpl, style, script } = props
  return `
    <template>
      ${tpl}
    </template>
    <style>
      ${style}
    </style>
    <script>
      export default {
        ${script}
      }
    </script>
  `
}

// 渲染块元素
const renderBlock = (attrs, children) => {
  return `<div ${deconstructAttrs(attrs)}>${children}</div>`
}

// 渲染图片 / SVG
const renderImg = (attrs) => {
  return `<img ${deconstructAttrs(attrs)} />`
}

// 渲染文案
const renderText = (attrs) => {
  const {content, ...props} = attrs
  return `<div ${deconstructAttrs(props)}>${content}</div>`
}

const renderSlot = () => `**slot**`

const TAGNAME_TO_RENDER = {
  div: renderBlock,
  img: renderImg,
  svg: renderImg,
  text: renderText,
  slot: renderSlot
}

// 根据不同的tagName 渲染不同的元素
const renderNode = (tagName, attrs, childrenNodes = []) => {
  // console.log(tagName)
  const fn = TAGNAME_TO_RENDER[tagName]
  return fn(attrs, childrenNodes)
}

module.exports = {
  renderNode,
  renderTpl
}
