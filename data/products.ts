export type Product = {
  slug: string;
  name: string;
  summary: string;
  body: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "data-platform",
    name: "企业数据平台",
    summary: "统一采集、治理与服务的数据中枢。",
    body: `我们提供端到端的数据平台能力，覆盖采集、清洗、建模、治理与可视化，
并支持数据服务化（Data as a Service），帮助企业实现数据驱动。`
  },
  {
    slug: "ai-services",
    name: "AI 能力与自动化",
    summary: "用机器学习与LLM加速业务流程。",
    body: `可落地的AI方案，包括预测模型、文本/图像理解、RAG知识问答、
以及流程自动化编排，专注可解释性与安全性。`
  },
  {
    slug: "integration",
    name: "系统集成与交付",
    summary: "稳定可靠的工程实践与交付保障。",
    body: `云原生架构、API 设计、身份与权限、可观测性、SLA 保障，
面向企业级场景的最佳实践。`
  }
];

export function getAllProducts() { return PRODUCTS; }
export function getProductBySlug(slug: string) { return PRODUCTS.find(p=>p.slug===slug); }
