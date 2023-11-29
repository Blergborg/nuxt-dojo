// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // This is where we can extend or change the default configuration.
  // Can also store environment variables like api keys here.
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // Can control head content here (meta tags, links to stylesheets, etc.)
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {name: 'description', content: 'everything about Nuxt3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    // api keys listed here will be available to server routes while running.
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})
