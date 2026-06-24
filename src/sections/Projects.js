import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/Section';

const projects = [
  {
    title: 'Medical QA System',
    kind: 'RAG / clinical Q&A',
    problem:
      'A single-pass RAG setup kept answering clinical questions that the retrieved passages did not actually support.',
    detail:
      'I built a multi-stage pipeline with three-tier retrieval (BM25 for exact terms, FAISS for meaning, and a concept-based pass using UMLS expansion), then layered hybrid reasoning, confidence calibration, and a safety-verification module on top. The hard part was not retrieval but knowing when to refuse, so ungrounded questions get a "not enough evidence" answer instead of a fluent guess.',
    stack: ['Python', 'LangChain', 'LangGraph', 'FAISS', 'BM25', 'UMLS'],
    github: 'https://github.com/shreyaupretyy/medical-qa-system',
  },
  {
    title: 'LegalDoc RAG',
    kind: 'RAG / legal research',
    problem:
      'Legal questions rarely match the wording of the clause that answers them, so plain semantic search missed the relevant passages.',
    detail:
      'Hybrid BM25 and FAISS retrieval feeds a LoRA-tuned LLaMA for the legal reasoning, so the model could be fine-tuned on a single GPU. I shipped it as a full app: a React and Tailwind frontend over a FastAPI backend with a SQLAlchemy ORM, plus a validation pass that flags answers not backed by a cited passage.',
    stack: ['Python', 'LLaMA', 'LoRA', 'FAISS', 'FastAPI', 'React'],
    github: 'https://github.com/shreyaupretyy/legaldoc-rag',
  },
  {
    title: 'StockSage',
    kind: 'Forecasting / web app',
    problem:
      'Most market tools ignore the Nepali (NEPSE) market, and the data that exists is scattered and messy.',
    detail:
      'I built forecasting dashboards that pair price models with sentiment analysis on market news, served from a Django backend with a React frontend. Most of the work was the data: trading-day gaps, splits, and the long stretches where a stock simply does not trade.',
    stack: ['Python', 'Django', 'React', 'scikit-learn', 'NLP'],
    github: 'https://github.com/shreyaupretyy/StockSage',
  },
  {
    title: 'Plant Disease Detection',
    kind: 'Computer vision',
    problem:
      'Classifying crop diseases from a single leaf photo so a first diagnosis does not need a lab.',
    detail:
      'A multi-crop classifier spanning 34 disease classes across 8 crop species, built by transfer learning on ResNet50, EfficientNet-B0, and a Vision Transformer and comparing them. It taught me how much augmentation and class balance matter when the data leans toward a few common diseases, and why clean-split accuracy overstates real-world performance.',
    stack: ['Python', 'PyTorch', 'ResNet50', 'EfficientNet', 'ViT'],
    github: 'https://github.com/shreyaupretyy/plant-disease-detection',
  },
];

const Projects = () => (
  <Section id="projects" index="03" label="Selected Projects">
    <div className="divide-y divide-line">
      {projects.map((project, i) => (
        <article key={project.title} className={i === 0 ? 'pb-10' : 'py-10 last:pb-0'}>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-medium leading-tight text-ink">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1 hover:text-accent"
              >
                {project.title}
                <ArrowUpRight
                  size={18}
                  className="translate-y-0.5 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </h3>
            <span className="shrink-0 font-mono text-xs text-faint">
              {project.kind}
            </span>
          </div>
          <p className="mt-3 max-w-prose text-sm font-medium leading-relaxed text-ink">
            {project.problem}
          </p>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
            {project.detail}
          </p>
          <p className="mt-3 font-mono text-xs text-faint">
            {project.stack.join('  /  ')}
          </p>
        </article>
      ))}
    </div>

    <div className="mt-10">
      <a
        href="https://github.com/shreyaupretyy?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
      >
        More on GitHub
        <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  </Section>
);

export default Projects;
