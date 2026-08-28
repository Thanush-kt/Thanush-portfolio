import React from 'react';
import { educationData } from '../data/experience';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-semibold uppercase tracking-wider">
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Education Timeline
          </h2>
        </div>

        {/* Main Education Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 light:text-blue-600">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 light:text-blue-600">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 light:text-emerald-600 px-3 py-1 rounded-full bg-emerald-950/60 light:bg-emerald-100 border border-emerald-800/50 light:border-emerald-200">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationData.graduation}</span>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center sm:justify-end gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{educationData.location}</span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400 light:text-blue-600" /> Core Engineering Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {educationData.relevantCoursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-800 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 light:bg-blue-600" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="pt-2 space-y-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
              Focus & Practice
            </h4>
            <div className="space-y-2">
              {educationData.academicHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
