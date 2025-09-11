export type News = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  body: string;
  categories: string[];
  tags: string[];
};

const NEWS: News[] = [
  {
    slug: "product-launch-x",
    title: "我们发布了 X 产品",
    date: "2025-09-01",
    summary: "全新一代 X 产品正式上线，带来更高的性能与安全性。",
    body: `我们很高兴宣布 **X 产品** 正式发布！
- 更快：请求延迟降低 30%
- 更稳：SLA 99.9% 可用性
- 更安全：默认启用细粒度访问控制
欢迎联系我们获取试用资格。`,
    categories: ["公司动态","产品"],
    tags: ["发布","性能","安全"]
  },
  {
    slug: "partnership-abc",
    title: "与 ABC 公司达成战略合作",
    date: "2025-08-20",
    summary: "双方将共同推进数据平台与AI能力在零售行业的落地应用。",
    body: `我们与 **ABC 公司** 达成战略合作，围绕数据治理、实时分析与 AI 赋能零售场景展开深度合作。`,
    categories: ["合作"],
    tags: ["AI","数据平台","零售"]
  },
  {
    slug: "hiring-2025",
    title: "我们在招聘：加入我们！",
    date: "2025-08-01",
    summary: "寻找前端、后端、数据平台与交付工程师，坐标伦敦，可远程。",
    body: `如果你热爱构建面向未来的产品，欢迎投递：hr@example.com。`,
    categories: ["招聘"],
    tags: ["招聘","伦敦","远程"]
  }
];

export function getAllNews(): News[] {
  return NEWS.slice().sort((a,b) => +new Date(b.date) - +new Date(a.date));
}
export function getLatestNews(n: number): News[] { return getAllNews().slice(0, n); }
export function getNewsBySlug(slug: string): News | undefined { return NEWS.find(p => p.slug === slug); }
export function getCategories(): string[] {
  return Array.from(new Set(NEWS.flatMap(n => n.categories))).sort();
}
export function getTags(): string[] {
  return Array.from(new Set(NEWS.flatMap(n => n.tags))).sort();
}
