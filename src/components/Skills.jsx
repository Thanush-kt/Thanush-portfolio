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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 light:text-blue-600 text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Categorized Skillset & Technologies
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            A structured breakdown of technologies, frameworks, and developer tools used across my project builds.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 light:text-blue-600">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 flex flex-col justify-between space-y-1 hover:border-slate-700 transition-colors"
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
