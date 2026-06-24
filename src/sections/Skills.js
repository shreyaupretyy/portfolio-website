import React from 'react';
import Section from '../components/Section';

const groups = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
  {
    category: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'LangGraph', 'LLaMA', 'YOLOv8', 'Ollama', 'RAG', 'Computer Vision'],
  },
  { category: 'Web & Backend', items: ['FastAPI', 'Django', 'Flask', 'React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Data & Infra', items: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'FAISS', 'ChromaDB', 'Docker', 'Google Cloud', 'Git'] },
];

const Skills = () => (
  <Section id="stack" index="05" label="Stack">
    <p className="mb-8 max-w-prose text-sm leading-relaxed text-muted">
      Tools I reach for often, grouped by where they sit. Python and FastAPI are
      where I am fastest; the rest I pick up as a project needs them.
    </p>
    <dl className="divide-y divide-line">
      {groups.map((group) => (
        <div key={group.category} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <dt className="pt-0.5 font-mono text-xs text-faint">
            {group.category}
          </dt>
          <dd className="text-sm text-ink">{group.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
