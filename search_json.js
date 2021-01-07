window.ydoc_plugin_search_json = {
  "效果": [
    {
      "title": "三角形",
      "content": "三角形生成器；三角箭头\n纯 css 画三角形与 border 属性相关",
      "url": "\\documents\\triangle.html",
      "children": [
        {
          "title": "上三角",
          "url": "\\documents\\triangle.html#上三角",
          "content": "上三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-bottom: 100px solid #3498db;\nborder-width: 0 100px 100px 100px;\n  .sj4 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-bottom: 100px solid #3498db;\n    border-width: 0 100px 100px 100px;\n  }\n"
        },
        {
          "title": "下三角",
          "url": "\\documents\\triangle.html#下三角",
          "content": "下三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-top: 100px solid #e74c3c;\nborder-width: 100px 100px 0 100px;\n  .sj5 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-top: 100px solid #e74c3c;\n    border-width: 100px 100px 0 100px;\n  }\n"
        },
        {
          "title": "左三角",
          "url": "\\documents\\triangle.html#左三角",
          "content": "左三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-right: 100px solid #2ecc71;\nborder-width: 100px 100px 100px 0;\n  .sj6 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-right: 100px solid #2ecc71;\n    border-width: 100px 100px 100px 0;\n  }\n"
        },
        {
          "title": "右三角",
          "url": "\\documents\\triangle.html#右三角",
          "content": "右三角width: 0;height: 0;\nborder: 100px solid transparent;\nborder-left: 100px solid #f1c40f;\nborder-width: 100px 0 100px 100px;\n  .sj7 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-left: 100px solid #f1c40f;\n    border-width: 100px 0 100px 100px;\n  }\n"
        },
        {
          "title": "怎么设置？",
          "url": "\\documents\\triangle.html#怎么设置？",
          "content": "怎么设置？"
        },
        {
          "title": "设置四边 border 的属性",
          "url": "\\documents\\triangle.html#怎么设置？-设置四边-border-的属性",
          "content": "设置四边 border 的属性width: 100px;height: 100px;\nborder-top: 100px solid #e74c3c;\nborder-right: 100px solid #2ecc71;\nborder-bottom: 100px solid #3498db;\nborder-left: 100px solid #f1c40f;\n  .sj {\n    width: 100px;\n    height: 100px;\n    border-top: 100px solid #e74c3c;\n    border-right: 100px solid #2ecc71;\n    border-bottom: 100px solid #3498db;\n    border-left: 100px solid #f1c40f;\n    box-sizing: content-box;\n  }\n"
        },
        {
          "title": "设置 width 和 height 为 0",
          "url": "\\documents\\triangle.html#怎么设置？-设置-width-和-height-为-0",
          "content": "设置 width 和 height 为 0width: 0;height: 0;\nborder-top: 100px solid #e74c3c;\nborder-right: 100px solid #2ecc71;\nborder-bottom: 100px solid #3498db;\nborder-left: 100px solid #f1c40f;\n  .sj1 {\n    width: 0;\n    height: 0;\n    border-top: 100px solid #e74c3c;\n    border-right: 100px solid #2ecc71;\n    border-bottom: 100px solid #3498db;\n    border-left: 100px solid #f1c40f;\n  }\n"
        },
        {
          "title": "设置区域三个 border 颜色为透明",
          "url": "\\documents\\triangle.html#怎么设置？-设置区域三个-border-颜色为透明",
          "content": "设置区域三个 border 颜色为透明width: 0;height: 0;\nborder: 100px solid transparent;\nborder-top: 100px solid #e74c3c;\n  .sj2 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-top: 100px solid #e74c3c;\n  }\n虽然当前显示为三角形，但实际占用的空间还是矩形"
        },
        {
          "title": "设置对立面 width 为 0",
          "url": "\\documents\\triangle.html#怎么设置？-设置对立面-width-为-0",
          "content": "设置对立面 width 为 0width: 0;height: 0;\nborder: 100px solid transparent;\nborder-top: 100px solid #e74c3c;\nborder-width:100px 100px 0 100px;\n  .sj3 {\n    width: 0;\n    height: 0;\n    border: 100px solid transparent;\n    border-top: 100px solid #e74c3c;\n    border-width: 100px 100px 0 100px;\n  }\n"
        },
        {
          "title": "总结",
          "url": "\\documents\\triangle.html#总结",
          "content": "总结可以看到三角形方向是与 border 属性 top bottom left right 方向相反的"
        }
      ]
    },
    {
      "title": "移动端 1px",
      "content": "虽然这个 1px 需求其实是有点扯淡的 😜；因为视网膜屏本就是 1px由多个 dip 显示，纠结这个其实没什么含义。IOS 端其实是已经支持了 0.5px 方案，所以这里其实是中 hook 写法，以应付所谓的像素级还原.hairline, .hairline-bottom, .hairline-top, .hairline-left, .hairline-right {\n  position: relative;\n}\n\n/*线条颜色*/\n.hairline-bottom::after, .hairline-top::after, .hairline-left::after, .hairline-right::after {\n  background-color: #e74c3c;\n}\n\n/*底边边框一像素*/\n.hairline-bottom::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*上边边框一像素*/\n.hairline-top::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*左边边框一像素*/\n.hairline-left::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*右边边框1像素*/\n.hairline-right::after {\n  content: \"\";\n  box-sizing: hairline-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*边框一像素*/\n.hairline::after {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e74c3c;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.5);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.5);\n  }\n\n  .hairline::after {\n    width: 200%;\n    height: 200%;\n    transform: scale(0.5);\n    transform-origin: 0 0;\n  }\n}\n\n/*设备像素比*/\n@media (-webkit-min-device-pixel-ratio: 3)  {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.333);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.333);\n  }\n\n  .hairline::after {\n    width: 300%;\n    height: 300%;\n    transform: scale(0.333);\n    transform-origin: 0 0;\n  }\n}\n.sj3 {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  padding: 10px;\n  text-align: center;\n  line-height: 150px;\n  font-size: 14px;\n}\n这是 1px 吗这是 左边 1px 吗这是 右边 1px 吗这是 上边 1px 吗这是 下边 1px 吗可能需要移动模式下才能看出区别",
      "url": "\\documents\\onepx.html",
      "children": [
        {
          "title": "伪类缩放",
          "url": "\\documents\\onepx.html#伪类缩放",
          "content": "伪类缩放直接上代码.hairline, .hairline-bottom, .hairline-top, .hairline-left, .hairline-right {  position: relative;\n}\n\n/*线条颜色*/\n.hairline-bottom::after, .hairline-top::after, .hairline-left::after, .hairline-right::after {\n  background-color: #e74c3c;\n}\n\n/*底边边框一像素*/\n.hairline-bottom::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*上边边框一像素*/\n.hairline-top::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  transform-origin: 0 0;\n}\n\n/*左边边框一像素*/\n.hairline-left::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*右边边框1像素*/\n.hairline-right::after {\n  content: \"\";\n  box-sizing: hairline-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  transform-origin: 0 0;\n}\n\n/*边框一像素*/\n.hairline::after {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e74c3c;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.5);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.5);\n  }\n\n  .hairline::after {\n    width: 200%;\n    height: 200%;\n    transform: scale(0.5);\n    transform-origin: 0 0;\n  }\n}\n\n/*设备像素比*/\n@media (-webkit-min-device-pixel-ratio: 3)  {\n  .hairline-bottom::after, .hairline-top::after {\n    transform: scaleY(0.333);\n  }\n\n  .hairline-left::after, .hairline-right::after {\n    transform: scaleX(0.333);\n  }\n\n  .hairline::after {\n    width: 300%;\n    height: 300%;\n    transform: scale(0.333);\n    transform-origin: 0 0;\n  }\n}\n其实还有其他解决方案，不过其他的方案兼容性可能是个大问题，如果该方案还不能解决问题，就只能使用 border-image 添图片解决.border-image-1px {  border-width: 0 0 1px 0;\n  border-image: url(linenew.png) 0 0 2 0 stretch;\n}\n"
        }
      ]
    },
    {
      "title": "新拟态 UI",
      "content": "英文名 Neumorphism，简称 “Soft UI”。是一种图形样式，通过 css 来模拟真实的物体",
      "url": "\\documents\\softui.html",
      "children": [
        {
          "title": "基本实现",
          "url": "\\documents\\softui.html#基本实现",
          "content": "基本实现  html {\n  /* 定义变量 */\n  --bgColor: #ff5353;\n\n  /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */\n  --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);\n  --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);\n}\n\n/* 设置一些页面的布局样式 */\n.container {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  width: 40vw;\n  height: 40vh;\n  min-width: 300px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--bgColor);\n}\n\n.card {\n  width: 30vh;\n  height: 30vh;\n  margin: 5vh;\n  background-color: var(--bgColor);\n  border-radius: 30px;\n}\n\n/* 主要部分 */\n.left {\n    /* 设置外阴影 */\n  box-shadow: var(--blackShadow),\n              var(--whiteShadow);\n}\n\n.right {\n    /* 设置内阴影 */\n  box-shadow: inset var(--blackShadow),\n              inset var(--whiteShadow);\n}\n  \n  \n    \nhtml {    /* 定义变量 */\n    --bgColor: #ff5353;\n\n    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */\n    --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);\n    --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);\n}\n\n/* 设置一些页面的布局样式 */\n.container {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  width: 40vw;\n  height: 40vh;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--bgColor);\n}\n\n.card {\n    width: 30vh;\n    height: 30vh;\n    margin: 5vh;\n    background-color: var(--bgColor);\n    border-radius: 30px;\n}\n\n/* 主要部分 */\n.left {\n    /* 设置外阴影 */\n    box-shadow: var(--blackShadow),\n                var(--whiteShadow);\n}\n\n.right {\n    /* 设置内阴影 */\n    box-shadow: inset var(--blackShadow),\n                inset var(--whiteShadow);\n}\n"
        },
        {
          "title": "中级实现",
          "url": "\\documents\\softui.html#中级实现",
          "content": "中级实现html {\n    /* 定义变量 */\n    --bgColor: #ff5353;\n\n    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */\n    --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);\n    --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);\n\n    --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);\n    --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);\n}\n\n/* 设置一些页面的布局样式 */\n.container {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    width: 40vw;\n    height: 40vh;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--bgColor);\n}\n\n.card {\n  width: 30vh;\n  height: 30vh;\n  margin: 5vh;\n  background-color: var(--bgColor);\n  border-radius: 30px;\n}\n\n/* 主要部分 */\n.left1 {\n  box-shadow: inset var(--blackShadow2),\n              inset var(--whiteShadow2);\n}\n\n.right1 {\n  box-shadow: var(--blackShadow2),\n              var(--whiteShadow2);\n}\n  \n  \n  \n  \n\nhtml {    /* 定义变量 */\n    --bgColor: #ff5353;\n\n    /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */\n    --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);\n    --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);\n\n    --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);\n    --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);\n}\n\n/* 设置一些页面的布局样式 */\n.container {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    width: 40vw;\n    height: 40vh;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--bgColor);\n}\n\n.card {\n    width: 30vh;\n    height: 30vh;\n    margin: 5vh;\n    background-color: var(--bgColor);\n    border-radius: 30px;\n}\n\n/* 主要部分 */\n.left {\n    box-shadow: inset var(--blackShadow2),\n                inset var(--whiteShadow2);\n}\n\n.right {\n    box-shadow: var(--blackShadow2),\n                var(--whiteShadow2);\n}\n"
        },
        {
          "title": "高级实现",
          "url": "\\documents\\softui.html#高级实现",
          "content": "高级实现html {\n  /* 定义变量 */\n  --bgColor: #ff5353;\n\n  /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */\n  --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);\n  --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);\n\n  --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);\n  --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);\n}\n\n/* 设置一些页面的布局样式 */\n.container {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  width: 40vw;\n  height: 40vh;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--bgColor);\n}\n\n.card1 {\n  width: 15vh;\n  height: 15vh;\n  background-color: var(--bgColor);\n  border-radius: 10px;\n  box-sizing: content-box;\n}\n\n/* 主要部分 */\n.left3 {\n  box-shadow: inset var(--blackShadow),\n              inset var(--whiteShadow);\n}\n\n.right3 {\n  box-shadow: var(--blackShadow),\n              var(--whiteShadow);\n  padding: 5px;\n}\n\n.left4 {\n  box-shadow: inset var(--blackShadow2),\n              inset var(--whiteShadow2);\n}\n\n.right4 {\n  box-shadow: var(--blackShadow),\n              var(--whiteShadow);\n  padding: 5px;\n  margin: 5vh;\n}  \n  \n      \n  \n  \n      \n  \n  \n      \n  \n  \n      \n  \n\nhtml {  /* 定义变量 */\n  --bgColor: #ff5353;\n\n  /* rgba的四个值分别为：红(R)、绿(G)、蓝(B)、透明度(A) */\n  --whiteShadow: -15px -15px 25px rgba(255, 117, 117, .5);\n  --blackShadow: 15px 15px 25px rgba(110, 40, 40, .2);\n\n  --whiteShadow2: 15px 15px 25px rgba(255, 117, 117, .5);\n  --blackShadow2: -15px -15px 25px rgba(110, 40, 40, .2);\n}\n\n/* 设置一些页面的布局样式 */\n.container {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  width: 40vw;\n  height: 40vh;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--bgColor);\n}\n\n.card1 {\n  width: 15vh;\n  height: 15vh;\n  background-color: var(--bgColor);\n  border-radius: 10px;\n  box-sizing: content-box;\n}\n\n/* 主要部分 */\n.left3 {\n  box-shadow: inset var(--blackShadow),\n              inset var(--whiteShadow);\n}\n\n.right3 {\n  box-shadow: var(--blackShadow),\n              var(--whiteShadow);\n  padding: 5px;\n}\n\n.left4 {\n  box-shadow: inset var(--blackShadow2),\n              inset var(--whiteShadow2);\n}\n\n.right4 {\n  box-shadow: var(--blackShadow),\n              var(--whiteShadow);\n  padding: 5px;\n  margin: 5vh;\n}\n"
        }
      ]
    },
    {
      "title": "loading",
      "content": "常见的 loading 加载效果更多效果  .loading1 {\n    width: 0;\n    height: 0;\n    border: 5px #e74c3c solid;\n    border-radius: 50%;\n    background: transparent;\n    animation: move-loading1 1s infinite;\n  }\n  @keyframes move-loading1 {\n    50% {\n      transform: scale(2);\n      width: 10px;\n      height: 10px;\n    }\n    100% {\n      opacity: 0;\n      border-width: 2px;\n    }\n  }\n  \n  .loading1 {\n    width: 0;\n    height: 0;\n    border: 5px #e74c3c solid;\n    border-radius: 50%;\n    background: transparent;\n    animation: move-loading1 1s infinite;\n  }\n  @keyframes move-loading1 {\n    50% {\n      transform: scale(2);\n      width: 10px;\n      height: 10px;\n    }\n    100% {\n      opacity: 0;\n      border-width: 2px;\n    }\n  }\n\n\n  \n\n.container {\n  position: relative;\n  width: 30vh;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loader {\n  width: 2.5em;\n  height: 2.5em;\n  transform: rotate(165deg);\n  position: absolute;\n  top: calc(50% - 1.25em);\n  left: calc(50% - 1.25em);\n}\n.loader:before, .loader:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.25em;\n  transform: translate(-50%, -50%);\n}\n.loader:before {\n  animation: before 2s infinite;\n}\n.loader:after {\n  animation: after 2s infinite;\n}\n@keyframes before {\n  0% {\n    width: 0.5em;\n    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);\n  }\n  35% {\n    width: 2.5em;\n    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);\n  }\n  70% {\n    width: 0.5em;\n    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);\n  }\n  100% {\n    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);\n  }\n}\n@keyframes after {\n  0% {\n    height: 0.5em;\n    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);\n  }\n  35% {\n    height: 2.5em;\n    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);\n  }\n  70% {\n    height: 0.5em;\n    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);\n  }\n  100% {\n    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);\n  }\n}\n  \n.container {\n  position: relative;\n  width: 30vh;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loader {\n  width: 2.5em;\n  height: 2.5em;\n  transform: rotate(165deg);\n  position: absolute;\n  top: calc(50% - 1.25em);\n  left: calc(50% - 1.25em);\n}\n.loader:before, .loader:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.25em;\n  transform: translate(-50%, -50%);\n}\n.loader:before {\n  animation: before 2s infinite;\n}\n.loader:after {\n  animation: after 2s infinite;\n}\n@keyframes before {\n  0% {\n    width: 0.5em;\n    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);\n  }\n  35% {\n    width: 2.5em;\n    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);\n  }\n  70% {\n    width: 0.5em;\n    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);\n  }\n  100% {\n    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);\n  }\n}\n@keyframes after {\n  0% {\n    height: 0.5em;\n    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);\n  }\n  35% {\n    height: 2.5em;\n    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);\n  }\n  70% {\n    height: 0.5em;\n    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);\n  }\n  100% {\n    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);\n  }\n}\n\n\n\n  \n\n.loader1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  margin-top: -25px;\n}\n.loader-block {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  opacity: 0;\n  width: 10px;\n  height: 10px;\n  background: #2980b9;\n  animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;\n}\n.loader-block:nth-child(1) {\n  transform: translate(0, 0);\n  animation-delay: 0.065s;\n}\n\n.loader-block:nth-child(2) {\n  transform: translate(10px, 0);\n  animation-delay: 0.13s;\n}\n\n.loader-block:nth-child(3) {\n  transform: translate(20px, 0);\n  animation-delay: 0.195s;\n}\n\n.loader-block:nth-child(4) {\n  transform: translate(0, 10px);\n  animation-delay: 0.325s;\n}\n\n.loader-block:nth-child(5) {\n  transform: translate(10px, 10px);\n  animation-delay: 0.13s;\n}\n\n.loader-block:nth-child(6) {\n  transform: translate(20px, 10px);\n  animation-delay: 0.455s;\n}\n\n.loader-block:nth-child(7) {\n  transform: translate(0, 20px);\n  animation-delay: 0.39s;\n}\n\n.loader-block:nth-child(8) {\n  transform: translate(10px, 20px);\n  animation-delay: 0.26s;\n}\n\n.loader-block:nth-child(9) {\n  transform: translate(20px, 20px);\n}\n\n@-webkit-keyframes pulse {\n  from,\n  40% {\n    background: #e74c3c;\n  }\n  to {\n    background: #3498db;\n  }\n}\n@-webkit-keyframes show {\n  from, 40% {\n    opacity: 0;\n  }\n  41%, to {\n    opacity: 1;\n  }\n}\n@keyframes pulse {\n  from,\n  40% {\n    background: #e74c3c;\n  }\n  to {\n    background: #3498db;\n  }\n}\n@keyframes show {\n  from, 40% {\n    opacity: 0;\n  }\n  41%, to {\n    opacity: 1;\n  }\n}\n  \n    \n    \n    \n    \n    \n    \n    \n    \n    \n  \n.loader1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  margin-top: -25px;\n}\n.loader-block {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  opacity: 0;\n  width: 10px;\n  height: 10px;\n  background: #2980b9;\n  animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;\n}\n.loader-block:nth-child(1) {\n  transform: translate(0, 0);\n  animation-delay: 0.065s;\n}\n\n.loader-block:nth-child(2) {\n  transform: translate(10px, 0);\n  animation-delay: 0.13s;\n}\n\n.loader-block:nth-child(3) {\n  transform: translate(20px, 0);\n  animation-delay: 0.195s;\n}\n\n.loader-block:nth-child(4) {\n  transform: translate(0, 10px);\n  animation-delay: 0.325s;\n}\n\n.loader-block:nth-child(5) {\n  transform: translate(10px, 10px);\n  animation-delay: 0.13s;\n}\n\n.loader-block:nth-child(6) {\n  transform: translate(20px, 10px);\n  animation-delay: 0.455s;\n}\n\n.loader-block:nth-child(7) {\n  transform: translate(0, 20px);\n  animation-delay: 0.39s;\n}\n\n.loader-block:nth-child(8) {\n  transform: translate(10px, 20px);\n  animation-delay: 0.26s;\n}\n\n.loader-block:nth-child(9) {\n  transform: translate(20px, 20px);\n}\n\n@-webkit-keyframes pulse {\n  from,\n  40% {\n    background: #e74c3c;\n  }\n  to {\n    background: #3498db;\n  }\n}\n@-webkit-keyframes show {\n  from, 40% {\n    opacity: 0;\n  }\n  41%, to {\n    opacity: 1;\n  }\n}\n@keyframes pulse {\n  from,\n  40% {\n    background: #e74c3c;\n  }\n  to {\n    background: #3498db;\n  }\n}\n@keyframes show {\n  from, 40% {\n    opacity: 0;\n  }\n  41%, to {\n    opacity: 1;\n  }\n}\n\n\n  \n    \n    \n    \n    \n    \n    \n    \n    \n    \n  \n\n\n.loader2 {\n  width: 50px;\n  height: 51px;\n  border: 8px solid;\n  border-top-color: hsl(154,100%,31%);\n  border-left-color: hsl(216,87%,52%);\n  border-bottom-color: hsl(8,66%,50%);\n  border-right-color: hsl(42,100%,51%);\n  border-radius: 50%;\n  transform: rotate(45deg);\n  margin: 30px auto;\n}\n.loader2 .p {\n  display: inline-block;\n  width: 57px;\n  height: 57px;\n  background: linear-gradient(90deg, hsla(212,67%,36%,0) 0%,\n                                         hsla(207,69%,51%,0) 76%,\n                                         hsla(0,0%,100%,1) 85%,\n                                         hsla(0,0%,100%,1) 100%);\n  background-origin: border-box;\n  border: 6px solid transparent;\n  border-radius: 50%;\n  box-shadow: inset -999px 0 0 #fff;\n  transform: translate(-8px, 55px);\n  animation: loading 1s linear infinite;\n}\n\n@keyframes loading {\n    0% { transform: translate(-11px, -11px) rotate(0deg); }\n  100% { transform: translate(-11px, -11px) rotate(360deg); }\n}\n  \n    \n  \n.loader2 {\n  width: 50px;\n  height: 51px;\n  border: 8px solid;\n  border-top-color: hsl(154,100%,31%);\n  border-left-color: hsl(216,87%,52%);\n  border-bottom-color: hsl(8,66%,50%);\n  border-right-color: hsl(42,100%,51%);\n  border-radius: 50%;\n  transform: rotate(45deg);\n  margin: 30px auto;\n}\n.loader2 .p {\n  display: inline-block;\n  width: 57px;\n  height: 57px;\n  background: linear-gradient(90deg, hsla(212,67%,36%,0) 0%,\n                                         hsla(207,69%,51%,0) 76%,\n                                         hsla(0,0%,100%,1) 85%,\n                                         hsla(0,0%,100%,1) 100%);\n  background-origin: border-box;\n  border: 6px solid transparent;\n  border-radius: 50%;\n  box-shadow: inset -999px 0 0 #fff;\n  transform: translate(-8px, 55px);\n  animation: loading 1s linear infinite;\n}\n\n@keyframes loading {\n    0% { transform: translate(-11px, -11px) rotate(0deg); }\n  100% { transform: translate(-11px, -11px) rotate(360deg); }\n}\n\n\n  \n    \n  \n\n.loader3 {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  background: #e67e22;\n  display: block;\n  margin: 10px auto;\n  /* position: absolute; */\n  left: 50%;\n  animation: spin 2s ease infinite;\n}\n.loader3:before, .loader3:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: inherit;\n  width: inherit;\n  background: inherit;\n  border-radius: inherit;\n  animation: spin 2s ease infinite;\n}\n.loader3:before {\n  left: -30px;\n}\n.loader3:after {\n  left: 30px;\n}\n@keyframes spin {\n  0% {\n    top: 0;\n    transform: rotate(0deg);\n  }\n  50% {\n    top: -30px;\n    transform: rotate(-180deg);\n  }\n  100% {\n    top: 0;\n    transform: rotate(-360deg);\n  }\n}\n  \n.loader3 {\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  background: #e67e22;\n  display: block;\n  margin: 10px auto;\n  /* position: absolute; */\n  left: 50%;\n  animation: spin 2s ease infinite;\n}\n.loader3:before, .loader3:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: inherit;\n  width: inherit;\n  background: inherit;\n  border-radius: inherit;\n  animation: spin 2s ease infinite;\n}\n.loader3:before {\n  left: -30px;\n}\n.loader3:after {\n  left: 30px;\n}\n@keyframes spin {\n  0% {\n    top: 0;\n    transform: rotate(0deg);\n  }\n  50% {\n    top: -30px;\n    transform: rotate(-180deg);\n  }\n  100% {\n    top: 0;\n    transform: rotate(-360deg);\n  }\n}\n\n\n  \n\n",
      "url": "\\documents\\loading.html",
      "children": []
    },
    {
      "title": "贺卡效果",
      "content": ".card-contant {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 800px;\n  height: 400px;\n  background: #353b48;\n}\n.card {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 150px;\n  color: #fff;\n  background:#c23616;\n  transform-style: preserve-3d;\n  transform: perspective(900px) rotateX(45deg) rotateY(-5deg);\n}\n.card::before,\n.card::after,\n.hook {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  background: #e84118;\n  transition: 1s;\n  box-sizing: border-box;\n}\n.card::before {\n  content: \"中秋\";\n  left: 0;\n  top: 0;\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  transform-origin: left top;\n  border-right: 3px solid #c23616;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.card::after {\n  content: \"快乐\";\n  right: 0;\n  top: 0;\n  padding-left: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  transform-origin: right top;\n  border-left: 3px solid #c23616;\n  backface-visibility: hidden;\n}\n\n.card:hover::before {\n  transform: rotateY(-145deg);\n}\n.card:hover::after {\n  transform: rotateY(145deg);\n}\n.card:hover .hook:nth-of-type(1) {\n  transform: rotateY(-145deg);\n}\n.card:hover .hook:nth-of-type(2) {\n  transform: rotateY(145deg);\n}\n\n.card .hook:nth-of-type(1) {\n  left: 0;\n  top: 0;\n  transform-origin: left top;\n}\n.card .hook:nth-of-type(2) {\n  right: 0;\n  top: 0;\n  transform-origin: right top;\n}\n  \n    imondo.cn\n    \n    \n  \n直接上代码  \n    imondo.cn\n    \n    \n  \n\n.card-contant {  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 800px;\n  height: 400px;\n  background: #353b48;\n}\n.card {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 150px;\n  color: #fff;\n  background:#c23616;\n  transform-style: preserve-3d;\n  transform: perspective(900px) rotateX(45deg) rotateY(-5deg);\n}\n.card::before,\n.card::after,\n.hook {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  background: #e84118;\n  transition: 1s;\n  box-sizing: border-box;\n}\n.card::before {\n  content: \"中秋\";\n  left: 0;\n  top: 0;\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  transform-origin: left top;\n  border-right: 3px solid #c23616;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.card::after {\n  content: \"快乐\";\n  right: 0;\n  top: 0;\n  padding-left: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  transform-origin: right top;\n  border-left: 3px solid #c23616;\n  backface-visibility: hidden;\n}\n\n.card:hover::before {\n  transform: rotateY(-145deg);\n}\n.card:hover::after {\n  transform: rotateY(145deg);\n}\n.card:hover .hook:nth-of-type(1) {\n  transform: rotateY(-145deg);\n}\n.card:hover .hook:nth-of-type(2) {\n  transform: rotateY(145deg);\n}\n\n.card .hook:nth-of-type(1) {\n  left: 0;\n  top: 0;\n  transform-origin: left top;\n}\n.card .hook:nth-of-type(2) {\n  right: 0;\n  top: 0;\n  transform-origin: right top;\n}\n",
      "url": "\\documents\\hecard.html",
      "children": []
    }
  ]
}