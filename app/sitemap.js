// pages/api/sitemap.js
const siteUrl = "https://coachcraft.space";

// All static pages + blog posts
const blogPosts = [
  "improve-coaching-website",
  "seo-strategies-for-coaches",
  "effective-coaching-sessions",
  "attract-ideal-clients",
  "personal-development-for-coaches",
  "time-management-for-coaches",
  "building-trust-with-clients",
  "coaching-exercises-engagement",
];

const staticPaths = [
  "",
  "about-us",
  "passports",
  "contact",
  "appointment",
  "blog",
  ...blogPosts,
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
  </urlset>
  `;
}

export default function handler(req, res) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();
}
