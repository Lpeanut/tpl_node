const { run } = require('./complier-pdf')
const json = require('../503/soft')
const { softPdfScript } = require('../platforms/pdf/soft')

run({
  jsonData: json,
  script: softPdfScript,
  name: 'soft'
})
