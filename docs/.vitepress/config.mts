import { defineConfig } from "vitepress"
import { SearchPlugin } from "vitepress-plugin-search"
import flexSearchIndexOptions from "flexsearch"
import { set_sidebar } from "./plugins/sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "中国法律速查手册",
  // URL中删除 .html
  //   cleanUrls: true,
  // 上次更新时间
  lastUpdated: false,
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: "deep", // 右侧大纲标题层级
      label: "目录", // 右侧大纲标题文本配置
    },
    // 侧边栏
    sidebar: {
      "/": set_sidebar(),
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "上次更新",
    },
  },
  vite: {
    plugins: [
      SearchPlugin({
        ...flexSearchIndexOptions,
        previewLength: 62, // 搜索结果预览文本长度
        buttonLabel: "搜索", // 搜索按钮文本
        placeholder: "搜索文档", // 搜索框占位符
        tokenize: "full", // 搜索词分词方式
        allow: [], // 允许搜索的文件类型
        ignore: [], // 忽略搜索的文件类型
      }),
    ],
  },
})
