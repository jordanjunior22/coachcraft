import { NextResponse } from "next/server";

const siteUrl = "https://coachcraft.space";

const staticPaths = [
  "",
  "about-us",
  "passports",
  "contact",
  "appointment",
  "blog",
  "improve-coaching-website",
  "seo-strategies-for-coaches",
  // Add more blog post slugs here
];

function generateSiteMap() {
  const urls = staticPaths
    .map((path) => {
      return `
      <url>
        <loc>${siteUrl}/${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
