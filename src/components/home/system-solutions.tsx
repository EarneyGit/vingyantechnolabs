import Link from "next/link";
import { ArrowRight, BoxSelect, Cpu } from "lucide-react";
import { CircuitBoard } from "@/components/design-elements/circuit-board";
import { VisionBoundingBox } from "@/components/design-elements/vision-bounding-box";
import { industries } from "@/data/industries";

export function SystemSolutions() {
  return (
    <section className="py-24 bg-white overflow-hidden relative" id="solutions">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Core Systems & Modules</h2>
          <p className="text-lg text-slate-600 max-w-2xl font-medium">
            Pre-architected frameworks designed for rapid deployment across industrial and commercial environments.
          </p>
        </div>

        {/* IoT Systems */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-24 items-start relative">
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.15] pointer-events-none hidden lg:block">
            <CircuitBoard className="w-[500px] h-[500px] text-accent-orange/80" />
          </div>

          <div className="lg:col-span-4 sticky top-24">
            <div className="w-12 h-12 bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center rounded-xl mb-6 shadow-sm">
              <Cpu className="h-6 w-6 text-accent-orange" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">IoT Integration Systems</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We extract data from existing machinery, physical access points, and environment sensors to build centralized monitoring and control interfaces.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {industries.iot.map((item) => (
              <SystemCard 
                key={item.id}
                title={item.title}
                problem={item.problem.substring(0, 80) + "..."}
                system="Sensor arrays + Edge Gateway"
                output="Live metrics & remote control"
                href={`/industries/iot/${item.id}`}
                accent="indigo"
              />
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-slate-200 mb-24" />

        {/* CV Systems */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none hidden lg:block">
             <VisionBoundingBox className="w-[500px] h-[500px]" label="ANALYSIS_ACTIVE" />
          </div>

          <div className="lg:col-span-4 sticky top-24">
            <div className="w-12 h-12 bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center rounded-xl mb-6 shadow-sm">
              <BoxSelect className="h-6 w-6 text-accent-blue" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Computer Vision Systems</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Upgrading standard CCTV and industrial cameras with AI models trained to detect anomalies, track movement, and automate visual inspection.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {industries.computerVision.map((item) => (
              <SystemCard 
                key={item.id}
                title={item.title}
                problem={item.problem.substring(0, 80) + "..."}
                system="Camera Feed + Local AI Engine"
                output="Anomaly detection & alerts"
                href={`/industries/computer-vision/${item.id}`}
                accent="violet"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function SystemCard({ title, system, output, href, accent }: { title: string, problem: string, system: string, output: string, href: string, accent: "indigo" | "violet" }) {
  const isIndigo = accent === "indigo";
  
  const borderHover = isIndigo ? "hover:border-accent-orange/50" : "hover:border-accent-blue/50";
  const shadowHover = isIndigo ? "hover:shadow-accent-orange/10" : "hover:shadow-accent-blue/10";
  const textAccent = isIndigo ? "text-accent-orange" : "text-accent-blue";
  const textHover = isIndigo ? "group-hover:text-accent-orange" : "group-hover:text-accent-blue";
  const bgAccent = isIndigo ? "bg-accent-orange/10" : "bg-accent-blue/10";
  
  const headerBgHover = isIndigo ? "group-hover:bg-primary" : "group-hover:bg-accent-blue";
  const boxBorderHover = isIndigo ? "group-hover:border-accent-orange/20" : "group-hover:border-accent-blue/20";
  const outputBgHover = isIndigo ? "group-hover:bg-accent-orange/10" : "group-hover:bg-accent-blue/10";
  const outputBorderHover = isIndigo ? "group-hover:border-accent-orange/30" : "group-hover:border-accent-blue/30";
  
  return (
    <Link href={href} className={`block p-6 bg-white border border-slate-200 rounded-2xl group ${borderHover} hover:shadow-xl ${shadowHover} transition-all duration-300 relative overflow-hidden`}>
      {/* Top Header line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${bgAccent} ${headerBgHover} transition-colors duration-300`} />
      
      <div className="flex justify-between items-start mb-6 pt-2">
        <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-slate-800 transition-colors pr-4">{title}</h4>
        <ArrowRight className={`h-5 w-5 text-slate-400 ${textHover} transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-110 flex-shrink-0`} />
      </div>
      
      <div className="space-y-3">
        {/* Architecture Spec */}
        <div className={`p-4 rounded-xl bg-slate-50 border border-slate-100 ${boxBorderHover} transition-colors duration-300`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
            <span className="tech-mono text-[9px] text-slate-500 font-bold tracking-widest">ARCHITECTURE</span>
          </div>
          <span className="text-sm font-bold text-slate-700 block ml-3.5 leading-snug">{system}</span>
        </div>

        {/* Output Spec */}
        <div className={`p-4 rounded-xl bg-slate-50 border border-slate-100 ${outputBgHover} ${outputBorderHover} transition-colors duration-300`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${textAccent} animate-pulse`} />
            <span className={`tech-mono text-[9px] ${textAccent} font-bold tracking-widest`}>SYSTEM_OUTPUT</span>
          </div>
          <span className={`text-sm font-bold ${textAccent} block ml-3.5 leading-snug`}>{output}</span>
        </div>
      </div>
    </Link>
  );
}
