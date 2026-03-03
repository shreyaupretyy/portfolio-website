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
    <section id="projects" className="py-28 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-sm text-gray-300">02.</span>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <div className="flex-1 h-px bg-gray-100 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-gray-300 group-hover:text-gray-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5"
                />
              </div>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 text-gray-400 bg-gray-50 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
