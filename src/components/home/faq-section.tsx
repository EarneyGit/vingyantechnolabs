import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="tech-mono text-xs text-cyan-600 mb-4 tracking-widest font-bold">FAQ_INDEX</h2>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-slate-600 font-medium">Technical and operational inquiries.</p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 bg-white px-6 rounded-xl shadow-sm data-[state=open]:border-cyan-300 data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-left text-slate-800 hover:text-cyan-700 py-6 font-bold border-b-0 hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="tech-mono text-[10px] text-slate-400 font-bold bg-slate-50 px-2 py-1 rounded">Q{i + 1}</span>
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
