import React from 'react';
import { currentlyLearningData } from '../data/learning';
import { Sparkles, Code, Cpu, LayoutGrid, Server, GitBranch } from 'lucide-react';

export const CurrentlyLearning = () => {
  const iconMap = {
    Code: Code,
    Cpu: Cpu,
    LayoutGrid: LayoutGrid,
    Server: Server,
    Sparkles: Sparkles,
    GitBranch: GitBranch
  };

  return (
    <section id="learning" className="py-16 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 light:text-emerald-600 text-xs font-semibold uppercase tracking-wider">
              Continuous Growth
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              Currently Learning & Expanding
            </h2>
          </div>
          <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md">
            Actively building new skills and expanding technical depth through daily practice and project experimentation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentlyLearningData.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-emerald-500/40 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 light:text-emerald-600 shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-100 text-emerald-400 light:text-emerald-700 border border-emerald-800/50 light:border-emerald-200">
                    {item.status}
                  </span>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 pt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
