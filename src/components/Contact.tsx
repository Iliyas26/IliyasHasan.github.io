import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://www.linkedin.com/in/iliyas-hasan-08454a42"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>Connect on LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-6 h-6" />
              <span>Contact me for collaboration opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}