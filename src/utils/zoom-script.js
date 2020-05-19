const rateEnum = {
  pdf: 0.37757575758,
  thumbnail: 0.37757575758 * 0.53,
  // thumbnail: 1,
  h5: 690 / 1480
}

const pdfZoomFn = `
  const container = document.querySelector('.container')
  container.style.transform = 'scale(${rateEnum.pdf})'
`

const thumbnailZoomFn = `
  const container = document.querySelector('.fm')
  container.style.transform = 'scale(${rateEnum.thumbnail})'
  container.style.transformOrigin = 'top left'
  container.style.left = 0
  container.style.top = 0
`

const h5ZoomFn = className => `
  const container = document.querySelectorAll(".${className}");
  container.forEach(element => {
    element.style.transform = 'scale(${rateEnum.h5})'
    element.style.transformOrigin = 'top left'
    element.style.left = 0;
    element.style.top = 0;
  })
`



const caclWrapperStyle = (type = 'pdf', w, h) => {
  const rate = rateEnum[type]
  console.log(rate)
  return `
    .wrapper{
      position: relative;
      width: ${w * rate}px;
      height: ${h * rate}px;
      overflow: hidden;
    }
  `
}

const fnToString = (string) => {
  return `
    mounted () {
      ${string}
    }
  `
}

module.exports = {
  pdfZoomFn: fnToString(pdfZoomFn),
  thumbnailZoomFn: fnToString(thumbnailZoomFn),
  h5ZoomFn: fnToString(h5ZoomFn('fm')),
  h5FdZoomFn: fnToString(h5ZoomFn('fd')),
  caclWrapperStyle
}