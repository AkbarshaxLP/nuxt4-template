// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    'nuxt-svgo',
    '@formkit/auto-animate',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/styles/main.scss'],
  ssr: false,
  devServer: {
    host: '*.*.*.*'
  },
  svgo: {
    componentPrefix: 'icon',
    autoImportPath: './assets/icons/',
    defaultImport: 'component',
    svgoConfig: {
      multipass: false, // Отключаем многоходовую оптимизацию
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // Отключаем ВСЕ плагины оптимизации
              removeDoctype: false,
              removeXMLProcInst: false,
              removeComments: false,
              removeMetadata: false,
              removeEditorsNSData: false,
              cleanupIds: false,
              convertColors: false,
              convertPathData: false,
              convertTransform: false,
              removeUnknownsAndDefaults: false,
              removeNonInheritableGroupAttrs: false,
              removeUselessStrokeAndFill: false,
              removeUnusedNS: false,
              cleanupNumericValues: false,
              moveElemsAttrsToGroup: false,
              moveGroupAttrsToElems: false,
              collapseGroups: false,
              mergePaths: false,
              convertShapeToPath: false,
              sortAttrs: false,
              removeTitle: false,
              removeDesc: false,
              removeEmptyContainers: false,
              removeViewBox: false,
              cleanupEnableBackground: false,
              removeHiddenElems: false,
              removeEmptyText: false,
              inlineStyles: false,
              minifyStyles: false
            }
          }
        }
      ]
    }
  },
  pinia: {
    storesDirs: ['./app/store/**'],
  },
})