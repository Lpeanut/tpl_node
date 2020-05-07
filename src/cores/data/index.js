const path = require('path')
const { readFile } = require('../../utils/file.util')
const hardpath = path.resolve(__dirname, '../../json/hard.json')
const softpath = path.resolve(__dirname, '../../json/soft.json')
let json = null

// 将各个部分的 Json 数据进行读取 和 返回
const getJsonDatas = async (type = 'hard') => {
  if (json) return json[type]
  const hardData = await readFile(hardpath)
  const softData = await readFile(softpath)
  json = {
    hard: hardData,
    soft: softData
  }
  return json[type]
}

// 分离Json数据中的 元素结构 和 css描述
const separateJson = o => {
  const { sketch = {}, children = [], className, ...attr } = o
  const elementChildren = children.length > 0
    ? children.map(i => separateJson(i).element)
    : []
  const cssSketchChildren = children.length > 0
    ? children.map(i => separateJson(i).cssSketch)
    : []
  return {
    element: {...attr, className,children: elementChildren},
    cssSketch: {...sketch, className,children: cssSketchChildren}
  }
}

// 对Json结构进行格式化处理，并根据keyName进行过滤（生成缩略图和h5的时候，仅仅需要fm）
const formatJsonData = (json) => {
  const { container, mid, fm, fd } = json
  const result = {
    container: separateJson(container),
    mid: separateJson(mid),
    fm: separateJson(fm),
    fd: separateJson(fd)
  }
  return result
}

/**
 * 获取原生数据，{element: XX, cssSketch}
 * @param {string} type hard | soft
 * @param {string} keyName undefined | fm | mid | fd
 */
async function getRawData (type = 'hard') {
  const typeData = await getJsonDatas(type)
  return formatJsonData(typeData)
}

module.exports = {
  getRawData
}