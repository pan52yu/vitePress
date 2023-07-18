import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    // 标题
    title: "evan-sky",
    // 描述
    description: "A VitePress Site",
    // URL中删除 .html
    cleanUrls: true,
    // 上次更新时间
    lastUpdated: true,
    // 主题配置
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/examples/markdown-examples'},
            {text: '插件', link: '/plugin/videoPlayer'},
        ],

        sidebar: {
            "/examples/": [
                {
                    text: 'Examples',
                    items:
                        [
                            {text: 'Markdown Examples', link: '/examples/markdown-examples'},
                            {text: 'Runtime API Examples', link: '/examples/api-examples'}
                        ]
                }
            ],
            "/plugin/": [{
                text: '插件',
                items: [
                    {
                        text: 'videoPlayer',
                        link: '/plugin/videoPlayer'
                    }
                ]
            }]

        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/pan52yu'}
        ],

        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/pan52yu">Evan Sky</a>'
        }
    }
})
