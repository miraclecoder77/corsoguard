import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Canonical host. The apex previously served a 200 with identical content,
      // so Google indexed some URLs on corsoguard.com and others on
      // www.corsoguard.com, splitting the signals between two hostnames.
      // NOTE: also set www as the primary domain in the Vercel dashboard — that
      // handles the redirect at the edge, and this rule is the in-app backstop.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'corsoguard.com' }],
        destination: 'https://www.corsoguard.com/:path*',
        permanent: true,
      },
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
