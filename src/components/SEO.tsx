import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/lib/data";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
}

const SITE_URL = "https://abrarfahim.site";
const DEFAULT_TITLE = "Abrar Fahim — AI Researcher & Data Scientist";
const DEFAULT_DESCRIPTION =
  "Academic portfolio of Abrar Fahim — B.Sc. EEE graduate from IUT specializing in AI, deep learning, power systems optimization, and medical imaging research.";

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image,
  imageAlt = "Abrar Fahim — AI Researcher & Data Scientist",
}: SEOProps) {
  const pageTitle = title ? `${title} | Abrar Fahim` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image ? `${SITE_URL}${image}` : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Abrar Fahim" />
      <meta name="keywords" content="Abrar Fahim, AI researcher, data scientist, deep learning, power systems, medical imaging, IUT, Bangladesh" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Abrar Fahim — Portfolio" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta property="og:image:alt" content={imageAlt} />}

      {/* Twitter */}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {imageUrl && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* JSON-LD Structured Data — Person schema for name ranking */}
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Abrar Fahim",
            givenName: "Abrar",
            familyName: "Fahim",
            url: SITE_URL,
            jobTitle: "AI Researcher & Data Scientist",
            description: personalInfo.synthesized,
            email: personalInfo.email,
            telephone: personalInfo.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dhaka",
              addressCountry: "BD",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Islamic University of Technology",
              url: "https://www.iutoic-dhaka.edu",
            },
            sameAs: [
              personalInfo.github,
              personalInfo.linkedin,
              personalInfo.scholar,
            ],
            knowsAbout: [
              "Artificial Intelligence",
              "Deep Learning",
              "Medical Image Analysis",
              "Power Systems Optimization",
              "Machine Learning",
              "Data Science",
            ],
          })}
        </script>
      )}

      {/* JSON-LD WebSite schema for sitelinks search */}
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Abrar Fahim",
            url: SITE_URL,
            description: DEFAULT_DESCRIPTION,
            author: {
              "@type": "Person",
              name: "Abrar Fahim",
            },
          })}
        </script>
      )}
    </Helmet>
  );
}
