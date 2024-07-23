import { defineNuxtModule, addServerHandler, createResolver } from '@nuxt/kit'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vrcd-server-side-logging',
    configKey: 'VrcdServerSideLogging',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addServerHandler({
      handler: resolver.resolve('runtime/server/middleware/logger'),
    })
  },
})
