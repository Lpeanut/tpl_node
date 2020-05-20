const path = require('path')
const { readFile, writeFile } = require('../utils/file.util')
const { separateJson } = require('../cores/data/format-data.js')
const { buildElement } = require('../cores/handler-html/element-to-string')
const { buildCss } = require('../cores/handler-css')
const { createFileContent } = require('../cores/handler-file')
const { caclWrapperStyle } = require('../utils/zoom-script')
let json = {}

const srcpath = path.resolve(__dirname, '../../../src/pages/tpls/500')
let wrapperStyle

// 处理后会得到结构和cssSketch分离的数据
const handleJsonFile = async () => {
  const { container, mid, fm, fd } = json
  wrapperStyle = handleWrapperStyle(container.sketch)
  return {
    container: separateJson(container),
    fd: separateJson(fd),
    mid: separateJson(mid),
    fm: separateJson(fm)
  }
}

const handleWrapperStyle = sketch => {
  const {wh} = sketch
  return caclWrapperStyle('pdf', wh[0], wh[1])
}

const elementToString = (elements) => {
  const { container, ...otherElement } = elements
  const array = container.split('**slot**')
  array.splice(1, 0, Object.values(otherElement).reduce((c, n) => `${c}\n${n}`, ''))
  const tpl = array.join('\n')
  return tpl
}

const run = async payload => {
  const { jsonData, script, name } = payload
  json = jsonData
  const data = await handleJsonFile()
  const elements = buildElement(data)
  const elementString = elementToString(elements)
  // 加入 wrapper class 的样式，用来控制transform导致的空白问题
  const css = buildCss(data, wrapperStyle)
  const params = {
    element: elementString,
    script: script,
    css
  }
  const fileContent = createFileContent(params)
  writeFile(`${name}.vue`, fileContent)
}

module.exports = {
  run
}
