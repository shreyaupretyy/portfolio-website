import React, { useState } from 'react';
import Section from '../components/Section';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _replyto: formData.email }),
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

  const fieldClasses =
    'w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none focus:ring-0 transition-colors';
  const labelClasses =
    'mb-1.5 block text-xs font-medium text-faint';

  return (
    <Section id="contact" index="06" label="Contact">
      <p className="mb-8 max-w-prose text-base leading-relaxed text-muted">
        I read everything that lands here. The fastest way to a reply is a
        specific note: a role, a problem you are stuck on, or a project you want
        a second pair of eyes on. You can also email me at{' '}
        <a href="mailto:shreyyauprety@gmail.com" className="link">
          shreyyauprety@gmail.com
        </a>
        .
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 border border-line bg-white px-4 py-3 text-sm text-ink">
          Thanks, that came through. I will reply soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-6 border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent">
          That did not send. Email me directly at{' '}
          <a href="mailto:shreyyauprety@gmail.com" className="font-medium underline">
            shreyyauprety@gmail.com
          </a>
          .
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-prose space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input
              type="text" id="name" name="name" value={formData.name}
              onChange={handleChange} required className={fieldClasses}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} required className={fieldClasses}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClasses}>About</label>
          <select
            id="subject" name="subject" value={formData.subject}
            onChange={handleChange} required className={fieldClasses}
          >
            <option value="">Pick one</option>
            <option value="Role or hiring">A role or hiring</option>
            <option value="Collaboration">Working together</option>
            <option value="Question">A question about my work</option>
            <option value="Other">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea
            id="message" name="message" value={formData.message}
            onChange={handleChange} required rows={4}
            className={`${fieldClasses} resize-y`}
            placeholder="What is on your mind?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-sm font-medium text-ink underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-accent ${
            isSubmitting ? 'opacity-40' : ''
          }`}
        >
          {isSubmitting ? 'Sending…' : 'Send it →'}
        </button>
      </form>
    </Section>
  );
};

export default Contact;
