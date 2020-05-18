// const { pdfZoomFn, thumbnailZoomFn, h5ZoomFn } = require('./zoom-script')
const { vueTemplate } = require('./vue-shape')

const createFileContent = params => {
  // const { element, css, script } = params
  return vueTemplate(params)
}

module.exports = {
  createFileContent
}