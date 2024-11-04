import React from 'react';
import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'ISTQB Foundation Level',
      description: 'Certified Software Tester with comprehensive knowledge of testing principles',
      icon: Award
    },
    {
      title: 'Microsoft Certification in Programming C#',
      description: 'Professional certification demonstrating expertise in C# programming',
      icon: Award
    },
    {
      title: 'Microsoft Certification in Software Testing',
      description: 'Specialized certification in software testing with Visual Studio',
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <cert.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
              </div>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}