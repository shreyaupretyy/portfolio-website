import React from 'react';

const skillGroups = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'C++', 'C', 'Java', 'SQL'],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'LangChain',
      'RAG',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML / CSS', 'Tailwind CSS', 'Chart.js'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Jupyter', 'FAISS'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap" aria-label={group.category}>
              {group.items.map((skill) => (
                <li key={skill} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium leading-5 text-teal-700">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
