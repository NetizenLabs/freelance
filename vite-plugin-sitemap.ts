import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

interface SitemapRoute {
  path: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

interface SitemapOptions {
  siteUrl: string;
  blogSourcePath: string;
  publicDir: string;
  outDir: string;
}

const STATIC_ROUTES: Omit<SitemapRoute, "lastmod">[] = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/tools/1099-tax-calculator", changefreq: "monthly", priority: "0.9" },
  { path: "/tools/w2-vs-1099-calculator", changefreq: "monthly", priority: "0.9" },
  { path: "/tools/freelance-hourly-rate-calculator", changefreq: "monthly", priority: "0.9" },
  { path: "/tools/upwork-fee-and-tax-calculator", changefreq: "monthly", priority: "0.9" },
  { path: "/tools/fiverr-fee-and-tax-calculator", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "yearly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function parseBlogPosts(blogSourcePath: string): { slug: string; publishedAt: string }[] {
  const src = fs.readFileSync(blogSourcePath, "utf-8");
  // Match each post object with slug + publishedAt fields. Skip the type
  // declaration (which uses `slug: string;` rather than `slug: "..."`).
  const postRegex = /\{\s*slug:\s*"([^"]+)"[\s\S]*?publishedAt:\s*"([^"]+)"/g;
  const posts: { slug: string; publishedAt: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = postRegex.exec(src)) !== null) {
    posts.push({ slug: match[1], publishedAt: match[2] });
  }
  return posts;
}

function buildSitemapXml(siteUrl: string, routes: SitemapRoute[]): string {
  const trimmed = siteUrl.replace(/\/$/, "");
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${trimmed}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt(siteUrl: string): string {
  const trimmed = siteUrl.replace(/\/$/, "");
  return `User-agent: *
Allow: /

Sitemap: ${trimmed}/sitemap.xml
`;
}

function generate(opts: SitemapOptions): { count: number; xml: string; robots: string } {
  const today = todayIso();
  const posts = parseBlogPosts(opts.blogSourcePath);
  const blogRoutes: SitemapRoute[] = posts.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: p.publishedAt,
    changefreq: "monthly",
    priority: "0.6",
  }));
  const staticRoutes: SitemapRoute[] = STATIC_ROUTES.map((r) => ({ ...r, lastmod: today }));
  const allRoutes = [...staticRoutes, ...blogRoutes];
  return {
    count: allRoutes.length,
    xml: buildSitemapXml(opts.siteUrl, allRoutes),
    robots: buildRobotsTxt(opts.siteUrl),
  };
}

export function sitemapPlugin(opts: { siteUrl: string }): Plugin {
  let resolvedRoot: string;
  let resolvedPublicDir: string;
  let resolvedOutDir: string;

  const writeFiles = (xml: string, robots: string, target: string) => {
    fs.mkdirSync(target, { recursive: true });
    fs.writeFileSync(path.join(target, "sitemap.xml"), xml);
    fs.writeFileSync(path.join(target, "robots.txt"), robots);
  };

  return {
    name: "freelance-tax-sitemap",
    apply: "build",
    configResolved(config) {
      resolvedRoot = config.root;
      resolvedPublicDir = config.publicDir;
      resolvedOutDir = path.resolve(resolvedRoot, config.build.outDir);
    },
    closeBundle() {
      const blogSourcePath = path.resolve(resolvedRoot, "src/lib/blog.ts");
      const result = generate({
        siteUrl: opts.siteUrl,
        blogSourcePath,
        publicDir: resolvedPublicDir,
        outDir: resolvedOutDir,
      });
      // Write to build output so deploy serves fresh files
      writeFiles(result.xml, result.robots, resolvedOutDir);
      // Also refresh the source public/ copy so dev preview & git stay in sync
      writeFiles(result.xml, result.robots, resolvedPublicDir);
      // eslint-disable-next-line no-console
      console.log(`[sitemap] generated ${result.count} URLs for ${opts.siteUrl}`);
    },
  };
}
