// 分离Json数据中的 元素结构 和 cssSketch

const separateJson = o => {
  const { sketch = {}, children = [], name, ...attr } = o
  const elementChildren = children.length > 0
    ? children.map(i => separateJson(i).element)
    : []
  const cssSketchChildren = children.length > 0
    ? children.map(i => separateJson(i).cssSketch)
    : []
  return {
    element: {...attr, className: name,children: elementChildren},
    cssSketch: {...sketch, className: name,children: cssSketchChildren}
  }
}

module.exports = {
  separateJson
}
