import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  /** Extra JSON-LD objects to emit for this route (e.g. ScholarlyArticle on paper pages). */
  jsonLd?: Record<string, unknown>[];
}

const SITE_URL = "https://abrarfahim.site";
const DEFAULT_TITLE = "Abrar Fahim — AI Researcher & Data Scientist";
const DEFAULT_DESCRIPTION =
  "Academic portfolio of Abrar Fahim — B.Sc. EEE graduate from IUT specializing in AI, deep learning, power systems optimization, and medical imaging research.";
const DEFAULT_IMAGE = "/abrar-fahim-800.jpg";
const DEFAULT_IMAGE_ALT = "Abrar Fahim — AI Researcher and Data Scientist";

/** Create or update a <meta> tag by name/property. */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Create or update a <link> tag by rel. */
function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Replace all route-managed JSON-LD blocks with the given objects. */
function setJsonLd(objects: Record<string, unknown>[]) {
  document.head.querySelectorAll("script[data-seo-jsonld]").forEach((s) => s.remove());
  for (const obj of objects) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo-jsonld", "");
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }
}

/**
 * Imperative document-head manager for per-route SEO.
 *
 * Replaces react-helmet-async (which failed to inject anything in this app,
 * even in the production build). Updates title, description, canonical, robots,
 * Open Graph, Twitter, and JSON-LD structured data on every route change so the
 * site is correctly indexed and machine/AI-readable. The static tags in
 * index.html remain the no-JS baseline for social scrapers.
 */
export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  noindex = false,
  jsonLd,
}: SEOProps) {
  const pageTitle = title ? `${title} | Abrar Fahim` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;

  useEffect(() => {
    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", "Abrar Fahim");
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", canonicalUrl);

    // Open Graph
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", "Abrar Fahim — Portfolio");
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", imageAlt);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", imageAlt);

    // Structured data (index.html already carries a static Person for the no-JS baseline)
    const blocks: Record<string, unknown>[] = [];

    if (path === "/") {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Abrar Fahim",
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        author: { "@type": "Person", name: "Abrar Fahim" },
      });
      // Person entity is provided by the static index.html <head> (no-JS baseline).
    } else if (type === "article") {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: canonicalUrl,
        image: imageUrl,
        author: { "@type": "Person", name: "Abrar Fahim", url: SITE_URL },
        publisher: { "@type": "Person", name: "Abrar Fahim" },
      });
    } else {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: pageTitle,
        description,
        url: canonicalUrl,
        isPartOf: { "@type": "WebSite", name: "Abrar Fahim", url: SITE_URL },
        about: { "@type": "Person", name: "Abrar Fahim" },
      });
    }

    if (jsonLd) blocks.push(...jsonLd);

    setJsonLd(blocks);
  }, [pageTitle, description, canonicalUrl, imageUrl, imageAlt, type, path, noindex, title, jsonLd]);

  return null;
}
