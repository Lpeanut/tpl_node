
const hardBlood = {
  fm: [
    {wh: [30, 2], style: { right: '-100px', top: '49px'}},
    {wh: [30, 2], style: { right: '-100px', bottom: '49px'}},
    {wh: [2, 30], style: { right: '49px', top: '-100px'}},
    {wh: [2, 30], style: { right: '49px', bottom: '-100px'}},
  ],
  fd: [
    {wh: [30, 2], style: { left: '-100px', top: '49px'}},
    {wh: [30, 2], style: { left: '-100px', bottom: '49px'}},
    {wh: [2, 30], style: { left: '49px', top: '-100px'}},
    {wh: [2, 30], style: { left: '49px', bottom: '-100px'}},
  ],
  mid: [
    {wh: [2, 30], style: { left: '0', top: '-100px'}},
    {wh: [2, 30], style: { right: '0', top: '-100px'}},
    {wh: [2, 30], style: { left: '0', bottom: '-100px'}},
    {wh: [2, 30], style: { right: '0', bottom: '-100px'}},
    {wh: [2, 30], style: { left: '-99px', top: '-100px'}},
    {wh: [2, 30], style: { right: '-99px', top: '-100px'}},
    {wh: [2, 30], style: { left: '-99px', bottom: '-100px'}},
    {wh: [2, 30], style: { right: '-99px', bottom: '-100px'}},
  ]
}

const softBlood = {
  fm: [
    {wh: [10, 2], style: { right: '-30px', top: '0'}},
    {wh: [10, 2], style: { right: '-30px', bottom: '0'}},
    {wh: [2, 10], style: { right: '0', top: '-30px'}},
    {wh: [2, 10], style: { right: '0', bottom: '-30px'}},
  ],
  fd: [
    {wh: [10, 2], style: { left: '-30px', top: '0'}},
    {wh: [10, 2], style: { left: '-30px', bottom: '0'}},
    {wh: [2, 10], style: { left: '0', top: '-30px'}},
    {wh: [2, 10], style: { left: '0', bottom: '-30px'}},
  ],
  mid: [
    {wh: [2, 10], style: { left: '0', top: '-30px'}},
    {wh: [2, 10], style: { right: '0', top: '-30px'}},
    {wh: [2, 10], style: { left: '0', bottom: '-30px'}},
    {wh: [2, 10], style: { left: '0', bottom: '-30px'}},
  ]
}


const createBlood = (list, type) => {
  return list.map((item, i) => {
    let { wh, style } = item
    style = Object.assign({}, style, {position: "absolute"})
    return {
      name: `${type}_blood_${i}`,
      sketch: {
        backgroud: "#000",
        z: 10,
        style,
        wh,
      }
    }
  })
}


const createHardBlood = (type = 'fm') => {
  const list = hardBlood[type]
  return createBlood(list, type)
}

const createSoftBlood = (type = 'fm') => {
  const list = softBlood[type]
  return createBlood(list, type)
}

module.exports = {
  createHardBlood,
  createSoftBlood
}