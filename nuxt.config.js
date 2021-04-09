export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  components: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ポートフォリオ | マキタ ナオキ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'マキタナオキのポートフォリオサイトです。webページなどの個人製作を行っています。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'マキタ ナオキ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'ポートフォリオ | マキタ ナオキ' },
      { hid: 'og:description', property: 'og:description', content: 'マキタナオキのポートフォリオサイトです。webページなどの個人製作を行っています。' },
      { hid: 'og:url', property: 'og:url', content: 'https://portfolio.klavier.page' },
      { hid: 'og:image', property: 'og:image', content: '/naoki_makita_og.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@miraxial' }
    ],
    link: [
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.3.1/gridlex.min.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://portfolio.klavier.page' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      'Kelly+Slab': true,
    },
    display: 'swap'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: '-',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://portfolio.klavier.page/'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/index.vue')
      })
    }
 },
}