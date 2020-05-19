const h5FmScript = `
  export default {
    data () {
      return {
        title: '',
        author: '',
        zoomRate: 1
      }
    },
    props: {
      cover_img: {
        type: String,
      },
      author_page: {
        type: String
      }
    },
    methods: {
      splitData() {
        const authorPage = JSON.parse(this.author_page)
        this.title = authorPage.title
        this.author = authorPage.author
        this.$nextTick(() => {
          this.zoomTitle()
        })
      },
      zoomTitle() {
        let titleDom = document.querySelector('.fm_title span');
        let titleWidth = document.querySelector('.fm_title').offsetWidth;
        let contentWidth = titleDom.offsetWidth;
        if (titleWidth < contentWidth) {
            this.zoomRate = titleWidth / contentWidth;
        } else {
            this.zoomRate = 1;
        }
      }
    },
    watch: {
      authorPage () {
        this.splitData()
      }
    },
    mounted() {
      const container = document.querySelectorAll('.fm');
      container.forEach((element) => {
        element.style.transform = 'scale(0.46621621621621623)';
        element.style.transformOrigin = 'top left';
        element.style.left = 0;
        element.style.top = 0;
      });
      this.splitData()
    },
  };
`

const h5FdScript = `
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
`

module.exports = {
  h5FmScript,
  h5FdScript 
}