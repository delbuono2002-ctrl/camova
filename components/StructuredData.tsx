export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "CAMOVA",

    alternateName: "CAMOVA Live",

    url: "https://camova.live",

    description:
      "Premium live streaming platform with verified creators and private live shows.",

    inLanguage: "en",

    publisher: {
      "@type": "Organization",
      name: "CAMOVA",

      url: "https://camova.live",

      logo: {
        "@type": "ImageObject",
        url: "https://camova.live/logo.png",
      },
    },

    potentialAction: {
      "@type": "SearchAction",
      target: "https://camova.live/models",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}