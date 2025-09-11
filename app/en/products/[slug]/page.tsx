import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/data/products_en";

export async function generateStaticParams() {
  return getAllProducts().map(p => ({ slug: p.slug }));
}

export default function ProductDetailEN({ params }: { params: { slug: string } }) {
  const prod = getProductBySlug(params.slug);
  if (!prod) return notFound();
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{prod.name}</h1>
      <p className="lead">{prod.summary}</p>
      <p>{prod.body}</p>
    </article>
  );
}
