import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/lib/data";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const SITE_URL = "https://abrarfahim.site";
const DEFAULT_TITLE = "Abrar Fahim — AI Researcher & Data Scientist";
const DEFAULT_DESCRIPTION =
  "Personal academic portfolio of Abrar Fahim — Electrical Engineering graduate specializing in AI, deep learning, power systems optimization, and medical imaging research.";

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
}: SEOProps) {
  const pageTitle = title ? `${title} | Abrar Fahim` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={personalInfo.name} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Abrar Fahim" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
