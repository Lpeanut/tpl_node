const hardPdfScript = `
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
      this.spineWidth = spine_width.toFixed(2);
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
        wrapper.style.padding = 100 * 0.37757575758 + 'px'
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
`

module.exports = {
  hardPdfScript
}
