// No 'use client' — intentionally server-rendered so schema is visible
// to Googlebot's initial HTML pass and all AI crawlers (GPTBot, ClaudeBot, PerplexityBot).

import StructuredData from './StructuredData';
import { authorConfig } from '@/config/author';

interface SchemaBridgeProps {
  slug: string;
  metadata: any;
  baseUrl: string;
}

/**
 * SchemaBridge Component
 *
 * Server-rendered. Automatically detects page intent based on slug
 * and injects the most relevant Google-friendly schema markup.
 * All schema is output as static HTML — no client-side hydration required.
 */
export default function SchemaBridge({ slug, metadata, baseUrl }: SchemaBridgeProps) {
  const schemas: any[] = [];
  const fullUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = metadata.image ? `${baseUrl}${metadata.image}` : `${baseUrl}/breed-guide-card.png`;

  // Use the article's date for both published and modified.
  // When articles are updated, set a separate `dateModified` field in frontmatter.
  const datePublished = metadata.date || new Date().toISOString().split('T')[0];
  const dateModified = metadata.dateModified || datePublished;

  // 1. Author and Organisation References
  const authorNode = {
    '@type': 'Person',
    'name': authorConfig.name,
    'jobTitle': authorConfig.jobTitle,
    'url': authorConfig.url,
    'description': authorConfig.description,
    'knowsAbout': authorConfig.knowsAbout,
    'sameAs': authorConfig.sameAs,
  };

  const publisherNode = {
    '@type': 'Organization',
    'name': 'CorsoGuard',
    'logo': {
      '@type': 'ImageObject',
      'url': `${baseUrl}/logo.png`,
    },
  };

  // 2. Detection Logic

  // A. Gear/Review Intent (Harness, Best-)
  // Note: AggregateRating removed — ratings must reflect real user reviews.
  // Add real review data here once a user review system is implemented.
  if (slug.includes('harness') || slug.includes('best-')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': metadata.title,
      'description': metadata.description,
      'image': imageUrl,
      'author': authorNode,
      'publisher': publisherNode,
      'datePublished': datePublished,
      'dateModified': dateModified,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    });
  }

  // B. Health/Medical Intent (Bloat, Hip, Health, Lifespan, GDV)
  else if (
    slug.includes('bloat') ||
    slug.includes('health') ||
    slug.includes('hip') ||
    slug.includes('lifespan') ||
    slug.includes('gdv')
  ) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      'name': metadata.title,
      'description': metadata.description,
      'lastReviewed': dateModified,
      'reviewedBy': authorNode,
      'medicalAudience': {
        '@type': 'MedicalAudience',
        'audienceType': 'Dog Owners',
      },
      'relevantSpecialty': {
        '@type': 'MedicalSpecialty',
        'name': 'Veterinary Medicine',
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    });

    // Also include BlogPosting for standard ranking signals
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': metadata.title,
      'image': imageUrl,
      'author': authorNode,
      'publisher': publisherNode,
      'datePublished': datePublished,
      'dateModified': dateModified,
      'description': metadata.description,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    });
  }

  // C. Default: Standard BlogPosting
  else {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': metadata.title,
      'image': imageUrl,
      'author': authorNode,
      'publisher': publisherNode,
      'datePublished': datePublished,
      'dateModified': dateModified,
      'description': metadata.description,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <StructuredData key={i} data={s} />
      ))}
    </>
  );
}
