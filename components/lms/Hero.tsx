"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [animatedCounter, setAnimatedCounter] = useState(0);

  // Animation for stats counter
  useEffect(() => {
    const targetCount = 112; // 112% growth
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(progress * targetCount);

      if (frame === totalFrames) {
        setAnimatedCounter(targetCount);
        clearInterval(counter);
      } else {
        setAnimatedCounter(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Next.js Skills in High Demand —{" "}
                  <span className="font-bold">
                    {animatedCounter}% YoY Growth
                  </span>
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Next.js
                </span>{" "}
                and Accelerate Your Dev Career
              </h1>

              <p className="text-gray-300 text-lg md:text-xl">
                Industry-leading courses teaching the most in-demand skills for
                Next.js developers in 2025 and beyond. Learn from experts and
                build real-world projects.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center">
                  Explore Courses <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 rounded-md hover:bg-white/5 transition duration-300 flex items-center justify-center">
                  View Job Insights
                </button>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">
                    Expert-led courses
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    $147K
                  </div>
                  <div className="text-sm text-gray-400">Avg. salary</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    24.5K
                  </div>
                  <div className="text-sm text-gray-400">Graduates</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-md"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-xl"></div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    ~/next-academy/demo.tsx
                  </div>
                </div>

                <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span>
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-green-400">
                        &#123; useState &#125;
                      </span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-yellow-300">react</span>;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">2</span>
                    <span></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">3</span>
                    <span>
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-green-400">
                        &#123; motion &#125;
                      </span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-yellow-300">framer-motion</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">4</span>
                    <span></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">5</span>
                    <span>
                      <span className="text-purple-400">
                        export default function
                      </span>{" "}
                      <span className="text-yellow-300">HeroSection</span>()
                      &#123;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">6</span>
                    <span>
                      {" "}
                      <span className="text-blue-400">const</span> [
                      <span className="text-green-400">isHovered</span>,{" "}
                      <span className="text-green-400">setIsHovered</span>] ={" "}
                      <span className="text-yellow-300">useState</span>(
                      <span className="text-purple-400">false</span>);
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">7</span>
                    <span></span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">8</span>
                    <span>
                      {" "}
                      <span className="text-blue-400">return</span> (
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">9</span>
                    <span>
                      {" "}
                      &lt;<span className="text-blue-400">motion.div</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">10</span>
                    <span>
                      {" "}
                      <span className="text-green-400">whileHover</span>
                      =&#123;&#123;{" "}
                      <span className="text-yellow-300">scale</span>:{" "}
                      <span className="text-purple-400">1.05</span> &#125;&#125;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">11</span>
                    <span>
                      {" "}
                      <span className="text-green-400">className</span>=
                      <span className="text-yellow-300">next-card</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">12</span>
                    <span> &gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">13</span>
                    <span>
                      {" "}
                      <span className="text-gray-400">
                        Your amazing Next.js code here
                      </span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">14</span>
                    <span>
                      {" "}
                      &lt;/<span className="text-blue-400">motion.div</span>&gt;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">15</span>
                    <span> );</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">16</span>
                    <span>&#125;</span>
                  </div>
                </pre>

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>App Router</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>TypeScript</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Next.js 15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
