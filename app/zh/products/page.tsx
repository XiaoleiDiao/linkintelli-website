import Link from "next/link";
import { getAllProducts } from "@/data/products";

export const metadata = { title: "产品与服务 – LinkIntelli Technology" };

function getIcon(iconType: string) {
  if (iconType === "heart") {
    return (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  } else if (iconType === "robot") {
    return (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  return null;
}

export default function ProductsZH() {
  const products = getAllProducts();
  
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          我们的<span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">产品</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          通过先进技术和智能自动化，设计创新的AI解决方案，致力于变革医疗健康和机器人领域。
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Link key={product.slug} href={`/zh/products/${product.slug}`} className="group">
            <div className="card p-8 hover:border-brand/60 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand/10 h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    index === 0 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500" 
                      : "bg-gradient-to-r from-purple-500 to-indigo-500"
                  }`}>
                    {getIcon(product.icon)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold group-hover:text-brand transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">{product.category}</p>
                  </div>
                </div>
                <div className="text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Slogan */}
              <div className="mb-6">
                <p className="text-brand italic font-medium">&ldquo;{product.slogan}&rdquo;</p>
              </div>

              {/* Summary */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {product.summary}
              </p>

              {/* Quick Features Preview */}
              <div className="space-y-4">
                <h3 className="font-semibold text-white">核心能力：</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-300">{feature.title}</span>
                    </div>
                  ))}
                  {product.features.length > 3 && (
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-400">+{product.features.length - 3} 项更多能力</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action indicator */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">了解更多此解决方案</span>
                  <span className="text-brand font-medium group-hover:translate-x-1 transition-transform duration-300">
                    查看详情 →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">准备好变革您的业务了吗？</h3>
          <p className="text-slate-300 mb-6">
            联系我们，了解我们的AI解决方案如何为您的特定需求进行定制化。
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/zh/contact" className="px-6 py-3 rounded-xl bg-brand hover:bg-brand-dark transition shadow">
              联系销售
            </Link>
            <Link href="/zh/about" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-brand transition">
              关于我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}