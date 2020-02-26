const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading:  '~/components/loading.vue',
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter () {
      console.log('Before enter...')
    }
  },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/main.css",'bulma/css/bulma.css',
  '@/css/style.css'],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui",
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/proxyApi': {
      target: 'http://localhost:3003',
      pathRewrite: {
        '^/proxyApi' : ''
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: ['visits', 'user-agent'],
    extendRoutes(routes, resolve) {
      const index = routes.findIndex(route => route.name === "main")
      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          top: resolve(__dirname, "components/mainTop.vue")
        },
        chunkNames: {
          top: "components/mainTop"
        }
      }
    }
  },
  generate: {
    fallback: true, // if you want to use '404.html'
    // fallback: "my-fallback/file.html" // if your hosting needs a custom location
  },
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
  // body-parser middleware
  bodyParser.json(),
  // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
  // Api middleware
  // We add /api/login & /api/logout routes
  '~/api'
  ],
  hooks: {
    build: {
      done () {
        console.log('hooks-build-done')
        
      }
    }
  }
}
