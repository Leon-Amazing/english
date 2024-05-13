module.exports = {
  // 站点配置
  base: "/English/",
  lang: "zh-CN",
  title: "English",
  description: "Leon's library",
  head: [["link", { rel: "icon", href: "logo.png" }]],

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "logo.png",
    // 导航
    navbar: [
      {
        text: "NEW CONCEPT ENGLISH",
        link: "/English/new-concept-english.md",
      },
      {
        text: "WORDS",
        link: "/English/words.md",
      },
    ],
  },

  // plugins
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
