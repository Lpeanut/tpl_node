
    <template>
      <div class="wrapper">
        <div class="tpl_container" >

<div class="fd" ><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfd_1.png" class="fd_bg"  /><Qrcode component="Qrcode" :qrcode="qrcode" :text="tailPageText" class="qrcode_box" ></Qrcode><Barcode component="Barcode" :barcode="barcode" :text="orderNo" class="fd_barcode_box" ></Barcode><div class="fd_blood_0" ></div><div class="fd_blood_1" ></div><div class="fd_blood_2" ></div><div class="fd_blood_3" ></div></div>
<div :style="{width: spineWidth * 10 + 'px'}" class="mid" ><div :class="{absoulte_center: true}" v-if="spineWidth > 7" class="mid_text"  v-html='spineTitle'></div><div class="mid_blood_0" ></div><div class="mid_blood_1" ></div><div class="mid_blood_2" ></div><div class="mid_blood_3" ></div></div>
<div class="fm" ><img class="fm_imgs"  :src='fmUrl'/><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfm_2.png" class="fm_img_mask"  /><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfm_1.png" class="fm_bg"  /><div class="fm_title" >
      <span :style='{zoom: zoomRate}' v-html="title"></span>
    </div><div class="fm_author"  v-html='author'></div><div class="fm_blood_0" ></div><div class="fm_blood_1" ></div><div class="fm_blood_2" ></div><div class="fm_blood_3" ></div></div>
</div>
      </div>
    </template>
    <script>
      
import { getQueryString } from "@common/utils/util";
import { getBookCoverInfo } from "@common/api/tpl";
import Qrcode from "@components/tpl/qrcode";
import Barcode from "@components/tpl/barcode";
import '../common.scss'

