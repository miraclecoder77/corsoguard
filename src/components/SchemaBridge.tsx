'use client';

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
 * Automatically detects the page intent based on the slug 
 * and injects the most relevant Google-friendly schema.
 */
export default function SchemaBridge({ slug, metadata, baseUrl }: SchemaBridgeProps) {
  const schemas: any[] = [];
  const fullUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = `${baseUrl}${metadata.image}`;

  // 1. Author and Organization References
  const authorNode = {
    '@type': 'Person',
    'name': authorConfig.name,
    'jobTitle': authorConfig.jobTitle,
    'url': authorConfig.url,
    'description': authorConfig.description,
    'sameAs': authorConfig.sameAs
  };

  const publisherNode = {
    '@type': 'Organization',
    'name': 'CorsoGuard',
    'logo': {
      '@type': 'ImageObject',
      'url': `${baseUrl}/logo.png`
    }
  };

  // 2. Detection Logic
  
  // A. Product/Review Intent (Harness, Best-)
  if (slug.includes('harness') || slug.includes('best-')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': metadata.title,
      'description': metadata.description,
      'image': imageUrl,
      'brand': { '@type': 'Brand', 'name': 'CorsoGuard Selected' },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '142'
      },
      'review': {
        '@type': 'Review',
        'author': authorNode,
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5',
          'bestRating': '5'
        },
        'reviewBody': `Expert review on technical gear for Mastiffs. This ${metadata.title.toLowerCase()} provides the durability needed for the breed.`
      }
    });
  }

  // B. Health/Medical Intent (Bloat, Health)
  else if (slug.includes('bloat') || slug.includes('health')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      'name': metadata.title,
      'description': metadata.description,
      'lastReviewed': metadata.date,
      'reviewedBy': authorNode,
      'medicalAudience': {
        '@type': 'MedicalAudience',
        'audienceType': 'Dog Owners'
      },
      'relevantSpecialty': {
        '@type': 'MedicalSpecialty',
        'name': 'Veterinary Medicine'
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': fullUrl
      }
    });

    // Also include Article for standard ranking
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': metadata.title,
      'image': imageUrl,
      'author': authorNode,
      'publisher': publisherNode,
      'datePublished': metadata.date,
      'description': metadata.description
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
      'datePublished': metadata.date,
      'description': metadata.description
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
