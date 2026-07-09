/* eslint-disable @typescript-eslint/no-explicit-any */
import { industries } from "@/data/industries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CheckCircle2, ChevronRight, Server, Activity, MonitorPlay, ArrowRight, ArrowDown } from "lucide-react";
import { FaqSection } from "@/components/home/faq-section";
import { ContactCta } from "@/components/home/contact-cta";

// Generate static params for all industry routes
export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  
  industries.iot.forEach((ind) => {
    params.push({ category: "iot", slug: ind.id });
  });
  
  industries.computerVision.forEach((ind) => {
    params.push({ category: "computer-vision", slug: ind.id });
  });

  return params;
}

export async function generateMetadata(props: { params: Promise<{ category: string; slug: string }> }) {
  const params = await props.params;
  const ind = [...industries.iot, ...industries.computerVision].find((i) => i.id === params.slug);
  if (!ind) return { title: "Not Found" };
  
  const titleMap: Record<string, string> = {
    "industry-4-0": "Industry 4.0 IoT Solutions",
    "home-automation": "Smart Home Automation Solutions",
    "access-control-system": "Access Control System Solutions",
    "smart-parking-system": "Smart Parking System Solutions",
    "manufacturing": "Computer Vision for Manufacturing",
    "pharma": "Computer Vision for Pharma",
    "smart-cities": "Computer Vision for Smart Cities",
  };
  
  return {
    title: `${titleMap[ind.id] || ind.title} | Vingyan Techno Labs`,
    description: ind.description,
  };
}

