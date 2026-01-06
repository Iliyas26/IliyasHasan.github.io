import React from 'react';
import { Code2, TestTubes, Users, Workflow } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Workflow,
      title: "Quality Architecture",
      description: "Designed end-to-end quality architecture covering UI, API, contract, and performance testing aligned with microservices and CI/CD."
    },
    {
      icon: TestTubes,
      title: "Test Strategy & Engineering",
      description: "Defined test strategy for scalable systems including service virtualization (WireMock), contract testing, and environment isolation."
    },
    {
      icon: Code2,
      title: "Automation Platform Design",
      description: "Built enterprise-grade automation platforms using C#, SpecFlow, Playwright, and Typescript with maintainable, scalable design."
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Led and mentored cross-functional QA teams, defined engineering standards, and acted as technical escalation point."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="max-w-[65ch] mx-auto mb-12 text-center">
          <p className="text-gray-600 leading-relaxed">
            Lead SDET / Test Architect with 10+ years of experience building and scaling quality
            engineering systems for web, mobile, and API-driven platforms. I specialize in designing
            automation architectures, embedding quality into CI/CD pipelines, and enabling teams to
            deliver faster with confidence. My focus is on creating sustainable test ecosystems —
            not just test suites — that scale with product and organizational growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}