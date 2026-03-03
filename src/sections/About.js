import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
          About
        </h2>
      </div>

      <div className="text-slate-500 leading-relaxed space-y-4">
        <p>
          Back in 2022, I started my computer engineering degree and quickly fell
          into the world of machine learning and AI. Fast-forward to today, and
          I've had the privilege of building AI systems at a{' '}
          <a
            href="https://www.linkedin.com/company/medforceai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-teal-600 transition-colors"
          >
            healthcare AI startup
          </a>
          , completing an intensive{' '}
          <span className="font-medium text-slate-700">AI fellowship</span> at{' '}
          <a
            href="https://fusemachines.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-teal-600 transition-colors"
          >
            Fusemachines
          </a>
          , and shipping research-grade ML systems into production.
        </p>
        <p>
          My main focus these days is designing and building multi-agent AI
          architectures at{' '}
          <a
            href="https://www.linkedin.com/company/medforceai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-teal-600 transition-colors"
          >
            MedforceAI
          </a>
          {' '}— from chat and voice agents handling medical terminology to
          event-driven pipelines for clinic management. I work across the full
          stack of applied ML: fine-tuning models, building RAG pipelines, and
          deploying production systems with FastAPI and Docker.
        </p>
        <p>
          When I'm not engineering AI systems, I'm usually exploring new research
          papers, contributing to open-source projects, or working on side
          projects in NLP and computer vision.
        </p>
      </div>
    </section>
  );
};

export default About;
