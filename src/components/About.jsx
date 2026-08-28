import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, Code, Brain, Rocket, GitBranch, Layers } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Driven by Practical Building & Continuous Growth
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            {profileData.introduction}
          </p>
        </div>

        {/* Ethos Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-cyan-900/30 dark:from-blue-900/30 dark:via-slate-900 dark:to-cyan-900/30 light:from-blue-50 light:via-white light:to-cyan-50 border border-blue-500/30 light:border-blue-200 text-center">
          <div className="text-xs uppercase tracking-widest text-cyan-400 light:text-blue-600 font-semibold mb-2">Development Mindset</div>
          <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-100 dark:text-slate-100 light:text-slate-900">
            {profileData.ethos}
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 light:text-blue-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">Academic Background</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Pursuing <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">B.E. in Computer Engineering</strong> at <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">KVG College of Engineering</strong>, graduating in <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">2027</strong>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 light:text-cyan-600">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">Software & Web Dev</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Interested in full-stack web applications, REST APIs with FastAPI, modern frontend interfaces with React & Tailwind, and Python software architecture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-purple-500/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 light:text-purple-600">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">AI & Machine Learning</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Exploring Natural Language Processing, sentiment analysis models, local LLM execution (Ollama), vector databases (Qdrant), and agent workflows (LangChain).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-emerald-500/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 light:text-emerald-600">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">Practical Projects</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Believer in learning by doing. Built major systems like a Crypto Trading Sentiment Analyzer, minor projects like EcoStep, and responsive web tools.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-amber-500/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 light:text-amber-600">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">Problem Solving</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Practicing fundamental algorithms, Python data structures, OOP principles, and mathematical problem-solving on HackerRank and in project development.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-indigo-500/50 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 light:text-indigo-600">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">Git & Open Source</h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Using Git and GitHub for version control, public project showcase, modular codebase organization, and modern developer workflows.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
