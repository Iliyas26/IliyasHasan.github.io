import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Skills() {
  const skills = {
    'Quality Architecture': [
      'Test Strategy & Test Pyramid',
      'Shift-Left & Shift-Right Testing',
      'Contract Testing',
      'Service Virtualization',
      'Flaky Test Management',
      'Quality Gates & Release Governance'
    ],
    'Automation Engineering': [
      'C#',
      'Python',
      'TypeScript / JavaScript',
      'Selenium',
      'Playwright',
      'SpecFlow',
      'Appium',
      'Page Object Model',
      'SOLID & Clean Code'
    ],
    'API & Integration Testing': [
      'RestSharp',
      'HttpClient',
      'WireMock',
      'Data-Driven Testing',
      'Schema & Contract Validation'
    ],
    'Performance & Reliability': [
      'k6',
      'JMeter',
      'Load & Stress Testing',
      'Reliability Engineering',
      'Production Monitoring Signals'
    ],
    'DevOps & CI/CD': [
      'Jenkins',
      'Azure DevOps',
      'Docker',
      'Pipeline Quality Gates',
      'Environment Isolation'
    ],
    'AI & Productivity': [
      'GitHub Copilot',
      'Prompt Engineering for Test Automation',
      'AI-Assisted Code Reviews',
      'Responsible AI Usage & Governance'
    ],
    'Collaboration & Leadership': [
      'Technical Mentoring',
      'Code Reviews',
      'Architecture Reviews',
      'Stakeholder Communication',
      'Hiring & Interviewing'
    ],
    'Tooling & Platforms': [
      'Kafka',
      'Git',
      'JIRA',
      'Visual Studio',
      'VS Code'
    ]
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category}
              </h3>
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