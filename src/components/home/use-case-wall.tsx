import { CheckCircle2, AlertCircle, Eye, Battery, Users, Locate, Search, ShieldCheck, Activity } from "lucide-react";

const useCases = [
  { title: "Machine downtime alerts", icon: AlertCircle, status: "critical", color: "text-accent-orange", bg: "bg-accent-orange/10", border: "border-accent-orange/20" },
  { title: "Defect detection", icon: Search, status: "active", color: "text-accent-blue", bg: "bg-accent-blue/10", border: "border-accent-blue/20" },
  { title: "PPE monitoring", icon: ShieldCheck, status: "active", color: "text-accent-green", bg: "bg-accent-green/10", border: "border-accent-green/20" },
  { title: "Smart access logs", icon: Users, status: "logging", color: "text-accent-yellow", bg: "bg-accent-yellow/10", border: "border-accent-yellow/20" },
  { title: "Slot occupancy", icon: Locate, status: "live", color: "text-accent-green", bg: "bg-accent-green/10", border: "border-accent-green/20" },
  { title: "Energy optimization", icon: Battery, status: "active", color: "text-accent-blue", bg: "bg-accent-blue/10", border: "border-accent-blue/20" },
  { title: "Visitor tracking", icon: Eye, status: "logging", color: "text-accent-yellow", bg: "bg-accent-yellow/10", border: "border-accent-yellow/20" },
  { title: "Pharma packaging inspection", icon: CheckCircle2, status: "active", color: "text-accent-green", bg: "bg-accent-green/10", border: "border-accent-green/20" },
  { title: "Traffic flow monitoring", icon: Activity, status: "live", color: "text-accent-green", bg: "bg-accent-green/10", border: "border-accent-green/20" },
];

export function UseCaseWall() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="tech-mono text-sm text-accent-orange mb-4 tracking-widest font-bold">APPLIED INTELLIGENCE</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Pre-trained models and IoT frameworks for immediate impact.
            </p>
          </div>
          <div className="tech-mono text-xs text-slate-500 border border-slate-200 px-3 py-1 bg-white rounded shadow-sm font-semibold">
            SYSTEM_CAPABILITIES_9
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between group hover:shadow-md hover:border-primary/50 transition-all cursor-default">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${uc.bg} ${uc.border}`}>
                  <uc.icon className={`h-4 w-4 ${uc.color}`} />
                </div>
                <span className="font-bold text-slate-700 text-sm group-hover:text-slate-900 transition-colors">{uc.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" style={{ color: uc.color.replace('text-', '') }}></span>
                <span className="tech-mono text-[9px] text-slate-400 uppercase font-bold">{uc.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
