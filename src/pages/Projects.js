import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'StockSage',
      description: 'An intelligent stock analysis and prediction platform using machine learning algorithms. Provides real-time market insights, technical analysis, and predictive modeling for informed investment decisions.',
      image: '/assets/images/stocksage.jpg',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Pandas', 'NumPy', 'Pytorch'],
      categories: ['Machine Learning'],
      githubUrl: 'https://github.com/shreyaupretyy/StockSage',
    },
    {
      id: 2,
      title: 'Sentiment Analyzer',
      description: 'A FastAPI microservice for sentiment analysis following 12-Factor App methodology. Provides real-time sentiment classification with scalable architecture and comprehensive API documentation.',
      image: '/assets/images/sentiment.jpg',
      technologies: ['Python', 'FastAPI', 'NLP', 'Docker', 'Machine Learning', 'Makefile'],
      categories: ['Machine Learning'],
      githubUrl: 'https://github.com/shreyaupretyy/sentiment-analyzer',
    },
    {
      id: 3,
      title: 'MovieRecs',
      description: 'A sophisticated movie recommendation system that uses collaborative filtering and content-based algorithms to suggest personalized movie recommendations based on user preferences and viewing history.',
      image: '/assets/images/movie.jpg',
      technologies: ['JavaScript', 'Python', 'React', 'Machine Learning', 'Recommendation Systems'],
      categories: ['Machine Learning', 'Full Stack'],
      githubUrl: 'https://github.com/shreyaupretyy/MovieRecs',
    },
    {
      id: 4,
      title: 'GradPath',
      description: 'An enhanced graduate pathway planning application that helps students navigate their academic journey. Features course planning, degree tracking, and career pathway recommendations.',
      image: '/assets/images/gradpath.png',
      technologies: ['JavaScript', 'React', 'Node.js', 'Database', 'UI/UX'],
      categories: ['Full Stack'],
      githubUrl: 'https://github.com/shreyaupretyy/gradpath-2',
    },
    {
      id: 5,
      title: 'Smart Notes App',
      description: 'An intelligent note-taking application with AI-powered features including auto-categorization, smart search, and content suggestions. Built with modern web technologies and machine learning integration.',
      image: '/assets/images/notes.jpg',
      technologies: ['JavaScript', 'Python', 'React Native', 'AI/ML', 'Natural Language Processing'],
      categories: ['Machine Learning', 'Full Stack'],
      githubUrl: 'https://github.com/shreyaupretyy/smart-notes-app',
    },
  ];

  const categories = ['All', 'Machine Learning', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in machine learning, 
            data science, and full-stack development. Each project demonstrates my passion 
            for building intelligent and impactful solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Highlights
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Open Source</div>
            </div>
          </div>
        </div>

        {/* Technical Focus Areas */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technical Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Building intelligent systems for sentiment analysis, stock prediction, 
                and recommendation engines using Python and modern ML frameworks.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Stack Development</h3>
              <p className="text-gray-600">
                Creating end-to-end applications with React frontends and Python/Node.js 
                backends, integrating ML models seamlessly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Science</h3>
              <p className="text-gray-600">
                Analyzing complex datasets, building predictive models, and creating 
                data-driven insights for real-world applications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always excited to work on new ML projects, web applications, 
            and innovative solutions that make a real impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/shreyaupretyy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              More Projects on GitHub
            </a>
            <a href="/contact" className="btn-primary">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;