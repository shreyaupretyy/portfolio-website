import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Shreya_Uprety_Resume.pdf';
    link.download = 'Shreya_Uprety_Resume.pdf';
    link.click();
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollTo('top')}
            className="text-sm font-semibold text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
          >
            SU
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`relative px-3 py-1.5 text-[13px] transition-colors rounded-md ${
                  activeSection === item.toLowerCase()
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                <span className="font-mono text-[10px] text-gray-300 mr-1">0{i + 1}.</span>
                {item}
              </button>
            ))}
            <div className="w-px h-4 bg-gray-200 mx-2" />
            <button
              onClick={handleResumeDownload}
              className="ml-1 px-3.5 py-1.5 text-[13px] font-medium text-gray-900 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              Resume
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-500 hover:text-gray-900 p-1"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 space-y-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`block w-full text-left px-2 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-gray-900 bg-gray-50 font-medium'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="font-mono text-[11px] text-gray-300 mr-2">0{i + 1}.</span>
                {item}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="block w-full text-left px-2 py-2 text-sm text-gray-900 font-medium"
            >
              Download Resume
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
