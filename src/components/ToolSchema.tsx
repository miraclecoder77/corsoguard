import React from 'react';

interface ToolSchemaProps {
  name: string;
  description: string;
  url: string;
  category: string;
  features: string[];
}

const ToolSchema: React.FC<ToolSchemaProps> = ({ name, description, url, category, features }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": `https://corsoguard.com${url}`,
    "applicationCategory": category,
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": features.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ToolSchema;
