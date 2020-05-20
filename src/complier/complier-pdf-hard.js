const { run } = require('./complier-pdf')
const json = require('../503/hard')
const { hardPdfScript } = require('../platforms/pdf/hard')

run({
  jsonData: json,
  script: hardPdfScript,
  name: 'hard'
})
