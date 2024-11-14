import {
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentMagnifyingGlassIcon,
  EnvelopeIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  ChatBubbleLeftEllipsisIcon,
  SparklesIcon,
  CpuChipIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

export const services = [
  {
    title: "AI-Powered Website Design",
    description: "Struggling with outdated web design or low conversion rates? Our AI-powered website design service brings your vision to life with optimized, high-performing websites that stand out in a crowded digital space.",
    icon: GlobeAltIcon,
    gradient: "from-emerald-400 to-teal-500",
    details: {
      overview: "Our AI-powered website design service brings your vision to life with optimized, high-performing websites that stand out in a crowded digital space.",
      benefits: [
        "Faster Launch: AI-assisted coding cuts down development time",
        "Mobile-Optimized: Seamless user experience on all devices",
        "Automated Performance: Continuous AI-driven optimization ensures peak performance",
        "Higher Conversions: Designed to engage and convert visitors effectively"
      ],
      process: [
        {
          step: "AI Analysis",
          description: "Understand your brand and target audience for a tailored experience"
        },
        {
          step: "Design Generation",
          description: "AI-generated design options that reflect your brand identity"
        },
        {
          step: "Launch & Optimize",
          description: "Continuous optimization to adapt and improve over time"
        }
      ]
    }
  },
  {
    title: "Social Media Automation",
    description: "Tired of the time drain from daily social media posting? Let our Social Media Automation handle it, ensuring your brand remains active and relevant while you focus on growing your business.",
    icon: ChartBarIcon,
    gradient: "from-blue-400 to-indigo-600",
    details: {
      overview: "Let our Social Media Automation handle it, ensuring your brand remains active and relevant while you focus on growing your business.",
      benefits: [
        "Consistency: Keep your social media active without manual effort",
        "Higher Engagement: Automated posts optimized for peak times",
        "Data-Driven Insights: Real-time analytics to track and adjust performance",
        "Cost-Effective: Saves time and reduces the need for constant oversight"
      ],
      process: [
        {
          step: "Content Strategy",
          description: "Create a posting plan based on your goals"
        },
        {
          step: "Automated Scheduling",
          description: "AI handles post timing and distribution"
        },
        {
          step: "Performance Monitoring",
          description: "Continuous monitoring and adjustments for maximum impact"
        }
      ]
    }
  },
  {
    title: "AI Chatbot Development",
    description: "Losing leads or customers due to slow response times? Our AI chatbot development delivers instant, engaging responses, keeping users engaged and maximizing your conversion potential.",
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: "from-violet-400 to-purple-600",
    details: {
      overview: "Our AI chatbot development delivers instant, engaging responses, keeping users engaged and maximizing your conversion potential.",
      benefits: [
        "24/7 Availability: Engage visitors anytime, anywhere",
        "Increased Leads: Never miss a potential customer due to delayed replies",
        "Customized Responses: Tailored interactions that feel human",
        "Cost-Effective Support: Reduces the need for extensive human resources"
      ],
      process: [
        {
          step: "Chatbot Design",
          description: "Create scripts based on common queries and client needs"
        },
        {
          step: "AI Integration",
          description: "Implement on your website or social media platforms"
        },
        {
          step: "Continuous Learning",
          description: "AI adapts to improve responses over time"
        }
      ]
    }
  },
  {
    title: "Visual Design & Branding",
    description: "Does your brand feel disjointed or inconsistent? Our Visual Design and Branding services help you establish a cohesive, powerful visual identity that resonates with your audience.",
    icon: SparklesIcon,
    gradient: "from-rose-400 to-orange-500",
    details: {
      overview: "Our Visual Design and Branding services help you establish a cohesive, powerful visual identity that resonates with your audience.",
      benefits: [
        "Distinct Brand Identity: Stand out with a unique and memorable look",
        "Consistent Messaging: Uniform design elements across platforms",
        "Enhanced Brand Recognition: Build a strong, recognizable presence",
        "Tailored Designs: Visuals that align with your brand values and market"
      ],
      process: [
        {
          step: "Brand Discovery",
          description: "Identify your brand's unique attributes"
        },
        {
          step: "Design Creation",
          description: "Develop logos, color schemes, and assets"
        },
        {
          step: "Implementation",
          description: "Apply your brand visuals consistently across channels"
        }
      ]
    }
  },
  {
    title: "Customer Support Chatbots",
    description: "Are customer support inquiries slowing down your operations? Our Customer Support Chatbots provide instant, reliable assistance, enhancing customer satisfaction and freeing up your team's time.",
    icon: ChatBubbleLeftEllipsisIcon,
    gradient: "from-sky-400 to-blue-600",
    details: {
      overview: "Our Customer Support Chatbots provide instant, reliable assistance, enhancing customer satisfaction and freeing up your team's time.",
      benefits: [
        "Reduced Response Times: Immediate support without human delay",
        "Improved Satisfaction: 24/7 availability and quick resolutions",
        "Cost Savings: Reduces staffing needs and operational costs",
        "Scalable Solution: Able to handle multiple inquiries simultaneously"
      ],
      process: [
        {
          step: "Customer Analysis",
          description: "Understand common questions and support needs"
        },
        {
          step: "Chatbot Programming",
          description: "Train the chatbot to handle common inquiries"
        },
        {
          step: "Continuous Learning",
          description: "AI adapts to better serve customer needs over time"
        }
      ]
    }
  },
  {
    title: "AI Content Personalization",
    description: "Is your content missing the mark with your audience? AI Content Personalization ensures that every visitor experiences a tailored journey, driving higher engagement and conversions.",
    icon: AdjustmentsHorizontalIcon,
    gradient: "from-purple-400 to-violet-600",
    details: {
      overview: "AI Content Personalization ensures that every visitor experiences a tailored journey, driving higher engagement and conversions.",
      benefits: [
        "Targeted Experience: Content adapts to each user's interests",
        "Higher Engagement: Users spend more time with content that resonates",
        "Boosted Conversions: Personalized calls-to-action lead to more sales",
        "Dynamic Updates: Content adjusts in real-time based on user behavior"
      ],
      process: [
        {
          step: "Audience Analysis",
          description: "Identify key audience segments"
        },
        {
          step: "AI-Powered Recommendations",
          description: "Tailor content suggestions to individual users"
        },
        {
          step: "Real-Time Adjustments",
          description: "Content changes based on live user interactions"
        }
      ]
    }
  },
  {
    title: "Automated SEO Optimization",
    description: "Struggling to rank on search engines despite your efforts? Our Automated SEO Optimization service ensures that your website consistently meets the latest SEO standards for maximum visibility.",
    icon: DocumentMagnifyingGlassIcon,
    gradient: "from-teal-400 to-emerald-600",
    details: {
      overview: "Our Automated SEO Optimization service ensures that your website consistently meets the latest SEO standards for maximum visibility.",
      benefits: [
        "Improved Rankings: Get found by optimizing your site for search engines",
        "Traffic Boost: Attract more visitors with better search visibility",
        "Keyword Integration: AI identifies and implements relevant keywords",
        "Continuous Adaptation: Adjusts automatically as search algorithms evolve"
      ],
      process: [
        {
          step: "Site Audit",
          description: "Analyze your current SEO standing and identify gaps"
        },
        {
          step: "Optimization Setup",
          description: "Implement on-page and off-page SEO tactics"
        },
        {
          step: "Automated Monitoring",
          description: "AI adjusts as needed to keep up with SEO trends"
        }
      ]
    }
  },
  {
    title: "Smart Email Campaigns",
    description: "Are your email campaigns lacking impact? Our Smart Email Campaigns use AI to segment and personalize messaging, maximizing open rates and conversions.",
    icon: EnvelopeIcon,
    gradient: "from-cyan-400 to-blue-600",
    details: {
      overview: "Our Smart Email Campaigns use AI to segment and personalize messaging, maximizing open rates and conversions.",
      benefits: [
        "Higher Open Rates: Targeted messages that speak to each recipient",
        "Increased Engagement: Relevant content encourages clicks and actions",
        "Time-Saving Automation: Email sequences run automatically",
        "Data-Driven Adjustments: AI refines campaigns based on performance metrics"
      ],
      process: [
        {
          step: "Audience Segmentation",
          description: "Categorize your contacts based on behavior and interests"
        },
        {
          step: "Automated Email Sequences",
          description: "AI crafts and sends tailored emails"
        },
        {
          step: "Performance Optimization",
          description: "Campaigns improve over time with AI-driven insights"
        }
      ]
    }
  },
  {
    title: "Customized AI Solutions",
    description: "Need a unique AI solution for your specific business challenge? Our custom AI development services create tailored solutions that address your unique business needs and objectives.",
    icon: CommandLineIcon,
    gradient: "from-blue-400 to-indigo-600",
    details: {
      overview: "Our custom AI development services create tailored solutions that address your unique business needs and objectives, turning complex challenges into innovative opportunities.",
      benefits: [
        "Tailored Solutions: Custom-built AI systems for your specific needs",
        "Competitive Edge: Unique AI capabilities that set you apart",
        "Scalable Design: Solutions that grow with your business",
        "Integration Ready: Seamlessly connects with your existing systems"
      ],
      process: [
        {
          step: "Requirements Analysis",
          description: "Deep dive into your business needs and objectives"
        },
        {
          step: "Custom Development",
          description: "Build and train AI models specific to your use case"
        },
        {
          step: "Implementation & Support",
          description: "Deploy solution and provide ongoing optimization"
        }
      ]
    }
  }
]; 