import { NextResponse } from "next/server";
import { getAllNews } from "@/data/news_en";

export async function GET() {
  const items = getAllNews();
  const site = "https://example.com";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>LinkIntelli Technology News</title>
    <link>${site}/en/news</link>
    <description>News & blog from LinkIntelli Technology</description>
    ${items.map(i => `<item>
      <title>${i.title}</title>
      <link>${site}/en/news/${i.slug}</link>
      <pubDate>${new Date(i.date).toUTCString()}</pubDate>
      <description>${i.summary}</description>
      <guid>${site}/en/news/${i.slug}</guid>
    </item>`).join("")}
  </channel>
</rss>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" }});
}
