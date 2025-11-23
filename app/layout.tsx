import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkIntelli Technology – Innovate. Deliver. Grow.",
  description: "LinkIntelli Technology delivers end-to-end digital solutions for enterprises: data platforms, APIs, AI and automation.",
  openGraph: {
    title: "LinkIntelli Technology",
    description: "Official website of LinkIntelli Technology - Build the Future of Digital.",
    url: "https://linkintelli.com",
    siteName: "LinkIntelli Technology",
    images: ["/og.png"],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://linkintelli.com"),
};

function LangSwitcher() {
  // switcher between root (EN) and /zh/* paths
  const h = headers();
  const path = h.get("x-invoke-path") || "/";
  const isZH = path.startsWith("/zh");
  const target = isZH ? path.replace(/^\/zh/, "") || "/" : (path === "/" ? "/zh" : "/zh" + path);
  const label = isZH ? "EN" : "ZH";
  return <Link href={target} className="text-sm text-slate-300 hover:text-brand">{label}</Link>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur border-b border-slate-800">
          <div className="container-pad flex items-center h-16 justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="h-20 w-30" />
              <span className="font-semibold text-2xl">LinkIntelli Technology</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:text-brand">About</Link>
              <Link href="/products" className="hover:text-brand">Products</Link>
              <Link href="/contact" className="hover:text-brand">Contact</Link>
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
                <Link href="/privacy" className="hover:text-brand">Privacy Policy</Link>
                <a href="mailto:linkintelli.tech@gmail.com" className="hover:text-brand">linkintelli.tech@gmail.com</a>
                <a href="/rss.xml" className="hover:text-brand">RSS</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
