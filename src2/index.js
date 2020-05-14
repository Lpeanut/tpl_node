const template = `
  <container>
    <fm>
      <background 
        wh=[100,200】
        xy=[1,2]
        src=http://www.meipian.cn/wonderful.jpg
      />
      <img z=0 src=http://www.meipian.cn/wonderful.jpg font=[40px, 40px, 500]/>
      <img src="" wh=[10, 20] xy=[20, 30] />
      <title %=title />
      <author %=author />
      <logo svg =%logo />
    </fm>
  </container>
`

module.exports = {
  template
}
