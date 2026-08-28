import React from 'react';
import { LayoutDashboard, Cpu, Workflow, Brain, TrendingUp, Zap, Database, Server, Compass } from 'lucide-react';

export const CryptoArchitectureDiagram = () => {
  const steps = [
    { icon: LayoutDashboard, label: "Frontend Dashboard", tech: "React + Tailwind", color: "from-teal-500 to-cyan-500" },
    { icon: Cpu, label: "Decision Engine", tech: "FastAPI Async Core", color: "from-cyan-500 to-teal-500" },
    { icon: Workflow, label: "Orchestration / Agent Service", tech: "LangChain Workflows", color: "from-teal-500 to-emerald-500" },
    { icon: Brain, label: "AI / NLP Processing", tech: "Ollama LLM & Telegram Bot", color: "from-purple-500 to-indigo-500" },
    { icon: TrendingUp, label: "Trading Strategy", tech: "Evaluation Matrix", color: "from-amber-500 to-orange-500" },
    { icon: Zap, label: "Execution Layer", tech: "Signal Dispatcher", color: "from-emerald-500 to-teal-500" }
  ];

  const services = [
    { icon: Database, name: "MongoDB", role: "Transactional Storage" },
    { icon: Server, name: "Redis", role: "In-Memory Cache & Pub/Sub" },
    { icon: Compass, name: "Qdrant", role: "Vector Database for NLP Embeddings" }
  ];

  return (
    <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-base font-bold text-slate-100">System Architecture Diagram</h4>
          <p className="text-xs text-slate-400">Telegram Bot Ingestion → Local Ollama NLP → FastAPI Decision Engine</p>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800">
          Major Project Flow
        </span>
      </div>

      {/* Main Flow Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <div key={idx} className="relative p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500">STEP 0{idx + 1}</span>
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-r ${step.color} p-[1px]`}>
                  <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                    <IconComp className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-200">{step.label}</h5>
                <p className="text-[11px] text-slate-400">{step.tech}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-bold z-10 text-xs">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Supporting Microservices */}
      <div className="pt-4 border-t border-slate-800/80">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
          Supporting Microservice & Storage Layer
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-md bg-teal-500/10 text-teal-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">{srv.name}</div>
                  <div className="text-[10px] text-slate-400">{srv.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
