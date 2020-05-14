##### 页面结构

{
  container, // 最外层的壳子
  fm, // 封面
  fd, // 封底
  mid // 书脊
}

##### 页面元素描述

fm: {
  "tagName": "div",  // 图片或svg用'img' 其他的用'div'
  "className": "fm", // 给这个块起名字(必填)
  "sketch": {}, //  样式描述
  children: [{ // 嵌套的块放到children中，结构和上面一致
    "tagName": "img",
    "className": "fm_img",
    "sketch": {}
  }]
}
