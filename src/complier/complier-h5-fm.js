
const { run } = require('./complier-h5')
const json = require('../503/soft')
const { h5FmScript, h5FdScript } = require('../platforms/h5')

run({
  jsonData: json,
  script: h5FmScript,
  name: 'fm'
})
