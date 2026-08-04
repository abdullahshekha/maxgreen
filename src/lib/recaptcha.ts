export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Returns null if the script hasn't loaded (e.g. blocked by an ad blocker) —
// callers should fail open rather than block a real lead over a missing token.
export function getRecaptchaToken(action: string): Promise<string | null> {
  return new Promise((resolve) => {
    if (!RECAPTCHA_SITE_KEY || typeof window === "undefined" || !window.grecaptcha) {
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
}
