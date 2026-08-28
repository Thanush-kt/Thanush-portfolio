import React from 'react';
import { achievementsData } from '../data/experience';
import { Trophy, Award, Star, CheckCircle, Flag } from 'lucide-react';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 light:text-amber-600 text-xs font-semibold uppercase tracking-wider">
            Hackathons & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Hackathon Achievements
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Demonstrating rapid technical problem solving, teamwork, and product presentation in competitive environments.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-500/40 shadow-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 light:text-amber-600 border border-amber-500/30">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-amber-500/20 text-amber-300 light:text-amber-800 border border-amber-500/30">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Award Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-3">
                  <Award className="w-6 h-6 text-amber-400 light:text-amber-600 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">Placement</div>
                    <div className="text-base font-extrabold text-amber-400 light:text-amber-700">{item.award}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-3">
                  <Flag className="w-6 h-6 text-cyan-400 light:text-cyan-600 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500">Advancement</div>
                    <div className="text-sm font-extrabold text-cyan-300 dark:text-cyan-300 light:text-cyan-700">{item.secondaryAward}</div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
