import React from 'react';
import { Code2, TestTubes, Users, Workflow } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Proficient in C#, Python Automation, SpecFlow, Selenium, and modern testing frameworks"
    },
    {
      icon: TestTubes,
      title: "Testing Specialist",
      description: "Expert in API automation using RestSharp, HTTP client, WireMock, and Interceptor pattern"
    },
    {
      icon: Workflow,
      title: "Framework Developer",
      description: "Designed and implemented robust automation frameworks using SpecFlow BDD and Selenium WebDriver"
    },
    {
      icon: Users,
      title: "Team Leader",
      description: "Successfully led and mentored QA teams, driving technical excellence and project delivery"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 text-center leading-relaxed">
            Dynamic IT professional with 10 years of experience in software testing and automation. 
            Specialized in creating robust test frameworks and implementing comprehensive testing strategies. 
            Passionate about delivering high-quality software through automated testing solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}