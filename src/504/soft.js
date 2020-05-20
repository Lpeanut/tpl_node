const { createSoftBlood } = require("../helper/blood.helper");
const { getStaticImageUrl } = require("../utils/image")

const container = {
  name: "tpl_container",
  sketch: {
    wh: [3200, 2100],
    backgroud: "#fff",
  },
  children: [
    {
      slot: "slot",
    },
  ],
}

const fm = {
  name: "fm",
  sketch: {
    wh: [1480, 2100],
    xy: [0, 0],
    style: {
      position: "relative", // 无需改动
    },
  },
  children: [
    {
      name: "fm_imgs",
      src: "%=fmUrl",
      sketch: {
        wh: [962, 962],
        xy: [271, 657],
        z: 2,
      },
    },
    {
      name: "fm_img_mask",
      src: getStaticImageUrl(__dirname, '2003_yfm_2'),
      sketch: {
        wh: [1462, 1103],
        xy: [10, 582],
        z: 3,
      },
    },
    {
      name: "fm_bg",
      src: "https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfm_1.png",
      sketch: {
        wh: [1480, 2100],
        xy: [0, 0],
      },
    },
    {
      name: "fm_title",
      content: "%=title",
      zoomable: true,
      sketch: {
        wh: [1042, 86],
        xy: [233.5, 225],
        color: "#333",
        font: [64, 86, 500],
        textAlign: "center",
        style: {
          "letter-spacing": "1px",
          "white-space": "nowrap",
        },
      },
    },
    {
      name: "fm_author",
      content: "%=author",
      sketch: {
        wh: [1042, 50],
        xy: [233.5, 356],
        color: "#333",
        font: [32, 50, 300],
        textAlign: "center",
      },
    },
    ...createSoftBlood("fm"),
  ],
}

const mid = {
  name: "mid",
  ":style": "{width: spineWidth * 10 + 'px'}",
  sketch: {
    wh: [0, 2100],
    xy: [0, 0],
    backgroud: "#D5EFFE",
    style: {
      position: "relative",
    },
  },
  children: [
    {
      name: "mid_text",
      ":class": "{absoulte_center: true}",
      content: "%=spineTitle",
      "v-if": "spineWidth > 7",
      sketch: {
        wh: [64],
        xy: [68, 176],
        font: [56, 66, 400],
        color: "#000",
      },
    },
    ...createSoftBlood("mid"),
  ],
}

const fd = {
  name: "fd",
  sketch: {
    wh: [1480, 2100],
    xy: [0, 0],
    backgroud: "#D5EFFE",
    style: {
      position: "relative",
    },
  },
  children: [
    {
      name: "fd_bg",
      src: "https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfd_1.png",
      sketch: {
        z: 1,
        wh: [557, 250],
        xy: [427, 690],
      },
    },
    {
      name: "qrcode_box",
      component: "Qrcode",
      ":qrcode": "qrcode",
      ":text": "tailPageText",
      sketch: {
        z: 2,
        wh: [170, 170],
        xy: [655, 1599],
      },
    },
    {
      name: "fd_barcode_box",
      component: "Barcode",
      ":barcode": "barcode",
      ":text": "orderNo",
      sketch: {
        z: 2,
        wh: [257.1, 77],
        xy: [611, 1884],
      },
    },
    ...createSoftBlood("fd"),
  ],
}

module.exports = {
  container,
  fd,
  mid,
  fm
}
