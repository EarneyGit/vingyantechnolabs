import * as React from "react";
import { cn } from "@/lib/utils";

export function CircuitBoard({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-cyan-500/20", className)}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 350 L100 350 L150 300 L150 100 L200 50 L350 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="350" r="4" fill="currentColor" />
      <circle cx="350" cy="50" r="4" fill="currentColor" />

      <path
        d="M50 250 L150 250 L200 200 L300 200 L350 150"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="250" r="4" fill="currentColor" />
      <circle cx="350" cy="150" r="4" fill="currentColor" />

      <path
        d="M100 150 L150 150 L200 100 L300 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="150" r="4" fill="currentColor" />
      <circle cx="300" cy="100" r="4" fill="currentColor" />
      
      <path
        d="M250 350 L250 300 L300 250 L350 250"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="250" cy="350" r="4" fill="currentColor" />
      <circle cx="350" cy="250" r="4" fill="currentColor" />
    </svg>
  );
}
