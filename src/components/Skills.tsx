import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Skills() {
  const skills = {
    'Programming Languages': ['C#', 'Python', 'JavaScript'],
    'Automation Frameworks': ['Selenium', 'Playwright', 'SpecFlow', 'Appium'],
    'API Testing': ['RestSharp', 'HTTP Client', 'WireMock'],
    'CI/CD & Tools': ['Jenkins', 'Azure DevOps', 'Docker', 'Kafka'],
    'Testing Types': ['Functional', 'Integration', 'Performance', 'API', 'Mobile'],
    'Other Tools': ['Git', 'JIRA', 'Visual Studio', 'VS Code']
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}