// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

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
    'shadcn-nuxt',
  ],
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/main.scss'],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
  devServer: {
    host: '*.*.*.*',
  },
  components: {
    dirs: [
      {
        path: '~/components/common',
        pathPrefix: true,
      },
      {
        path: '~/components/ui',
        pathPrefix: true,
      },
      {
        path: '~/components',
        pathPrefix: true,
      },
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
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
              minifyStyles: false,
            },
          },
        },
      ],
    },
  },
  pinia: {
    storesDirs: ['./app/store/**'],
  },
})
