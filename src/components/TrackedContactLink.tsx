"use client";

import { trackConversion } from "@/lib/gtag";

export default function TrackedContactLink({
  href,
  type,
  className,
  children,
}: {
  href: string;
  type: "phone" | "email";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => trackConversion(type === "phone" ? "phone_click" : "email_click")}
      className={className}
    >
      {children}
    </a>
  );
}
