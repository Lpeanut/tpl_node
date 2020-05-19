const path = require('path')
const { readFile, writeFile } = require('./src/utils/file.util')
const init = require('./src/core/init')
const buildElement = require('./src/core/build-element')
const buildCss = require('./src/core/build-css')
const buildFiles = require('./src/core/build-file')
const { getRawData } = require('./src/cores/data/index')

require('./src/complier/complier-pdf')
require('./src/complier/complier-thumbnail')
require('./src/complier/complier-h5')

let ctx = {}
// const jsonPath = path.resolve(__dirname,'index.json')

async function run (pageType = 'soft') {
  // const jsonData = await readFile(jsonPath)
  
  // await init(ctx, jsonData)  // 数据初始化处理

  ctx.json = await getRawData(pageType)
  
  
  buildElement(ctx)

  buildCss(ctx)

  buildFiles(ctx)
  // console.log(JSON.stringify(ctx))

  writeFile('z_pdf.vue', ctx.pdfFile)
  writeFile('z_thumbnail.vue', ctx.thumbnail)
  writeFile('z_h5.vue', ctx.h5)
}

// run()

