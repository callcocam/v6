import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        },
    },
    build_path:'public/assets',
    plugins: [
        laravel({
            // buildDirectory: 'bundle',
            input: [
                'resources/css/app.css',
                'resources/js/app.js'
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
            ],
        }),
    ],
});
