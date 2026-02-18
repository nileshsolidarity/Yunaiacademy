import { Router } from 'express';
import { prisma } from '../lib/prisma.js';
import { env } from '../config/env.js';

export const sitemapRouter = Router();

const FRONTEND_URL = env.FRONTEND_URL || 'https://www.yunaiacademy.com';

// Dynamic sitemap.xml
sitemapRouter.get('/sitemap.xml', async (_req, res, next) => {
  try {
    const courses = await prisma.course.findMany({
      where: { status: 'PUBLISHED' },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: 'desc' },
    });

    const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/courses', priority: '0.9', changefreq: 'daily' },
      { url: '/community', priority: '0.7', changefreq: 'daily' },
      { url: '/about', priority: '0.5', changefreq: 'monthly' },
      { url: '/contact', priority: '0.5', changefreq: 'monthly' },
      { url: '/faq', priority: '0.5', changefreq: 'monthly' },
      { url: '/terms', priority: '0.3', changefreq: 'yearly' },
      { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
      { url: '/refund-policy', priority: '0.3', changefreq: 'yearly' },
      { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
    ];

    const urls = staticPages
      .map(
        (page) =>
          `  <url>
    <loc>${FRONTEND_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
      )
      .join('\n');

    const courseUrls = courses
      .map(
        (course) =>
          `  <url>
    <loc>${FRONTEND_URL}/courses/${course.slug}</loc>
    <lastmod>${course.updatedAt.toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
      )
      .join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${courseUrls}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    next(error);
  }
});
