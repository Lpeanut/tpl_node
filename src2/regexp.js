// const matchTag = /<[.|\n]*>/g
const { template } = require('./index')
// const matchTag = /^<(.|\n)*>$/
const matchTag = /<(\d|\s|\w|\/|=|:|\.|\[|\]|,)*>/g
const t = template.replace(/\n*/g, '')
// console.log('%c⧭', 'color: #00a3cc', t);


const b = t.match(matchTag)
const c = matchTag.test(t)
console.log(b.length)
console.log(b.join(','))
// console.log(c)