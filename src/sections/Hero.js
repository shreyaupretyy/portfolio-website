import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Shreya_Uprety_Resume.pdf';
    link.download = 'Shreya_Uprety_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm font-mono text-gray-400 tracking-wide">
          Hi, my name is
        </p>

        <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
          Shreya Uprety
        </h1>

        <div className="mt-5 flex items-center justify-center gap-2 text-gray-400 text-sm font-medium">
          <span>AI Engineer</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>ML Research</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>Full-Stack AI Systems</span>
        </div>

        <p className="mt-8 text-gray-500 leading-relaxed max-w-xl mx-auto">
          I build intelligent systems at the intersection of machine learning
          research and production engineering. Currently an LLM Researcher and
          Engineer at MedforceAI, architecting multi-agent AI systems for healthcare.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleResumeDownload}
            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </button>
          <a
            href="mailto:shreyyauprety@gmail.com"
            className="px-6 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="https://github.com/shreyaupretyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-uprety/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shreyyauprety@gmail.com"
            className="text-gray-300 hover:text-gray-900 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
