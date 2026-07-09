import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ContactCta } from "@/components/home/contact-cta";
import { TrustStrip } from "@/components/home/trust-strip";

export const metadata: Metadata = {
  title: "About Us | Vingyan Techno Labs",
  description: "Engineering Intelligent Systems for the Connected World. Vingyan Techno Labs builds practical IoT, automation, AI computer vision, and data analytics solutions.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Premium Light Hero */}
      <section className="bg-slate-50 text-slate-900 pt-32 pb-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-accent-orange/30 bg-white tech-mono text-xs text-primary font-bold shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
            COMPANY_OVERVIEW
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
            Engineering Intelligent Systems for the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-yellow to-primary">
              Connected World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            Vingyan Techno Labs builds practical IoT, automation, AI computer vision, and data analytics solutions for modern enterprises.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative">
          <div className="absolute inset-0 bg-accent-orange/10 rounded-full blur-[100px] -z-10" />
          <h2 className="tech-mono text-xs font-bold text-accent-orange uppercase tracking-widest mb-6">Our Mission</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            &quot;To help organizations convert physical operations into connected, intelligent, and measurable systems.&quot;
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What We Believe</h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">The core principles guiding our engineering and delivery.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BeliefCard 
              title="Practical Innovation" 
              desc="We don't build technology for technology's sake. We build solutions that solve actual bottlenecks." 
            />
            <BeliefCard 
              title="Reliable Deployment" 
              desc="Industrial environments are harsh. Our architectures are designed to be robust and fault-tolerant." 
            />
            <BeliefCard 
              title="Scalable Systems" 
              desc="Start with one machine or one camera, scale seamlessly to thousands across multiple facilities." 
            />
            <BeliefCard 
              title="Clean Data Visibility" 
              desc="Data is useless if it's confusing. We prioritize intuitive dashboards and clear alerts." 
            />
            <BeliefCard 
              title="Hardware Agnosticism" 
              desc="We integrate with what you have where possible, reducing capital expenditure on unnecessary overhauls." 
            />
            <BeliefCard 
              title="Long-term Support" 
              desc="Deployment is just the beginning. We actively monitor, maintain, and retrain our models." 
            />
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900">Our Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <CapabilityItem text="IoT Hardware & Sensor Integration" />
            <CapabilityItem text="Custom Edge Gateway Development" />
            <CapabilityItem text="Computer Vision Model Training" />
            <CapabilityItem text="Real-time Analytics Dashboards" />
            <CapabilityItem text="PLC & SCADA Integration" />
            <CapabilityItem text="Automated Control Workflows" />
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}

function BeliefCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-accent-orange/50 hover:shadow-md transition-all">
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function CapabilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
      <CheckCircle2 className="h-5 w-5 text-accent-orange flex-shrink-0" />
      <span className="font-medium text-slate-900">{text}</span>
    </div>
  );
}
