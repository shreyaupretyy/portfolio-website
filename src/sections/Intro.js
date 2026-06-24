import React from 'react';

const Intro = () => (
  <section id="top" className="pt-16 pb-20 sm:pt-24 sm:pb-28" aria-label="Introduction">
    <div className="flex items-center gap-4">
      <img
        src="/assets/images/profile.jpeg"
        alt="Shreya Uprety"
        width="56"
        height="56"
        className="h-14 w-14 rounded-sm border border-line object-cover"
      />
      <div className="font-mono text-xs leading-relaxed text-faint">
        <p className="text-ink">Shreya Uprety</p>
        <p>AI Engineer · Kathmandu, Nepal</p>
      </div>
    </div>

    <h1 className="mt-10 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem]">
      I build LLM systems for healthcare that hold up
      in production.
    </h1>

    <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
      I am an AI engineer at{' '}
      <a
        href="https://www.linkedin.com/company/medforceai/"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        MedforceAI
      </a>
      , building the GenAI clinic OS with a London-based team. My work is the
      agent pipeline behind medical pre-consultation: chat and voice agents that
      read clinical terminology correctly, the retrieval that keeps them
      grounded, and the event-driven backend on Google Cloud that ties a
      clinic's records together. I spend most of my time on the parts that
      decide whether it works in practice: latency, retrieval quality, and what
      a model does when it is not sure.
    </p>

    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
      <a
        href="/assets/resume/Shreya_Uprety_Resume.pdf"
        className="text-ink underline decoration-accent decoration-1 underline-offset-4 hover:text-accent"
      >
        Resume
      </a>
      <a
        href="https://github.com/shreyaupretyy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-faint hover:text-ink"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/shreya-uprety/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-faint hover:text-ink"
      >
        LinkedIn
      </a>
      <a
        href="mailto:shreyyauprety@gmail.com"
        className="text-faint hover:text-ink"
      >
        Email
      </a>
    </div>
  </section>
);

export default Intro;
