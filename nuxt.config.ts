// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  routeRules: {'/': {redirect: '/en-CA'}},
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],
  i18n: {
    vueI18n: './config/i18n.config.ts',
    locales: [
      {  name: 'English',code: 'en-CA', dir: 'ltr', file: 'en-CA.json'},
      {name: 'العربية' ,code: 'ar-EG', dir: 'rtl', file: 'ar-EG.json'}
    ],
    lazy: true,
    strategy: 'prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    langDir: 'lang'
  }
})