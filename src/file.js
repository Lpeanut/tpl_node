// import { renderTpl, renderElement } from './helper/tpl.helper'

const { renderTpl, renderElement } = require('./helper/tpl.helper')
const cssPropSorter = require('./helper/css.helper')
var fs = require("fs")

fs.readFile('index.json', (err, data) => {
  if(err) {
    return console.error(err)
  }
  const content = JSON.parse(data.toString())
  const htmlString = createHtmlString(content.vnodes)
  const cssStrinbg = cssPropSorter.resolveSketch(content.cssSketch)
  // console.log(cssPropSorter)
  createFile(htmlString, cssStrinbg)
})

function createFile (htmlString, cssStrinbg) {
  // console.log(htmlString)
  fs.writeFile(
    'output.vue',
    `
      ${htmlString}
      <style>
        ${cssStrinbg}
      </style>
    `,
    (err, data) => {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  )
}

/**
 * 生成html字符串
 * @param {*} vnodes s vnode描述
 */
function createHtmlString (vnodes) {
  const { tagName, children, ...atrrs} = vnodes
  const htmlString =  renderElement(tagName, atrrs, children)
  return renderTpl(htmlString)
}