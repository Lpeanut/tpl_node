const path = require('path')
const { readFile, writeFile } = require('../utils/file.util')
const { separateJson } = require('../cores/data/format-data.js')
const { buildElement } = require('../cores/handler-html/element-to-string')
const { buildCss } = require('../cores/handler-css')
const { createFileContent } = require('../cores/handler-file')
// const { thumbnailZoomFn, caclWrapperStyle } = require('../utils/zoom-script')
const { caclWrapperStyle } = require('../utils/zoom-script')
const { thumbnailScript } = require('../platforms/thumbnail')
const json = require('../503/soft')

// const jsonpath = path.resolve(__dirname, '../json2/soft.json')
const srcpath = path.resolve(__dirname, '../../../src/pages/tpls/500')

let wrapperStyle

// 处理后会得到结构和cssSketch分离的数据
const handleJsonFile = async () => {
  // const json = await readFile(jsonpath)
  const { fm } = json
  wrapperStyle = handleWrapperStyle(fm.sketch)
  return {
    fm: separateJson(fm)
  }
}

const handleWrapperStyle = sketch => {
  // const {w, h} = sketch
  // return caclWrapperStyle('thumbnail', w, h)
  const {wh} = sketch
  return caclWrapperStyle('thumbnail', wh[0], wh[1])
}

const elementToString = (elements) => {
  return elements.fm
}

const run = async () => {
  const data = await handleJsonFile()
  const elements = buildElement(data)
  const elementString = elementToString(elements)
  const css = buildCss(data, wrapperStyle)
  const params = {
    element: elementString,
    script: thumbnailScript,
    css
  }
  const fileContent = createFileContent(params)
  writeFile(`thumbnail.vue`, fileContent)
}

run()
