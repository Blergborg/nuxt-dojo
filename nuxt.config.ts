// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // This is where we can extend or change the default configuration.
  // Can also store environment variables like api keys here.
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
