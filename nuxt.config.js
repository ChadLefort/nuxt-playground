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
  plugins: [
    { src: '~/plugins/bootstrap.ts', mode: 'client' },
    '~plugins/apollo.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    'nuxt-typed-vuex'
  ],
  modules: [
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
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.ts'
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  build: {
    analyze: true,
    transpile: ['@vue/apollo-composable']
  },
  generate: {
    interval: 2000
  }
};
