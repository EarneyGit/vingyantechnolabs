"use client";

import { ArrowRight, Cpu, ScanLine, Activity, BarChart3 } from "lucide-react";
import Link from "next/link";

import { CircuitBoard } from "@/components/design-elements/circuit-board";

export function HeroIntelligent() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-slate-200">
      
      {/* Subtle ambient glows - Modern Tech Style */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/5 via-slate-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      
      {/* Premium Tech Elements */}
      <div className="absolute top-10 md:top-20 left-0 -translate-x-[60%] md:-translate-x-1/2 opacity-[0.05] md:opacity-[0.1] pointer-events-none">
        <CircuitBoard className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] text-accent-orange" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-[0.1] pointer-events-none hidden lg:block">
        <CircuitBoard className="w-[800px] h-[800px] text-accent-blue transform rotate-180" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <div className="inline-flex items-center rounded-full border border-accent-orange/30 bg-white px-3 py-1 text-sm font-semibold text-accent-orange mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent-orange mr-2 animate-pulse"></span>
            Enterprise IoT & AI Computer Vision Systems
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Connecting Physical Operations to <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-yellow to-accent-orange">
              Actionable Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed font-medium">
            We extract real-time data from environments, machinery, and physical access points using advanced sensors and AI vision. Transform legacy facilities into fully automated, measurable ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-primary hover:to-accent-orange text-white font-bold text-lg transition-all shadow-lg shadow-accent-orange/25 border border-accent-orange/50 group"
            >
              Initialize Project 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/industries/iot" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold text-lg transition-all shadow-sm"
            >
              Explore Architectures
            </Link>
          </div>

          {/* Quick Stats/Features Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full">
            {[
              { icon: Cpu, label: "IoT Telemetry", value: "Real-Time", color: "text-accent-orange", bg: "bg-accent-orange/10", border: "border-slate-200" },
              { icon: ScanLine, label: "AI Vision Models", value: "99.8% Acc", color: "text-accent-blue", bg: "bg-accent-blue/10", border: "border-slate-200" },
              { icon: Activity, label: "System Uptime", value: "99.99%", color: "text-accent-green", bg: "bg-accent-green/10", border: "border-slate-200" },
              { icon: BarChart3, label: "OEE Tracking", value: "Automated", color: "text-accent-yellow", bg: "bg-accent-yellow/10", border: "border-slate-200" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center p-6 bg-white border ${stat.border} rounded-2xl shadow-sm hover:border-accent-orange/50 transition-colors`}>
                <div className={`p-3 rounded-full ${stat.bg} mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-slate-900 font-bold text-xl mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
