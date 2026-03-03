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
      'A modular RAG system for legal document analysis with hybrid retrieval, knowledge graph query expansion, cross-encoder reranking, and LoRA-tuned LLaMA generation. Features NER-based preprocessing and hallucination validation for reliable legal research and case law analysis.',
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
      'A deep learning system for identifying plant diseases from leaf images. Uses convolutional neural networks trained on labeled datasets to classify diseases across plant species, enabling early diagnosis and treatment recommendations for agricultural applications.',
    tech: ['Python', 'CNN', 'Computer Vision', 'Jupyter', 'Deep Learning'],
    github: 'https://github.com/shreyaupretyy/plant-disease-detection',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
