/**
 * 将 cssSktch 渲染成字符串
 * Author: 柴建祥
 * Time: 2020/04/21
 * 描述: css sktch => css string
 */

let rate = 0

const composeSketch = cssSketch => {
  const { xy, wh, z, backgroud, font, color, style, textAlign } = cssSketch
  const sketchObject = {
    rect: wh,
    coordinate: xy,
    font: font,
    color: color,
    backgroud: backgroud,
    style: style,
    zindex: z,
    textAlign: textAlign
  }
  // console.log(sketchObject)
  return filterInvalidProps(sketchObject)
}

function filterInvalidProps (object) {
  // console.log(object)
  let result = {}
  for(let i in object) {
    const value = object[i]
    if (value === undefined) {

    } else if (value instanceof Array && value.every(i => i === undefined)) {

    } else {
      result[i] = value
    }
  }
  // console.log('result',result)
  return result
}

// rect [w,h]
function handleRect([w, h]) {
  // console.log(w, h)
  const width = w ? w * rate + 'px' : 'auto'
  const height =  h ? h * rate + 'px' : 'auto'
  return `
    width: ${width};
    height: ${height};`
}

// coordinate [l,t]
function handleCoordinate([l, t]) {
  return `
    position: absolute;
    left: ${l * rate}px;
    top: ${t * rate}px;`
}

// coordinate [l,t]
function handleZindex(z) {
  return `
    z-index: ${z};`
}

function handleTextAlign (textAlign) {
  return `
    text-align: ${textAlign};
  `
}

function handleFont([size, lineHeight, weight, family = '']) {
  return `
    font-weight: ${weight};
    font-family: ${family};
    font-size: ${size * rate}px;
    line-height: ${lineHeight * rate}px;`
}

function handleColor(color) {
  return `color: ${color};`
}

function handleBgColor(color) {
  return `background: ${color};`
}

// 处理额外的 style 样式
function handleStyle(style) {
  let str = ''
  for (let key in style) {
    str += `${key}: ${style[key]};`
  }
  return str
}

const RULE_TYPE_MAP = {
  rect: handleRect,
  coordinate: handleCoordinate,
  font: handleFont,
  color: handleColor,
  backgroud: handleBgColor,
  style: handleStyle,
  zindex: handleZindex,
  textAlign: handleTextAlign
}

const sketchReduceHandler = sketch => (string, key) => {
  const fn = RULE_TYPE_MAP[key]
  const value = sketch[key]
  return string + fn(value)
}

const resolveSketch = (cssSketch, zoomRate = 1) => {
  rate = zoomRate // 处理 mobile 样式
  const composedSketch = composeSketch(cssSketch)
  const skechKeys = Object.keys(composedSketch)
  const handler = sketchReduceHandler(composedSketch)
  return `{${skechKeys.reduce(handler, '')}}`
}

module.exports = resolveSketch