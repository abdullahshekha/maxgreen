"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

// Records how the visitor first arrived so lead forms can report the traffic channel.
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
