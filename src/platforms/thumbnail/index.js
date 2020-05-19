const thumbnailScript = `
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
    container.style.transform = 'scale(${0.37757575758 * 0.53})'
    container.style.transformOrigin = 'top left'
    container.style.left = 0
    container.style.top = 0
  }
};
`

module.exports = {
  thumbnailScript
}