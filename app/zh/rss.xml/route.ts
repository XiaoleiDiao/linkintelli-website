import { NextResponse } from "next/server";

export async function GET() {
  const site = "https://linkintelli.com";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>LinkIntelli Technology</title>
    <link>${site}/zh</link>
    <description>人工智能技术解决方案 - 医疗健康与机器人领域</description>
  </channel>
</rss>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" }});
}