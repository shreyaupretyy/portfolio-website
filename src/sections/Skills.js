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
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-gray-500">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
