// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  css: ["assets/global.scss"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "~/assets/_variables.scss";',
  //       },
  //     },
  //   },
  // },
  devtools: { enabled: true },
  appConfig: {
    title: "hello nuxt",
    theme: {
      dark: true,
      colors: {
        primary: "#f00",
      },
    },
  },
  // ssr: false,
  imports: {
    dirs: [
      // 扫描顶层目录中模块
      "composables",
      // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
      "composables/*/index.{ts,js,mjs,mts}",
      // 扫描给定目录中所有模块
      "composables/**",
      "store",
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@huntersofbook/naive-ui-nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
  ],
  // 配置seo相关信息
  app: {
    head: {
      title: '技术空间',
      meta: [
        {name: 'description', content: "前端分享"},
        {name: 'keywords', content: "nuxt,vue,ts,frontend"},
      ]
    }
  }
});