// Component for dynamic hero visuals based on industry slug
function DynamicHeroVisual({ slug }: { slug: string }) {
  if (slug === "industry-4-0") {
    return (
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex flex-col items-center justify-center pointer-events-none opacity-80">
         <div className="w-80 h-64 border border-accent-orange/30 rounded-2xl shadow-xl shadow-accent-orange/10 flex flex-col items-center justify-center gap-4 bg-white/50 backdrop-blur-sm">
           <Activity className="h-16 w-16 text-accent-orange animate-pulse" />
           <div className="tech-mono text-primary font-bold text-sm">OEE: 94.2%</div>
           <div className="w-3/4 h-2 bg-slate-200 rounded-full overflow-hidden">
             <div className="h-full bg-accent-orange w-[94%]" />
           </div>
         </div>
      </div>
    );
  }
  
  if (slug === "manufacturing" || slug === "pharma") {
    return (
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center pointer-events-none opacity-80">
        <div className="w-96 h-72 border border-accent-blue/30 rounded-2xl shadow-xl shadow-accent-blue/10 bg-white/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="w-48 h-48 border-2 border-dashed border-accent-blue/50 flex flex-col justify-between p-2 relative z-10">
            <div className="flex justify-between w-full">
              <span className="w-2 h-2 border-t-2 border-l-2 border-accent-blue" />
              <span className="w-2 h-2 border-t-2 border-r-2 border-accent-blue" />
            </div>
            <div className="text-center tech-mono text-accent-blue font-bold text-xs">SCAN_ACTIVE</div>
            <div className="flex justify-between w-full">
              <span className="w-2 h-2 border-b-2 border-l-2 border-accent-blue" />
              <span className="w-2 h-2 border-b-2 border-r-2 border-accent-blue" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default subtle glow for others
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none opacity-40">
      <div className="absolute inset-0 bg-slate-200/50 rounded-full blur-[100px] transform translate-x-1/2" />
    </div>
  );
}

export default async function IndustryDetailPage(props: { params: Promise<{ category: string; slug: string }> }) {
  const params = await props.params;
  const categoryData: any[] = params.category === "iot" ? industries.iot : industries.computerVision;
  const industry = categoryData.find((i) => i.id === params.slug);

  if (!industry) {
    notFound();
  }

  const isCV = params.category === "computer-vision";

  return (
    <div className="bg-white">
      
      <section className="bg-slate-50 text-slate-900 pt-32 pb-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />
        
        <DynamicHeroVisual slug={params.slug} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb className="mb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-slate-500 hover:text-accent-orange font-medium transition-colors">Core</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-400"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/industries" className="text-slate-500 hover:text-accent-orange font-medium transition-colors">Systems</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-400"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-bold tech-mono text-xs">{industry.title.toUpperCase()}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-accent-orange/30 bg-white tech-mono text-xs text-primary font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              {isCV ? "COMPUTER_VISION_MODULE" : "IOT_SYSTEM_MODULE"}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
              {industry.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">{industry.description}</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-primary hover:to-accent-orange text-white font-bold h-14 px-8 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
              <Link href="/contact">Configure System <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution Technical Panel */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-10 md:p-16 bg-white border-b md:border-b-0 md:border-r border-slate-200">
              <h2 className="tech-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Current Limitations</h2>
              <p className="text-2xl text-slate-900 leading-tight font-bold">
                &quot;{industry.problem}&quot;
              </p>
            </div>
            <div className="p-10 md:p-16 bg-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-orange/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
              <h2 className="tech-mono text-xs font-bold text-accent-orange uppercase tracking-widest mb-6 relative z-10">Vingyan Architecture</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10">
                {industry.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Core Module Capabilities</h2>
            <p className="text-slate-600 max-w-2xl font-medium">Standardized features included in this deployment layer.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.capabilities.map((cap: string, i: number) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-accent-orange/50 hover:shadow-md transition-all">
                <CheckCircle2 className="h-6 w-6 text-accent-orange mb-4" />
                <h3 className="font-bold text-slate-900 text-base leading-snug">{cap}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture / Workflow */}
      <section className="py-24 bg-white border-b border-slate-200 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">System Data Flow</h2>
            <p className="text-slate-600 font-medium max-w-2xl">How physical events are captured, processed, and acted upon.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm flex-1 w-full flex flex-col items-start relative overflow-hidden group hover:border-accent-orange/50 hover:shadow-md transition-all">
              <div className="p-3 bg-slate-100 rounded-xl mb-6 group-hover:bg-accent-orange/10 transition-colors">
                <Server className="h-6 w-6 text-slate-600 group-hover:text-accent-orange transition-colors" />
              </div>
              <div className="font-bold text-slate-900 mb-1">{isCV ? "Camera Feeds" : "Sensors & PLCs"}</div>
              <div className="text-xs text-slate-500 font-bold tech-mono">1. DATA_CAPTURE</div>
            </div>
            
            <ArrowRight className="hidden md:block h-6 w-6 text-accent-orange flex-shrink-0" />
            <ArrowDown className="md:hidden h-6 w-6 text-accent-orange flex-shrink-0" />
            
            <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm flex-1 w-full flex flex-col items-start relative overflow-hidden group hover:border-primary/50 hover:shadow-md transition-all">
              <div className="p-3 bg-accent-orange/10 border border-accent-orange/20 rounded-xl mb-6">
                <Activity className="h-6 w-6 text-accent-orange" />
              </div>
              <div className="font-bold text-slate-900 mb-1">Edge Computing</div>
              <div className="text-xs text-accent-orange font-bold tech-mono">2. LOCAL_PROCESSING</div>
            </div>

            <ArrowRight className="hidden md:block h-6 w-6 text-accent-orange flex-shrink-0" />
            <ArrowDown className="md:hidden h-6 w-6 text-accent-orange flex-shrink-0" />
            
            <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm flex-1 w-full flex flex-col items-start relative overflow-hidden group hover:border-accent-blue/50 hover:shadow-md transition-all">
              <div className="p-3 bg-accent-blue/10 border border-accent-blue/20 rounded-xl mb-6">
                <MonitorPlay className="h-6 w-6 text-accent-blue" />
              </div>
              <div className="font-bold text-slate-900 mb-1">Command Dashboard</div>
              <div className="text-xs text-accent-blue font-bold tech-mono">3. ALERTS_&_ANALYTICS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Benefits */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Deployed Use Cases</h2>
              <div className="space-y-6">
                {industry.useCases.map((uc: {title: string; description: string}, i: number) => (
                  <div key={i} className="flex gap-4 border-b border-slate-200 pb-6 last:border-0">
                    <div className="w-10 h-10 rounded-xl border border-accent-orange/20 bg-accent-orange/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="tech-mono text-xs font-bold text-primary">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{uc.title}</h4>
                      <p className="text-slate-600 font-medium">{uc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Operational ROI</h2>
                <ul className="space-y-6">
                  {industry.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-accent-orange mr-4 flex-shrink-0" />
                      <span className="font-bold text-slate-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ handles its own section wrapper, but might need style override if we want. We'll leave it as is or it adapts slightly. */}
      {/* Assuming FaqSection is generic enough, but let's wrap it nicely */}
      <div className="bg-white">
        <FaqSection />
      </div>

      <ContactCta />
    </div>
  );
}
