
    <template>
      <div class="wrapper">
        <div class="container" >

<div class="mid" ><div class="mid_text" >%=fmTitle</div></div>
<div class="fm" ><img src="./images/watching.jpg" class="fm_imgs"  /><img src="./images/2003_yfm_2.png" class="fm_img_mask"  /><img src="./images/2003_yfm_1.png" class="fm_bg"  /><div class="fm_title" >%=fmTitle</div><div class="fm_author" >%=fmAuthor</div></div>
<div class="fd" ><img src="./images/2003_yfd_1.png" class="fd_bg"  /><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/501/logo_fm.svg" class="fd_logo_svg"  /><div class="fd_qrcode_box" ></div><div class="fd_qrcode_text" >扫码阅读美篇原文</div><div content="扫码阅读美篇原文" class="fd_barcode_box" ></div><div class="fd_barcode_text" >B123456123456</div></div>
</div>
      </div>
    </template>
    <script>
      export default {
        
    mounted () {
      
  const container = document.querySelector('.container')
  container.style.transform = 'scale(0.37757575758)'

    }
  
      }
    </script>
    <style scoped>
      .container{
    width: 3220px;
    height: 2160px;background: #fff;position: relative;word-break: break-word;transform-origin: top left;}
.mid{
    width: 200px;
    height: 2100px;
    position: absolute;
    left: 1511px;
    top: 31px;}
.mid_text{
    width: 64px;
    height: undefined;
    position: absolute;
    left: 68px;
    top: 176px;
    font-weight: 400;
    font-size: 56px;
    line-height: 66px;color: #000;}
.fm{}
.fm_imgs{
    z-index: 2}
.fm_img_mask{
    width: 1462px;
    height: 1103px;
    position: absolute;
    left: 0px;
    top: 582px;
    z-index: 3}
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
    font-size: 64px;
    line-height: 86px;color: #333333;text-align: center;letter-spacing: 1px;}
.fm_author{
    width: 352px;
    height: 50px;
    position: absolute;
    left: 579px;
    top: 356px;
    font-weight: 300;
    font-size: 32px;
    line-height: 50px;color: #333;text-align: center;}
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
      width: 1215.7939394076px;
      height: 815.5636363728px;
      overflow: hidden;
    }
  
    </style>
  