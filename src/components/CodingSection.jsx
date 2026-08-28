import React from 'react';
import { problemSolvingData } from '../data/experience';
import { Code, Terminal, CheckCircle2, Cpu, FileCode2 } from 'lucide-react';

export const CodingSection = () => {
  return (
    <section id="coding" className="py-20 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 light:text-teal-600 text-xs font-semibold uppercase tracking-wider">
            Problem Solving & Logic
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            {problemSolvingData.headline}
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            {problemSolvingData.subheading}
          </p>
        </div>

        {/* Practice Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problemSolvingData.topicsPracticed.map((topic, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all flex items-start gap-3"
            >
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 light:text-teal-600 shrink-0">
                <FileCode2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                  {topic.name}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 pt-1">
                  {topic.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HackerRank & Coding Platforms */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 light:text-emerald-600">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                HackerRank & Algorithmic Practice
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                Practicing Python Data Structures, Loops, OOP, Functions, and Math challenges.
              </p>
            </div>
          </div>

          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/80 light:bg-emerald-100 text-emerald-400 light:text-emerald-700 border border-emerald-800/50 light:border-emerald-200 shrink-0">
            Active Practice
          </span>
        </div>

      </div>
    </section>
  );
};
