import Link from "next/link";
import { getLatestNews } from "@/data/news_en";

export default function HomeEN() {
  const latest = getLatestNews(3);
  return (
    <div className="space-y-14">
      <section className="text-center py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build the{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Future of Digital
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            We turn complex technologies into practical business value with stable, secure and scalable solutions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark transition shadow">
              Contact Us
            </Link>
            <Link href="/about" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-brand transition">
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest News</h2>
          <Link href="/en/news" className="text-sm text-brand hover:underline">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map(post => (
            <Link key={post.slug} href={`/en/news/${post.slug}`} className="card p-6 hover:border-brand/60 transition block">
              <p className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("en-GB")}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-slate-300 line-clamp-3">{post.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Reliable</h3>
          <p className="mt-2 text-slate-300">Global CDN and 99.9% uptime.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Secure & Compliant</h3>
          <p className="mt-2 text-slate-300">GDPR-first approach to data privacy.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Scalable</h3>
          <p className="mt-2 text-slate-300">Modular architecture for rapid iteration.</p>
        </div>
      </section>
    </div>
  );
}
