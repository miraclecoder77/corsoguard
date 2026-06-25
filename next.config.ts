import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Consolidate cannibalised puppy-feeding article into master feeding chart
      {
        source: '/blog/how-much-to-feed-cane-corso-puppy',
        destination: '/blog/cane-corso-feeding-chart-by-age-weight',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
