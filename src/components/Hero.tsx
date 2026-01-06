import React from 'react';
import { Terminal, Code2, TestTubes } from 'lucide-react';
import profileImg from '../assets/iliyas_pic.jpg';

export function Hero() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load');
    console.log('Image src:', e.currentTarget.src);
  };

  return (
    <section
      id="home"
      className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">

          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImg}
              alt="Iliyas Hasan"
              className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
              onError={handleImageError}
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Iliyas Hasan
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-gray-600 mb-5">
            Lead SDET / Test Architect | Designing Scalable Test Systems
          </h2>

          {/* Summary — constrained width for readability */}
          <p className="max-w-[65ch] text-gray-600 mb-8 leading-relaxed">
            Lead SDET / Test Architect with 10+ years of experience designing scalable automation
            platforms for web and API-driven systems. Specialized in building enterprise-grade test
            frameworks, integrating quality into CI/CD pipelines, and driving measurable improvements
            in delivery speed and product reliability. Proven leader in mentoring teams, defining test
            strategy, and partnering with engineering to embed quality across the SDLC.
          </p>

          {/* Capability Chips */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Terminal className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Automation Architecture
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Code2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                C# · TypeScript · Python
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <TestTubes className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                CI/CD & Quality Gates
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}