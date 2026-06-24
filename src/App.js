import React from 'react';
import Nav from './components/Nav';
import Intro from './sections/Intro';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-line focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Nav />

      <div className="mx-auto max-w-3xl px-6">
        <Intro />
        <main className="space-y-24 pb-24 sm:space-y-32">
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>

        <footer className="border-t border-line py-10 font-mono text-xs text-faint">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span>&copy; {new Date().getFullYear()} Shreya Uprety</span>
            <a href="#top" className="hover:text-ink">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
