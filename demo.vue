<template>
  <div class="wrapper">
    <div class="container">
      <div class="mid"><div class="mid_text">{{fmTitle}}</div></div>
      <div class="fm">
        <img src="IMG1.KPG" class="fm_imgs" />
        <div :src="fmImg" class="fm_imgs"></div>
        <img
          src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/501/yfm_1.png"
          class="fm_bg"
        />
        <div class="fm_title">{{fmTitle}}</div>
        <div class="fm_author">{{fmAuthor}}</div>
        <img
          src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/501/logo_fd.svg"
          class="fm_logo_svg"
        />
      </div>
      <div class="fd">
        <img
          src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/501/yfd_1.png"
          class="fd_bg"
        /><img
          src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/501/logo_fm.svg"
          class="fd_logo_svg"
        />
        <div class="fd_qrcode_box">
          <img :src="qrcode" alt="">
        </div>
        <div class="fd_qrcode_text">扫码阅读美篇原文</div>
        <div class="fd_barcode_box">
          <img :src="barcode" alt="">
        </div>
        <div class="fd_barcode_text">{{barcodeText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async fetchData () {
      const res = await xxxx()
      if (!res && !res.data) return
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    const container = document.querySelector(".container");
    container.style.transform = "scale(0.37757575758)";
  }
};
</script>
<style scoped>
.container {
  width: 3220px;
  height: 2160px;
  background: #7c0505;
  position: relative;
  word-break: break-word;
  transform: scale(0.37757575758);
  transform-origin: top left;
}
.mid {
  width: 200px;
  height: 2160px;
  position: absolute;
  left: 1510px;
  top: 0px;
}
.mid_text {
  width: 64px;
  height: undefined;
  position: absolute;
  left: 68px;
  top: 320px;
  font-weight: 400;
  font-size: 56px;
  line-height: 66px;
  color: #fff;
}
.fm {
  width: 1510px;
  height: 2160px;
  position: absolute;
  left: 1711px;
  top: 0px;
}
.fm_imgs {
  width: 1510px;
  height: 1133px;
  position: absolute;
  left: 0px;
  top: 450px;
}
.fm_bg {
  width: 1510px;
  height: 2160px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.fm_title {
  width: 1510px;
  height: 86px;
  position: absolute;
  left: 0px;
  top: 1726px;
  font-weight: 500;
  font-size: 80px;
  line-height: 86px;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
}
.fm_author {
  width: 1510px;
  height: 86px;
  position: absolute;
  left: 0px;
  top: 1847px;
  font-weight: 300;
  font-size: 40px;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
.fm_logo_svg {
  width: 390px;
  height: 39px;
  position: absolute;
  left: 670px;
  top: 2000px;
}
.fd {
  width: 1480px;
  height: 2100px;
  position: absolute;
  left: 30px;
  top: 30px;
}
.fd_bg {
  width: 1480px;
  height: 2100px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.fd_logo_svg {
  width: 390px;
  height: 41px;
  position: absolute;
  left: 100px;
  top: 100px;
}
.fd_qrcode_box {
  width: 170px;
  height: 170px;
  position: absolute;
  left: 655px;
  top: 1599px;
  background: #fff;
}
.fd_qrcode_text {
  width: 200px;
  height: 24px;
  position: absolute;
  left: 640px;
  top: 1777px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  text-align: center;
}
.fd_barcode_box {
  width: 320px;
  height: 110px;
  position: absolute;
  left: 722px;
  top: 2245px;
  background: #fff;
}
.fd_barcode_text {
  width: 210px;
  height: 24px;
  position: absolute;
  left: 776px;
  top: 2365px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  text-align: center;
}

.wrapper {
  position: relative;
  width: 1215.7939394076px;
  height: 815.5636363728px;
  overflow: hidden;
}
</style>
