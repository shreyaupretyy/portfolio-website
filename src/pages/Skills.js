import React from 'react';
import { Link } from 'react-router-dom';
import { 
  // Category Icons
  Brain, Code, Database, Wrench, 
  Zap, MessageSquare, BarChart3, Layers,
  Monitor, Shield, Coffee
} from 'lucide-react';

// Import technology logos from react-icons
import { 
  SiPython, SiTensorflow, SiPytorch, SiPandas, SiNumpy,
  SiReact, SiJavascript, SiExpress, SiFlask, SiNodedotjs, SiHtml5,
  SiTypescript, SiCplusplus, SiR,
  SiPostgresql, SiMongodb, SiMysql, SiTableau,
  SiApachekafka, SiApachespark, SiApacheairflow, SiMlflow,
  SiGit, SiGithub, SiDocker, SiLinux,
  SiPycharm, SiJupyter, SiGooglecolab,
  SiPostman, SiFigma, SiSlack, SiNotion, SiAnaconda,
  SiKeras, SiOpencv, SiNextdotjs, SiDjango, SiTailwindcss,
  SiBootstrap, SiGraphql, SiFastapi,
  SiHuggingface, SiPlotly, SiStreamlit
} from 'react-icons/si';

// For logos not directly available in react-icons
import { FaAws } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: <Brain size={32} />,
      skills: [
        { name: 'Python', icon: <SiPython size={16} /> },
        { name: 'TensorFlow', icon: <SiTensorflow size={16} /> },
        { name: 'PyTorch', icon: <SiPytorch size={16} /> },
        { name: 'Scikit-learn', icon: <BarChart3 size={16} /> },
        { name: 'Pandas', icon: <SiPandas size={16} /> },
        { name: 'NumPy', icon: <SiNumpy size={16} /> },
      ],
    },
    {
      title: 'Web Development',
      icon: <Code size={32} />,
      skills: [
        { name: 'React', icon: <SiReact size={16} /> },
        { name: 'JavaScript', icon: <SiJavascript size={16} /> },
        { name: 'Express.js', icon: <SiExpress size={16} /> },
        { name: 'Flask', icon: <SiFlask size={16} /> },
        { name: 'Node.js', icon: <SiNodedotjs size={16} /> },
        { name: 'HTML/CSS', icon: <SiHtml5 size={16} /> },
      ],
    },
    {
      title: 'Data & Databases',
      icon: <Database size={32} />,
      skills: [
        { name: 'SQL', icon: <SiMysql size={16} /> },
        { name: 'MongoDB', icon: <SiMongodb size={16} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={16} /> },
        { name: 'Data Visualization', icon: <SiTableau size={16} /> },
        { name: 'Statistical Analysis', icon: <SiR size={16} /> },
        { name: 'Big Data Processing', icon: <SiApachespark size={16} /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={32} />,
      skills: [
        { name: 'Git', icon: <SiGit size={16} /> },
        { name: 'Jupyter Notebook', icon: <SiJupyter size={16} /> },
        { name: 'Google Colab', icon: <SiGooglecolab size={16} /> },
        { name: 'Docker', icon: <SiDocker size={16} /> },
        { name: 'Linux', icon: <SiLinux size={16} /> },
        { name: 'AWS', icon: <FaAws size={16} /> },
      ],
    },
  ];

  const mlFrameworks = [
    { name: 'TensorFlow', icon: <SiTensorflow size={18} /> },
    { name: 'PyTorch', icon: <SiPytorch size={18} /> },
    { name: 'Keras', icon: <SiKeras size={18} /> },
    { name: 'Scikit-learn', icon: <BarChart3 size={18} /> },
    { name: 'OpenCV', icon: <SiOpencv size={18} /> },
    { name: 'NLTK', icon: <MessageSquare size={18} /> },
    { name: 'Hugging Face', icon: <SiHuggingface size={18} /> },
    { name: 'XGBoost', icon: <BarChart3 size={18} /> },
    { name: 'LightGBM', icon: <Zap size={18} /> },
    { name: 'FastAPI', icon: <SiFastapi size={18} /> },
    { name: 'Streamlit', icon: <SiStreamlit size={18} /> },
    { name: 'Gradio', icon: <Layers size={18} /> }
  ];

  const webTechnologies = [
    { name: 'React', icon: <SiReact size={18} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={18} /> },
    { name: 'Django', icon: <SiDjango size={18} /> },
    { name: 'Flask', icon: <SiFlask size={18} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={18} /> },
    { name: 'Express.js', icon: <SiExpress size={18} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={18} /> },
    { name: 'Material-UI', icon: <Layers size={18} /> },
    { name: 'REST APIs', icon: <SiPostman size={18} /> },
    { name: 'GraphQL', icon: <SiGraphql size={18} /> },
    { name: 'FastAPI', icon: <SiFastapi size={18} /> }
  ];

  const dataTools = [
    { name: 'Pandas', icon: <SiPandas size={18} /> },
    { name: 'NumPy', icon: <SiNumpy size={18} /> },
    { name: 'Matplotlib', icon: <BarChart3 size={18} /> },
    { name: 'Seaborn', icon: <BarChart3 size={18} /> },
    { name: 'Plotly', icon: <SiPlotly size={18} /> },
    { name: 'Tableau', icon: <SiTableau size={18} /> },
    { name: 'Power BI', icon: <BarChart3 size={18} /> },
    { name: 'Excel', icon: <Monitor size={18} /> },
    { name: 'Apache Spark', icon: <SiApachespark size={18} /> },
    { name: 'Kafka', icon: <SiApachekafka size={18} /> },
    { name: 'Airflow', icon: <SiApacheairflow size={18} /> },
    { name: 'MLflow', icon: <SiMlflow size={18} /> }
  ];

  const devTools = [
    { name: 'VS Code', icon: <Code size={18} /> },
    { name: 'PyCharm', icon: <SiPycharm size={18} /> },
    { name: 'Jupyter', icon: <SiJupyter size={18} /> },
    { name: 'Google Colab', icon: <SiGooglecolab size={18} /> },
    { name: 'Git', icon: <SiGit size={18} /> },
    { name: 'GitHub', icon: <SiGithub size={18} /> },
    { name: 'Docker', icon: <SiDocker size={18} /> },
    { name: 'Postman', icon: <SiPostman size={18} /> },
    { name: 'Figma', icon: <SiFigma size={18} /> },
    { name: 'Slack', icon: <SiSlack size={18} /> },
    { name: 'Notion', icon: <SiNotion size={18} /> },
    { name: 'Anaconda', icon: <SiAnaconda size={18} /> }
  ];

  const programmingLanguages = [
    { name: 'Python', icon: <SiPython size={20} /> },
    { name: 'JavaScript', icon: <SiJavascript size={20} /> },
    { name: 'TypeScript', icon: <SiTypescript size={20} /> },
    { name: 'SQL', icon: <SiMysql size={20} /> },
    { name: 'C++', icon: <SiCplusplus size={20} /> },
    { name: 'Java', icon: <Coffee size={20} /> },
    { name: 'HTML/CSS', icon: <SiHtml5 size={20} /> },
    { name: 'R', icon: <SiR size={20} /> }
  ];

  return (
    <div className="section-padding bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
            <Brain size={32} className="text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My technical expertise spans machine learning, data science, and web development - 
            combining AI innovation with practical application development.
          </p>
        </div>

        {/* Main Skills Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
              <div className="text-primary-600 mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-primary-50 hover:scale-105 transition-all duration-200 cursor-pointer group/skill"
                  >
                    <span className="text-primary-600 group-hover/skill:text-primary-700 transition-colors duration-200">
                      {skill.icon}
                    </span>
                    <span className="text-gray-700 font-medium group-hover/skill:text-gray-900">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Programming Languages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {programmingLanguages.map((language, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-6 text-center hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                <div className="text-indigo-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {language.icon}
                </div>
                <span className="text-indigo-700 font-semibold text-sm">{language.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ML Frameworks & Libraries - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Machine Learning & AI Tools</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mlFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {framework.icon}
                </div>
                <span className="text-blue-700 font-semibold text-sm">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Technologies - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Development Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {webTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5 text-center hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                <div className="text-green-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-green-700 font-semibold text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Science Tools - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Science & Analytics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dataTools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5 text-center hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                <div className="text-purple-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <span className="text-purple-700 font-semibold text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Environment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer group"
              >
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {tool.icon}
                </span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <SiPython size={28} className="text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">Machine Learning</h3>
              </div>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Supervised & Unsupervised Learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Deep Learning & Neural Networks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Computer Vision
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Natural Language Processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Model Deployment & MLOps
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Feature Engineering
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 size={28} className="text-green-600" />
                <h3 className="text-xl font-bold text-green-800">Data Science</h3>
              </div>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Data Analysis & Visualization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Statistical Modeling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Exploratory Data Analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  A/B Testing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Business Intelligence
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Predictive Analytics
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <SiReact size={28} className="text-purple-600" />
                <h3 className="text-xl font-bold text-purple-800">Full Stack Development</h3>
              </div>
              <ul className="space-y-3 text-purple-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Frontend Development (React)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Backend APIs (Django, Flask, Node.js)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Database Design & Management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  ML Model Integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Responsive Web Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  RESTful API Development
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning & Certifications */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-10 mb-20 border border-primary-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Currently Learning & Goals for 2025
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <SiTensorflow size={24} className="text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900">Advanced AI & ML</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Large Language Models (LLMs)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Generative AI and Diffusion Models
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Reinforcement Learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  MLOps and Model Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Edge AI and Model Optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Transformer Architectures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Multi-modal AI Systems
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={24} className="text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900">Industry Certifications</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  TensorFlow Developer Certificate (Planned)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  AWS Machine Learning Specialty
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Google Cloud ML Engineer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Microsoft Azure AI Engineer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Deep Learning Specialization (Coursera)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  MLOps Specialization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Kubernetes for ML Engineers
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Timeline - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Technical Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-300 rounded-full"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <SiHuggingface size={14} className="text-white" />
                  </div>
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced ML & AI Specialization</h3>
                    <p className="text-primary-600 mb-3 font-medium">2025 - Present (Fuse Machines AI Fellowship)</p>
                    <p className="text-gray-600">Deep diving into cutting-edge AI technologies, LLMs, and production ML systems with industry mentorship.</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <SiTensorflow size={14} className="text-white" />
                  </div>
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning & Full Stack Development</h3>
                    <p className="text-primary-600 mb-3 font-medium">2024 - 2025</p>
                    <p className="text-gray-600">Mastered ML fundamentals, deep learning, Django/Flask backend development, and React frontend.</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <SiTableau size={14} className="text-white" />
                  </div>
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science Foundation</h3>
                    <p className="text-primary-600 mb-3 font-medium">2023 (Code for Nepal Data Fellowship)</p>
                    <p className="text-gray-600">Built strong foundation in data analysis, visualization, and statistical modeling for social impact projects.</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <SiPython size={14} className="text-white" />
                  </div>
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Programming & Computer Science</h3>
                    <p className="text-primary-600 mb-3 font-medium">2022 - 2023</p>
                    <p className="text-gray-600">Started with Python, algorithms, data structures, and basic web development at Pulchowk Campus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Project Focus */}
        <div className="bg-white rounded-2xl p-10 mb-20 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Project Focus Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <SiHuggingface size={28} className="text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">AI/ML Projects</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Building intelligent chatbots with LLMs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Computer vision applications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Predictive analytics dashboards
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Real-time ML model deployment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Data-driven web applications
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <SiReact size={28} className="text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  React + Django full-stack apps
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ML model integration with Flask APIs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Data visualization dashboards
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Portfolio and business websites
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Progressive Web Applications
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section - Enhanced */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
            <Zap size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Ready to build something amazing together?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate on your next ML project or web application that leverages AI to solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/projects" className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
              View My Projects
            </Link>
            <Link to="/contact" className="bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-colors duration-200 shadow-lg hover:shadow-xl border-2 border-white/20">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;