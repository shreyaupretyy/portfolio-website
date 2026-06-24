import React, { useState, useEffect } from 'react';

const items = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Projects', id: 'projects' },
  { label: 'Stack', id: 'stack' },
  { label: 'Contact', id: 'contact' },
];

const Nav = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observed = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-ink"
        >
          Shreya Uprety
        </a>
        <ul className="hidden items-center gap-6 sm:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm transition-colors ${
                  active === item.id
                    ? 'font-medium text-ink'
                    : 'text-faint hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/assets/resume/Shreya_Uprety_Resume.pdf"
          className="text-sm font-medium text-accent hover:text-ink sm:hidden"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Nav;
