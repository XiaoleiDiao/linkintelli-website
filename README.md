# Company Site (Next.js + Tailwind)

A modern, production-ready company website starter with **News**, built on **Next.js (App Router)** + **Tailwind CSS**.

## ✨ Features
- Home / About / News (list + detail) / Contact / Privacy
- Simple Markdown-powered news (using `marked`)
- Responsive, modern UI with Tailwind
- Ready for Vercel/Netlify deployment
- SEO meta via `metadata` export

## 🚀 Quick Start
```bash
# 1) install deps
npm install

# 2) run dev server
npm run dev   # http://localhost:3000

# 3) build
npm run build && npm start
```

## 📰 Manage News
Edit `data/news.ts` to add/update posts:
```ts
{
  slug: "product-launch-x",
  title: "我们发布了 X 产品",
  date: "2025-09-01",
  summary: "摘要...",
  body: "支持 **Markdown** 文本"
}
```
The list page sorts by date desc automatically.

## 🧪 Customize
- Replace `/public/logo.svg` and `/public/og.png`
- Edit brand colors in `tailwind.config.ts`
- Update company info in `app/contact/page.tsx` and `app/layout.tsx`

## 🌐 Deploy (Vercel)
1. Push to Git (GitHub/GitLab/Bitbucket)
2. Import the repo into Vercel → Framework: Next.js
3. Set your custom domain → Vercel will issue HTTPS automatically

## 🔒 Forms
The contact form includes a Netlify-compatible attribute. 
On Vercel, use services like Formspree/HubSpot, or create an API route (`app/api/contact/route.ts`) to handle submissions.

## 📈 SEO & Analytics
- Update `metadata` in `app/layout.tsx`
- Add Analytics (e.g., Vercel Analytics / Umami / GA)

## 🧱 Roadmap (optional)
- Replace `marked` with Contentlayer/MDX for richer content
- Add i18n with `next-intl`
- Add Careers page and job board integration


## 🌍 Bilingual (ZH/EN)
- Chinese pages at: `/`, `/about`, `/products`, `/news`, `/contact`
- English pages at: `/en`, `/en/about`, `/en/products`, `/en/news`
- RSS feeds: `/rss.xml` (ZH), `/en/rss.xml` (EN)
