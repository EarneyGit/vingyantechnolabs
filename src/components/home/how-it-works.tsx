import { Search, PenTool, Zap, Cloud, BarChart } from "lucide-react";

const steps = [
  {
    title: "Discover Use Case",
    description: "We analyze your operations to identify bottlenecks where IoT or CV can provide measurable ROI.",
    icon: Search,
  },
  {
    title: "Design Architecture",
    description: "Our engineers design a custom edge-to-cloud architecture tailored to your security and scale requirements.",
    icon: PenTool,
  },
  {
    title: "Integrate Hardware",
    description: "We deploy and connect sensors, cameras, and gateways to your existing legacy or modern systems.",
    icon: Zap,
  },
  {
    title: "Deploy Intelligence",
    description: "AI models and telemetry pipelines are pushed to the edge for real-time, low-latency processing.",
    icon: Cloud,
  },
  {
    title: "Monitor & Improve",
    description: "You gain access to centralized dashboards, while we provide ongoing support and model retraining.",
    icon: BarChart,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
          <p className="text-lg text-slate-600">
            A proven, pragmatic approach to deploying operational intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-md flex items-center justify-center relative z-10 mb-6 group hover:border-cyan-100 transition-colors">
                  <step.icon className="h-8 w-8 text-cyan-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
