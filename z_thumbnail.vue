
    <template>
      <div class="wrapper">
        <div class="fm" ><img class="fm_imgs"  :src='fmUrl'/><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfm_2.png" class="fm_img_mask"  /><img src="https://static2.ivwen.com/pdf/book/cdn/tpl_pics/503/2003_yfm_1.png" class="fm_bg"  /><div class="fm_title" >
      <span :style='{zoom: zoomRate}' v-html="title"></span>
    </div><div class="fm_author"  v-html='author'></div><div class="fm_blood_01" ></div><div class="fm_blood_03" ></div><div class="fm_blood_02" ></div><div class="fm_blood_04" ></div></div>
      </div>
    </template>
    <script>
      
import { getQueryCNString } from '@common/utils/util'
import '../common.scss'


export default {
  data() {
    return {
      fmUrl: '',
      title: '',
      author: '',
      zoomRate: 1
    };
  },
  methods: {
    async fetchOrderData() {
      this.fmUrl = getQueryCNString('url')
      this.title = getQueryCNString('title')
      this.author = getQueryCNString('author')
      this.$nextTick(() => {
        this.zoomTitle()
      })
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
    title () {
      this.adjustWrapperWidth()
    }
  },
  mounted() {
    const container = document.querySelector('.fm')
    container.style.transform = 'scale(0.2001151515174)'
    container.style.transformOrigin = 'top left'
    container.style.left = 0
    container.style.top = 0
  }
};

    </script>
    <style scoped>
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
.fm_blood_01{
    width: 10px;
    height: 2px;background: #000;right: -30px;top: -0px;position: absolute;
    z-index: 10;}
.fm_blood_03{
    width: 2px;
    height: 10px;background: #000;right: 0px;top: -30px;position: absolute;
    z-index: 10;}
.fm_blood_02{
    width: 10px;
    height: 2px;background: #000;right: -30px;bottom: -0px;position: absolute;
    z-index: 10;}
.fm_blood_04{
    width: 2px;
    height: 10px;background: #000;right: 0px;bottom: -30px;position: absolute;
    z-index: 10;}

    .wrapper{
      position: relative;
      width: 296.17042424575203px;
      height: 420.24181818654px;
      overflow: hidden;
    }
  
    </style>
  