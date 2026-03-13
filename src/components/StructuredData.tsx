'use client';

/**
 * StructuredData Component
 * 
 * Renders JSON-LD structured data in a script tag.
 * This is used for SEO optimization to help search engines understand me.
 */
export default function StructuredData({ data }: { data: any }) {
  if (!data) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
