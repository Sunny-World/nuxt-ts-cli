export default {
  env: {},
  head: {
    title: "ts-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  plugins: [
    { src: '~plugins/iview', ssr: true }
  ],
  server: {
    port: 3000, // default: 3000
    host: '192.168.96.98', // default: localhost
  },
  modules: [
    '@nuxtjs/proxy'
  ],
  axios: {},
  proxy: {
    '/api': {
      target: 'http://192.168.100.206:9080/app/mock/83',
      // pathRewrite: {
      //   '^/api': '/'
      // }
    }
  }
}
