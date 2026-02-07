import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/index.jsx',
      name: 'stas-modal-window',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'ws', 'ethers', '@reown/appkit/networks']
    }
  },
  optimizeDeps: {
    exclude: ['ws'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env._NODE_ENV),
    'process.env.PROMISE_QUEUE_COVERAGE': JSON.stringify(false)
  }
})