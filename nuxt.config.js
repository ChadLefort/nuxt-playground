export default {
  head: {
    title: 'give-us-space',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: ['~/plugins/bootstrap.ts', '~plugins/apollo.ts'],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    'nuxt-typed-vuex'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ]
  ],
  axios: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.spacex.land/graphql'
      }
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  // vite: { ssr: true },
  build: {
    transpile: ['@vue/apollo-composable']
  },
  generate: {
    interval: 2000
  }
};
