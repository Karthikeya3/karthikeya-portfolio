/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — no server routes, so it can live on GitHub Pages,
  // Vercel, or any static host. The resume PDF ships in /public.
  output: "export",
  // GitHub Pages serves this repo under https://<user>.github.io/karthikeya-portfolio/
  // Without these, Next.js emits /_next/... absolute paths that 404 on the subpath.
  basePath: "/karthikeya-portfolio",
  assetPrefix: "/karthikeya-portfolio/",
};

export default nextConfig;
