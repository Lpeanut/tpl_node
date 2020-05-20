
    <template>
      <div class="wrapper">
        <div class="fd" ><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfd_1.png?t=1589976713023" class="fd_bg"  /><Qrcode component="Qrcode" :qrcode="qrcode" :text="tailPageText" class="qrcode_box" ></Qrcode><Barcode component="Barcode" :barcode="barcode" :text="orderNo" class="fd_barcode_box" ></Barcode><div class="fd_blood_0" ></div><div class="fd_blood_1" ></div><div class="fd_blood_2" ></div><div class="fd_blood_3" ></div></div>
      </div>
    </template>
    <script>
      
  import Qrcode from "./components/qrcode";
  import Barcode from "./components/barcode";

  export default {
    components: { Qrcode, Barcode },
    data () {
      return {
        pageLen: 1,
        qrcode: null,
        barcode: 'https://ss2.meipian.me/ebook/bkcontent/%E9%BB%91%E5%AD%97%E6%9D%A1%E5%BD%A2%E7%A0%811.png'
      }
    },
    props: {
      postData: {
        type: String,
      }
    },
    computed: {
      tailPageText () {
        return this.pageLen > 1 ? '扫码查看作者专栏' : '扫码阅读美篇原文';
      }
    },
    methods: {
      splitData () {
        const postData = JSON.parse(this.postData)
        this.qrcode = postData.qr_code
        this.pageLen = postData.pageLen
      }
    },
    mounted() {
      const container = document.querySelectorAll(".fd");
      container.forEach((element) => {
        element.style.transform = "scale(0.46621621621621623)";
        element.style.transformOrigin = "top left";
        element.style.left = 0;
        element.style.top = 0;
      });
      this.splitData()
    },
  };

    </script>
    <style scoped>
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
    height: 2px;background: #000;left: 0;top: 30px;position: absolute;
    z-index: 10;}
.fd_blood_1{
    width: 10px;
    height: 2px;background: #000;left: 0;bottom: 30px;position: absolute;
    z-index: 10;}
.fd_blood_2{
    width: 2px;
    height: 10px;background: #000;left: 30px;top: 0px;position: absolute;
    z-index: 10;}
.fd_blood_3{
    width: 2px;
    height: 10px;background: #000;left: 30px;bottom: 0px;position: absolute;
    z-index: 10;}

    .wrapper{
      position: relative;
      width: 690px;
      height: 979.0540540540541px;
      overflow: hidden;
    }
  
    </style>
  