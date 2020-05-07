/**
 * 初始化数据，将 json 分类成 element 和 cssSketch
 * 调用时 ctx 为 {}
 */

const path = require('path')
const { readFile } = require('../utils/file.util')
const bloodpath = path.resolve(__dirname, '../json/blood.json')
const hardpath = path.resolve(__dirname, '../json/hard.json')
const softpath = path.resolve(__dirname, '../json/soft.json')

// 将各个部分的Json数据进行整合
const getJsonDatas = async () => {
  // const bloodData = await readFile(bloodpath)
  const hardData = await readFile(hardpath)
  const softData = await readFile(softpath)
  return {
    hard: hardData,
    soft: softData,
    // blood: bloodData
  }
}

// 分离Json数据中的元素结构和css样式
const _separateJson = o => {
  const { sketch = {}, children = [], className, ...attr } = o
  const elementChildren = children.length > 0
    ? children.map(i => _separateJson(i).element)
    : []
  const cssSketchChildren = children.length > 0
    ? children.map(i => _separateJson(i).cssSketch)
    : []
  return {
    element: {...attr, className,children: elementChildren},
    cssSketch: {...sketch, className,children: cssSketchChildren}
  }
}

const handleJsonData = async ctx => {
  const jsonDatas = await getJsonDatas()
  console.log(JSON.stringify(jsonDatas))
}

/**
 * 初始化数据，包含：
 * 1. Json结构聚合
 * 2. 各部分的元素和样式结构分离
 */
const init = async (ctx, json) => {
  const jsonData = await getJsonDatas()
  const jsonKeys = Object.keys(jsonData)
  const ctxJson = {}
  // console.log(jsonData)
  jsonKeys.forEach(key => {
    console.log(key)
    const { container, mid, fm, fd } = jsonData[key]
    ctxJson[key] = {
      container: _separateJson(container),
      mid: _separateJson(mid),
      fm: _separateJson(fm),
      fd: _separateJson(fd)
    }
  })
  // console.log(ctxJson)
  ctx.json = ctxJson
  console.log(ctx)
  // console.log(ctx)
  // handleJsonData()
  // const { vnodes: { container, mid, fm, fd } } = json
  // const result = {
  //   container: _separateJson(container),
  //   mid: _separateJson(mid),
  //   fm: _separateJson(fm),
  //   fd: _separateJson(fd)
  // }
  // Object.assign(ctx, {json: result})
}

module.exports = init