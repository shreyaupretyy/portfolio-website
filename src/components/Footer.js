import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mb-8 p-2 text-gray-300 hover:text-gray-900 border border-gray-100 rounded-full hover:border-gray-200 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>

          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://github.com/shreyaupretyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-uprety/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:shreyyauprety@gmail.com"
              className="text-gray-300 hover:text-gray-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-gray-300 font-mono">
            Built by Shreya Uprety &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
