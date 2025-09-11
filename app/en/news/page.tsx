import Link from "next/link";
import { getAllNews, getCategories, getTags } from "@/data/news_en";

export const metadata = { title: "News/Blog – LinkIntelli Technology" };

function filterPosts(posts: ReturnType<typeof getAllNews>, category?: string, tag?: string) {
  return posts.filter(p => (!category || p.categories.includes(category)) && (!tag || p.tags.includes(tag)));
}

export default function NewsListEN({ searchParams }: { searchParams: { category?: string, tag?: string }}) {
  const posts = getAllNews();
  const cats = getCategories();
  const tags = getTags();
  const filtered = filterPosts(posts, searchParams.category, searchParams.tag);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">News/Blog</h1>
        <div className="text-sm flex gap-4">
          <a href="/en/rss.xml" className="text-brand hover:underline">RSS</a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-slate-400">Categories:</span>
        <Link href="/en/news" className="px-2 py-1 rounded border border-slate-700 hover:border-brand">All</Link>
        {cats.map(c => (
          <Link key={c} href={`/en/news?category=${encodeURIComponent(c)}`} className="px-2 py-1 rounded border border-slate-700 hover:border-brand">{c}</Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-slate-400">Tags:</span>
        {tags.map(t => (
          <Link key={t} href={`/en/news?tag=${encodeURIComponent(t)}`} className="px-2 py-1 rounded border border-slate-700 hover:border-brand">#{t}</Link>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <article key={p.slug} className="card p-6">
            <p className="text-xs text-slate-400">{new Date(p.date).toLocaleDateString("en-GB")}</p>
            <h2 className="text-xl font-semibold mt-2">
              <Link href={`/en/news/${p.slug}`} className="hover:text-brand">{p.title}</Link>
            </h2>
            <p className="mt-2 text-slate-300">{p.summary}</p>
            <div className="mt-2 text-xs text-slate-400">{p.categories.join(" / ")} · {p.tags.map(t => `#${t}`).join(" ")}</div>
            <Link href={`/en/news/${p.slug}`} className="mt-4 inline-block text-brand hover:underline">Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
