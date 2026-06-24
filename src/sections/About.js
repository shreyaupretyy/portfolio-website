import React from 'react';
import Section from '../components/Section';

const About = () => (
  <Section id="about" index="01" label="About">
    <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted">
      <p>
        I started computer engineering at Pulchowk Campus in 2022. The first ML
        model I trained was a plant disease classifier for a class project, and
        the gap between a notebook that works and a system someone can rely on
        has shaped what I have wanted to do since.
      </p>
      <p>
        Most of my time now goes to{' '}
        <a
          href="https://www.linkedin.com/company/medforceai/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          MedforceAI
        </a>
        , where I helped move our pre-consultation product off a single
        monolithic service and onto an event-driven, multi-agent setup. Day to
        day that means writing FastAPI services, tuning retrieval, and getting
        chat and voice agents to read medical terms correctly instead of
        confidently wrong. Before this I spent a year in the{' '}
        <a
          href="https://fusemachines.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Fusemachines
        </a>{' '}
        AI fellowship, which is where most of my footing in NLP and deep
        learning came from.
      </p>
      <p>
        Outside work I read papers I do not fully understand yet, rebuild parts
        of them to see what breaks, and keep a few side projects in NLP and
        computer vision running.
      </p>
    </div>
  </Section>
);

export default About;
