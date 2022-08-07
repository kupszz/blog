import { defineUserConfig } from 'vuepress'

const { defaultTheme } = require('@vuepress/theme-default')

// 系统默认配置
export default defineUserConfig({
  lang: 'zh-CN',
  description: 'kupss的站点',
})

module.exports = {
// base: "/blog/",
  title: 'rs7.top',
  description: "my doce",
  plugins: [
  ],
  theme: defaultTheme({
    logo: "/images/扇子.png",
    navbar: [
      {
        text: 'Blog',
        children: [
          {
            text: 'Java',
            link: '/java/about.md'
          },
          {
            text: 'Linux',
            children:
              [
                '/linux/常用命令.md',
                '/linux/about.md',
              ],
          }
        ],
      },
      {
        text: 'About',
        link: "/system/about.md",
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/kups'
      }
    ],
    sidebar: {
      '/java/': [
        {
          text: 'Java',
          children: [
            {
              text: '总览',
              collapsible: true,
              link: '/java/about.md'
            },
            {
              text: '代码片段',
              collapsible: true,
              children: [
                '/java/code/倒计时.md',
                '/java/code/多线程.md',
                '/java/code/接口返回设计.md',
              ],
            },
            {
              text: 'SpringBoot',
              collapsible: true,
              children: [
                '/java/springboot/init.md'
              ],
            },],
        },
      ],
      '/linux/': [
        {
          text: 'Linux',
          children: [
            '/linux/常用命令.md',
            '/linux/about.md',
          ],

        },
      ],
    },
    notFound: ["您试图离开主世界", "请勿靠近围栏", "非法闯入", "前方危险⚠️", "临界点"],
    backToHome: "返回主世界",
    contributors: false,
    lastUpdated: true,
  }),
}
