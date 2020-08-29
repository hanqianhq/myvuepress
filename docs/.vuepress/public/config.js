module.exports = {
  title: "Hello VuePress",
  head: [
    // 注入到当前页面的HTML <head> 中的标签
    ["link", { rel: "icon", href: "/1.png" }], // 增加一个自定义的网页标签图标
  ],
  themeConfig: {
    logo: "/2.png", // 左上角的logo
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
    //   { text: "技术首页", link: "tech/interview" },
      { text: "文档主页", link: "https://www.baidu.com" },
    ],
    sidebar: "auto", // 侧边栏配置
  },
  //   description: "Just playing around",
};
