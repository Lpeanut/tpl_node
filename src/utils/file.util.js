/**
 * 文件处理机制
 * Author: 柴建祥
 * Time: 2020/04/21
 */

var fs = require("fs")

// 读取文件
const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if(err) {
        return reject(err)
      }
      resolve(JSON.parse(data.toString()))
    })
  })
}

// 写入文件
const writeFile = (name, content) => {
  return new Promise((resolve, reject) => 
    fs.writeFile(name, content, (err, data) => {
      if(err) {
        return reject(err)
      }
      resolve(true)
    }
  ))
}

module.exports = { readFile, writeFile }