// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "normalize.css",
    "./assets/global.scss",
    "@/assets/ico-font/iconfont.css",
  ],
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  app: {
    // 所有页面的head添加seo优化
    head: {
      title: "oppo手机商城",
      meta: [
        {
          name: "description",
          content: "oppo 官方商城",
        },
        {
          name: "keywords",
          content: "oppo 商城,oppo手机",
        },
        {
          name: "viewport",
          content: "width==device-width,initial-scale=1",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      noscript: [{ children: "JavaScript is required" }],
    },
  },
  build: {
    // babel转义
    transpile: ["element-plus/es"],
  },
  vite: {
    plugins: [ElementPlus({})],
  },
});
