import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const CANONICAL_ORIGIN = (site.url || "https://proselecpanama.com").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${CANONICAL_ORIGIN}/sitemap.xml`,
  };
}
