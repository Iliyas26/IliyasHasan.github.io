import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Lead SDET",
      company: "Jet2 Travel Technology Pvt Ltd",
      period: "Sep 2022 – Present",
      responsibilities: [
        "Defined quality strategy and led test planning resulting in 40% reduction in execution time and 95% automation coverage across UI and API layers",
        "Orchestrated cross-functional automation initiatives, mentoring 4 team members and establishing standards that improved team productivity by 60%",
        "Designed and operationalized AI-assisted development workflows using GitHub Copilot with custom prompt templates for SpecFlow feature files and step definitions, accelerating feature automation delivery by 30% while maintaining code quality standards",
        "Established AI governance guidelines (review, validation, and security checks) ensuring safe and consistent use of AI-generated test code across the team",
        "Architected and delivered enterprise-scale automation platform supporting 500+ scenarios across UI, API, and performance testing using Selenium, Playwright, and k6",
        "Built CI/CD quality gates and pipeline governance reducing deployment failures by 70% and enabling 3x faster release cycles",
        "Drove technical excellence through code review practices and reliability engineering, achieving 99.9% test stability and zero production defects for 6 consecutive releases"
      ]
    },
    {
      title: "QA Consultant",
      company: "Global Logic Pvt Ltd",
      period: "Dec 2021 – Sep 2022",
      responsibilities: [
        "Served as core member of QA Center of Excellence, defining testing standards and best practices across multiple client programs",
        "Led and mentored a QA team of 8 engineers, acting as technical escalation point and advisor to stakeholders",
        "Architected and implemented UI automation framework using Selenium and C# with Page Object Model and SOLID principles",
        "Built scalable API automation framework using RestSharp and HttpClient with data-driven and contract-based testing strategies for 200+ endpoints",
        "Designed and executed performance testing strategy using JMeter, improving API response times by 40% and meeting 99.9% uptime SLA",
        "Established Azure DevOps CI/CD governance reducing manual testing effort by 70% and improving release confidence"
      ]
    },
    {
      title: "Senior Automation Test Developer",
      company: "Microlise Telematics Pvt Ltd",
      period: "June 2017 – Dec 2021",
      responsibilities: [
        "Designed and evolved C# .NET automation framework using StructureMap and SOLID principles for large-scale system testing",
        "Automated and maintained 680+ test scenarios for web and embedded systems with high reliability",
        "Developed Windows-based simulator for telemetry data playback enabling complex system validation",
        "Integrated automation into Jenkins pipelines enabling continuous testing and faster feedback loops",
        "Collaborated with developers and product teams to analyze requirements and embed testability into system design"
      ]
    },
    {
      title: "Senior System Engineer",
      company: "Infosys Ltd",
      period: "Feb 2014 – June 2017",
      responsibilities: [
        "Built PowerShell-based automation for CRM server provisioning and environment setup",
        "Developed mobile automation solutions using Appium and Selenium C# for iOS and Android platforms",
        "Partnered with development teams to perform unit and integration testing and resolve quality issues early",
        "Gathered requirements and delivered customized automation solutions for enterprise clients"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
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