import { ArrowRight } from "lucide-react";
import React from "react";

export default function Insights() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Next.js Developer Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Based on analysis of 50+ job listings from top companies looking for
            Next.js talent
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/70 transition duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              $90K-$160K
            </div>
            <p className="text-gray-300 font-medium">Salary Range</p>
            <p className="text-sm text-gray-400 mt-2">
              Mid to senior level remote Next.js developers in the US market
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/70 transition duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              78%
            </div>
            <p className="text-gray-300 font-medium">Require TypeScript</p>
            <p className="text-sm text-gray-400 mt-2">
              Most jobs require TypeScript proficiency alongside Next.js
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/70 transition duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              60%
            </div>
            <p className="text-gray-300 font-medium">Mention GraphQL</p>
            <p className="text-sm text-gray-400 mt-2">
              GraphQL is the most common API technology paired with Next.js
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/70 transition duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              45%
            </div>
            <p className="text-gray-300 font-medium">Require AWS</p>
            <p className="text-sm text-gray-400 mt-2">
              Deployments and infrastructure using AWS services
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/70 transition duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              30%
            </div>
            <p className="text-gray-300 font-medium">Edge Runtime</p>
            <p className="text-sm text-gray-400 mt-2">
              Senior roles mention Edge Functions (Vercel/Cloudflare)
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-800/70 transition duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              #1
            </div>
            <p className="text-gray-300 font-medium">Framework Choice</p>
            <p className="text-sm text-gray-400 mt-2">
              Next.js dominates over Gatsby/Nuxt in fullstack roles
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition duration-300 inline-flex items-center">
            View Full Job Market Analysis{" "}
            <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
