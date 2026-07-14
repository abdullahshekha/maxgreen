export const GOOGLE_ADS_ID = "AW-677487887";
export const GA4_ID = "G-8LD4K709ZV";

type ConversionLabel = "whatsapp_click" | "phone_click" | "email_click" | "lead_form_submit";

const CONVERSION_SEND_TO: Record<ConversionLabel, string> = {
  whatsapp_click: `${GOOGLE_ADS_ID}/UN6wCJqAiI4bEI_KhsMC`,
  phone_click: `${GOOGLE_ADS_ID}/q2QVCO6XkY4bEI_KhsMC`,
  email_click: `${GOOGLE_ADS_ID}/IM9lCPGXkY4bEI_KhsMC`,
  lead_form_submit: `${GOOGLE_ADS_ID}/bX9BCO6J6YEYEI_KhsMC`,
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(label: ConversionLabel) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: CONVERSION_SEND_TO[label] });
}
