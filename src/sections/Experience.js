import React from 'react';
import Section from '../components/Section';

const roles = [
  {
    period: 'Since Jan 2026',
    title: 'AI Engineer',
    company: 'MedforceAI',
    context: 'GenAI Clinic OS · Remote',
    url: 'https://www.linkedin.com/company/medforceai/',
    points: [
      'Led the move from a single monolithic service to an event-driven, multi-agent architecture on Google Cloud, so features ship on their own instead of redeploying the whole product.',
      'Built the chat and voice agents that transcribe and interpret medical terminology, with a retrieval and verification layer that cut the confident-but-wrong answers.',
      'Own the FastAPI backend, the retrieval stack (FAISS and ChromaDB), and the Docker setup the team deploys with.',
      'Write the technical docs and the material that goes into investor and stakeholder presentations.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'RAG', 'Google Cloud', 'Docker'],
  },
  {
    period: '2025',
    title: 'AI Fellow',
    company: 'Fusemachines',
    context: 'AI Fellowship',
    url: 'https://fusemachines.com/',
    points: [
      'Year-long applied-ML fellowship with industry mentorship and weekly project reviews.',
      'Built NLP and deep-learning pipelines end to end, from data prep through evaluation. Most of my PyTorch and MLOps habits come from here.',
    ],
    stack: ['Python', 'PyTorch', 'NLP', 'Deep Learning'],
  },
];

const Experience = () => (
  <Section id="work" index="02" label="Work">
    <ol className="space-y-12">
      {roles.map((role) => (
        <li key={role.company} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <div className="pt-1 font-mono text-xs text-faint">
            {role.period}
          </div>
          <div>
            <h3 className="text-base text-ink">
              <span className="font-medium">{role.title}</span>
              <span className="text-faint">, </span>
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {role.company}
              </a>
            </h3>
            {role.context && (
              <p className="mt-0.5 font-mono text-xs text-faint">{role.context}</p>
            )}
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {role.points.map((p) => (
                <li key={p} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-line">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-xs text-faint">
              {role.stack.join('  /  ')}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
