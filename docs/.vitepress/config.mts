import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    // 标题
    title: "Sky Admin Doc",
    // 描述
    description: "后台管理系统模版",
    // URL中删除 .html
    cleanUrls: true,
    // 上次更新时间
    lastUpdated: true,
    // 主题配置
    themeConfig: {
        logo: "/sky.png",
        outline: 2,
        // https://vitepress.dev/reference/default-theme-config
        // 顶部导航
        nav: [
            {
                text: '指南',
                items: [
                    {
                        text: "快速上手",
                        link: '/guide/start'
                    }
                ]
            },
            {text: '插件', link: '/plugin/'},
            {text: "extensions", link: '/extensions/'},
        ],
        // 侧边栏
        sidebar: {
            "/guide/": [
                {
                    text: '指南',
                    items: [
                        {
                            text: "快速上手",
                            link: '/guide/start'
                        },
                        {
                            text: ".vscode文件夹详解",
                            link: '/guide/vscode'
                        }
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
            }],
            "/extensions/": [{
                text: 'extensions',
                items: [
                    {
                        text: "index",
                        link: '/extensions/'
                    },
                    {
                        text: "api",
                        link: '/extensions/api-examples'
                    },
                    {
                        text: "markdown",
                        link: '/extensions/markdown-examples'
                    }
                ]
            }]

        },
        // 仓库地址
        socialLinks: [
            {icon: 'github', link: 'https://github.com/pan52yu/vue-sky-admin'}
        ],
        // 页脚
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/pan52yu/vue-sky-admin">Evan Sky</a>'
        },
        // 搜索配置
        search: {
            provider: 'local'
        },
    },
    // markdown 配置
    markdown: {
        // 代码块显示行号
        lineNumbers: true
    }
})
