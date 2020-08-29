module.exports = {
  title: "Hello VuePress",
  head: [
    // 注入到当前页面的HTML <head> 中的标签
    ["link", { rel: "icon", href: "/1.png" }], // 增加一个自定义的网页标签图标
  ],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "vue", link: "/" },
      { text: "css", link: "/blog/" },
      { text: "js", link: "/zhihu/" },
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
    sidebar: ["/", "/git", "/vue"],
  },
  //   description: "Just playing around",
};
