import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    compression({ algorithm: "gzip", exclude: [/\.(br)$ /, /\.(gz)$/] }),
    compression({ algorithm: "brotliCompress", exclude: [/\.(br)$ /, /\.(gz)$/] }),
  ],
  assetsInclude: ['**/*.MP4'],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          gsap: ['gsap'],
          framer: ['framer-motion'],
        },
      },
    },
  },
}));
