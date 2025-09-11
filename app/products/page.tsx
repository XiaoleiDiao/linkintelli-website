import Link from "next/link";
import { getAllProducts } from "@/data/products";

export const metadata = { title: "产品与服务 – LinkIntelli Technology" };

export default function Products() {
  const items = getAllProducts();
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">产品与服务</h1>
      <p className="text-slate-300 mb-6">1页概览，点击进入子页了解详情。</p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(p => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="card p-6 hover:border-brand/60">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="mt-2 text-slate-300">{p.summary}</p>
            <span className="mt-4 inline-block text-brand">了解更多 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
