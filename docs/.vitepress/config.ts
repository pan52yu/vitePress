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
        // 顶部导航
        nav: [
            {text: 'Home', link: '/'},
            {text: '插件', link: '/plugin/'},
            {text: "extensions", link: '/extensions/'},
        ],
        // 侧边栏
        sidebar: {
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
        // 仓库地址
        socialLinks: [
            {icon: 'github', link: 'https://github.com/pan52yu'}
        ],
        // 页脚
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/pan52yu">Evan Sky</a>'
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
