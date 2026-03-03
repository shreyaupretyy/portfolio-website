import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

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
      { rootMargin: '-35% 0px -65% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-6 w-20 h-20 rounded-full overflow-hidden ring-2 ring-slate-100 hover:ring-teal-200 transition-all duration-300">
          <img
            src="/assets/images/profile.jpeg"
            alt="Shreya Uprety"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          <a href="/">Shreya Uprety</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700">
          AI Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build intelligent systems at the intersection of machine learning
          research and production engineering.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center py-3"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span
                    className={`mr-4 h-px transition-all duration-300 ${
                      activeSection === item.id
                        ? 'w-16 bg-slate-900'
                        : 'w-8 bg-slate-300 group-hover:w-16 group-hover:bg-slate-600'
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-slate-900'
                        : 'text-slate-500 group-hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            href="https://github.com/shreyaupretyy"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={22} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shreya-uprety/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </li>
        <li>
          <a
            href="mailto:shreyyauprety@gmail.com"
            className="block text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="Email"
            title="Email"
          >
            <Mail size={22} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
