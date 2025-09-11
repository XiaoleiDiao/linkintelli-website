import Link from "next/link";
import { getAllNews, getCategories, getTags } from "@/data/news";

export const metadata = { title: "新闻/博客 – LinkIntelli Technology" };

function filterPosts(posts: ReturnType<typeof getAllNews>, category?: string, tag?: string) {
  return posts.filter(p => (!category || p.categories.includes(category)) && (!tag || p.tags.includes(tag)));
}

export default function NewsList({ searchParams }: { searchParams: { category?: string, tag?: string }}) {
  const posts = getAllNews();
  const cats = getCategories();
  const tags = getTags();
  const filtered = filterPosts(posts, searchParams.category, searchParams.tag);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">新闻/博客</h1>
        <div className="text-sm flex gap-4">
          <a href="/rss.xml" className="text-brand hover:underline">RSS</a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-slate-400">分类：</span>
        <Link href="/news" className="px-2 py-1 rounded border border-slate-700 hover:border-brand">全部</Link>
        {cats.map(c => (
          <Link key={c} href={`/news?category=${encodeURIComponent(c)}`} className="px-2 py-1 rounded border border-slate-700 hover:border-brand">{c}</Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-slate-400">标签：</span>
        {tags.map(t => (
          <Link key={t} href={`/news?tag=${encodeURIComponent(t)}`} className="px-2 py-1 rounded border border-slate-700 hover:border-brand">#{t}</Link>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <article key={p.slug} className="card p-6">
            <p className="text-xs text-slate-400">{new Date(p.date).toLocaleDateString("zh-CN")}</p>
            <h2 className="text-xl font-semibold mt-2">
              <Link href={`/news/${p.slug}`} className="hover:text-brand">{p.title}</Link>
            </h2>
            <p className="mt-2 text-slate-300">{p.summary}</p>
            <div className="mt-2 text-xs text-slate-400">{p.categories.join(" / ")} · {p.tags.map(t => `#${t}`).join(" ")}</div>
            <Link href={`/news/${p.slug}`} className="mt-4 inline-block text-brand hover:underline">阅读更多 →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
