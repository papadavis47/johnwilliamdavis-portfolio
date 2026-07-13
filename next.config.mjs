/** @type {import('next').NextConfig} */
const nextConfig = {
  // The per-slug OG image route renders on demand, so its woff files must be
  // traced into the function bundle on Vercel. The readFile(process.cwd())
  // pattern is usually traced automatically; this pins it explicitly.
  outputFileTracingIncludes: {
    '/projects/[slug]/opengraph-image': ['./src/design-system/og/fonts/*'],
  },
}

export default nextConfig
