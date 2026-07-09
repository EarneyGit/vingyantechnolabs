"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Database, Zap, HardDrive } from "lucide-react";

export function ArchitectureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".arch-node",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
      
      gsap.fromTo(
        ".arch-line",
        { scaleX: 0, opacity: 0 },
        { 
          scaleX: 1, opacity: 1, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: "power2.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
      {/* Soft ambient glow instead of grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        <div className="mb-20 md:w-1/2">
          <h2 className="tech-mono text-sm text-cyan-600 mb-4 tracking-widest font-bold">STANDARD ARCHITECTURE FLOW</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            From physical sensors to autonomous decisions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
          
          <ArchNode 
            icon={HardDrive} 
            title="Physical World" 
            desc="Sensors, PLCs, IP Cameras" 
            step="01" 
          />
          
          <div className="hidden lg:block flex-1 h-[2px] bg-slate-200 relative arch-line rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-[marquee_2s_linear_infinite]" />
          </div>

          <ArchNode 
            icon={Activity} 
            title="Edge Gateway" 
            desc="Local pre-processing" 
            step="02" 
            active 
          />
          
          <div className="hidden lg:block flex-1 h-[2px] bg-slate-200 relative arch-line rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-[marquee_2s_linear_infinite]" style={{animationDelay: "0.5s"}}/>
          </div>

          <ArchNode 
            icon={Database} 
            title="AI Engine" 
            desc="Inference & Analytics" 
            step="03" 
          />
          
          <div className="hidden lg:block flex-1 h-[2px] bg-slate-200 relative arch-line rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-[marquee_2s_linear_infinite]" style={{animationDelay: "1s"}}/>
          </div>

          <ArchNode 
            icon={Zap} 
            title="Automation" 
            desc="Dashboards & Triggers" 
            step="04" 
          />

        </div>
      </div>
    </section>
  );
}

function ArchNode({ icon: Icon, title, desc, step, active = false }: { icon: React.ElementType, title: string, desc: string, step: string, active?: boolean }) {
  return (
    <div className={`arch-node p-6 w-full lg:w-48 flex-shrink-0 flex flex-col items-start border rounded-2xl shadow-sm transition-all ${active ? 'border-cyan-300 bg-white shadow-cyan-500/10' : 'border-slate-200 bg-white/60'}`}>
      <span className="tech-mono text-[10px] text-slate-400 font-bold mb-6">STEP {step}</span>
      <div className={`p-3 rounded-xl mb-6 ${active ? 'bg-cyan-50 border border-cyan-100 text-cyan-600' : 'bg-slate-100 text-slate-500'}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs text-slate-500 font-medium">{desc}</p>
    </div>
  );
}
