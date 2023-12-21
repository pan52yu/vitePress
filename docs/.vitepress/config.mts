import { defineConfig } from "vitepress"
import { SearchPlugin } from "vitepress-plugin-search"
import flexSearchIndexOptions from "flexsearch"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "法典",
  // URL中删除 .html
  cleanUrls: true,
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
      "/": [
        {
          text: "中华人民共和国宪法",
          link: "/legal/Constitution",
        },
      ],
      "/legal/Constitution": [
        {
          text: "中华人民共和国宪法",
          items: [
            {
              text: "序言",
              link: "/legal/Constitution#序言",
            },
            {
              text: "第一章 总纲",
              link: "/legal/Constitution#第一章-总纲",
            },
            {
              text: "第二章 公民的基本权利和义务",
              link: "/legal/Constitution#第二章-公民的基本权利和义务",
            },
            {
              text: "第三章 国家机构",
              link: "/legal/Constitution#第三章-国家机构",
              items: [
                {
                  text: "第一节 全国人民代表大会",
                  link: "/legal/Constitution#第一节-全国人民代表大会",
                },
                {
                  text: "第二节 中华人民共和国主席",
                  link: "/legal/Constitution#第二节-中华人民共和国主席",
                },
                {
                  text: "第三节 国务院",
                  link: "/legal/Constitution#第三节-国务院",
                },
                {
                  text: "第四节 中央军事委员会",
                  link: "/legal/Constitution#第四节-中央军事委员会",
                },
                {
                  text: "第五节 地方各级人民代表大会和地方各级人民政府",
                  link: "/legal/Constitution#第五节-地方各级人民代表大会和地方各级人民政府",
                },
                {
                  text: "第六节 民族自治地方的自治机关",
                  link: "/legal/Constitution#第六节-民族自治地方的自治机关",
                },
                {
                  text: "第七节 监察委员会",
                  link: "/legal/Constitution#第七节-监察委员会",
                },
                {
                  text: "第八节 人民法院和人民检察院",
                  link: "/legal/Constitution#第八节-人民法院和人民检察院",
                },
              ],
            },
            {
              text: "第四章 国旗、国歌、国徽、首都",
              link: "/legal/Constitution#第四章-国旗国歌国徽首都",
            },
          ],
        },
      ],
      "/guide/": [
        {
          text: "指南",
          items: [
            {
              text: "快速上手",
              link: "/guide/start",
            },
          ],
        },
      ],
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
