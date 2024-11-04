import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Test Engineer",
      company: "Jet2 Travel Technology Pvt Ltd",
      period: "Sep 2022 – Present",
      responsibilities: [
        "Analyzing technical requirements/specification and implementing test plan",
        "Manage and drive Test automation activities within team",
        "Led automation of API and UI tests using Selenium with C# and Playwright",
        "Utilizing SpecFlow BDD with C# automation for feature files and step definitions",
        "Created POC for UI automation using python behave and pyTest",
        "Creating and executing performance/load testing scripts (using K6) for new APIs",
        "Reviewing test cases/test plan/test automation code for comprehensive coverage",
        "Conducting local tests using Docker containers",
        "Leading QA team of 4 members to deliver scrum goals, and guide through technical challenges"
      ]
    },
    {
      title: "QA Consultant",
      company: "Global Logic Pvt Ltd",
      period: "Dec 2021 – Sep 2022",
      responsibilities: [
        "Collaborated with stakeholders and analyze new feature requirements and technical specifications",
        "Designed and developed robust automation frameworks using POM for API and UI testing",
        "Developed and executed performance testing scripts using JMeter for new API services",
        "Designed data-driven SQL queries for scripting purposes",
        "Managed test execution via Azure Pipeline",
        "Directed and mentored a dynamic QA team of 8 members"
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