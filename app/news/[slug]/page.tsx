import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/data/news";
import { marked } from "marked";

export async function generateStaticParams() {
  const posts = (await import("@/data/news")).getAllNews();
  return posts.map(p => ({ slug: p.slug }));
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const post = getNewsBySlug(params.slug);
  if (!post) return notFound();
  const html = marked.parse(post.body || "");
  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-sm text-slate-400">{new Date(post.date).toLocaleDateString("zh-CN")}</p>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
