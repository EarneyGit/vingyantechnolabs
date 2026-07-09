import { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SendMessageForm } from "@/components/forms/send-message-form";
import { CalBooking } from "@/components/forms/cal-booking";

export const metadata: Metadata = {
  title: "Contact Us | Book a Demo | Vingyan Techno Labs",
  description: "Have an IoT, automation, or computer vision use case? Tell us what you want to monitor, automate, or analyze.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden pt-24 pb-24">
      {/* Dynamic Background Split */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-slate-50 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800 z-0" />
      
      {/* Optional mesh layer for the bottom purple area */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-0 opacity-50" />

      {/* Main Container */}
      <section className="w-full px-4 md:px-12 lg:px-20 relative z-10 max-w-screen-3xl mx-auto">
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: EmailJS Form */}
          <div className="w-full flex">
            <SendMessageForm />
          </div>

          {/* Right: Cal.com Embed */}
          <div className="w-full flex">
            <CalBooking />
          </div>

        </div>
      </section>

      {/* Direct Contact Footer */}
      <section className="mt-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-6 tech-mono italic">or reach out directly</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all group w-full sm:w-auto"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-indigo-100 font-bold uppercase tracking-wider">Email</div>
                <div className="font-bold text-white text-sm">{siteConfig.contact.email}</div>
              </div>
            </a>

            <a 
              href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all group w-full sm:w-auto"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-indigo-100 font-bold uppercase tracking-wider">WhatsApp</div>
                <div className="font-bold text-white text-sm">{siteConfig.contact.phone}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
