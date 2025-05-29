import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code, Users, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: 'Machine Learning',
      description: 'Building intelligent systems and models using deep learning, neural networks, and data science.',
    },
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Creating responsive web applications with modern frameworks and best practices.',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams and contributing to open-source projects.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new AI technologies, frameworks, and research methodologies.',
    },
  ];

  return (
    <div className="section-padding bg-white min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate machine learning engineer and developer with a focus on 
            building intelligent systems. I love exploring the intersection of AI and 
            web technologies to create innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Currently pursuing Computer Engineering at Pulchowk Engineering Campus, 
              where I discovered my passion for machine learning and artificial intelligence. 
              My journey began with traditional programming but quickly evolved into the 
              fascinating world of data science and AI.
            </p>
            <p className="text-gray-600 mb-6">
              Through various fellowships and hands-on projects, I've gained experience 
              in deep learning, neural networks, and data analysis. I also maintain 
              strong web development skills to create full-stack applications that 
              integrate ML models seamlessly.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2</div>
                <div className="text-gray-600">AI Fellowships</div>
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex flex-wrap gap-4">
              <Link to="/skills" className="btn-primary">
                View Skills
              </Link>
              <Link to="/projects" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200">
                See My Work <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Fellowship Timeline */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Education & Fellowships
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">Fuse Machines AI Fellowship</h3>
              <p className="text-primary-600 mb-2">Fuse Machines • 2025</p>
              <p className="text-gray-600">Advanced AI fellowship focusing on cutting-edge machine learning techniques, deep learning frameworks, and real-world AI applications.</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">Bachelor's in Computer Engineering</h3>
              <p className="text-primary-600 mb-2">Pulchowk Engineering Campus • 2022 - 2026</p>
              <p className="text-gray-600">Comprehensive engineering program covering software development, algorithms, data structures, machine learning, and system design.</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">Code for Nepal Data Fellowship</h3>
              <p className="text-primary-600 mb-2">Code for Nepal • 2023</p>
              <p className="text-gray-600">Data science fellowship focused on social impact projects, working with real datasets to solve community problems through data analysis and visualization.</p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Current Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Learning & AI</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep Learning and Neural Networks</li>
                <li>• Computer Vision and Image Processing</li>
                <li>• Natural Language Processing</li>
                <li>• MLOps and Model Deployment</li>
                <li>• Data Analysis and Visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React and Modern JavaScript</li>
                <li>• Full-stack Development</li>
                <li>• API Development and Integration</li>
                <li>• ML Model Integration in Web Apps</li>
                <li>• Responsive Design and UX</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            My Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            I believe in the power of AI to solve real-world problems and make a positive impact on society. 
            My goal is to bridge the gap between cutting-edge machine learning research and practical, 
            user-friendly applications that people can actually use and benefit from.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-secondary">
              Explore My Projects
            </Link>
            <Link to="/contact" className="btn-primary">
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;