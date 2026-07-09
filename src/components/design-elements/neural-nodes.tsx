import * as React from "react";
import { cn } from "@/lib/utils";

export function NeuralNodes({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-blue-500/20", className)}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      
      {/* Nodes */}
      <circle cx="200" cy="100" r="6" fill="currentColor" />
      <circle cx="286.6" cy="150" r="6" fill="currentColor" />
      <circle cx="286.6" cy="250" r="6" fill="currentColor" />
      <circle cx="200" cy="300" r="6" fill="currentColor" />
      <circle cx="113.4" cy="250" r="6" fill="currentColor" />
      <circle cx="113.4" cy="150" r="6" fill="currentColor" />

      {/* Connecting lines */}
      <path d="M200 100 L286.6 150 L286.6 250 L200 300 L113.4 250 L113.4 150 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M200 100 L286.6 250 L113.4 250 Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M200 300 L286.6 150 L113.4 150 Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      
      {/* Outer Nodes */}
      <circle cx="200" cy="50" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="329.9" cy="125" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="329.9" cy="275" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="200" cy="350" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="70.1" cy="275" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="70.1" cy="125" r="4" fill="currentColor" opacity="0.5" />

      <path d="M200 100 L200 50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M286.6 150 L329.9 125" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M286.6 250 L329.9 275" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M200 300 L200 350" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M113.4 250 L70.1 275" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M113.4 150 L70.1 125" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
