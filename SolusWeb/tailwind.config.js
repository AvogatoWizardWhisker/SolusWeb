const colors = require('tailwindcss/colors');

module.exports = {
    content:
        [
            './**/*.razor',
            './wwwroot/index.html',
            './wwwroot/**/*.css',
        ],
    theme: {
        extend: {
            colors: {
                primary: colors.emerald
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}