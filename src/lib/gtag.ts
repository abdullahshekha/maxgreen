export const GOOGLE_ADS_ID = "AW-677487887";
export const GA4_ID = "G-8LD4K709ZV";
export const CLARITY_PROJECT_ID = "y7vjneung2";
export const META_PIXEL_ID = "2338526033244683";

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
    fbq?: (...args: unknown[]) => void;
  }
}

// Meta Pixel standard events: form submits are Lead, every click-to-contact is Contact
const META_EVENT: Record<ConversionLabel, { event: "Lead" | "Contact"; method?: string }> = {
  whatsapp_click: { event: "Contact", method: "whatsapp" },
  phone_click: { event: "Contact", method: "phone" },
  email_click: { event: "Contact", method: "email" },
  lead_form_submit: { event: "Lead" },
};

export function trackConversion(label: ConversionLabel) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", "conversion", { send_to: CONVERSION_SEND_TO[label] });
  }
  if (window.fbq) {
    const { event, method } = META_EVENT[label];
    window.fbq("track", event, method ? { content_name: method } : {});
  }
}
