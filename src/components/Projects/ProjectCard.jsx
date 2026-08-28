import React from 'react';
import { GithubIcon } from '../SocialIcons';
import { ExternalLink, Info, MessageSquare } from 'lucide-react';

export const ProjectCard = ({ project, onOpenDetails }) => {
  const isMajor = project.type === 'Major Project';
  const isMinor = project.type === 'Minor Project';

  return (
    <div
      className={`group relative rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isMajor
          ? 'border-teal-500/50 dark:border-teal-500/50 light:border-teal-300 shadow-xl shadow-teal-500/10'
          : isMinor
          ? 'border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-300'
          : 'border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700'
      }`}
    >
      {/* Top Banner Accent */}
      {isMajor && (
        <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-400 py-1.5 px-4 text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white">
            ★ Featured Major Project ★
          </span>
        </div>
      )}

      {isMinor && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-1 px-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
            Minor Academic Project
          </span>
        </div>
      )}

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                isMajor
                  ? 'bg-teal-500/20 text-teal-400 light:text-teal-600 border border-teal-500/30'
                  : isMinor
                  ? 'bg-emerald-500/20 text-emerald-400 light:text-emerald-600 border border-emerald-500/30'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {project.type}
            </span>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-teal-600 transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs font-semibold text-emerald-400 light:text-emerald-600 pt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Tagline / Description */}
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Telegram bot callout for Crypto */}
          {project.telegramBotHighlight && (
            <div className="p-2.5 rounded-lg bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-800/40 light:border-teal-200 text-[11px] text-cyan-300 dark:text-cyan-300 light:text-teal-800 font-medium flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400 light:text-teal-600 shrink-0" />
              <span>Uses Telegram Bot for sentiment signal ingestion</span>
            </div>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {Object.values(project.technologies).flat().slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 px-6 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600/90 hover:bg-teal-500 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Project Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
