import React, { useState } from 'react';
import { projectsData, projectCategories } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project =>
        project.categories.includes(activeCategory) || project.type === activeCategory
      );

  return (
    <section id="projects" className="py-24 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-semibold uppercase tracking-wider">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Featured Projects & Engineering Builds
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Explore major systems, academic minor projects, and personal builds showcasing practical software architecture.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Deep Dive Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
