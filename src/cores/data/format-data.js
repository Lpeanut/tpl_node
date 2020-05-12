// 分离Json数据中的 元素结构 和 cssSketch

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

module.exports = {
  separateJson
}