export default {
  components: { Qrcode, Barcode },
  data() {
    return {
      title: "",
      author: "",
      barcode: "",
      orderNo: "",
      qrcode: "",
      fmUrl: "",
      pageLen: "",
      spineWidth: 0,
      spineTitle: '',
      zoomRate: 1
    };
  },
  computed: {
    tailPageText() {
      return this.pageLen > 1 ? "扫码查看作者专栏" : "%=tailPageText";
    }
  },
  methods: {
    async fetchOrderData() {
      const trade_no = getQueryString("trade_no");
      const res = await getBookCoverInfo(trade_no);
      const {
        author_page: {
          title,
          author,
          cover_img_url,
          qr_code,
          pageLen,
          spine_width,
          spine_title
        },
        barcode: { image, order_no }
      } = res;
      this.title = title;
      this.author = author;
      this.fmUrl = cover_img_url;
      this.qrcode = qr_code;
      this.barcode = image;
      this.orderNo = order_no;
      this.pageLen = pageLen;
      this.spineWidth = spine_width;
      this.spineTitle = spine_title
      this.$nextTick(() => {
        this.zoomTitle();
      });
      console.log(res);
    },
    zoomTitle() {
      let titleDom = document.querySelector(".fm_title span");
      let titleWidth = document.querySelector(".fm_title").offsetWidth;
      let contentWidth = titleDom.offsetWidth;
      if (titleWidth < contentWidth) {
        this.zoomRate = titleWidth / contentWidth;
      } else {
        this.zoomRate = 1;
      }
    },
    adjustWrapperWidth () {
      this.$nextTick(() => {
        const fm = document.querySelector('.fm').offsetWidth
        const fd = document.querySelector('.fd').offsetWidth
        const mid = document.querySelector('.mid').offsetWidth
        const wrapper = document.querySelector('.wrapper')
        wrapper.style.width = (fm + fd + mid) * 0.37757575758 + 'px'
        wrapper.style.padding = 30 * 0.37757575758 + 'px'
        wrapper.style.border = "1px solid blue"
      })
    }
  },
  watch: {
    spineWidth () {
      this.adjustWrapperWidth()
    }
  },
  mounted() {
    const container = document.querySelector(".tpl_container");
    container.style.transform = "scale(0.37757575758)";
    this.fetchOrderData();
  }
};

    </script>
    <style scoped>
      .tpl_container{
    width: 3200px;
    height: 2100px;background: #fff;}
.fd{
    width: 1480px;
    height: 2100px;
    position: absolute;
    left: 0px;
    top: 0px;background: #D5EFFE;position: relative;}
.fd_bg{
    width: 557px;
    height: 250px;
    position: absolute;
    left: 427px;
    top: 690px;
    z-index: 1;}
.qrcode_box{
    width: 170px;
    height: 170px;
    position: absolute;
    left: 655px;
    top: 1599px;
    z-index: 2;}
.fd_barcode_box{
    width: 257.1px;
    height: 77px;
    position: absolute;
    left: 611px;
    top: 1884px;
    z-index: 2;}
.fd_blood_0{
    width: 10px;
    height: 2px;background: #000;left: -30px;top: 0;position: absolute;
    z-index: 10;}
.fd_blood_1{
    width: 10px;
    height: 2px;background: #000;left: -30px;bottom: 0;position: absolute;
    z-index: 10;}
.fd_blood_2{
    width: 2px;
    height: 10px;background: #000;left: 0;top: -30px;position: absolute;
    z-index: 10;}
.fd_blood_3{
    width: 2px;
    height: 10px;background: #000;left: 0;bottom: -30px;position: absolute;
    z-index: 10;}
.mid{
    width: auto;
    height: 2100px;
    position: absolute;
    left: 0px;
    top: 0px;background: #D5EFFE;position: relative;}
.mid_text{
    width: 64px;
    height: auto;
    position: absolute;
    left: 68px;
    top: 176px;
    font-weight: 400;
    font-family: ;
    font-size: 56px;
    line-height: 66px;color: #000;}
.mid_blood_0{
    width: 2px;
    height: 10px;background: #000;left: 0;top: -30px;position: absolute;
    z-index: 10;}
.mid_blood_1{
    width: 2px;
    height: 10px;background: #000;right: 0;top: -30px;position: absolute;
    z-index: 10;}
.mid_blood_2{
    width: 2px;
    height: 10px;background: #000;left: 0;bottom: -30px;position: absolute;
    z-index: 10;}
.mid_blood_3{
    width: 2px;
    height: 10px;background: #000;left: 0;bottom: -30px;position: absolute;
    z-index: 10;}
.fm{
    width: 1480px;
    height: 2100px;
    position: absolute;
    left: 0px;
    top: 0px;position: relative;}
.fm_imgs{
    width: 962px;
    height: 962px;
    position: absolute;
    left: 271px;
    top: 657px;
    z-index: 2;}
.fm_img_mask{
    width: 1462px;
    height: 1103px;
    position: absolute;
    left: 0px;
    top: 582px;
    z-index: 3;}
.fm_bg{
    width: 1480px;
    height: 2100px;
    position: absolute;
    left: 0px;
    top: 0px;}
.fm_title{
    width: 1042px;
    height: 86px;
    position: absolute;
    left: 233.5px;
    top: 225px;
    font-weight: 500;
    font-family: ;
    font-size: 64px;
    line-height: 86px;color: #333;letter-spacing: 1px;white-space: nowrap;
    text-align: center;
  }
.fm_author{
    width: 1042px;
    height: 50px;
    position: absolute;
    left: 233.5px;
    top: 356px;
    font-weight: 300;
    font-family: ;
    font-size: 32px;
    line-height: 50px;color: #333;
    text-align: center;
  }
.fm_blood_0{
    width: 10px;
    height: 2px;background: #000;right: -30px;top: 0;position: absolute;
    z-index: 10;}
.fm_blood_1{
    width: 10px;
    height: 2px;background: #000;right: -30px;bottom: 0;position: absolute;
    z-index: 10;}
.fm_blood_2{
    width: 2px;
    height: 10px;background: #000;right: 0;top: -30px;position: absolute;
    z-index: 10;}
.fm_blood_3{
    width: 2px;
    height: 10px;background: #000;right: 0;bottom: -30px;position: absolute;
    z-index: 10;}

    .wrapper{
      position: relative;
      width: 1208.242424256px;
      height: 792.9090909180001px;
      overflow: hidden;
    }
  
    </style>
  