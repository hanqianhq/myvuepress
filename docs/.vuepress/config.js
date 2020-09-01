module.exports = {
  base: "/myvuepress/",
  title: "Hello VuePress",
  head: [
    // 注入到当前页面的HTML <head> 中的标签
    ["link", { rel: "icon", href: "/1.png" }], // 增加一个自定义的网页标签图标
  ],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "html", link: "/" },
      { text: "css", link: "/css/css" },
      { text: "javascript", link: "/javascript/javascript" },
      { text: "vue", link: "/vue/vue" },
      { text: "浏览器", link: "/browser/browser" },
      {
        text: "github",
        // 这里是下拉列表展现形式。
        items: [
          {
            text: "focus-outside",
            link: "https://github.com/txs1992/focus-outside",
          },
          {
            text: "stylus-converter",
            link: "https://github.com/txs1992/stylus-converter",
          },
        ],
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
        '/vue/':['vue'],
        '/browser/':['browser'],
        '/question/':['question'],
        '/css/':['css'],
        '/javascript/':['javascript'],
        '/':['/']
        // auto
    },
    // sidebar:'auto',
    sidebarDepth:2
  },
  //   description: "Just playing around",
};
