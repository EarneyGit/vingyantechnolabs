/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { industries } from "@/data/industries";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Vingyan Techno Labs",
  description: "Explore our IoT and Computer Vision solutions tailored for Manufacturing, Pharma, Smart Cities, and more.",
};

export default function IndustriesOverview() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <div className="bg-slate-50 text-slate-900 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-lg text-slate-600">
            Vingyan Techno Labs builds practical, scalable architectures to solve specific operational challenges across industries using IoT and AI Computer Vision.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {/* IoT Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-900">IoT Solutions</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.iot.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>

        {/* CV Section */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Computer Vision Solutions</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.computerVision.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ industry }: { industry: any }) {
  return (
    <Card className="flex flex-col border-slate-200 shadow-sm hover:border-accent-orange/50 hover:shadow-md transition-all bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">{industry.title}</CardTitle>
        <CardDescription className="text-base text-slate-600 line-clamp-2">
          {industry.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {industry.capabilities.slice(0, 4).map((cap: string, i: number) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-accent-orange mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{cap}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-slate-100 text-slate-900 hover:bg-primary hover:text-white transition-colors">
          <Link href={industry.slug}>
            View Solution Details <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
