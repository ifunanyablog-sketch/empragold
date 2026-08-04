import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ 
  title = "Empragold Real Estate | Ultra-Luxury Properties & Investments", 
  description = "Empragold Real Estate presents the world's finest penthouses, waterfront villas, commercial towers, and bespoke investment portfolios.",
  canonical = "https://empragold.com",
  ogImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
