import React from 'react';

const experiences = [
  {
    role: 'LLM Researcher and Engineer',
    company: 'MedforceAI',
    type: 'Full-time · Remote',
    period: 'Jan 2026 — Present',
    bullets: [
      'Designed and built AI-powered systems for medical pre-consultation and clinic management.',
      'Architected the transition from a monolithic system to an event-driven, multi-agent architecture.',
      'Developed and optimized chat and voice agents for medical terminology transcription and interpretation.',
      'Contributed to technical documentation and investor presentations, simplifying complex AI workflows for diverse audiences.',
    ],
  },
  {
    role: 'AI Fellow',
    company: 'Fusemachines',
    type: 'Fellowship · Remote',
    period: 'May 2025 — Dec 2025',
    bullets: [
      'Completed an intensive fellowship in advanced machine learning and AI applications.',
      'Worked on production ML systems, NLP pipelines, and deep learning architectures.',
    ],
  },
];

const education = {
  degree: 'B.E. Computer Engineering',
  school: 'Tribhuvan University, IOE — Pulchowk Campus',
  period: '2022 — 2026',
  details:
    'Data Structures & Algorithms, Database Management, Computer Networks, Software Engineering, Microprocessors',
};

const Experience = () => {
  return (
    <section id="experience" className="py-28 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-sm text-gray-300">03.</span>
          <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          <div className="flex-1 h-px bg-gray-100 ml-4" />
        </div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-100" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.role + exp.company} className="relative pl-8">
                <div className="absolute left-0 top-[7px] w-[7px] h-[7px] rounded-full bg-gray-300 -translate-x-[3px]" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-mono text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-0.5">{exp.company} · {exp.type}</p>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-500 leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-gray-300 before:text-xs"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
          </div>
          <div className="pl-8 relative">
            <div className="absolute left-0 top-[7px] w-[7px] h-[7px] rounded-full bg-gray-300 -translate-x-[3px]" />
            <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-100" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h4 className="font-medium text-gray-900">{education.degree}</h4>
              <span className="text-xs font-mono text-gray-400 whitespace-nowrap">
                {education.period}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-0.5">{education.school}</p>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              {education.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
