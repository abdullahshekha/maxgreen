export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// reCAPTCHA is loaded on demand (first form focus, or at submit) rather than on page
// load — its script alone cost ~1.9s of main-thread time on mobile and tanked TBT.
let recaptchaLoading: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (!recaptchaLoading) {
    recaptchaLoading = new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => resolve();
      document.head.appendChild(script);
    });
  }
  return recaptchaLoading;
}

// Returns null if the script hasn't loaded (e.g. blocked by an ad blocker) —
// callers should fail open rather than block a real lead over a missing token.
export function getRecaptchaToken(action: string): Promise<string | null> {
  return new Promise((resolve) => {
    if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") {
      resolve(null);
      return;
    }
    loadRecaptcha().then(() => {
      if (!window.grecaptcha) {
        resolve(null);
        return;
      }
      window.grecaptcha.ready(() => {
        window
          .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action })
          .then(resolve)
          .catch(() => resolve(null));
      });
    });
  });
}
