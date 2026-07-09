import { Cpu, Camera, LineChart, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";
import { NeuralNodes } from "@/components/design-elements/neural-nodes";

export function IntelligenceCore() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      
      {/* Soft Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="tech-mono text-sm text-indigo-600 mb-4 tracking-widest font-bold">THE VINGYAN INTELLIGENCE CORE</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            A unified command layer that translates physical reality into digital control.
          </p>
        </div>

        {/* Centralized Node Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          
          {/* Left Column Nodes */}
          <div className="flex flex-col gap-8 md:w-[35%] relative z-20">
            {/* Node 1: IoT */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
                  <Cpu className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">IoT Sensor Layer</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Connecting PLCs, smart meters, access gates, and environmental sensors into a unified data stream.
              </p>
              <Link href="/industries/iot" className="text-indigo-600 text-sm font-bold flex items-center hover:text-indigo-700 transition-colors">
                View Systems <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Node 3: Analytics */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
                  <LineChart className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Analytics Layer</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Aggregating thousands of data points into clear OEE dashboards, occupancy maps, and trend reports.
              </p>
              <span className="tech-mono text-[10px] px-2 py-1 bg-slate-100 text-slate-500 font-bold inline-block rounded">BUILT-IN MODULE</span>
            </div>
          </div>

          {/* Center Core */}
          <div className="hidden md:flex w-[30%] justify-center relative z-20">
            {/* Connecting Horizontal Lines (Behind the core) */}
            <div className="absolute top-1/4 left-0 w-full h-[2px] border-t-2 border-dashed border-slate-300 z-0 -translate-y-1/2" />
            <div className="absolute top-3/4 left-0 w-full h-[2px] border-t-2 border-dashed border-slate-300 z-0 -translate-y-1/2" />
            
            {/* Neural Pattern Behind Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none">
              <NeuralNodes className="w-[400px] h-[400px] text-indigo-400" />
            </div>

            <div className="w-48 h-48 rounded-full bg-white shadow-xl shadow-slate-200/50 border border-slate-200 flex flex-col items-center justify-center relative z-20">
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400 border-dashed animate-[spin_20s_linear_infinite] opacity-50" />
              <div className="w-32 h-32 rounded-full shadow-lg shadow-indigo-600/30 flex items-center justify-center text-white text-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 opacity-90" />
                <span className="font-bold text-lg leading-tight relative z-10">Vingyan<br/>Core OS</span>
              </div>
            </div>
          </div>

          {/* Right Column Nodes */}
          <div className="flex flex-col gap-8 md:w-[35%] relative z-20">
            {/* Node 2: Computer Vision */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-violet-300 transition-all w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center border border-violet-100">
                  <Camera className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">AI Vision Layer</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Transforming CCTV and industrial cameras into active defect detectors and security monitors.
              </p>
              <Link href="/industries/computer-vision" className="text-violet-600 text-sm font-bold flex items-center hover:text-violet-700 transition-colors">
                View Systems <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Node 4: Automation */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Automation Layer</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Triggering immediate actions—stopping conveyors, sending alerts, or opening gates—without human input.
              </p>
              <span className="tech-mono text-[10px] px-2 py-1 bg-slate-100 text-slate-500 font-bold inline-block rounded">EDGE & CLOUD</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
