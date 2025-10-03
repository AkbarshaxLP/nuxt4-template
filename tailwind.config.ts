// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        mobile: { max: '639px' }, // До 639px → мобильные
        tablet: { min: '640px', max: '1024px' }, // 640px - 1024px → планшеты
        'to-tablet': { max: '1024px' },
        desktop: '1025px', // 1025px и выше → десктоп
      },

      lineClamp: {
        2: '2', // Enable line-clamp for 2 lines
      },

      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },

      container: {
        center: true, // Центрирование контейнера
        padding: '1rem', // Отступы по умолчанию
        screens: {
          sm: '100%', // На малых экранах контейнер занимает всю ширину
          md: '100%', // На средних экранах контейнер занимает всю ширину
          lg: '1024px', // На больших экранах контейнер ограничен 1024px
          xl: '1256px', // На очень больших экранах контейнер ограничен 1280px
        },
      },
    },
  },
  plugins: [],
}
