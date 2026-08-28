import React from 'react';
import { profileData } from '../data/profile';
import { FileText, Download, ExternalLink, ArrowRight } from 'lucide-react';

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40 dark:from-blue-900/40 dark:via-slate-900 dark:to-cyan-900/40 light:from-blue-50 light:via-white light:to-cyan-50 border border-blue-500/30 light:border-blue-200 p-8 sm:p-12 overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-400 light:text-blue-600 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" /> Professional Resume
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
                Interested in Working Together?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                Review my academic coursework, technical stack, project builds, and hackathon milestones in a recruiter-friendly format.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={profileData.socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href={profileData.socialLinks.resume}
                download="Thanush_KT_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-bold text-sm hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4 text-cyan-400 light:text-blue-600" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
