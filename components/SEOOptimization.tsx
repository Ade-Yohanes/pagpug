'use client';

/**
 * SEO Optimization Component
 * Untuk meta tags, Open Graph, dan Twitter Card
 */

export function SEOOptimization() {
  return (
    <>
      {/* Primary Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* SEO Meta Tags */}
      <meta
        name="title"
        content="PAGPUG - Modern Landing Page | Web Development Platform"
      />
      <meta
        name="description"
        content="Build amazing digital experiences with PAGPUG. Fast, secure, and scalable web solutions for modern projects. Get started today!"
      />
      <meta
        name="keywords"
        content="web development, landing page, modern platform, responsive design, digital experiences, scalable solutions"
      />
      <meta name="author" content="PAGPUG Team" />
      <meta name="creator" content="PAGPUG" />
      <meta name="publisher" content="PAGPUG" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://pagpug.com" />
      
      {/* Alternate Links */}
      <link rel="alternate" hrefLang="en-US" href="https://pagpug.com/en" />
      <link rel="alternate" hrefLang="id-ID" href="https://pagpug.com/id" />
      <link rel="alternate" hrefLang="x-default" href="https://pagpug.com" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="PAGPUG" />
      <meta name="theme-color" content="#2563EB" />
      <meta name="msapplication-TileColor" content="#2563EB" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />

      {/* Social Media Meta Tags - Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pagpug.com" />
      <meta property="og:title" content="PAGPUG - Modern Landing Page | Web Development Platform" />
      <meta
        property="og:description"
        content="Build amazing digital experiences with PAGPUG. Fast, secure, and scalable web solutions."
      />
      <meta property="og:image" content="https://pagpug.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="PAGPUG - Modern Web Development Platform" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="PAGPUG" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://pagpug.com" />
      <meta name="twitter:title" content="PAGPUG - Modern Landing Page" />
      <meta
        name="twitter:description"
        content="Build amazing digital experiences with PAGPUG. Fast, secure, and scalable web solutions."
      />
      <meta name="twitter:image" content="https://pagpug.com/twitter-image.jpg" />
      <meta name="twitter:creator" content="@pagpug" />
      <meta name="twitter:site" content="@pagpug" />

      {/* LinkedIn Meta Tags */}
      <meta property="article:publisher" content="https://linkedin.com/company/pagpug" />

      {/* Facebook Pixel (Optional) */}
      {/* <meta property="fb:app_id" content="YOUR_FB_APP_ID" /> */}

      {/* Google Search Console */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

      {/* Bing Webmaster */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

      {/* Additional SEO Tags */}
      <meta name="application-name" content="PAGPUG" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* Preconnect untuk performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://cdn.example.com" />
      <link rel="prefetch" href="/api/data" />

      {/* Robots Alternative */}
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="slurp" content="index, follow" />

      {/* Geo Targeting (Optional) */}
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      <meta name="geo.placename" content="San Francisco, California, USA" />
      <meta name="geo.region" content="US-CA" />
    </>
  );
}

/**
 * Export default component jika digunakan langsung
 */
export default SEOOptimization;
