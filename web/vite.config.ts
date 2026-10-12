import type { UserConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

const modern = 'es2022' as const
const RUNTIME_WASM_PKG = '@midnightntwrk/onchain-runtime-v4'

export default {
  base: './',
  plugins: [wasm()],
  esbuild: { target: modern },
  optimizeDeps: { exclude: [RUNTIME_WASM_PKG], esbuildOptions: { target: modern } },
  build: { target: modern, outDir: '../dist', emptyOutDir: true },
  server: { fs: { allow: ['..'] } }, // manifest UI imports ../contract
} satisfies UserConfig
