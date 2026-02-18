import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export function SEO({
  title = 'Yunai Academy - AI-Powered CA Exam Preparation',
  description = 'Yunai Academy offers AI-powered adaptive learning for Chartered Accountancy exam preparation. Master CA Foundation, Intermediate, and Final with personalized courses, quizzes, and AI tutoring.',
  canonical,
  type = 'website',
  image = '/og-image.png',
}: SEOProps) {
  const siteName = 'Yunai Academy';
  const fullTitle = title.includes('Yunai Academy') ? title : `${title} - ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || window.location.href} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

interface CourseStructuredDataProps {
  name: string;
  description: string;
  provider?: string;
  url: string;
  rating?: number;
  reviewCount?: number;
}

export function CourseStructuredData({
  name,
  description,
  provider = 'Yunai Academy',
  url,
  rating,
  reviewCount,
}: CourseStructuredDataProps) {
  const structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      sameAs: 'https://www.yunaiacademy.com',
    },
    url,
  };

  if (rating && reviewCount) {
    structuredData.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
