"use server";

import { headers } from "next/headers";

export async function getPathname() {
  const h = await headers(); // need await in server action

  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") || "https";
  const forwardedUrl = h.get("x-forwarded-url");
  const referer = h.get("referer");

  const url = forwardedUrl ?? referer;

  if (url) {
    try {
      const fullUrl = new URL(url, `${protocol}://${host}`);
      return fullUrl.pathname;
    } catch {
      return "/";
    }
  }

  return "/";
}
