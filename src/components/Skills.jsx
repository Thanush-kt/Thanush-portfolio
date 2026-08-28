import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { Code2, Layout, Server, Brain, Database, Terminal, CheckCircle } from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Brain: Brain,
    Database: Database,
    Terminal: Terminal
  };

  const categoryNames = ['All', ...skillsData.map(group => group.category)];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(group => group.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3 text-cyan-400 light:text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-cyan-400 light:bg-blue-600" />
              Technical Stack
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              Tools I use to turn ideas into products.
            </h2>
            <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              A practical view of the languages, systems, and tools behind my project work.
            </p>
          </div>

          <div className="hidden lg:block text-right text-sm text-slate-500 light:text-slate-500">
            <span className="block text-3xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">0{skillsData.length}</span>
            skill areas
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 lg:justify-end">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-blue-600 border border-slate-800 dark:border-slate-800 light:border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSkills.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 light:text-blue-600 border border-cyan-400/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-300 light:group-hover:text-blue-600 transition-colors">
                        {group.category}
                      </h3>
                    </div>
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-600 light:text-slate-300">0{group.skills.length}</span>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 flex flex-col justify-between space-y-2 hover:border-cyan-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                            {skill.name}
                          </span>
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 light:text-blue-600" />
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">{skill.level}</span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-cyan-300 dark:text-cyan-300 light:text-blue-700">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
