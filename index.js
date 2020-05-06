const path = require('path')
const { resolveVnodes } = require('./src/helper/tpl.helper')
const { readFile, writeFile } = require('./src/utils/file.util')
const init = require('./src/core/init')
const buildElement = require('./src/core/build-element')
const buildCss = require('./src/core/build-css')
const buildFiles = require('./src/core/build-file')

let ctx = {}
const jsonPath = path.resolve(__dirname,'index.json')

async function run () {
  const jsonData = await readFile(jsonPath)
  
  init(ctx, jsonData)  // 数据初始化处理

  buildElement(ctx)

  buildCss(ctx)

  buildFiles(ctx)

  writeFile('z_pdf.vue', ctx.pdfFile)
  writeFile('z_thumbnail.vue', ctx.thumbnail)
  writeFile('z_h5.vue', ctx.h5)
  // console.log(JSON.stringify(ctx))
}

run()



// readFile(jsonPath).then(content => {
//   const { vnodes } = content
//   const result = resolveVnodes(vnodes)
//   const tpl = result.tpl
//   // /Users/ccjx/Desktop/template-generator/template-generator/src/views/test-page/index.vue
//   writeFile('output.vue', tpl)

// })