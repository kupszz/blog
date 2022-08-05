import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'rs7.top',
    description: 'kupss的站点',
})

const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    theme: defaultTheme({
        logo: '/images/扇子.png',
        navbar: [
            {
                text: 'Blog',
                children: [
                    {
                        text: 'Java',
                        children: ['/java/aa.md'],
                    },
                    {
                        text: 'Linux',
                        children: ['/linux/bb.md'],
                    }
                ],
            },
            {
                text: '语雀',
                link: 'https://www.yuque.com/kups'
            }
        ],
        //   repo:"kupszz",
        notFound: ["您试图离开主世界", "请勿靠近围栏", "非法闯入", "前方危险⚠️"],
        backToHome: "返回主世界"
    }),
}

const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')

module.exports = {
  plugins: [
    backToTopPlugin(),
  ],
}

const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],
}
