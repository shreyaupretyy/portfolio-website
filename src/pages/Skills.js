import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: <Brain size={32} />,
      skills: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Pandas',
        'NumPy',
      ],
    },
    {
      title: 'Web Development',
      icon: <Code size={32} />,
      skills: [
        'React',
        'JavaScript',
        'Express.js',
        'Flask',
        'Node.js',
        'HTML/CSS',
      ],
    },
    {
      title: 'Data & Databases',
      icon: <Database size={32} />,
      skills: [
        'SQL',
        'MongoDB',
        'PostgreSQL',
        'Data Visualization',
        'Statistical Analysis',
        'Big Data Processing',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={32} />,
      skills: [
        'Git',
        'Jupyter Notebook',
        'Google Colab',
        'Docker',
        'Linux',
        'AWS',
      ],
    },
  ];

  const mlFrameworks = [
    'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'NLTK',
    'Hugging Face', 'XGBoost', 'LightGBM', 'FastAPI', 'Streamlit', 'Gradio'
  ];

  const webTechnologies = [
    'React', 'Next.js', 'Django', 'Flask', 'Node.js', 'Express.js',
    'Tailwind CSS', 'Bootstrap', 'Material-UI', 'REST APIs', 'GraphQL', 'FastAPI'
  ];

  const dataTools = [
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau',
    'Power BI', 'Excel', 'Apache Spark', 'Kafka', 'Airflow', 'MLflow'
  ];

  const devTools = [
    'VS Code', 'PyCharm', 'Jupyter', 'Google Colab', 'Git', 'GitHub',
    'Docker', 'Postman', 'Figma', 'Slack', 'Notion', 'Anaconda'
  ];

  const programmingLanguages = [
    'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Java', 'HTML/CSS', 'R'
  ];

  return (
    <div className="section-padding bg-white min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My technical expertise spans machine learning, data science, and web development - 
            combining AI innovation with practical application development.
          </p>
        </div>

        {/* Main Skills Grid - UPDATED */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-white rounded-lg border border-gray-200 text-center hover:border-primary-300 transition-colors duration-200"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Programming Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {programmingLanguages.map((language, index) => (
              <div
                key={index}
                className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center hover:bg-indigo-100 transition-colors duration-200"
              >
                <span className="text-indigo-700 font-medium">{language}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ML Frameworks & Libraries */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Machine Learning & AI Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mlFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-200"
              >
                <span className="text-blue-700 font-medium">{framework}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Web Development Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {webTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 rounded-lg p-4 text-center hover:bg-green-100 transition-colors duration-200"
              >
                <span className="text-green-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Science Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Data Science & Analytics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dataTools.map((tool, index) => (
              <div
                key={index}
                className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors duration-200"
              >
                <span className="text-purple-700 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Development Environment
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {devTools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Machine Learning</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Supervised & Unsupervised Learning</li>
                <li>• Deep Learning & Neural Networks</li>
                <li>• Computer Vision</li>
                <li>• Natural Language Processing</li>
                <li>• Model Deployment & MLOps</li>
                <li>• Feature Engineering</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Data Science</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Data Analysis & Visualization</li>
                <li>• Statistical Modeling</li>
                <li>• Exploratory Data Analysis</li>
                <li>• A/B Testing</li>
                <li>• Business Intelligence</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Full Stack Development</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Frontend Development (React)</li>
                <li>• Backend APIs (Django, Flask, Node.js)</li>
                <li>• Database Design & Management</li>
                <li>• ML Model Integration</li>
                <li>• Responsive Web Design</li>
                <li>• RESTful API Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning & Certifications */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Currently Learning & Goals for 2025
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced AI & ML</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Large Language Models (LLMs)</li>
                <li>• Generative AI and Diffusion Models</li>
                <li>• Reinforcement Learning</li>
                <li>• MLOps and Model Monitoring</li>
                <li>• Edge AI and Model Optimization</li>
                <li>• Transformer Architectures</li>
                <li>• Multi-modal AI Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• TensorFlow Developer Certificate (Planned)</li>
                <li>• AWS Machine Learning Specialty</li>
                <li>• Google Cloud ML Engineer</li>
                <li>• Microsoft Azure AI Engineer</li>
                <li>• Deep Learning Specialization (Coursera)</li>
                <li>• MLOps Specialization</li>
                <li>• Kubernetes for ML Engineers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Timeline - FIXED */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            My Technical Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-4 h-4 bg-primary-600 rounded-full border-2 border-white shadow-md z-10"></div>
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-900">Advanced ML & AI Specialization</h3>
                    <p className="text-primary-600 mb-2">2025 - Present (Fuse Machines AI Fellowship)</p>
                    <p className="text-gray-600">Deep diving into cutting-edge AI technologies, LLMs, and production ML systems with industry mentorship.</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-4 h-4 bg-primary-600 rounded-full border-2 border-white shadow-md z-10"></div>
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-900">Machine Learning & Full Stack Development</h3>
                    <p className="text-primary-600 mb-2">2024 - 2025</p>
                    <p className="text-gray-600">Mastered ML fundamentals, deep learning, Django/Flask backend development, and React frontend.</p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-4 h-4 bg-primary-600 rounded-full border-2 border-white shadow-md z-10"></div>
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-900">Data Science Foundation</h3>
                    <p className="text-primary-600 mb-2">2023 (Code for Nepal Data Fellowship)</p>
                    <p className="text-gray-600">Built strong foundation in data analysis, visualization, and statistical modeling for social impact projects.</p>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-4 h-4 bg-primary-600 rounded-full border-2 border-white shadow-md z-10"></div>
                  <div className="ml-8">
                    <h3 className="text-lg font-semibold text-gray-900">Programming & Computer Science</h3>
                    <p className="text-primary-600 mb-2">2022 - 2023</p>
                    <p className="text-gray-600">Started with Python, algorithms, data structures, and basic web development at Pulchowk Campus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Project Focus */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Current Project Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI/ML Projects</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Building intelligent chatbots with LLMs</li>
                <li>• Computer vision applications</li>
                <li>• Predictive analytics dashboards</li>
                <li>• Real-time ML model deployment</li>
                <li>• Data-driven web applications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Web Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React + Django full-stack apps</li>
                <li>• ML model integration with Flask APIs</li>
                <li>• Data visualization dashboards</li>
                <li>• Portfolio and business websites</li>
                <li>• Progressive Web Applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to build something amazing together?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's collaborate on your next ML project or web application that leverages AI to solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-secondary">
              View My Projects
            </Link>
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;