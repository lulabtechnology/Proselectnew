import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const CANONICAL_ORIGIN = (site.url || "https://proselecpanama.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/sobre-nosotros", priority: 0.8 },
    { path: "/servicios", priority: 0.9 },
    { path: "/proyectos", priority: 0.7 },
    { path: "/contacto", priority: 0.8 },
  ];

  return routes.map((r) => ({
    url: `${CANONICAL_ORIGIN}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
