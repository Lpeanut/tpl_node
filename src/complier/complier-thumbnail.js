const path = require('path')
const { readFile, writeFile } = require('../utils/file.util')
const { separateJson } = require('../cores/data/format-data.js')
const { buildElement } = require('../cores/handler-html/element-to-string')
const { buildCss } = require('../cores/handler-css')
const { createFileContent } = require('../cores/handler-file')
const { thumbnailZoomFn, caclWrapperStyle } = require('../utils/zoom-script')

const jsonpath = path.resolve(__dirname, '../json/soft.json')
let wrapperStyle

// 处理后会得到结构和cssSketch分离的数据
const handleJsonFile = async () => {
  const json = await readFile(jsonpath)
  const { fm } = json
  wrapperStyle = handleWrapperStyle(fm.sketch)
  return {
    fm: separateJson(fm)
  }
}

const handleWrapperStyle = sketch => {
  const {w, h} = sketch
  return caclWrapperStyle('thumbnail', w, h)
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
    script: thumbnailZoomFn,
    css
  }
  const fileContent = createFileContent(params)
  writeFile('z_thumbnail.vue', fileContent)
}

run()
