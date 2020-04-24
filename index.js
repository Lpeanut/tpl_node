const path = require('path')
const { resolveVnodes } = require('./src/helper/tpl.helper')
const { readFile, writeFile } = require('./src/utils/file.util')


const jsonPath = path.resolve(__dirname,'index.json')

readFile(jsonPath).then(content => {
  const { vnodes } = content
  const result = resolveVnodes(vnodes)
  const tpl = result.tpl
  // /Users/ccjx/Desktop/template-generator/template-generator/src/views/test-page/index.vue
  writeFile('output.vue', tpl)

})