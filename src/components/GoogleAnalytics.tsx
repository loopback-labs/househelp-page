import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const sendPageView = () => {
  if (!measurementId || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });
};

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageView();
  }, [location.pathname, location.search]);

  return null;
};
