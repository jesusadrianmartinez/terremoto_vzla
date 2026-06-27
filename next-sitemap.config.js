const config = {
  siteUrl: "https://laguaira.help/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://laguaira.help/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
  },
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
};

module.exports = config;
