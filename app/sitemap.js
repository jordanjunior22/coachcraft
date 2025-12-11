const siteUrl = "https://coachcraft.space";

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
];

export default function sitemap() {
  // Generate static pages
  const staticPages = staticPaths.map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Generate blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}