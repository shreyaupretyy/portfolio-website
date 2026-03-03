import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

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
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-gray-500">
          Have a project in mind or want to discuss opportunities? I'd like to hear
          from you.
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
          <a
            href="mailto:shreyyauprety@gmail.com"
            className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors"
          >
            <Mail size={14} />
            shreyyauprety@gmail.com
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} />
            Kathmandu, Nepal
          </span>
        </div>

        {submitStatus === 'success' && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-md">
            Message sent successfully. I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md">
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow bg-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow bg-white"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow bg-white"
            >
              <option value="">Select a subject</option>
              <option value="ML Project Discussion">ML Project Discussion</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Collaboration">Collaboration</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow bg-white resize-vertical"
              placeholder="Tell me about your project or what you'd like to discuss..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
