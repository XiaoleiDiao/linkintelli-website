import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkIntelli Technology – Innovate. Deliver. Grow.",
  description: "LinkIntelli Technology official website built on Next.js + Tailwind.",
  openGraph: {
    title: "LinkIntelli Technology",
    description: "Official website of LinkIntelli Technology.",
    url: "https://example.com",
    siteName: "LinkIntelli Technology",
    images: ["/og.png"],
    locale: "zh_CN",
    type: "website",
  },
  metadataBase: new URL("https://linkintelli.com"),
};

function LangSwitcher() {
  // naive switcher between /en/* and zh paths
  const h = headers();
  const path = h.get("x-invoke-path") || "/";
  const isEN = path.startsWith("/en");
  const target = isEN ? path.replace(/^\/en/, "") || "/" : (path === "/" ? "/en" : "/en" + path);
  const label = isEN ? "中文" : "EN";
  return <Link href={target} className="text-sm text-slate-300 hover:text-brand">{label}</Link>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur border-b border-slate-800">
          <div className="container-pad flex items-center h-16 justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-7 w-7" />
              <span className="font-semibold">LinkIntelli Technology</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:text-brand">关于我们</Link>
              <Link href="/products" className="hover:text-brand">产品与服务</Link>
              <Link href="/news" className="hover:text-brand">新闻/博客</Link>
              <Link href="/contact" className="hover:text-brand">联系我们</Link>
              <LangSwitcher />
            </nav>
          </div>
        </header>
        <main className="container-pad py-10">{children}</main>
        <footer className="mt-20 border-t border-slate-800">
          <div className="container-pad py-10 text-sm text-slate-400">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} LinkIntelli Technology. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-brand">隐私政策</Link>
                <a href="mailto:info@example.com" className="hover:text-brand">info@example.com</a>
                <a href="/rss.xml" className="hover:text-brand">RSS</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
