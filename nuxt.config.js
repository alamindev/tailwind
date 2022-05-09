import { defineNuxtConfig } from 'nuxt3'
 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      title: "Home Theater Proz",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  buildModules: ["@vueuse/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  colorMode: {
    preference: "system",
    fallback: "light",
    classPrefix: "",
    classSuffix: "",
  },
  build: {
    transpile: ["typeface-rubik"],
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
