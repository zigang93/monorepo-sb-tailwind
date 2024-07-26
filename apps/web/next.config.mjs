import path from 'node:path'

const __dirname = process.cwd()



/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {

  reactStrictMode: true,
  transpilePackages: [
    'ui',
  ],
  pageExtensions: [
    'page.md',
    'page.mdx',
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.ts',
  ],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    optimizePackageImports: [
      'ui',
    ],
  },
}

export default nextConfig
