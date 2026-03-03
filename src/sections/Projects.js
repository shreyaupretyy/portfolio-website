import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Medical QA System',
    description:
      'A retrieval-augmented generation pipeline for clinical question-answering. Combines multi-stage retrieval (BM25 + semantic search), cross-encoder reranking, and multi-hop reasoning with Chain-of-Thought and Tree-of-Thought strategies. Includes hallucination detection and medical safety verification.',
    tech: ['Python', 'RAG', 'LangChain', 'FAISS', 'BM25'],
    github: 'https://github.com/shreyaupretyy/medical-qa-system',
  },
  {
    title: 'LegalDoc RAG',
    description:
      'A modular RAG system for legal document analysis with hybrid retrieval, knowledge graph query expansion, cross-encoder reranking, and LoRA-tuned LLaMA generation. Features NER-based preprocessing and hallucination validation for reliable legal research.',
    tech: ['Python', 'LLaMA', 'LoRA', 'FAISS', 'NER', 'Streamlit'],
    github: 'https://github.com/shreyaupretyy/legaldoc-rag',
  },
  {
    title: 'StockSage',
    description:
      'An AI-powered stock analysis platform for the Nepali stock market combining ML-based price forecasting with historical market data. Features sector-wise analysis, company profiles, and an interactive analytics dashboard for data-driven investment insights.',
    tech: ['Python', 'Flask', 'React', 'Tailwind CSS', 'ML', 'REST API'],
    github: 'https://github.com/shreyaupretyy/StockSage',
  },
  {
    title: 'Plant Disease Detection',
    description:
      'A deep learning system for identifying plant diseases from leaf images. Uses convolutional neural networks trained on labeled datasets to classify diseases across plant species, enabling early diagnosis and treatment recommendations for agriculture.',
    tech: ['Python', 'CNN', 'Computer Vision', 'Jupyter', 'Deep Learning'],
    github: 'https://github.com/shreyaupretyy/plant-disease-detection',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <li key={project.title} className="mb-12">
              <div className="group relative grid pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-50/80 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10">
                  <h3 className="font-medium leading-snug text-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-800 hover:text-teal-600 focus-visible:text-teal-600"
                    >
                      <span>
                        {project.title}
                        <ArrowUpRight size={14} className="ml-1 inline-block -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-500">
                    {project.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tech.map((t) => (
                      <li key={t} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium leading-5 text-teal-700">
                          {t}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <a
            href="https://github.com/shreyaupretyy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium leading-tight text-slate-800 hover:text-teal-600 transition-colors"
          >
            <span className="border-b border-transparent pb-px group-hover:border-teal-300 transition-colors">
              View Full Project Archive
            </span>
            <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
