// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtseo/module",
    "@nuxtjs/i18n",
    "@nuxt/devtools",
  ],
  site: {
    name: 'Config value',
  },
  schemaOrg: {
    identity: "Organization",
  },
  i18n: {
    defaultLocale: "en",
    baseUrl: "http://localhost:3000",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en/en.json",
      },
      {
        name: "Deutsch",
        code: "de",
        iso: "de-DE",
        file: "de/de.json",
      }
    ],
    langDir: "locales",
    strategy: "prefix_except_default",
  },
})
