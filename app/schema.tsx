export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CAMOVA",
    url: "https://camova.live",
    description: "Premium Live Streaming Platform",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://camova.live/models",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}