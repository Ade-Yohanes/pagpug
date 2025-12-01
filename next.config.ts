import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */

  // 1. Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // 2. Compression & Performance
  compress: true,
  poweredByHeader: false,

  // 3. Security Headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Security
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // SEO
          {
            key: "Content-Language",
            value: "en-US",
          },

          // Cache Control
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },

      // Sitemap cache
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },

      // Robots.txt cache
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },

      // Static assets cache
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // API cache
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },

  // 4. Redirects untuk SEO
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pagpug.com",
          },
        ],
        destination: "https://pagpug.com/:path*",
        permanent: true,
      },

      // Old pages redirect
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },

  // 5. Rewrites untuk internal routing
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
        },
      ],
    };
  },

  // 6. Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://pagpug.com",
  },

  // 7. React strict mode untuk development
  reactStrictMode: true,

  // 8. Production source maps untuk debugging
  productionBrowserSourceMaps: false,

  // 9. SWC minification (faster)
  swcMinify: true,

  // 10. Experimental features
  experimental: {
    // Enable optimized font loading
    optimizePackageImports: ["@/components"],
  },
};

export default nextConfig;
