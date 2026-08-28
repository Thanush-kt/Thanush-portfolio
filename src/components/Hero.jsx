import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { sectionConfig } from '../data/config';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ArrowRight, Download, Mail, Terminal, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('profile.py');
  const [imgError, setImgError] = useState(false);

  const codeSnippets = {}; /*
    'profile.py': `class ThanushKT:
    def __init__(self):
        self.degree = "B.E. Computer Engineering"
        self.college = "KVG College of Engineering"
        self.graduation = 2027
        self.focus_areas = ["Software Engineering", "AI/ML", "Web Dev"]
        self.ethos = "Learn → Build → Experiment → Improve"

    def current_status(self):
        return {
            "major_project": "Crypto Trading Sentiment Analysis System",
            "minor_project": "EcoStep Carbon Offset Model",
            "hackathon": "3rd Prize Winner - Hackwise"
        }`,
    'architecture.json': `{
  "system": "Crypto Trading Sentiment Analyzer",
  "ingestion": "Telegram Bot API (Live Sentiment)",
  "nlp_models": ["Ollama (Local LLM)", "LangChain"],
  "vector_db": "Qdrant",
  "backend_framework": "FastAPI (Async Python)",
  "frontend": "React + Tailwind CSS",
  "status": "Experimental Decision Support System"
}`,
    'terminal.sh': `$ python -m sentiment_system.main
[INFO] Initializing Telegram bot listener... OK
[INFO] Connecting to Qdrant Vector Engine... OK
[INFO] Loading Ollama NLP Sentiment Classifier... OK
[INFO] Server running on http://127.0.0.1:8000
[SUCCESS] System ready for live decision support.`
  }; */

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-teal-600/15 via-cyan-500/15 to-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-12 max-w-4xl mx-auto space-y-6 text-center">
            
            {/* Top Row: Avatar & Status Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              
              {/* Profile Picture Avatar */}
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-400 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] overflow-hidden flex items-center justify-center">
                    {!imgError && profileData.avatar ? (
                      <img
                        src={profileData.avatar}
                        alt={profileData.name}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-900 to-slate-900 flex items-center justify-center text-cyan-300 font-extrabold text-xl">
                        TK
                      </div>
                    )}
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950" title="Available for opportunities" />
              </div>

              {/* College & Status Badge */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-slate-300 dark:text-slate-300 light:text-slate-700">
                    KVG College of Engineering • Graduating 2027
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-400 pl-1">
                  Computer Engineering Student
                </div>
              </div>

            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">{profileData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-400 light:text-teal-600 tracking-wide">
                {profileData.fullTitle}
              </p>
            </div>

            {/* Summary Text */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
              "{profileData.heroQuote}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {sectionConfig.showResume && (
                <a
                  href={profileData.socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/50 font-semibold shadow-md transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4 text-cyan-400 light:text-teal-600" />
                  <span>Download Resume</span>
                </a>
              )}

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white font-semibold transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Links & Highlights */}
            <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-cyan-400 light:text-teal-600" />
                <a href={profileData.socialLinks.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/thanushkt
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 text-teal-400 light:text-teal-600" />
                <a href={profileData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 light:text-emerald-600 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Hackwise 3rd Prize
              </div>
            </div>
          </div>

          {/* Right Visual: Interactive Code IDE Window */}
          <div className="hidden">
            <div className="relative rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-900 border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-sm">
              
              {/* Window Header / Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-1">
                  {Object.keys(codeSnippets).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Content View */}
              <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed max-h-[360px]">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Python 3.11 • Async FastAPI • Ollama LLM</span>
                </div>
                <span className="text-emerald-400 font-medium">UTF-8 • Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
