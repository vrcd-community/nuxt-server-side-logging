export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  runtimeConfig: {
    vrcdServerSideLogging: {
      enabled: true,
      postLogEnabled: false,
    },
  },

  compatibilityDate: '2024-07-23',
})
