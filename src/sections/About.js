import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900">About</h2>

        <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
          <p>
            I work on AI systems that solve real problems in healthcare, finance, and
            legal tech. At MedforceAI, I design and build multi-agent architectures
            for medical pre-consultation and clinic management — from chat and voice
            agents to event-driven pipelines handling medical terminology transcription
            and interpretation.
          </p>
          <p>
            My background spans the full ML lifecycle: training and fine-tuning models,
            building retrieval-augmented generation pipelines, and deploying production
            systems with FastAPI and Docker. I focus on applied machine learning — taking
            research ideas and turning them into working software that people actually use.
          </p>
          <p>
            Currently completing a B.E. in Computer Engineering at Pulchowk Campus
            (Tribhuvan University). Previously an AI Fellow at Fusemachines, where I
            deepened my work in advanced ML, NLP, and production AI systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
