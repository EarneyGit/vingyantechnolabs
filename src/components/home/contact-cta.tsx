import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-yellow opacity-90 pointer-events-none" />
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange/30 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
          Have a process you want to monitor, automate, or improve?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
          Deploy enterprise-grade intelligence layers across your facility in weeks, not years.
        </p>
        
        <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-50 hover:text-primary/90 font-bold h-14 px-8 rounded-full shadow-lg shadow-black/10 hover:shadow-xl hover:scale-[1.02] transition-all">
          <Link href="/contact">Book a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
}
