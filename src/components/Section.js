import React from 'react';

// Editorial section wrapper: a mono index + label eyebrow over a hairline,
// then the content. Keeps every section anchored to the same rhythm.
const Section = ({ id, index, label, children, className = '' }) => (
  <section id={id} className={`scroll-mt-24 ${className}`} aria-labelledby={`${id}-label`}>
    <div className="mb-8 flex items-baseline gap-2.5 border-b border-line pb-3">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2
        id={`${id}-label`}
        className="text-sm font-medium text-faint"
      >
        {label}
      </h2>
    </div>
    {children}
  </section>
);

export default Section;
