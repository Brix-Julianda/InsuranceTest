import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: '26.176.77.124',  // Ensure this matches your IP
        port: 5173,
        strictPort: true,
        hmr: {
            protocol: 'ws',
            host: '26.176.77.124',
        },
        cors: true,  // Enable CORS
    },
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
    ],
});
