import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Lead SDET",
      company: "Jet2 Travel Technology Pvt Ltd",
      period: "Sep 2022 – Present",
      responsibilities: [
        "Led strategic test planning and implementation, resulting in 40% reduction in test execution time and 95% test automation coverage",
        "Orchestrated cross-functional automation initiatives, mentoring 4 team members and establishing best practices that improved team productivity by 60%",
        "Designed and implemented AI-powered template prompts for GitHub Copilot integration within automation framework, resulting in 30% faster feature automation development and 30% increase in ROI",
        "Architected and delivered enterprise-scale automation framework supporting 500+ test scenarios across API, UI, and performance testing using Selenium, Playwright, and K6",
        "Established CI/CD pipeline standards and governance, reducing deployment failures by 70% and enabling 3x faster release cycles",
        "Drove technical excellence through code review processes and quality gates, achieving 99.9% test reliability and zero production defects in 6 consecutive releases"
      ]
    },
    {
      title: "QA Consultant",
      company: "Global Logic Pvt Ltd",
      period: "Dec 2021 – Sep 2022",
      responsibilities: [
        "Served as key member of Center of Excellence (COE) team, establishing testing standards and best practices across multiple client projects",
        "Led and mentored a dynamic QA team of 8 members, driving technical excellence and project delivery while serving as technical escalation point",
        "Architected and developed comprehensive UI automation framework from scratch using Page Object Model (POM) design pattern with Selenium and C#",
        "Built robust API testing framework from ground up using RestSharp and HTTP client, implementing data-driven testing strategies for 200+ API endpoints",
        "Designed and executed performance testing solutions using JMeter, achieving 40% improvement in API response times and 99.9% uptime SLA",
        "Established Azure DevOps CI/CD pipeline governance and managed test execution automation, reducing manual testing effort by 70%"
      ]
    },
    {
      title: "Senior Automation Test Developer",
      company: "Microlise Telematics Pvt Ltd",
      period: "June 2017 – Dec 2021",
      responsibilities: [
        "Analyzed requirements and technical specifications for system tests",
        "Developed C# .Net automation framework for Amber project using structure Map and SOLID principles",
        "Automated and modified around 680 tests for web and embedded applications",
        "Created Windows simulator app for data playback",
        "Maintained code and recorded defects in TFS (Team Foundation Server)",
        "Created CI/CD pipeline using Jenkins"
      ]
    },
    {
      title: "Senior System Engineer",
      company: "Infosys Ltd",
      period: "Feb 2014 – June 2017",
      responsibilities: [
        "Created PowerShell automation scripts using WTT for CRM server and machine setup",
        "Developed Appium (Selenium C#) automation scripts for IOS and Android devices",
        "Conducted unit testing and resolved issues with automation scripts",
        "Gathered requirements and provided solutions/customization options"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <div className="text-blue-600 font-medium">{exp.company}</div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
              </div>
              <ul className="space-y-2 ml-10">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{resp}</span>
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