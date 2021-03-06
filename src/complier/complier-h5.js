const path = require('path')
const { readFile, writeFile } = require('../utils/file.util')
const { separateJson } = require('../cores/data/format-data.js')
const { buildElement } = require('../cores/handler-html/element-to-string')
const { buildCss } = require('../cores/handler-css')
const { createFileContent } = require('../cores/handler-file')
const { h5FdZoomFn, caclWrapperStyle } = require('../utils/zoom-script')
const { h5FmScript, h5FdScript } = require('../platforms/h5')
let json = {}
// const jsonpath = path.resolve(__dirname, '../json2/soft.json')
const srcpath = path.resolve(__dirname, '../../../src/pages/tpls/500')
let wrapperStyle

// 处理后会得到结构和cssSketch分离的数据
const handleJsonFile = async () => {
  // const json = await readFile(jsonpath)
  const { fd } = json
  wrapperStyle = handleWrapperStyle(fd.sketch)
  return {
    fd: separateJson(fd)
  }
}

const handleWrapperStyle = sketch => {
  const {wh} = sketch
  return caclWrapperStyle('h5', wh[0], wh[1])
}

const elementToString = (elements) => {
  return elements.fd
}

const run = async (payload) => {
  const { jsonData, script, name } = payload
  json = jsonData
  const data = await handleJsonFile()
  const elements = buildElement(data)
  const elementString = elementToString(elements)
  console.log(elements)
  const css = buildCss(data, wrapperStyle)
  const params = {
    element: elementString,
    // script: h5ZoomFn,
    script: script,
    css
  }
  const fileContent = createFileContent(params)
  writeFile(`${name}.vue`, fileContent)
}


module.exports = {
  run
}
