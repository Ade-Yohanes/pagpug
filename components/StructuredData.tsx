/**
 * JSON-LD Structured Data untuk SEO
 * Membantu search engines memahami konten dengan lebih baik
 */

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization schema
      {
        '@type': 'Organization',
        '@id': 'https://pagpug.com/#organization',
        name: 'PAGPUG',
        url: 'https://pagpug.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://pagpug.com/#logo',
          url: 'https://pagpug.com/logo.png',
          width: 200,
          height: 200,
          caption: 'PAGPUG Logo',
        },
        description: 'Modern web development platform for building amazing digital experiences',
        sameAs: [
          'https://twitter.com/pagpug',
          'https://linkedin.com/company/pagpug',
          'https://github.com/pagpug',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+1-555-123-4567',
          email: 'support@pagpug.com',
          areaServed: 'Worldwide',
        },
        foundingDate: '2023-01-01',
        foundingLocation: 'San Francisco, CA',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: '50-100',
        },
      },

      // WebSite schema
      {
        '@type': 'WebSite',
        '@id': 'https://pagpug.com/#website',
        url: 'https://pagpug.com',
        name: 'PAGPUG',
        description: 'Build amazing digital experiences',
        inLanguage: 'en-US',
        isAccessibleForFree: true,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://pagpug.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },

      // WebPage schema untuk homepage
      {
        '@type': 'WebPage',
        '@id': 'https://pagpug.com/#webpage',
        url: 'https://pagpug.com',
        name: 'PAGPUG - Modern Landing Page',
        description: 'Build amazing digital experiences with PAGPUG',
        isPartOf: {
          '@id': 'https://pagpug.com/#website',
        },
        inLanguage: 'en-US',
        datePublished: '2023-01-01T00:00:00Z',
        dateModified: '2025-12-02T00:00:00Z',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://pagpug.com/og-image.jpg',
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          '@id': 'https://pagpug.com/#breadcrumb',
        },
      },

      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://pagpug.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pagpug.com',
          },
        ],
      },

      // Product/Service schema
      {
        '@type': 'SoftwareApplication',
        name: 'PAGPUG Platform',
        description: 'Web development platform for building amazing digital experiences',
        url: 'https://pagpug.com',
        applicationCategory: 'DeveloperApplication',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '0',
          priceValidUntil: '2025-12-31',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '500',
        },
      },

      // Pricing plans
      {
        '@type': 'Offer',
        '@id': 'https://pagpug.com/pricing#starter',
        name: 'Starter Plan',
        description: 'Perfect for getting started',
        priceCurrency: 'USD',
        price: '29',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        '@id': 'https://pagpug.com/pricing#professional',
        name: 'Professional Plan',
        description: 'Best for growing teams',
        priceCurrency: 'USD',
        price: '79',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        '@id': 'https://pagpug.com/pricing#enterprise',
        name: 'Enterprise Plan',
        description: 'For large organizations',
        priceCurrency: 'USD',
        price: 'Contact Sales',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
