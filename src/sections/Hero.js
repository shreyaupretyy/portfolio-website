import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Shreya_Uprety_Resume.pdf';
    link.download = 'Shreya_Uprety_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Shreya Uprety
        </h1>
        <p className="mt-4 text-lg text-gray-400 font-medium">
          AI Engineer &middot; ML Research &middot; Full-Stack AI Systems
        </p>
        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
          I build intelligent systems at the intersection of machine learning research
          and production engineering. Currently an LLM Researcher and Engineer at
          MedforceAI, architecting multi-agent AI systems for healthcare.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={handleResumeDownload}
            className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shreyaupretyy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-uprety/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shreyyauprety@gmail.com"
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <button
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="mt-16 text-gray-300 hover:text-gray-500 transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
