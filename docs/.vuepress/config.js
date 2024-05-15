module.exports = {
  // 站点配置
  base: '/english/',
  lang: 'zh-CN',
  title: 'ENGLISH',
  description: "Leon's library",
  head: [['link', { rel: 'icon', href: 'logo.png' }]],

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'logo.png',
    // 导航
    navbar: [
      {
        text: 'WORDS',
        link: '/words.md',
      },
      {
        text: 'NEW CONCEPT',
        link: '/new-concept.md',
      },
      {
        text: 'IELTS',
        link: '/IELTS.md',
      },
    ],
  },

  // plugins
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
};
