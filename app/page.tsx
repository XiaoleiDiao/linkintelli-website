import Link from "next/link";
import { getLatestNews } from "@/data/news";

export default function Home() {
  const latest = getLatestNews(3);
  return (
    <div className="space-y-14">
      <section className="text-center py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            构建面向未来的{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              数字化解决方案
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            我们专注于将复杂的技术转化为可落地的业务价值，
            为客户提供稳定、安全、可扩展的产品与服务。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark transition shadow">
              联系我们
            </Link>
            <Link href="/about" className="px-5 py-3 rounded-xl border border-slate-700 hover:border-brand transition">
              了解我们
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">最新新闻</h2>
          <Link href="/news" className="text-sm text-brand hover:underline">查看全部</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map(post => (
            <Link key={post.slug} href={`/news/${post.slug}`} className="card p-6 hover:border-brand/60 transition block">
              <p className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("zh-CN")}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-slate-300 line-clamp-3">{post.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold">稳定可靠</h3>
          <p className="mt-2 text-slate-300">全球 CDN 加速，99.9% 可用性保障。</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">安全合规</h3>
          <p className="mt-2 text-slate-300">遵循 GDPR 等合规要求，保护用户数据。</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">可扩展</h3>
          <p className="mt-2 text-slate-300">模块化架构，支持快速迭代与业务扩展。</p>
        </div>
      </section>
    </div>
  );
}
