// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = "G-7VWHBCTS1H";

// Log page views
export const pageview = (url: string) => {
  if (typeof window.gtag === "undefined") return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag === "undefined") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
