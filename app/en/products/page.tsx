import Link from "next/link";
import { getAllProducts } from "@/data/products_en";

export const metadata = { title: "Products & Services – LinkIntelli Technology" };

export default function ProductsEN() {
  const items = getAllProducts();
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Products & Services</h1>
      <p className="text-slate-300 mb-6">Overview page with links to subpages.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(p => (
          <Link key={p.slug} href={`/en/products/${p.slug}`} className="card p-6 hover:border-brand/60">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="mt-2 text-slate-300">{p.summary}</p>
            <span className="mt-4 inline-block text-brand">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
