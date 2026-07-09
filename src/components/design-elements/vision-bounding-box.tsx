import * as React from "react";
import { cn } from "@/lib/utils";

export function VisionBoundingBox({ className, label = "DETECT" }: { className?: string, label?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 border-2 border-dashed border-teal-400/40 rounded-lg pointer-events-none" />
      
      {/* Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-teal-500 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-teal-500 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-teal-500 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-teal-500 rounded-br-lg" />
      
      {/* Label */}
      <div className="absolute -top-6 left-0 tech-mono text-[10px] bg-teal-500 text-white px-2 py-0.5 rounded shadow-sm font-bold tracking-widest whitespace-nowrap">
        {label} 99%
      </div>
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-teal-400/60 shadow-[0_0_8px_2px_rgba(45,212,191,0.5)] animate-[scan_3s_ease-in-out_infinite]" />
    </div>
  );
}
