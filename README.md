# 桂电校招小程序

- vscode 配置文件
- - extensions.json 会建议下载prettier格式化插件
- common 公共代码目录
- - hook 公共hook
- - style 全局样式
- - keys.ts 持久化的key
- - navigate.ts 页面导航相关
- - utils.ts 工具函数
- components 自定义组件目录
- doc 文档
- pages 页面
- service 服务接口相关
- - base.ts 封装了请求接口的 HttpRequest
- - 实例化HttpRequest
- static 静态资源
- store 全局状态管理
- typings 全局类型
- uni_modules 插件相关
- .prettierrc 代码格式化配置
- App.vue 应用根组件
- index.html 使用构建工具vite必须的
- mani.js 入口文件
- ...
## 开发须知
 - 尽量不使用图片，使用字体图标，控制包大小，以免小程序需要分包
 - 类型定义和接口代码可复用到pc端
 - 需要执行 npm install 下载 uniapp类型定义文件，以给编辑器更多的类型提示
 - 使用vscode的请安装 prettier 格式化插件



作者：严厚荣

联系方式：[18174102647]

日期：2023-07-22

有问题，可以与我联系。
