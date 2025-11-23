export type Product = { 
  slug: string; 
  name: string; 
  category: string;
  slogan: string;
  summary: string; 
  description: string;
  features: {
    title: string;
    items: string[];
  }[];
  useCases: string[];
  values: string[];
  icon: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "health-index-lite",
    name: "Health-Index Lite",
    category: "Proactive Health Management Platform",
    slogan: "With AI wisdom, practice the way of superior medicine",
    summary: "AI-powered proactive medical health management platform for comprehensive patient care and risk prediction.",
    description: "Health-Index Lite is a proactive medical health management platform independently developed by LinkIntelli Technology LTD, based on the latest large language models, medical multimodal models and risk prediction algorithms, realizing comprehensive understanding and refined management of patient health status.",
    features: [
      {
        title: "Proactive Health Risk Identification",
        items: [
          "Integrates multimodal medical data including EHR, imaging reports, and follow-up records",
          "Automatically extracts key indicators and symptoms", 
          "Identifies hidden risks and provides early warnings"
        ]
      },
      {
        title: "Doctor-Patient Collaborative Platform",
        items: [
          "Automated structuring of patient health monitoring and follow-up data",
          "Enables doctors to quickly access patient health progress",
          "Provides personalized health management recommendations and reminders"
        ]
      },
      {
        title: "AI Prediction Models for Post-surgery & Chronic Diseases",
        items: [
          "Suitable for post-operative recovery scenarios like chronic osteomyelitis and tumor follow-up",
          "AI risk stratification (High / Moderate / Low / Minimal)",
          "Recovery pathway prediction",
          "Multi-factor scoring system (e.g., 12-factor recovery scoring)"
        ]
      },
      {
        title: "Data-Driven Clinical Decision Support",
        items: [
          "Combines large models + RAG medical knowledge base",
          "Automatically generates clinical summaries and condition trend charts",
          "Provides explainable AI recommendations"
        ]
      }
    ],
    useCases: [
      "Hospital follow-up and rehabilitation management platforms",
      "Health management centers", 
      "Multi-center clinical research",
      "Chronic disease management service systems"
    ],
    values: [
      "Improve doctor efficiency by 40%+",
      "Reduce follow-up loss rate by 30%+", 
      "Enhance patient engagement and self-management capabilities",
      "Scalable to multiple diseases and departments"
    ],
    icon: "heart"
  },
  {
    slug: "embodied-ai-dexterous-hand",
    name: "Embodied AI - Dexterous Hand Solutions",
    category: "AI-Powered Robotic Manipulation Platform",
    slogan: "Intelligent manipulation for the future of automation",
    summary: "Complete AI solution for dexterous robotic hands with advanced manipulation capabilities and intelligent decision-making.",
    description: "Based on advanced dexterous robotic hand hardware platforms, combined with imitation learning, reinforcement learning, and large model intelligent decision-making technology, providing complete solutions for industrial, research, and robotic innovation applications.",
    features: [
      {
        title: "Dexterous Manipulation Strategy Learning",
        items: [
          "Imitation learning based on demonstration data",
          "Dexterous grasping, rotation, squeezing, knob operations, etc."
        ]
      },
      {
        title: "Large Model-Driven Motion Decision Making",
        items: [
          "Utilizes VLM/LLM reasoning to provide robots with:",
          "Task understanding",
          "Component recognition", 
          "Motion sequence generation"
        ]
      },
      {
        title: "Multimodal Fusion Perception (Vision + Tactile)",
        items: [
          "3D visual reconstruction",
          "Real-time tactile feedback",
          "Adapts to various object shapes and external conditions"
        ]
      },
      {
        title: "Downstream Task Suite",
        items: [
          "Tool operation",
          "Component assembly",
          "Fine hand manipulation",
          "Flexible object handling (fabrics, cables, etc.)"
        ]
      }
    ],
    useCases: [
      "Precision operations in industrial manufacturing",
      "Research platforms for robotic research institutions",
      "High-difficulty interactive tasks for service robots",
      "Automated laboratory equipment operation"
    ],
    values: [
      "Lower the development threshold for dexterous robot systems",
      "Support end-to-end task transfer and rapid deployment",
      "Scalable and customizable AI operation capability packages"
    ],
    icon: "robot"
  }
];

export function getAllProducts(){ return PRODUCTS; }
export function getProductBySlug(slug: string){ return PRODUCTS.find(p=>p.slug===slug); }
