import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Shreya_Uprety_Resume.pdf';
    link.download = 'Shreya_Uprety_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600">
                Shreya Uprety
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Machine Learning Engineer & Full Stack Developer
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I'm a computer engineering student at Pulchowk Campus with a deep passion for machine learning, 
              data science, and intelligent systems. I love turning data into meaningful insights and building 
              responsive, user-centric web applications. Passionate about clean code, continuous learning, 
              and creating impactful tech solutions.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleResumeDownload}
                className="btn-primary flex items-center justify-center"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              <Link to="/contact" className="btn-secondary flex items-center justify-center">
                Get In Touch
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/about" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200">
                Learn More About Me <ArrowRight size={16} className="ml-1" />
              </Link>
              <Link to="/projects" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200">
                View My Work <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/shreyaupretyy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shreya-uprety-399568260/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:shreyyauprety@gmail.com"
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-up">
            <div className="relative">
              {/* Replace the initials circle with actual photo */}
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Shreya Uprety"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback initials div */}
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-6xl font-bold" style={{display: 'none'}}>
                  SU
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
            <div className="text-gray-600">AI Fellowships</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
            <div className="text-gray-600">Years Learning</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">∞</div>
            <div className="text-gray-600">Curiosity</div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;