import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  redirects: async () => [
    { source: '/store', destination: 'https://reverb.com/shop/kwahzee', permanent: false },
    { source: '/video', destination: 'https://www.youtube.com/@kwahzee', permanent: false },
  ],
};

export default nextConfig;
