export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  runtimeConfig: {
    VrcdServerSideLogging: {
      enabled: true,
      postLogEnabled: false,
    },
  },

  compatibilityDate: '2024-07-23',
})
