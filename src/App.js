import React from 'react';
import Header from './components/Header';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <footer className="max-w-md pb-16 text-sm text-slate-400 leading-relaxed">
            <p>
              Coded in{' '}
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-500 hover:text-teal-600 transition-colors">
                Visual Studio Code
              </a>
              . Built with{' '}
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-500 hover:text-teal-600 transition-colors">
                React
              </a>
              {' '}and{' '}
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-500 hover:text-teal-600 transition-colors">
                Tailwind CSS
              </a>
              , deployed on{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-500 hover:text-teal-600 transition-colors">
                Vercel
              </a>
              . Set in the{' '}
              <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-500 hover:text-teal-600 transition-colors">
                Inter
              </a>
              {' '}typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
