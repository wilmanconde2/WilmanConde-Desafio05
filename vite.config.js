import { resolve } from 'node:path'
export default {
    server: {
        port: 5555
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariokart: resolve('./pages/mariokart.html'),
                mortalkombat: resolve('./pages/mortalkombat.html'),
                index: resolve('index.html')
            }
        }
    }
}