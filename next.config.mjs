/** @type {import('next').NextConfig} */
const nextConfig = {
  // 16.3+ `next dev` otherwise injects a managed <!-- BEGIN:nextjs-agent-rules -->
  // block into AGENTS.md on every run. AGENTS.md here is hand-curated and the
  // block reappears as an uncommitted diff each time, so opt out.
  agentRules: false,

  // The per-slug OG image route renders on demand, so its woff files must be
  // traced into the function bundle on Vercel. The readFile(process.cwd())
  // pattern is usually traced automatically; this pins it explicitly.
  outputFileTracingIncludes: {
    '/projects/[slug]/opengraph-image': ['./src/design-system/og/fonts/*'],
  },
}

export default nextConfig
