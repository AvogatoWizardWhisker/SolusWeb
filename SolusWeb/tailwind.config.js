import colors from 'tailwindcss/colors';
export const content = [
    './**/*.razor',
    './wwwroot/index.html',
    './wwwroot/**/*.css',
];
export const theme = {
    extend: {},
};
export const plugins = [
    require('daisyui'),
];