export type Product = { slug: string; name: string; summary: string; body: string };

export const PRODUCTS: Product[] = [
  {
    slug: "data-platform",
    name: "Enterprise Data Platform",
    summary: "Your unified hub for data ingestion, governance and services.",
    body: `End-to-end platform covering ingestion, cleansing, modeling, governance, visualization,
and Data-as-a-Service to power data-driven decisions.`
  },
  {
    slug: "ai-services",
    name: "AI & Automation",
    summary: "Machine Learning and LLM to accelerate your workflows.",
    body: `Production-grade AI: forecasting, text/image understanding, RAG Q&A,
and workflow automation with a focus on safety and explainability.`
  },
  {
    slug: "integration",
    name: "Integration & Delivery",
    summary: "Cloud-native architecture and dependable delivery.",
    body: `API design, identity and access, observability, and SLAs—best practices for enterprise systems.`
  }
];

export function getAllProducts(){ return PRODUCTS; }
export function getProductBySlug(slug: string){ return PRODUCTS.find(p=>p.slug===slug); }
