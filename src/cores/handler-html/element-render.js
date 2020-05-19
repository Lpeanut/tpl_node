// 解构属性
// 将一组 attrs 变成的attr的 key=value字符串, 用于挂在到元素上
const deconstructAttrs = attrs => {
  attrs.class = attrs.className
  delete attrs.className
  const attrKeys = Object.keys(attrs)
  return attrKeys.reduce((current, next) => current + `${next}="${attrs[next]}" `, '')
}

const variableRegexp = /^%=/

// 渲染块元素
const renderBlock = (attrs, children) => {
  return `<div ${deconstructAttrs(attrs)}>${children}</div>`
}

// 渲染图片 / SVG
const renderImg = (attrs) => {
  const { src } = attrs
  const isStatic = !variableRegexp.test(src)
  if (isStatic) {
    return `<img ${deconstructAttrs(attrs)} />`
  } else {
    const realSrc = src.replace(variableRegexp, '')
    delete attrs.src
    return `<img ${deconstructAttrs(attrs)} :src='${realSrc}'/>`
  }  
}

// 渲染文案
const renderText = (attrs) => {
  const {content, zoomable, ...props} = attrs
  const realContent = content.replace(variableRegexp, '')
  if (zoomable) {
    return `<div ${deconstructAttrs(props)}>
      <span :style='{zoom: zoomRate}' v-html="${realContent}"></span>
    </div>`
  }
  return `<div ${deconstructAttrs(props)} v-html='${realContent}'></div>`
}

const renderSlot = () => `**slot**`

const renderComponent = attrs => {
  const {component, ...props} = attrs
  return `<${component} ${deconstructAttrs(attrs)}></${component}>`
}

const TAGNAME_TO_RENDER = {
  div: renderBlock,
  img: renderImg,
  svg: renderImg,
  text: renderText,
  slot: renderSlot,
  component: renderComponent
}

// 根据不同的tagName 渲染不同的元素
const renderNode = (tagName, attrs, childrenNodes = []) => {
  const fn = TAGNAME_TO_RENDER[tagName]
  return fn(attrs, childrenNodes)
}

module.exports = {
  renderNode
}
