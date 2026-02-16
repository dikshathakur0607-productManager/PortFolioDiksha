
import React from 'react';
import { 
  TrendingUp, 
  Smartphone, 
  UserRoundCheck, 
  CloudSun, 
  Trophy, 
  Zap, 
  BarChart3, 
  Cpu,
  Search,
  Globe,
  PieChart,
  Navigation
} from 'lucide-react';
import { Experience, Project, SkillGroup } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Associate Product Manager",
    company: "The Times of India",
    period: "Aug 2024 – Present",
    points: [
      "End-to-end PM for TOI Markets: Stocks, IPOs, and financial data ecosystems.",
      "Automated Utility Experience: Built AI-assisted pages for Gold, Silver, and Weather.",
      "Growth Strategy: Led SEO-led expansion for TOI US and ETimes verticals.",
      "Product Automation: Leveraged GenAI for newsletter and content format optimization."
    ]
  },
  {
    role: "Associate Product Manager",
    company: "AajTak | India Today Group",
    period: "Jan 2022 – July 2024",
    points: [
      "Launched 'Short Videos' and 'Superfast' verticals for the mobile-first audience.",
      "Product lead for AI Anchor 'Sana', integrating GenAI into mainstream news delivery.",
      "Managed peak concurrency for global sports events (FIFA, T20 World Cup).",
      "Drove monetization through native sponsored integrations and ad-tech optimization."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AajTak Shorts & Superfast",
    description: "Spearheaded the launch and scaling of AajTak's short-form vertical video product. Designed specifically for the mobile-first 'snackable' news audience in India.",
    impact: ["Scaled to 1M+ concurrent users", "4 min average session duration", "Mobile-first vertical ad monetization"],
    tags: ["Mobile Video", "Retention", "Monetization", "B2C"],
    icon: "Smartphone",
    link: "https://www.aajtak.in/short-videos",
    imageUrl: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&q=80&w=1200" // Represents the vertical AI content mobile screen
  },
  {
    title: "AI News Anchor 'Sana'",
    description: "Defined the product experience for India's first AI-powered news anchor. Managed the integration of AI-generated avatars into real-time broadcasting and digital interfaces.",
    impact: ["Global media innovation benchmark", "AI-human hybrid news delivery", "Interactive UX for GenAI content"],
    tags: ["Generative AI", "Innovation", "Media Tech", "UX Design"],
    icon: "UserRoundCheck",
    link: "https://www.aajtak.in/anchor/ai-sana",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" // Represents the circular AI Sana profile view
  },
  {
    title: "Utility Data Verticals (Gold & Weather)",
    description: "Built automated, high-traffic utility pages for Gold/Silver rates and regional weather. Created a repeatable, AI-assisted template architecture for utility data ingestion.",
    impact: ["Reached 2M+ Monthly Active Users", "150% YoY Traffic Growth", "Automated Python-based data ingestion"],
    tags: ["SEO Growth", "Automation", "Data Ingestion", "Scalability"],
    icon: "CloudSun",
    link: "https://timesofindia.indiatimes.com/business/gold-rates-today",
    imageUrl: "https://images.unsplash.com/photo-1610332858234-471f7744f675?auto=format&fit=crop&q=80&w=1200" // Represents the Gold/Silver banner collage
  },
  {
    title: "TOI Markets & Financial Suite",
    description: "Managed the full product lifecycle for TOI's financial ecosystem, including live stock markets, IPO trackers, and company-specific sector data pages.",
    impact: ["High-concurrency data API management", "Integrated real-time financial dashboards", "Driving high-intent investor traffic"],
    tags: ["FinTech", "API Management", "Stakeholder Mgmt", "Real-time"],
    icon: "TrendingUp",
    link: "https://timesofindia.indiatimes.com/business/markets",
    imageUrl: "https://images.unsplash.com/photo-1611974715853-2b8ef9a3d136?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Live Sports Experience",
    description: "Designed and launched event-specific microsites for major sports tournaments, focusing on low-latency scoreboards and interactive ball-by-ball updates.",
    impact: ["Managed 1M+ peak concurrency", "Low-latency data visualization", "Integrated sports monetization tools"],
    tags: ["Concurrency", "Real-time Data", "Live Events", "Retention"],
    icon: "Trophy",
    link: "https://www.aajtak.in/live-score/cricket/",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Product Data & Growth",
    skills: ["GA4", "Search Console", "Mixpanel", "SQL", "Looker Studio", "Clarity", "SEO Optimization", "A/B Testing"]
  },
  {
    category: "Management & Tech",
    skills: ["PRD Writing", "Roadmapping", "Jira/Agile", "Stakeholder Management", "API Integration", "AI Prompt Engineering", "Python Basics"]
  },
  {
    category: "UX & Strategy",
    skills: ["User Journey Mapping", "Figma", "Monetization Strategy", "Competitive Analysis", "Market Discovery", "Retention Hooks"]
  }
];

export const IconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-8 h-8 text-emerald-500" />,
  UserRoundCheck: <UserRoundCheck className="w-8 h-8 text-purple-500" />,
  Smartphone: <Smartphone className="w-8 h-8 text-blue-500" />,
  CloudSun: <CloudSun className="w-8 h-8 text-sky-500" />,
  Trophy: <Trophy className="w-8 h-8 text-amber-500" />,
  Zap: <Zap className="w-8 h-8 text-yellow-500" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-rose-500" />,
  Cpu: <Cpu className="w-8 h-8 text-indigo-500" />,
};
