import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-white text-slate-600 py-20 border-t border-slate-200">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/vingyan-logo.png"
                alt="Vingyan Techno Labs"
                width={160}
                height={48}
                className="h-12 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="tech-mono text-[10px] text-slate-400 font-bold w-20">EMAIL</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="tech-mono text-[10px] text-slate-400 font-bold w-20">PHONE</span>
                <span className="text-slate-700 text-sm font-medium">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="tech-mono text-[10px] text-slate-400 font-bold w-20 mt-0.5">LOCATION</span>
                <span className="text-slate-700 text-sm max-w-[200px] leading-snug">{siteConfig.contact.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 tracking-wide text-sm">IoT Systems</h4>
            <ul className="space-y-4">
              {navigation.footer.iot.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-slate-500 hover:text-cyan-600 transition-colors text-sm font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 tracking-wide text-sm">Computer Vision</h4>
            <ul className="space-y-4">
              {navigation.footer.cv.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 tracking-wide text-sm">Company</h4>
            <ul className="space-y-4">
              {navigation.footer.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Vingyan Techno Labs. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {navigation.footer.legal.map((link) => (
              <Link key={link.title} href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
