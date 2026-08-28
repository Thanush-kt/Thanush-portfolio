import React from 'react';
import { githubData } from '../data/experience';
import { GithubIcon } from './SocialIcons';
import { FolderGit2, ExternalLink } from 'lucide-react';

export const GitHubSection = () => {
  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-semibold uppercase tracking-wider">
              Open Source
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              Building in Public
            </h2>
          </div>
          
          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/50 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400 light:text-blue-600" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {githubData.repositories.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <FolderGit2 className="w-5 h-5 text-cyan-400 light:text-blue-600" />
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {repo.stars}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 line-clamp-1">
                  {repo.name}
                </h3>
                
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-cyan-400 light:text-blue-600">
                  {repo.language}
                </span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Repo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
