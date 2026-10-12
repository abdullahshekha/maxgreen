// First-touch traffic attribution for lead forms. We remember how a visitor first
// arrived (referrer, landing page, UTM/gclid) for 30 days, so when they submit a form —
// possibly on a later page or visit — the lead can be credited to the right channel
// (Organic Search, Paid, Direct...) in the Google Sheet and the sales email.

const STORAGE_KEY = "mg_attribution";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

export type Attribution = {
  channel: string;
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  gclid: string;
};

type Stored = Attribution & { ts: number };

const SEARCH_ENGINES = /(^|\.)(google|bing|yahoo|duckduckgo|yandex|ecosia|baidu|brave|startpage)\./i;
const AI_ASSISTANTS = /(chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai)/i;
const SOCIAL = /(facebook\.com|fb\.com|instagram\.com|linkedin\.com|lnkd\.in|twitter\.com|x\.com|t\.co|youtube\.com|youtu\.be|whatsapp\.com|tiktok\.com|pinterest\.)/i;

function classify(referrerHost: string, utmMedium: string, utmSource: string, gclid: string): string {
  const medium = utmMedium.toLowerCase();
  if (gclid || ["cpc", "ppc", "paid", "paidsearch", "paid_search"].includes(medium)) return "Paid";
  if (medium === "organic") return "Organic Search";
  if (["social", "social-network", "paid-social"].includes(medium)) return "Social";
  if (medium === "email") return "Email";
  if (referrerHost) {
    if (AI_ASSISTANTS.test(referrerHost)) return "AI Assistant";
    if (SEARCH_ENGINES.test(referrerHost)) return "Organic Search";
    if (SOCIAL.test(referrerHost)) return "Social";
    return "Referral";
  }
  return utmSource ? "Referral" : "Direct";
}

function clean(value: string | null | undefined, max = 300): string {
  return (value || "").slice(0, max);
}

function read(): Stored | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Stored;
    return Date.now() - parsed.ts < TTL_MS ? parsed : null;
  } catch {
    return null;
  }
}

// Call once per page load. Keeps the first-touch record unless the visitor arrives
// again via a tagged campaign (UTM or gclid), which is a stronger signal.
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = clean(params.get("utm_source"));
    const utmMedium = clean(params.get("utm_medium"));
    const utmCampaign = clean(params.get("utm_campaign"));
    const gclid = clean(params.get("gclid"));
    const tagged = !!(utmSource || utmMedium || gclid);

    let referrerHost = "";
    let referrer = "";
    if (document.referrer) {
      const url = new URL(document.referrer);
      if (url.hostname !== window.location.hostname) {
        referrerHost = url.hostname;
        referrer = clean(url.origin + url.pathname);
      }
    }

    const existing = read();
    // Internal navigation or a repeat direct visit shouldn't overwrite a real source.
    if (existing && !tagged && !referrerHost) return;
    if (existing && !tagged && existing.channel !== "Direct") return;

    const record: Stored = {
      channel: classify(referrerHost, utmMedium, utmSource, gclid),
      landingPage: clean(window.location.pathname),
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      gclid,
      ts: Date.now(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Attribution is best-effort and must never break the page.
  }
}

// Included in every lead submission. Falls back to a Direct record if nothing stored.
export function getAttribution(): Attribution & { submitPage: string } {
  const empty: Attribution = {
    channel: "Direct",
    landingPage: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    gclid: "",
  };
  let stored: Attribution = empty;
  if (typeof window !== "undefined") {
    const s = read();
    if (s) stored = s;
  }
  return {
    ...stored,
    submitPage: typeof window !== "undefined" ? clean(window.location.pathname) : "",
  };
}
