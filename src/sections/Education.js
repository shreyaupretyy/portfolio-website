import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Education = () => {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
          Education
        </h2>
      </div>

      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-50/80 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                2022 — 2026
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-700">
                  <a
                    href="https://pcampus.edu.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-800 hover:text-teal-600 focus-visible:text-teal-600"
                  >
                    <span>
                      B.E. Computer Engineering ·{' '}
                      <span className="inline-block">
                        Pulchowk Campus
                        <ArrowUpRight size={14} className="ml-0.5 inline-block -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </span>
                    </span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Tribhuvan University, IOE
                </p>
                <p className="mt-2 text-sm leading-normal text-slate-500">
                  Data Structures & Algorithms, Database Management Systems,
                  Computer Networks, Software Engineering, Digital Logic,
                  Microprocessors.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Focus areas">
                  {['DSA', 'DBMS', 'Computer Networks', 'Software Engineering', 'Microprocessors'].map((t) => (
                    <li key={t} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium leading-5 text-teal-700">
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Education;
