import Link from "next/link";

export default function HomeZH() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            前沿{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              人工智能技术解决方案
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            我们致力于将先进的人工智能算法、视觉理解技术以及多模态推理能力，
            嵌入真实世界的关键应用场景中。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/zh/contact" className="px-6 py-3 rounded-xl bg-brand hover:bg-brand-dark transition shadow">
              联系我们
            </Link>
            <Link href="/zh/about" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-brand transition">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">关于 LinkIntelli Technology</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            LinkIntelli Technology LTD 是一家专注于人工智能技术解决方案的创新公司。
            我们聚焦于 <span className="text-brand font-semibold">AI for Healthcare</span> 与 <span className="text-brand font-semibold">具身智能（Embodied AI）</span> 两大核心方向。
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            我们相信，AI 的价值不仅在于技术突破，更在于推动行业效率提升、增强人类能力，并真正改善生活质量。
          </p>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">核心业务领域</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Health-Index Lite */}
            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Health-Index Lite</h3>
                  <p className="text-sm text-slate-400">主动式健康管理平台</p>
                </div>
              </div>
              <p className="text-slate-300 italic">
                &ldquo;以AI之智，行上医之道&rdquo;
              </p>
              <p className="text-slate-300">
                打造覆盖医患协同、隐形健康风险识别、术后康复监测的智慧健康管理系统。
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-brand">关键特性：</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>医患协同的主动式健康管理</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>模型驱动的风险预测、评分与个性化健康画像</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>多模态结构化医疗文本理解（影像报告、EHR、随访记录）</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>支持医疗机构的健康服务数字化转型</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embodied AI */}
            <div className="card p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">具身智能</h3>
                  <p className="text-sm text-slate-400">灵巧手 AI 解决方案</p>
                </div>
              </div>
              <p className="text-slate-300">
                基于灵巧机械手的 AI 下游任务框架，打造面向机器人抓取、操作和任务执行的智能控制系统。
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-brand">系统能力：</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>灵巧操作策略的模仿学习与强化学习</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>基于大模型的手部动作决策</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>三维感知 + 触觉反馈融合</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand mt-1">•</span>
                    <span>下游任务包括精细抓取、拆装、操作工具等</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">AI 驱动</h3>
            <p className="mt-2 text-slate-300">先进的算法和多模态推理能力。</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">安全合规</h3>
            <p className="mt-2 text-slate-300">医疗级别的安全性和数据隐私保护。</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">真实世界影响</h3>
            <p className="mt-2 text-slate-300">增强人类能力的实用解决方案。</p>
          </div>
        </div>
      </section>
    </div>
  );
}