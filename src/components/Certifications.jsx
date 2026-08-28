import React from 'react';
import { certificationsData } from '../data/experience';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export const Certifications = () => {
  const hasCerts = certificationsData && certificationsData.length > 0;

  return (
    <section id="certifications" className="py-16 bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 light:text-teal-600 text-xs font-semibold uppercase tracking-wider">
            Verified Knowledge
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Certifications & Credentials
          </h2>
        </div>

        {hasCerts ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">{cert.title}</h3>
                    <p className="text-xs text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{cert.date}</span>
                  {cert.verifyUrl && (
                    <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                      <span>Verify</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Subtle Empty / Coming Soon Placeholder */
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-cyan-400 light:text-teal-600 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
              Certifications Coming Soon
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md mx-auto">
              Currently pursuing industry-recognized certifications in Web Development, Python, and AI/ML foundations. Official credentials will be verified here.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
