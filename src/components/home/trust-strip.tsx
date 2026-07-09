import { Cpu, Eye, Activity, Database, Building2 } from "lucide-react";

const capabilities = [
  { name: "IoT Architecture", icon: Cpu },
  { name: "Edge Devices", icon: Database },
  { name: "AI Computer Vision", icon: Eye },
  { name: "Automation Systems", icon: Activity },
  { name: "Data Analytics", icon: Activity },
  { name: "Smart Infrastructure", icon: Building2 },
];

export function TrustStrip() {
  return (
    <div className="border-y border-slate-200 bg-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Core Capabilities
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {capabilities.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <item.icon className="h-5 w-5 text-cyan-600" />
              <span className="font-medium text-slate-800">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
