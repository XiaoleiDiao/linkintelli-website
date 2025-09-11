export type News = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string;
  categories: string[];
  tags: string[];
};

const NEWS: News[] = [
  {
    slug: "product-launch-x",
    title: "We launched Product X",
    date: "2025-09-01",
    summary: "The next-gen Product X is now live with better performance and security.",
    body: `We are excited to announce **Product X** is now available!
- Faster: 30% lower latency
- Reliable: 99.9% SLA
- Safer: fine-grained access control by default
Contact us for early access.`,
    categories: ["Company","Product"],
    tags: ["launch","performance","security"]
  },
  {
    slug: "partnership-abc",
    title: "Strategic partnership with ABC",
    date: "2025-08-20",
    summary: "We partner with ABC to bring data platforms and AI to retail scenarios.",
    body: `Together with **ABC**, we will collaborate on data governance, real-time analytics, and AI use cases in retail.`,
    categories: ["Partnership"],
    tags: ["AI","data-platform","retail"]
  },
  {
    slug: "hiring-2025",
    title: "We are hiring",
    date: "2025-08-01",
    summary: "Frontend, backend, data platform and delivery engineers. London-based, remote-friendly.",
    body: `If you love building the future, send your CV to hr@example.com.`,
    categories: ["Hiring"],
    tags: ["jobs","London","remote"]
  }
];

export function getAllNews(): News[] { return NEWS.slice().sort((a,b)=>+new Date(b.date)-+new Date(a.date)); }
export function getLatestNews(n: number): News[] { return getAllNews().slice(0,n); }
export function getNewsBySlug(slug: string): News | undefined { return NEWS.find(p=>p.slug===slug); }
export function getCategories(): string[] { return Array.from(new Set(NEWS.flatMap(n=>n.categories))).sort(); }
export function getTags(): string[] { return Array.from(new Set(NEWS.flatMap(n=>n.tags))).sort(); }
