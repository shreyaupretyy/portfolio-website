import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-28 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-gray-300">01.</span>
          <h2 className="text-2xl font-bold text-gray-900">About</h2>
          <div className="flex-1 h-px bg-gray-100 ml-4" />
        </div>

        <div className="space-y-5 text-gray-500 leading-[1.8]">
          <p>
            I work on AI systems that solve real problems in healthcare, finance, and
            legal tech. At{' '}
            <span className="text-gray-900 font-medium">MedforceAI</span>, I design
            and build multi-agent architectures for medical pre-consultation and clinic
            management — from chat and voice agents to event-driven pipelines handling
            medical terminology transcription and interpretation.
          </p>
          <p>
            My background spans the full ML lifecycle: training and fine-tuning models,
            building retrieval-augmented generation pipelines, and deploying production
            systems with FastAPI and Docker. I focus on{' '}
            <span className="text-gray-900 font-medium">applied machine learning</span>{' '}
            — taking research ideas and turning them into working software that people
            actually use.
          </p>
          <p>
            Currently completing a B.E. in Computer Engineering at{' '}
            <span className="text-gray-900 font-medium">Pulchowk Campus</span>{' '}
            (Tribhuvan University). Previously an AI Fellow at{' '}
            <span className="text-gray-900 font-medium">Fusemachines</span>, where I
            deepened my work in advanced ML, NLP, and production AI systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
