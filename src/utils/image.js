const timestamp = Date.now()
const getStaticImageUrl = (dir, name, ext = 'png') => {
  const lastDirName = dir.split('/').slice(-1)[0]
  return `https://static2.ivwen.com/pdf/book/cdn/tpl_pics/${lastDirName}/${name}.${ext}?t=${timestamp}`
}

module.exports = {
  getStaticImageUrl
}