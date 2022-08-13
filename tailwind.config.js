/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    prefix: 'tw-',
    corePlugins: {
        preflight: false,
    },
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        fontFamily: {
            poppins: ['Poppins', defaultConfig.theme.fontFamily.sans],
            oxanium: ['Oxanium', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            colors: {
                'beta-500': 'var(--colors-beta-500)',
            },
            boxShadow: {
                base: ' 4px 4px 16px rgba(0, 0, 0, 0.5);',
            },
            screens: {
                xs: '388px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
}
