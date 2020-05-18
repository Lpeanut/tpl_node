
    <template>
      <div class="wrapper">
        <div class="fd" ><img src="./images/2003_yfd_1.png" class="fd_bg"  /><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/501/logo_fm.svg" class="fd_logo_svg"  /><div class="fd_qrcode_box" ></div><div class="fd_qrcode_text" >扫码阅读美篇原文</div><div content="扫码阅读美篇原文" class="fd_barcode_box" ></div><div class="fd_barcode_text" >B123456123456</div></div>
      </div>
    </template>
    <script>
      export default {
        
    mounted () {
      
  const container = document.querySelectorAll(".fd");
  container.forEach(element => {
    element.style.transform = 'scale(0.46621621621621623)'
    element.style.transformOrigin = 'top left'
    element.style.left = 0;
    element.style.top = 0;
  })

    }
  
      }
    </script>
    <style scoped>
      .fd{
    width: 1480px;
    height: 2100px;
    position: absolute;
    left: 31px;
    top: 31px;background: #D5EFFE;}
.fd_bg{
    width: 557px;
    height: 250px;
    position: absolute;
    left: 427px;
    top: 690px;}
.fd_logo_svg{
    width: 390px;
    height: 41px;
    position: absolute;
    left: 100px;
    top: 100px;}
.fd_qrcode_box{
    width: 170px;
    height: 170px;
    position: absolute;
    left: 655px;
    top: 1599px;background: #FFF;}
.fd_qrcode_text{
    width: 200px;
    height: 24px;
    position: absolute;
    left: 640px;
    top: 1777px;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;color: #FFF;text-align: center;}
.fd_barcode_box{
    width: 320px;
    height: 110px;
    position: absolute;
    left: 722px;
    top: 2245px;background: #FFF;}
.fd_barcode_text{
    width: 210px;
    height: 24px;
    position: absolute;
    left: 776px;
    top: 2365px;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;color: #FFF;text-align: center;}

    .wrapper{
      position: relative;
      width: 690px;
      height: 979.0540540540541px;
      overflow: hidden;
    }
  
    </style>
  