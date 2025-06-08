import { Github, Globe, Twitter, Youtube } from "lucide-react";
import React from "react";

export default function CourseInstructor() {
  return (
    <div className="container max-w-3xl mx-auto py-16">
      {/* About the Instructor Section */}
      <section className="mb-16 bg-gray-800/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
          About the Instructor
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="/jb.jpg"
                  alt="Alex Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 border-opacity-50 animate-pulse"></div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
            <p className="text-blue-400 mb-4">
              Senior Frontend Engineer & Next.js Expert
            </p>

            <p className="text-gray-300 mb-6">
              Alex has over 10 years of experience building production
              applications with React and TypeScript. He is worked with
              companies like Airbnb, Shopify, and Vercel, helping teams adopt
              Next.js and build type-safe applications at scale. A recognized
              TypeScript expert, he is spoken at conferences worldwide and
              contributed to the Next.js core.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">10+</p>
                <p className="text-xs text-gray-400">Years Experience</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">85K+</p>
                <p className="text-xs text-gray-400">Students</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">12</p>
                <p className="text-xs text-gray-400">Courses</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">4.9</p>
                <p className="text-xs text-gray-400">Average Rating</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
