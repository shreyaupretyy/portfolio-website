import React from 'react';
import Section from '../components/Section';

const Education = () => (
  <Section id="education" index="04" label="Education">
    <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
      <div className="pt-1 font-mono text-xs text-faint">
        2022 – 2026
      </div>
      <div>
        <h3 className="text-base text-ink">
          <span className="font-medium">B.E. Computer Engineering</span>
          <span className="text-faint">, </span>
          <a
            href="https://pcampus.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Pulchowk Campus
          </a>
        </h3>
        <p className="mt-1 text-sm text-faint">Tribhuvan University, IOE</p>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          Coursework that still shows up in my work: data structures and
          algorithms, databases, computer networks, and software engineering.
          The networks and systems side is a lot of why the event-driven
          rebuild at MedforceAI made sense to me.
        </p>
      </div>
    </div>
  </Section>
);

export default Education;
