import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/lib/data";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

const SITE_URL = "https://abrarfahim.site";
const DEFAULT_TITLE = "Abrar Fahim — AI Researcher & Data Scientist";
const DEFAULT_DESCRIPTION =
  "Academic portfolio of Abrar Fahim — B.Sc. EEE graduate from IUT specializing in AI, deep learning, power systems optimization, and medical imaging research.";
const DEFAULT_IMAGE = "/abrar-fahim.png";
const DEFAULT_IMAGE_ALT = "Abrar Fahim — AI Researcher and Data Scientist";

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | Abrar Fahim` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Abrar Fahim" />
      <meta name="keywords" content="Abrar Fahim, AI researcher, data scientist, deep learning, power systems, medical imaging, IUT, Bangladesh" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Abrar Fahim — Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="1040" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD: Person schema (homepage only) */}
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Abrar Fahim",
            givenName: "Abrar",
            familyName: "Fahim",
            url: SITE_URL,
            image: `${SITE_URL}/abrar-fahim.png`,
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

      {/* JSON-LD: WebSite schema (homepage only) */}
      {path === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Abrar Fahim",
            url: SITE_URL,
            description: DEFAULT_DESCRIPTION,
            author: { "@type": "Person", name: "Abrar Fahim" },
          })}
        </script>
      )}

      {/* JSON-LD: Article schema (blog posts) */}
      {type === "article" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            url: canonicalUrl,
            image: imageUrl,
            author: {
              "@type": "Person",
              name: "Abrar Fahim",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Person",
              name: "Abrar Fahim",
            },
          })}
        </script>
      )}

      {/* JSON-LD: WebPage schema (subpages, not homepage or articles) */}
      {path !== "/" && type !== "article" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            description: description,
            url: canonicalUrl,
            isPartOf: { "@type": "WebSite", name: "Abrar Fahim", url: SITE_URL },
            about: { "@type": "Person", name: "Abrar Fahim" },
          })}
        </script>
      )}
    </Helmet>
  );
}
