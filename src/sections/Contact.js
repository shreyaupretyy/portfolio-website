import React, { useState } from 'react';
import { Send } from 'lucide-react';

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

  const inputClasses =
    'w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-white text-slate-700 placeholder:text-slate-300 focus:border-teal-300 focus:ring-2 focus:ring-teal-100 outline-none transition-all';

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
          Contact
        </h2>
      </div>

      <div>
        <p className="mb-8 text-slate-500 leading-relaxed">
          Have a project in mind, want to discuss an opportunity, or just want to
          say hi? My inbox is always open. Drop me a message and I'll get back to
          you as soon as I can.
        </p>

        {submitStatus === 'success' && (
          <div className="mb-6 rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-700 border border-teal-100">
            Message sent successfully. I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-100">
            Something went wrong. Please try again or email me directly at{' '}
            <a href="mailto:shreyyauprety@gmail.com" className="font-medium underline">
              shreyyauprety@gmail.com
            </a>
            .
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputClasses}
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
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClasses} resize-vertical`}
              placeholder="Tell me about your project or what you'd like to discuss..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
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
