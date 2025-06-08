"use client";
import {
  BookOpen,
  Bot,
  Brain,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code,
  Coffee,
  Cpu,
  CreditCard,
  Database,
  FileText,
  Globe,
  Layout,
  RefreshCw,
  Search,
  Server,
  Shield,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
// type Category = {
//   title: string;
//   description: string;
//   icon: React.JSX.Element;
//   rating: number;
//   lessons: number;
//   category: string;
//   technologies: string[];
//   level: string;
// };
export default function CourseListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");

  const filteredCourses = courses.filter((course) => {
    // Filter by search query
    if (
      searchQuery &&
      !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !course.technologies
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by category
    if (activeCategory !== "all" && course.category !== activeCategory) {
      return false;
    }

    // Filter by level
    if (activeLevel !== "all" && course.level !== activeLevel) {
      return false;
    }

    return true;
  });
  return (
    <div>
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Courses ({courses.length})
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Curated learning paths designed to make you a highly competitive
              Next.js developer in 2025
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                {/* <span className="text-gray-400 whitespace-nowrap">
                  Category:
                </span> */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                      activeCategory === "all"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-800/50 hover:bg-gray-700/50"
                    }`}
                  >
                    All Courses
                  </button>
                  <button
                    onClick={() => setActiveCategory("by-skill")}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                      activeCategory === "by-skill"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-800/50 hover:bg-gray-700/50"
                    }`}
                  >
                    By Skill
                  </button>
                  <button
                    onClick={() => setActiveCategory("by-project")}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                      activeCategory === "by-project"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-800/50 hover:bg-gray-700/50"
                    }`}
                  >
                    By Project
                  </button>
                  <button
                    onClick={() => setActiveCategory("with-languages")}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                      activeCategory === "with-languages"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-800/50 hover:bg-gray-700/50"
                    }`}
                  >
                    With Languages
                  </button>
                </div>
              </div>

              {/* Level Filter as Select */}
              <div className="flex items-center ml-0 md:ml-auto">
                <span className="text-gray-400 mr-2 whitespace-nowrap">
                  Level:
                </span>
                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          </div>

          {/* Show More Button */}
          {filteredCourses.length > 9 && (
            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-md hover:bg-white/5 transition duration-300">
                Show More Courses{" "}
                <ChevronDown className="ml-2 inline-block" size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Course data
const courses = [
  // Courses by Skill
  {
    title: "React and Next.js Fundamentals",
    description:
      "Learn the core concepts of React and Next.js from the ground up. Perfect for developers new to modern frontend frameworks.",
    icon: <Code size={64} />,
    rating: 4.9,
    lessons: 36,
    category: "by-skill",
    technologies: ["Next.js", "React", "JavaScript", "JSX"],
    level: "beginner",
  },
  {
    title: "All JavaScript Concepts You Need Before React and Next.js",
    description:
      "Master essential JavaScript concepts required for effective React and Next.js development including ES6+, async programming, and the DOM.",
    icon: <Code size={64} />,
    rating: 4.8,
    lessons: 40,
    category: "by-skill",
    technologies: ["JavaScript", "ES6+", "Async/Await", "DOM"],
    level: "beginner",
  },
  {
    title: "Next.js with TypeScript Mastery",
    description:
      "Master type-safe development with Next.js and TypeScript. Learn advanced typing, project structuring, and performance optimization.",
    icon: <Code size={64} />,
    rating: 4.9,
    lessons: 42,
    category: "by-skill",
    technologies: ["Next.js", "TypeScript", "React", "Zod"],
    level: "intermediate",
  },
  {
    title: "GraphQL Integration for Next.js Apps",
    description:
      "Build robust APIs with GraphQL and Next.js. Learn Apollo Client, schema design, and real-time data fetching.",
    icon: <Database size={64} />,
    rating: 4.8,
    lessons: 36,
    category: "by-skill",
    technologies: ["Next.js", "GraphQL", "Apollo", "TypeScript"],
    level: "intermediate",
  },
  {
    title: "Authentication in Next.js Applications",
    description:
      "Implement secure authentication systems using Next.js. Learn JWT, OAuth, NextAuth.js, and best security practices.",
    icon: <Globe size={64} />,
    rating: 4.7,
    lessons: 28,
    category: "by-skill",
    technologies: ["Next.js", "NextAuth.js", "JWT", "OAuth"],
    level: "intermediate",
  },
  {
    title: "Next.js Performance Optimization",
    description:
      "Optimize your Next.js applications for lightning-fast performance. Master lazy loading, code splitting, and caching strategies.",
    icon: <Cpu size={64} />,
    rating: 4.9,
    lessons: 32,
    category: "by-skill",
    technologies: ["Next.js", "Web Vitals", "Lighthouse", "SEO"],
    level: "advanced",
  },
  {
    title: "Tailwind CSS for Next.js Developers",
    description:
      "Master responsive, utility-first CSS with Tailwind and Next.js. Build beautiful interfaces with minimal CSS.",
    icon: <Code size={64} />,
    rating: 4.8,
    lessons: 24,
    category: "by-skill",
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
    level: "beginner",
  },
  {
    title: "State Management in Next.js",
    description:
      "Learn different state management patterns for Next.js applications from Context API to advanced libraries.",
    icon: <Database size={64} />,
    rating: 4.7,
    lessons: 30,
    category: "by-skill",
    technologies: ["Next.js", "React Query", "SWR", "Zustand", "Redux"],
    level: "intermediate",
  },
  {
    title: "Next.js API Routes & Backend Development",
    description:
      "Build powerful API routes and backend logic directly in your Next.js applications. Connect to databases and external services.",
    icon: <Server size={64} />,
    rating: 4.8,
    lessons: 38,
    category: "by-skill",
    technologies: ["Next.js", "API Routes", "REST", "Prisma"],
    level: "intermediate",
  },
  {
    title: "Next.js and Redis for High-Performance Caching",
    description:
      "Master Redis implementation with Next.js for efficient caching, session management, and real-time features.",
    icon: <Database size={64} />,
    rating: 4.8,
    lessons: 30,
    category: "by-skill",
    technologies: ["Next.js", "Redis", "Caching", "WebSockets"],
    level: "intermediate",
  },
  {
    title: "AWS Services with Next.js Applications",
    description:
      "Learn to leverage AWS services to deploy, scale and enhance Next.js applications with cloud-native capabilities.",
    icon: <Cloud size={64} />,
    rating: 4.9,
    lessons: 36,
    category: "by-skill",
    technologies: ["Next.js", "AWS", "S3", "Lambda", "DynamoDB"],
    level: "intermediate",
  },
  {
    title: "Cloudflare Integration for Next.js",
    description:
      "Optimize performance and security with Cloudflare. Learn Pages deployment, Workers, and edge computing with Next.js.",
    icon: <Shield size={64} />,
    rating: 4.8,
    lessons: 28,
    category: "by-skill",
    technologies: ["Next.js", "Cloudflare Pages", "Workers", "KV Storage"],
    level: "intermediate",
  },
  {
    title: "Next.js and Headless CMS Mastery",
    description:
      "Connect Next.js with popular headless CMS platforms. Create flexible, content-driven applications with seamless integration.",
    icon: <FileText size={64} />,
    rating: 4.7,
    lessons: 34,
    category: "by-skill",
    technologies: ["Next.js", "Sanity", "Contentful", "Payload CMS"],
    level: "intermediate",
  },
  {
    title: "Next.js with Hono: Edge-First Framework Integration",
    description:
      "Build ultra-fast API routes and middleware with Hono's performant, TypeScript-first framework inside Next.js applications.",
    icon: <Zap size={64} />,
    rating: 4.8,
    lessons: 26,
    category: "by-skill",
    technologies: ["Next.js", "Hono", "Edge Functions", "TypeScript"],
    level: "advanced",
  },
  {
    title: "Payment Processing with Next.js",
    description:
      "Implement secure payment solutions in Next.js applications. Master Stripe integration, subscription management and checkout flows.",
    icon: <CreditCard size={64} />,
    rating: 4.9,
    lessons: 32,
    category: "by-skill",
    technologies: ["Next.js", "Stripe", "Payment APIs", "Webhooks"],
    level: "intermediate",
  },

  // Courses by Project
  {
    title: "Build an E-commerce Platform with Next.js",
    description:
      "Develop a full-featured e-commerce site with product catalogs, cart functionality, and Stripe integration for payments.",
    icon: <Globe size={64} />,
    rating: 4.9,
    lessons: 48,
    category: "by-project",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    level: "intermediate",
  },
  {
    title: "Real-time Chat Application with Next.js",
    description:
      "Create a real-time messaging platform using Next.js, Socket.io, and serverless functions for instant communication.",
    icon: <Code size={64} />,
    rating: 4.8,
    lessons: 36,
    category: "by-project",
    technologies: ["Next.js", "Socket.io", "Firebase", "WebSockets"],
    level: "intermediate",
  },
  {
    title: "Next.js Portfolio & Blog Platform",
    description:
      "Build a professional portfolio and blogging platform with MDX, dynamic content, and SEO optimization.",
    icon: <Globe size={64} />,
    rating: 4.7,
    lessons: 32,
    category: "by-project",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "SEO"],
    level: "beginner",
  },
  {
    title: "AI-Powered Next.js Application",
    description:
      "Integrate OpenAI and other AI services into a Next.js application for smart features like content generation and analysis.",
    icon: <Cpu size={64} />,
    rating: 4.9,
    lessons: 40,
    category: "by-project",
    technologies: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    level: "intermediate",
  },
  {
    title: "Dashboard & Analytics Platform",
    description:
      "Build a data visualization dashboard with real-time updates, filtering, and interactive charts.",
    icon: <Database size={64} />,
    rating: 4.8,
    lessons: 44,
    category: "by-project",
    technologies: ["Next.js", "D3.js", "Chart.js", "React Query"],
    level: "advanced",
  },
  {
    title: "SaaS Application with Subscription Billing",
    description:
      "Create a multi-tenant SaaS platform with user management, subscription tiers, and automated billing.",
    icon: <Globe size={64} />,
    rating: 4.9,
    lessons: 50,
    category: "by-project",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    level: "advanced",
  },
  {
    title: "Social Media Platform with Next.js",
    description:
      "Build a feature-rich social networking application with user profiles, feeds, and real-time notifications.",
    icon: <Globe size={64} />,
    rating: 4.7,
    lessons: 46,
    category: "by-project",
    technologies: ["Next.js", "Socket.io", "MongoDB", "AWS S3"],
    level: "advanced",
  },
  {
    title: "Next.js AI Masterclass: RAG and Agents",
    description:
      "Build sophisticated AI applications with Next.js. Implement Retrieval Augmented Generation, autonomous agents, and advanced LLM integration.",
    icon: <Brain size={64} />,
    rating: 4.9,
    lessons: 45,
    category: "by-project",
    technologies: ["Next.js", "LangChain", "LangSmith", "Vector Databases"],
    level: "advanced",
  },
  {
    title: "Autonomous Agent Development with Next.js",
    description:
      "Build intelligent, autonomous agents that can reason, plan, and execute tasks using Next.js and modern AI frameworks.",
    icon: <Bot size={64} />,
    rating: 4.8,
    lessons: 38,
    category: "by-project",
    technologies: ["Next.js", "AI Agents", "OpenAI", "Function Calling"],
    level: "advanced",
  },
  {
    title: "Headless CMS-Driven Website with Next.js",
    description:
      "Build a complete content-managed website using Next.js with different headless CMS systems as backends.",
    icon: <Layout size={64} />,
    rating: 4.7,
    lessons: 36,
    category: "by-project",
    technologies: ["Next.js", "Sanity", "Payload CMS", "Contentful"],
    level: "intermediate",
  },
  {
    title: "Next.js E-commerce with Stripe Integration",
    description:
      "Build a complete online store with Next.js featuring Stripe payments, product management, and order processing.",
    icon: <ShoppingCart size={64} />,
    rating: 4.9,
    lessons: 48,
    category: "by-project",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    level: "intermediate",
  },
  {
    title: "Digital Ocean App Platform with Next.js",
    description:
      "Deploy and scale Next.js applications on Digital Ocean's App Platform. Master CI/CD, monitoring, and cloud services integration.",
    icon: <Cloud size={64} />,
    rating: 4.8,
    lessons: 32,
    category: "by-project",
    technologies: ["Next.js", "Digital Ocean", "CI/CD", "Monitoring"],
    level: "intermediate",
  },

  // Courses with Languages
  {
    title: "Next.js with Node.js Backend",
    description:
      "Build full-stack applications with Next.js frontend and Express/Node.js backend services. Structure microservices architecture.",
    icon: <Server size={64} />,
    rating: 4.9,
    lessons: 38,
    category: "with-languages",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB"],
    level: "beginner",
  },
  {
    title: "Next.js with Python (FastAPI) Integration",
    description:
      "Connect Next.js frontends with Python FastAPI backends for high-performance, type-safe API development.",
    icon: <Code size={64} />,
    rating: 4.8,
    lessons: 34,
    category: "with-languages",
    technologies: ["Next.js", "Python", "FastAPI", "TypeScript"],
    level: "intermediate",
  },
  {
    title: "Next.js with Go Backend Services",
    description:
      "Learn to build high-performance backend services in Go that integrate seamlessly with Next.js applications.",
    icon: <Server size={64} />,
    rating: 4.7,
    lessons: 32,
    category: "with-languages",
    technologies: ["Next.js", "Go", "REST", "gRPC"],
    level: "advanced",
  },
  {
    title: "Next.js with Rust for WebAssembly",
    description:
      "Enhance your Next.js applications with high-performance Rust code compiled to WebAssembly for critical operations.",
    icon: <Cpu size={64} />,
    rating: 4.9,
    lessons: 36,
    category: "with-languages",
    technologies: ["Next.js", "Rust", "WebAssembly", "TypeScript"],
    level: "advanced",
  },
  {
    title: "Laravel PHP Integration with Next.js",
    description:
      "Connect Next.js frontends to Laravel PHP backends. Ideal for migrating legacy systems to modern frontends.",
    icon: <Globe size={64} />,
    rating: 4.7,
    lessons: 30,
    category: "with-languages",
    technologies: ["Next.js", "PHP", "Laravel", "RESTful APIs"],
    level: "intermediate",
  },
  {
    title: "Next.js with NestJS Backend",
    description:
      "Create enterprise-grade applications with Next.js and NestJS. TypeScript end-to-end for maximum type safety.",
    icon: <Server size={64} />,
    rating: 4.8,
    lessons: 42,
    category: "with-languages",
    technologies: ["Next.js", "NestJS", "TypeScript", "GraphQL"],
    level: "intermediate",
  },
  {
    title: "Ruby on Rails API with Next.js Frontend",
    description:
      "Learn to build Next.js frontends that consume Ruby on Rails APIs. Perfect for startups and rapid development.",
    icon: <Globe size={64} />,
    rating: 4.6,
    lessons: 34,
    category: "with-languages",
    technologies: ["Next.js", "Ruby", "Rails", "PostgreSQL"],
    level: "intermediate",
  },
  {
    title: "Next.js with Spring Boot Integration",
    description:
      "Build enterprise applications with Next.js frontends and Spring Boot Java backends. Master API design and authentication.",
    icon: <Coffee size={64} />,
    rating: 4.7,
    lessons: 40,
    category: "with-languages",
    technologies: ["Next.js", "Java", "Spring Boot", "REST"],
    level: "advanced",
  },
  {
    title: "Next.js with Encore.ts Backend Development",
    description:
      "Create type-safe, cloud-native backends with Encore.ts that seamlessly integrate with Next.js applications.",
    icon: <Server size={64} />,
    rating: 4.8,
    lessons: 32,
    category: "with-languages",
    technologies: ["Next.js", "Encore.ts", "TypeScript", "Microservices"],
    level: "intermediate",
  },
  {
    title: "Next.js with Convex for Real-time Applications",
    description:
      "Build reactive, real-time applications with Next.js and Convex database. Perfect for collaborative and live-updating apps.",
    icon: <RefreshCw size={64} />,
    rating: 4.9,
    lessons: 34,
    category: "with-languages",
    technologies: ["Next.js", "Convex", "TypeScript", "Real-time Data"],
    level: "intermediate",
  },
  {
    title: "Next.js DevOps: Docker, GitHub Actions, and Kubernetes",
    description:
      "Master containerization and orchestration for Next.js applications. Build CI/CD pipelines and deploy to Kubernetes clusters.",
    icon: <Server size={64} />,
    rating: 4.8,
    lessons: 38,
    category: "with-languages",
    technologies: ["Next.js", "Docker", "GitHub Actions", "Kubernetes"],
    level: "advanced",
  },
];
