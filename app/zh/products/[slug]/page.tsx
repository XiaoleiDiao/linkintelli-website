import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";

export async function generateStaticParams() {
  const { getAllProducts } = await import("@/data/products");
  return getAllProducts().map(p => ({ slug: p.slug }));
}

function getIcon(iconType: string) {
  if (iconType === "heart") {
    return (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  } else if (iconType === "robot") {
    return (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  return null;
}

export default function ProductDetailZH({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="space-y-16">
      {/* Back Navigation */}
      <div>
        <Link href="/zh/products" className="inline-flex items-center text-brand hover:underline">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回产品页
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16">
        <div className="flex justify-center mb-8">
          <div className={`w-24 h-24 rounded-3xl flex items-center justify-center ${
            product.icon === "heart" 
              ? "bg-gradient-to-r from-emerald-500 to-teal-500" 
              : "bg-gradient-to-r from-purple-500 to-indigo-500"
          }`}>
            {getIcon(product.icon)}
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-slate-400 mb-6">{product.category}</p>
        <p className="text-2xl text-brand italic font-medium mb-8">
          &ldquo;{product.slogan}&rdquo;
        </p>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Core Features */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心功能</h2>
          <p className="text-lg text-slate-300">
            全面的能力设计，致力于提供卓越的结果
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {product.features.map((feature, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-xl font-bold mb-4 text-brand">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">适用场景</h2>
          <p className="text-lg text-slate-300">
            跨越多个行业和场景的实际应用
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.useCases.map((useCase, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Product Values */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品价值</h2>
          <p className="text-lg text-slate-300">
            为您的组织带来可衡量的影响和收益
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {product.values.map((value, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-6">准备开始了吗？</h2>
          <p className="text-lg text-slate-300 mb-8">
            让我们讨论如何根据您的具体需求定制 {product.name}。
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/zh/contact" className="px-8 py-4 rounded-xl bg-brand hover:bg-brand-dark transition shadow-lg">
              联系销售团队
            </Link>
            <Link href="/zh/products" className="px-8 py-4 rounded-xl border border-slate-700 hover:border-brand transition">
              探索其他产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}