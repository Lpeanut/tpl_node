/**
 * 初始化数据，将 json 分类成 element 和 cssSketch
 * 调用时 ctx 为 {}
 */

//  
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

const init = (ctx, json) => {
  const { vnodes: { container, mid, fm, fd } } = json
  const result = {
    container: _separateJson(container),
    mid: _separateJson(mid),
    fm: _separateJson(fm),
    fd: _separateJson(fd)
  }
  Object.assign(ctx, {json: result})
}

module.exports = init