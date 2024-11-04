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
          <div className="mb-8">
            <img
              src={profileImg}
              alt="Iliyas Hasan"
              className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg"
              onError={handleImageError}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Iliyas Hasan
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Senior SDET | Automation Expert
          </h2>
          <p className="max-w-2xl text-gray-600 mb-8">
            Dynamic IT professional with 10 years of experience specializing in
            test automation and quality assurance. Expert in C#, Python,
            Selenium, and modern testing frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Terminal className="w-5 h-5 text-blue-600" />
              <span>Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Code2 className="w-5 h-5 text-blue-600" />
              <span>C# & Python</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <TestTubes className="w-5 h-5 text-blue-600" />
              <span>CI/CD Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
