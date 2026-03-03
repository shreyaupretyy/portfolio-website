import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    period: '2026 — Present',
    role: 'LLM Researcher and Engineer',
    company: 'MedforceAI',
    url: 'https://www.linkedin.com/company/medforceai/',
    description:
      'Design and build AI-powered systems for medical pre-consultation and clinic management. Architected the transition from a monolithic system to an event-driven, multi-agent architecture. Develop and optimize chat and voice agents for medical terminology transcription and interpretation.',
    tech: ['Python', 'LLMs', 'RAG', 'FastAPI', 'Multi-agent Systems', 'Docker'],
  },
  {
    period: '2025 — 2025',
    role: 'AI Fellow',
    company: 'Fusemachines',
    url: 'https://fusemachines.com/',
    description:
      'Completed an intensive fellowship in advanced machine learning and AI applications. Worked on production ML systems, NLP pipelines, and deep learning architectures with industry mentorship.',
    tech: ['Python', 'PyTorch', 'NLP', 'Deep Learning', 'MLOps'],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp) => (
            <li key={exp.role + exp.company} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-50/80 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2" aria-label={exp.period}>
                  {exp.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-700">
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-800 hover:text-teal-600 focus-visible:text-teal-600"
                    >
                      <span>
                        {exp.role} ·{' '}
                        <span className="inline-block">
                          {exp.company}
                          <ArrowUpRight size={14} className="ml-0.5 inline-block -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-500">
                    {exp.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.tech.map((t) => (
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
        </ol>

        <div>
          <a
            href="/assets/resume/Shreya_Uprety_Resume.pdf"
            download="Shreya_Uprety_Resume.pdf"
            className="group inline-flex items-center font-medium leading-tight text-slate-800 hover:text-teal-600 transition-colors"
          >
            <span className="border-b border-transparent pb-px group-hover:border-teal-300 transition-colors">
              View Full Resume
            </span>
            <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
