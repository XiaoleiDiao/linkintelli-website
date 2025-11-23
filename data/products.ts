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
    category: "主动式健康管理平台",
    slogan: "以AI之智，行上医之道",
    summary: "基于AI的主动式医疗健康管理平台，实现全面的患者护理和风险预测。",
    description: "Health-Index Lite 是 LinkIntelli Technology LTD 自主研发的主动式医疗健康管理平台，基于最新的大语言模型、医学多模态模型与风险预测算法，实现对患者健康状态的全面理解与精细化管理。",
    features: [
      {
        title: "主动式健康风险识别",
        items: [
          "结合 EHR、影像报告、随访记录等多模态医疗数据",
          "自动抽取关键指标与症状",
          "识别隐形风险并给出预警"
        ]
      },
      {
        title: "医患协同平台",
        items: [
          "患者健康监测、随访数据自动结构化",
          "医生可快速获取患者健康进展",
          "提供个性化健康管理建议与提醒"
        ]
      },
      {
        title: "术后与慢病的 AI 预测模型",
        items: [
          "适用于慢性骨髓炎、肿瘤随访等术后恢复场景",
          "AI 风险分级（高 / 较高 / 较低 / 低）",
          "恢复路径预测",
          "多因子评分系统（例如 12 因子恢复评分）"
        ]
      },
      {
        title: "数据驱动的临床辅助决策",
        items: [
          "结合大模型 + RAG 的医学知识库",
          "自动生成临床摘要、病情趋势图",
          "提供可解释的 AI 建议"
        ]
      }
    ],
    useCases: [
      "医院随访与康复管理平台",
      "健康管理中心",
      "多中心临床研究",
      "慢病管理服务系统"
    ],
    values: [
      "提升医生效率 40%+",
      "减少随访缺失率 30%+",
      "提高患者黏性与自我管理能力",
      "可扩展到多种疾病和科室"
    ],
    icon: "heart"
  },
  {
    slug: "embodied-ai-dexterous-hand",
    name: "灵巧手具身智能 AI 解决方案",
    category: "AI 驱动的机器人操作平台",
    slogan: "智能操作，引领自动化未来",
    summary: "基于先进灵巧机械手的完整AI解决方案，具备高级操作能力和智能决策。",
    description: "基于先进的灵巧机械手硬件平台，结合模仿学习、强化学习和大模型智能决策技术，提供面向工业、科研与机器人创新应用的完整解决方案。",
    features: [
      {
        title: "灵巧操作策略学习",
        items: [
          "基于演示数据的模仿学习",
          "灵巧抓取、转动、挤压、旋钮操作等"
        ]
      },
      {
        title: "大模型驱动的动作决策",
        items: [
          "利用 VLM / LLM 推理，为机器人提供：",
          "任务理解",
          "部件识别",
          "动作序列生成"
        ]
      },
      {
        title: "多模态融合感知（视觉 + 触觉）",
        items: [
          "3D 视觉重建",
          "实时触觉反馈",
          "能适应多种物体形状和外部条件"
        ]
      },
      {
        title: "下游任务套件",
        items: [
          "工具操作",
          "组件装配",
          "精细手部 manipulation",
          "柔性物体处理（布料、线缆等）"
        ]
      }
    ],
    useCases: [
      "工业制造中的精细操作",
      "科研机构的机器人研究平台",
      "服务机器人高难度交互任务",
      "自动化实验室设备操作"
    ],
    values: [
      "降低灵巧机器人系统的开发门槛",
      "支持端到端任务迁移与快速部署",
      "可扩展、可定制的 AI 操作能力包"
    ],
    icon: "robot"
  }
];

export function getAllProducts() { return PRODUCTS; }
export function getProductBySlug(slug: string) { return PRODUCTS.find(p=>p.slug===slug); }
