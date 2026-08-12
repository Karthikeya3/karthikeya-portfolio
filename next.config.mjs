/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — no server routes, so it can live on GitHub Pages,
  // Vercel, or any static host. The resume PDF ships in /public.
  output: "export",
};

export default nextConfig;
