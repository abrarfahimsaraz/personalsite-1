import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Populated by Vite from env: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
// If unset, analytics is disabled (useful for local dev).
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let scriptInjected = false;

function ensureGtagLoaded(id: string) {
  if (scriptInjected || typeof window === "undefined") return;
  scriptInjected = true;

  // Async loader script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  // Bootstrap gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Initial config — disable automatic page_view so we can send per-route
  window.gtag("config", id, { send_page_view: false });
}

/**
 * Injects GA4 once and fires a page_view on every SPA route change.
 * No-op when VITE_GA_MEASUREMENT_ID is not set.
 */
export function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    ensureGtagLoaded(GA_MEASUREMENT_ID);
    window.gtag("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
