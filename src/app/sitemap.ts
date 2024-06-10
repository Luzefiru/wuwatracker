import { MetadataRoute } from "next";
import locales from "@/config/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapUrls: MetadataRoute.Sitemap = [
    {
      url: "https://wuwatracker.tech/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://wuwatracker.tech/import",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://wuwatracker.tech/terms-and-conditions",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://wuwatracker.tech/convene",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://wuwatracker.tech/convene/limited-character",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://wuwatracker.tech/convene/limited-weapon",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://wuwatracker.tech/convene/permanent-character",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/convene/permanent-weapon",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/settings",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/permanent-character",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/permanent-weapon",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/starter",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://wuwatracker.tech/starter-selector",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  locales.forEach((locale) => {
    sitemapUrls.push(
      {
        url: `https://wuwatracker.tech/${locale}/`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1.0,
      },
      {
        url: `https://wuwatracker.tech/${locale}/import`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.5,
      },
      {
        url: `https://wuwatracker.tech/${locale}/terms-and-conditions`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.5,
      },
      {
        url: `https://wuwatracker.tech/${locale}/convene`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `https://wuwatracker.tech/${locale}/convene/limited-character`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `https://wuwatracker.tech/${locale}/convene/limited-weapon`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `https://wuwatracker.tech/${locale}/convene/permanent-character`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/convene/permanent-weapon`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/settings`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/permanent-character`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/permanent-weapon`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/starter`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `https://wuwatracker.tech/${locale}/starter-selector`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    );
  });

  return sitemapUrls;
}
