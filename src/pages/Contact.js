import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Get the Formspree form ID from environment variables
    const formspreeFormId = process.env.REACT_APP_FORMSPREE_FORM_ID;
    
    if (!formspreeFormId) {
      console.error('Formspree form ID not found in environment variables');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'shreyyauprety@gmail.com',
      link: 'mailto:shreyyauprety@gmail.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+977-9843967068',
      link: 'tel:+9779843967068',
      description: 'Call me for urgent matters'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Kathmandu, Nepal',
      link: null,
      description: 'Available for remote work worldwide'
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/shreyaupretyy',
      description: 'Check out my code and projects'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreya-uprety-399568260/',
      description: 'Connect professionally'
    },
    {
      icon: <MessageCircle size={24} />,
      name: 'Discord',
      url: '#',
      description: 'shreyauprety#5375'
    },
  ];

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a machine learning project in mind or want to discuss opportunities? 
            I'd love to hear from you! Let's build something intelligent and impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new ML projects, interesting challenges, 
                or just having a chat about AI, technology, and development.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.content}</p>
                      )}
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index}>
                      {social.name === 'Discord' ? (
                        <div className="flex items-center text-gray-600">
                          <span className="mr-3">{social.icon}</span>
                          <div>
                            <span className="font-medium">{social.name}</span>
                            <p className="text-sm text-gray-500">{social.description}</p>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          <span className="mr-3">{social.icon}</span>
                          <div>
                            <span className="font-medium">{social.name}</span>
                            <p className="text-sm text-gray-500">{social.description}</p>
                          </div>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Something went wrong. Please try again or email me directly at shreyyauprety@gmail.com
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="ML Project Discussion">ML Project Discussion</option>
                    <option value="Web Development Project">Web Development Project</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your ML project, web development needs, or what you'd like to discuss..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's your response time?</h3>
              <p className="text-gray-600 mb-4">I typically respond to emails within 24 hours during weekdays (Nepal Time).</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Do you work on weekends?</h3>
              <p className="text-gray-600">For urgent projects or deadlines, yes! But I prefer to discuss timeline expectations upfront.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's your preferred communication method?</h3>
              <p className="text-gray-600 mb-4">Email for formal discussions, Discord for quick chats during projects, and video calls for complex discussions.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer consultation calls?</h3>
              <p className="text-gray-600">Absolutely! I offer free 30-minute consultation calls for potential projects.</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ready to Collaborate?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 ML & AI Projects</h3>
              <p className="text-gray-700 mb-4">
                I specialize in building intelligent systems, from data analysis to deep learning models and deployment.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Predictive Analytics & Data Science</li>
                <li>• Computer Vision Applications</li>
                <li>• Natural Language Processing</li>
                <li>• ML Model Deployment & MLOps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Web Development</h3>
              <p className="text-gray-700 mb-4">
                Full-stack development with modern frameworks, integrating ML models into user-friendly applications.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• React + Django/Flask Applications</li>
                <li>• Data Visualization Dashboards</li>
                <li>• API Development & Integration</li>
                <li>• Responsive Web Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;