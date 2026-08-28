import React from 'react';
import { practicalExperienceData } from '../data/experience';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 light:text-purple-600 text-xs font-semibold uppercase tracking-wider">
            Hands-On Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Practical Experience
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            A practical timeline of engineering project builds, technical research, and competition milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-300 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
          
          {practicalExperienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-900 dark:bg-slate-900 light:bg-white border-2 border-cyan-400 light:border-teal-600 group-hover:scale-125 transition-transform" />

              {/* Date / Category Tag on Left for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right text-xs font-bold text-cyan-400 light:text-teal-600 w-28">
                {item.period}
              </div>

              {/* Main Card */}
              <div className="p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="sm:hidden text-xs font-bold text-cyan-400 light:text-teal-600 block mb-1">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {item.role} • <span className="text-cyan-400 light:text-teal-600">{item.type}</span>
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 px-2.5 py-1 rounded-md border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
