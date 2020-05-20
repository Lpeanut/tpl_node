const { createHardBlood } = require("../helper/blood.helper");
const { getStaticImageUrl } = require("../utils/image")

const container = { // 最外层
  name: "tpl_container",  // 不可改
  sketch: {
    wh: [3960, 2560],
    backgroud: "#fff",
  },
  children: [
    {
      slot: "slot",
    },
  ],
};

const fm = {  // 封面
  name: "fm",
  sketch: {
    wh: [1780, 2560],
    xy: [0, 0],
    style: {
      position: "relative",
    },
  },
  children: [
    {
      name: "fm_imgs",
      src: "%=fmUrl",
      sketch: {
        wh: [1231, 1231],
        xy: [301, 771],
        z: 2,
      },
    },
    {
      name: "fm_img_mask",
      src: getStaticImageUrl(__dirname, '2003_yfm_2'),
      sketch: {
        wh: [1771, 1361],
        xy: [0, 706],
        z: 3,
      },
    },
    {
      name: "fm_bg",
      src: getStaticImageUrl(__dirname, '2003_yfm_1'),
      sketch: {
        wh: [1780, 2560],
        xy: [0, 0],
      },
    },
    {
      name: "fm_title",
      content: "%=title",
      zoomable: true,
      sketch: {
        wh: [1303, 86],
        xy: [240, 265],
        color: "#333",
        font: [64, 86, 500],
        textAlign: "center",
        style: {
          "letter-spacing": "1px",
        },
      },
    },
    {
      name: "fm_author",
      content: "%=author",
      sketch: {
        wh: [1303, 50],
        xy: [233.5, 427],
        color: "#333",
        font: [32, 50, 300],
        textAlign: "center",
      },
    },
    ...createHardBlood('fm')
  ],
};

const mid = { // 书脊
  name: "mid",
  ":style": "{width: spineWidth * 10 + 'px'}",
  sketch: {
    wh: [0, 2560],
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
        xy: [68, 295],
        font: [56, 66, 400],
        color: "#000",
        textAlign: "center",
      },
    },
    {
      name: "mid_spine_width",
      ":class": "{absoulte_center: true}",
      content: "%=spineWidth",
      sketch: {
        wh: [197, 36],
        xy: [55, -100],
        font: [36, 36, 400],
        color: "#333",
        textAlign: "center",
      },
    },
    ...createHardBlood('mid')
  ],
};

const fd = { // 封底
  name: "fd",
  sketch: {
    wh: [1780, 2560],
    xy: [0, 0],
    backgroud: "#D5EFFE",
    style: {
      position: "relative",
    },
  },
  children: [
    {
      name: "fd_bg",
      src: getStaticImageUrl(__dirname, '2003_yfd_1'), // getStaticImageUrl(__dirname, filename, 'svg')
      sketch: {
        z: 1,
        wh: [678, 303],
        xy: [540, 847],
      },
    },
    {
      name: "qrcode_box",
      component: "Qrcode",
      ":qrcode": "qrcode",
      ":text": "tailPageText",
      sketch: {
        z: 2,
        wh: [200, 200],
        xy: [782, 1922],
      },
    },
    {
      name: "fd_barcode_box",
      component: "Barcode",
      ":barcode": "barcode",
      ":text": "orderNo",
      sketch: {
        z: 2,
        wh: [320, 110],
        xy: [721, 2245],
      },
    },
    ...createHardBlood('fd')
  ],
};

module.exports = {
  container,
  fd,
  mid,
  fm,
};
