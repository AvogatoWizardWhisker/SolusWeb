const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{razor,html,cshtml,css}"],
    theme: {
        extend: {
            colors: {
                primary: colors.emerald
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}