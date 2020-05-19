const pdfZoomRate = 0.37757575758

const thumbnailZoomRage = pdfZoomRate * 0.53

const pdfZoomFn = `
  const container = document.querySelector('.container')
  container.style.transform = 'scale(${pdfZoomRate})'
`

const thumbnailZoomFn = `
  const container = document.querySelector('.fm')
  container.style.transform = 'scale(${thumbnailZoomRage})'
  container.style.left = 0
  container.style.top = 0
`

const h5ZoomFn = `
  const container = document.querySelectorAll(".fm");
  container.forEach(element => {
    element.style.position = "relative";
    element.style.left = 0;
    element.style.top = 0;
  })
`

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
  h5ZoomFn: fnToString(h5ZoomFn)
}