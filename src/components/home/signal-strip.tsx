"use client";

import { Activity } from "lucide-react";

const signals = [
  "IoT Networks",
  "Edge Devices",
  "Camera Intelligence",
  "Smart Dashboards",
  "Automation Triggers",
  "Real-Time Alerts",
  "Industrial Analytics",
  "Access Control Systems",
  "OEE Monitoring"
];

export function SignalStrip() {
  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-4 overflow-hidden flex items-center relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap min-w-full">
        {/* Double the array for seamless looping */}
        {[...signals, ...signals, ...signals].map((signal, idx) => (
          <div key={idx} className="flex items-center mx-8">
            <Activity className="h-4 w-4 text-cyan-600 mr-2 opacity-80" />
            <span className="tech-mono text-[11px] text-slate-600 font-bold tracking-widest uppercase">
              {signal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
