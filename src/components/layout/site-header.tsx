"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Cpu, BoxSelect, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-2"
            : "bg-transparent border-b border-slate-200/50 py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <Image 
              src="/vingyan-logo.png"
              alt="Vingyan Techno Labs"
              width={240}
              height={72}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu className="max-w-none">
              <NavigationMenuList className="space-x-2">
                {navigation.main.map((item) => {
                  if (item.items) {
                    return (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all duration-300 h-10 px-4 rounded-full data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[850px] p-0 flex bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden mt-4">
                            
                            {/* Left Panel: IoT */}
                            <div className="w-1/2 p-8 border-r border-slate-100 relative group/panel bg-slate-50">
                              <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="p-2 bg-accent-green/10 rounded-lg border border-accent-green/20">
                                  <Cpu className="h-5 w-5 text-accent-green" />
                                </div>
                                <h4 className="font-bold text-sm text-charcoal">
                                  IoT Systems
                                </h4>
                              </div>
                              <ul className="space-y-1 relative z-10">
                                {item.items[0].links.map((link) => (
                                  <li key={link.title}>
                                    <NavigationMenuLink render={<Link href={link.href} />}>
                                      <div className="block p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group/link cursor-pointer border border-transparent hover:border-slate-200">
                                        <div className="flex items-center justify-between">
                                          <div className="font-semibold text-slate-800 group-hover/link:text-accent-green transition-colors">
                                            {link.title}
                                          </div>
                                          <ChevronRight className="h-4 w-4 text-accent-green opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                                          {link.description}
                                        </p>
                                      </div>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Right Panel: CV */}
                            <div className="w-1/2 p-8 relative group/panel bg-white">
                              <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="p-2 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
                                  <BoxSelect className="h-5 w-5 text-accent-blue" />
                                </div>
                                <h4 className="font-bold text-sm text-charcoal">
                                  Computer Vision
                                </h4>
                              </div>
                              <ul className="space-y-1 relative z-10">
                                {item.items[1].links.map((link) => (
                                  <li key={link.title}>
                                    <NavigationMenuLink render={<Link href={link.href} />}>
                                      <div className="block p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group/link cursor-pointer border border-transparent hover:border-slate-100">
                                        <div className="flex items-center justify-between">
                                          <div className="font-semibold text-slate-800 group-hover/link:text-accent-blue transition-colors">
                                            {link.title}
                                          </div>
                                          <ChevronRight className="h-4 w-4 text-accent-blue opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                                          {link.description}
                                        </p>
                                      </div>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        render={<Link href={item.href} />}
                        className="bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all duration-300 h-10 px-4 rounded-full inline-flex items-center justify-center text-sm font-medium"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Premium CTA Button */}
            <Button asChild className="relative overflow-hidden group bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-primary hover:to-accent-orange text-white rounded-full px-8 h-10 font-bold transition-all duration-300 shadow-lg shadow-accent-orange/25 border border-accent-orange/50">
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Book a Demo
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-slate-600" />}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-slate-200 p-6 overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.main.map((item) => (
                    <div key={item.title}>
                      {item.items ? (
                        <div className="space-y-4">
                          <h4 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-2">{item.title}</h4>
                          {item.items.map((group) => (
                            <div key={group.group} className="space-y-2 pl-4">
                              <h5 className="font-semibold text-xs text-accent-orange uppercase tracking-widest mt-6 mb-3 tech-mono">
                                {group.group}
                              </h5>
                              {group.links.map((link) => (
                                <Link
                                  key={link.title}
                                  href={link.href}
                                  className="block py-2 text-slate-600 hover:text-accent-orange transition-colors font-medium"
                                >
                                  {link.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block font-bold text-lg text-slate-900 hover:text-accent-orange border-b border-slate-100 pb-2 transition-colors"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-8">
                    <Button asChild className="w-full bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-primary hover:to-accent-orange text-white font-bold h-12 rounded-full shadow-lg shadow-accent-orange/25">
                      <Link href="/contact">Book a Demo</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </header>
    </>
  );
}
