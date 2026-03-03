import React from 'react';

const skillGroups = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'C++', 'C', 'Java', 'SQL'],
  },
  {
    category: 'ML / AI',
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
    <section id="skills" className="py-28 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-sm text-gray-300">04.</span>
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <div className="flex-1 h-px bg-gray-100 ml-4" />
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-500 px-3 py-1.5 border border-gray-100 rounded-md bg-gray-50/50 hover:border-gray-200 hover:text-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
