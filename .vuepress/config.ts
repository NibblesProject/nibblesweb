import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "Nibbles Blog",
  description: "Just a backup static source blog.",
  bundler: viteBundler(),
  // bundler: webpackBundler(),

  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Nibbles",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/NibblesProject",
    docsBranch: "main",
    docsDir: "./docs",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/": [
        {
          text: "None.",
          children: ["home", "theme"],
        },
      ],
    },
    navbar: [
      { text: "Posts", link: "/posts.html", icon: 'Blog' },
      { text: "Friends", link: "/friendship-link.html", icon: 'Friendship'},
      {
        text: 'Circle',
        icon: 'SubVolume',
        children: [
          { text: '开往Travelling', link: 'https://www.travellings.cn/go.html' },
          { text: '博友圈', link: 'https://www.boyouquan.com/planet-shuttle'},
        ],
      },

    ],
    // 自动设置系列
    autoSetSeries: true,
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 0, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
    autoAddCategoryToNavbar: true,

    friendshipLinks: [
      {
        title: 'vuepress-reco',
        logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
        link: 'https://github.com/vuepress-reco'
      }
    ],

    // commentConfig: {
    //   type: 'waline',
    //   options: {
    //     serverURL: 'https://waline-1-e6658927.deta.app/',
    //         hideComments: false, // 全局隐藏评论，默认 false
    //       },
    //   },

    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 Nibbles Blog静态站建立！理论上应该会是永久的在的~ 与主站保持同步更新！`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "联系博主",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>Email: <a href="mailto:nibblescn@qq.com">nibblescn@qq.com</a></li>
            <li>微信号: Nibbles_CN</li>
            <li>QQ: 2704546852</li>
            <li>Github: <a href="https://github.com/NibblesProject">@NibblesProject</a></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "旗下站点",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://nibbles.cn"><strong>主站 | Nibbles Blog [已备案]</strong></a></li>
          </ul>`,
          style: "font-size: 12px;",
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});


