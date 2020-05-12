
// 渲染vue文件的三大层
const vueTemplate = props => {
  const { element, css, script } = props
  return `
    <template>
      <div class="wrapper">
        ${element}
      </div>
    </template>
    <script>
      export default {
        ${script}
      }
    </script>
    <style scoped>
      ${css}
    </style>
  `
}

module.exports = {
  vueTemplate
}