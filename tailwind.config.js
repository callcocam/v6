const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [
        // require('./vendor/callcocam/tall-cms/tailwind.config'),
        // require('./vendor/callcocam/tall-acl/tailwind.config'),
        // require('./vendor/callcocam/tall-table/tailwind.config'),
        // require('./vendor/callcocam/tall-orm/tailwind.config'),
        // require('./vendor/callcocam/tall-form/tailwind.config'),
        require('./vendor/callcocam/tall-theme/tailwind.config'),
    ],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './vendor/callcocam/**/resources/views/*.php',
        './resources/views/**/*.blade.php'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};