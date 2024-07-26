// import { readFile } from 'fs/promises'
// import path from 'node:path'
// import postcss from 'postcss'
// import postcssModules from 'postcss-modules'
import { Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
  // treeshake: true, // https://github.com/egoist/tsup/issues/835
  // splitting: true,
  entry: ['src/index.tsx'],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react', 'react-dom', '@mui/material', /^@emotion/, 'next'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
  ...options,
}))
