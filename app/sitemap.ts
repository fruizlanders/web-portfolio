import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://francoruizlanders.site";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/es`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
  ];
}
