"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#4f46e5" } }, // Indigo 600
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light"
      });
    })();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-900/10 flex flex-col h-full w-full border border-slate-100 relative">
      
      {/* Top Panel: Info */}
      <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col bg-slate-50/50">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Book a Meeting</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Schedule a Live Demo</h2>
        <p className="text-sm text-slate-500 font-medium">
          Pick a time that works for you. 30-minute personalized walkthrough.
        </p>
      </div>
      
      {/* Bottom Panel: Calendar */}
      <div className="p-4 sm:p-6 flex-1 w-full flex flex-col min-h-[650px] sm:min-h-[500px]">
        <div className="flex-1 w-full bg-slate-50/50 rounded-xl overflow-y-auto border border-slate-100 relative">
          <Cal
            calLink="aphidsgroup-hx2agd/30min" 
            style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>
      </div>
    </div>
  );
}
