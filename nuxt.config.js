export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
          hid: 'keywords',
          name: 'keywords',
          content: 'digial,algebra,boolean,boleana',
      },
      {
          hid: 'description',
          name: 'description',
          content: 'Principios de alebra booleana y electrónica digital',
      },
      {
          hid: 'og:title',
          property: 'og:title',
          content: 'Digital',
      },
      {
          hid: 'og:description',
          property: 'og:description',
          content: 'Principios de alebra booleana y electrónica digital',
      },
      {
          hid: 'og:image',
          property: 'og:image',
          content: '../assets/imgs/digital-bg.jpg',
      },
      {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '300',
      },
      {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '300',
      },
      {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  buildModules: ['@nuxtjs/tailwindcss'],
};
