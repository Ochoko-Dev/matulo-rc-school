import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://matulo-rc-school.vercel.app";

  const routes = [
    "",
    "/about",
    "/about/history",
    "/about/administration",
    "/academia",
    "/academia/early-years",
    "/academia/lower-primary",
    "/academia/upper-primary",
    "/student-life",
    "/news",
    "/admissions",
    "/contact",
    "/academic-calendar",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
