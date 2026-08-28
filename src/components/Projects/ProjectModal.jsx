import React from 'react';
import { CryptoArchitectureDiagram } from './CryptoArchitectureDiagram';
import { ProjectGallery } from './ProjectGallery';
import { GithubIcon } from '../SocialIcons';
import { X, ExternalLink, CheckCircle2, AlertTriangle, MessageSquare, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-slate-800 pb-5 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30 uppercase tracking-wider">
              {project.type}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-cyan-400">{project.subtitle}</p>
          )}
          <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
        </div>

        {/* Telegram Bot Special Highlight for Major Crypto Project */}
        {project.telegramBotHighlight && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/80 to-cyan-950/80 border border-teal-500/40 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-500/20 text-cyan-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">Key Architectural Integration</h4>
              <p className="text-sm font-semibold text-slate-200">{project.telegramBotHighlight}</p>
              <p className="text-xs text-slate-400 pt-0.5">
                Utilizes a dedicated Telegram bot for real-time sentiment signal extraction directly fed into local LLM classifiers (Ollama & LangChain).
              </p>
            </div>
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Problem Statement
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Proposed Solution
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Major Project Architecture Diagram */}
        {project.id === 'crypto-trading-sentiment' && (
          <div className="space-y-3">
            <CryptoArchitectureDiagram />
          </div>
        )}

        {project.gallery && <ProjectGallery images={project.gallery} title={project.title} />}

        {/* Minor Project EcoStep Concept Flow */}
        {project.conceptFlow && (
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" /> EcoStep Concept & Verification Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.conceptFlow.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400">STAGE 0{idx + 1}</span>
                  <div className="text-xs font-bold text-slate-200">{step.stage}</div>
                  <p className="text-[11px] text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Breakdown */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(project.technologies).map(([key, list]) => (
              <div key={key} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="text-[10px] font-semibold text-cyan-400 uppercase block mb-1">
                  {key.replace('_', ' ')}
                </span>
                <div className="flex flex-wrap gap-1">
                  {list.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Features */}
        {project.features && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Features & Architecture Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer for Crypto Trading */}
        {project.disclaimer && (
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/50 flex items-start gap-2.5 text-xs text-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{project.disclaimer}</span>
          </div>
        )}

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Code on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
