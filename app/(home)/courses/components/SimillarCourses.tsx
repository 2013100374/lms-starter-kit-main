import {
  BookOpen,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Star,
} from "lucide-react";
import React from "react";

export default function SimillarCourses() {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-16">
      {/* Similar Courses Section */}
      <section className="mt-16 pt-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
          Similar Courses You Might Like
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Continue your learning journey with these complementary courses
          designed to expand your Next.js expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Similar Course 1 */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition duration-300">
            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <div className="absolute inset-0 opacity-50 flex items-center justify-center">
                <Database size={64} />
              </div>
              <div className="absolute top-4 left-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
                By Skill
              </div>
              <div className="absolute top-4 right-4 flex items-center">
                <div className="flex items-center px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                  <Star className="w-3 h-3 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium">4.8</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
                Intermediate
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                GraphQL Integration for Next.js Apps
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Build robust APIs with GraphQL and Next.js. Learn Apollo Client,
                schema design, and real-time data fetching.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  GraphQL
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  Apollo
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  TypeScript
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm">
                  <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                  <span className="text-gray-400">36 lessons</span>
                </div>
                <div className="text-purple-400 font-medium flex items-center">
                  View Course <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Similar Course 2 */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition duration-300">
            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <div className="absolute inset-0 opacity-50 flex items-center justify-center">
                <Globe size={64} />
              </div>
              <div className="absolute top-4 left-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
                By Skill
              </div>
              <div className="absolute top-4 right-4 flex items-center">
                <div className="flex items-center px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                  <Star className="w-3 h-3 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium">4.7</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
                Intermediate
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                Authentication in Next.js Applications
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Implement secure authentication systems using Next.js. Learn
                JWT, OAuth, NextAuth.js, and best security practices.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  NextAuth.js
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  JWT
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  OAuth
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm">
                  <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                  <span className="text-gray-400">28 lessons</span>
                </div>
                <div className="text-purple-400 font-medium flex items-center">
                  View Course <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Similar Course 3 */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition duration-300">
            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <div className="absolute inset-0 opacity-50 flex items-center justify-center">
                <Cpu size={64} />
              </div>
              <div className="absolute top-4 left-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
                By Skill
              </div>
              <div className="absolute top-4 right-4 flex items-center">
                <div className="flex items-center px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md">
                  <Star className="w-3 h-3 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium">4.9</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-xs font-medium">
                Advanced
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                Next.js Performance Optimization
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Optimize your Next.js applications for lightning-fast
                performance. Master lazy loading, code splitting, and caching
                strategies.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  Web Vitals
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  Lighthouse
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50">
                  SEO
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm">
                  <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                  <span className="text-gray-400">32 lessons</span>
                </div>
                <div className="text-purple-400 font-medium flex items-center">
                  View Course <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
