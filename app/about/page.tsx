export const metadata = {
  title: "关于我们 – Your Company",
};

export default function About() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>关于我们</h1>
      <p>
        Your Company 致力于为企业客户提供端到端数字化解决方案，
        包括数据平台、API 服务、人工智能与自动化集成等。
      </p>
      <h2>我们的愿景</h2>
      <p>让技术真正服务业务增长。</p>
      <h2>核心团队</h2>
      <ul>
        <li>创始人 &amp; CEO – 张三（前某知名科技公司）</li>
        <li>CTO – 李四（云原生与AI专家）</li>
        <li>交付负责人 – 王五（大型企业级项目经验）</li>
      </ul>
      <h2>我们的价值</h2>
      <ul>
        <li>客户成功优先</li>
        <li>数据驱动决策</li>
        <li>安全与隐私设计先行</li>
      </ul>
    </div>
  );
}
