"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { VisionBoundingBox } from "@/components/design-elements/vision-bounding-box";

export function IndustryStory() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            When operations become measurable, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              they become controllable.
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            We replace guesswork with data. Vingyan transforms passive facilities into active intelligence layers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Traditional Operations */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="tech-mono text-sm text-slate-500 mb-6 font-bold tracking-widest border-b border-slate-200 pb-4">
              TRADITIONAL OPERATIONS
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <XCircle className="h-6 w-6 text-slate-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Manual Monitoring</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Reliance on human guards and operators to catch defects or breaches.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <XCircle className="h-6 w-6 text-slate-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Delayed Reporting</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Data is gathered end-of-shift, making it impossible to stop errors in real time.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <XCircle className="h-6 w-6 text-slate-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Disconnected Devices</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Machines, cameras, and gates operate in silos with no central visibility.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <XCircle className="h-6 w-6 text-slate-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Reactive Decisions</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Actions are taken only after a breakdown or security incident occurs.</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Vingyan Enabled */}
          <div className="relative group">
            <VisionBoundingBox className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" label="OPTIMIZE" />
            <div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-xl shadow-indigo-600/10 relative overflow-hidden z-10 transition-transform duration-500 group-hover:scale-[0.98]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] pointer-events-none -z-10" />
            <h3 className="tech-mono text-sm text-indigo-600 mb-6 font-bold tracking-widest border-b border-indigo-100 pb-4">
              VINGYAN-ENABLED OPERATIONS
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Live Dashboards</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Continuous visibility into machine health, occupancy, and anomalies.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Automated Alerts</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Instant notifications routed to the right personnel the second an issue is detected.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Connected Systems</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Cameras talk to gates. Sensors talk to PLCs. Everything is unified.</div>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Data-Backed Decisions</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">Historical analytics reveal exactly where bottlenecks and losses are occurring.</div>
                </div>
              </li>
            </ul>
          </div>
          </div>

        </div>

      </div>
    </section>
  );
}
