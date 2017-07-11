module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js HackerNews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#59cc93' },
  /*
  ** Build configuration
  */
  manifest: {
    name: 'Nuxt Hacker News',
    description: 'HackerNews clone built with Nuxt.js',
    theme_color: '#ff6600'
  },
  build: {
    /*
    ** Run ESLINT on save and create-api
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias['create-api'] = `./create-api-${ctx.isClient ? 'client' : 'server'}.js`
    }
  },
  /* Plugins */
  plugins: [
    '~plugins/vuex-router-sync.js',
    '~plugins/utils.js',
    { src: '~plugins/beforeRouteUpdate.js', ssr: false }
  ],
  /* modules */
  modules: [
    '@nuxtjs/component-cache',
    '@nuxtjs/pwa'
  ],
  render: {
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  }
}
