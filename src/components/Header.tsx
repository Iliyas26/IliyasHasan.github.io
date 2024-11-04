import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gray-800" onClick={handleNavClick}>Iliyas Hasan</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Experience</a>
            <a href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Certifications</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Contact</a>
            <a href="https://www.linkedin.com/in/iliyas-hasan-08454a42" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Experience</a>
              <a href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Certifications</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={handleNavClick}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}