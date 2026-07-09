"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import Image from "next/image";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Company name is required." }),
  industry: z.string().min(1, { message: "Please select an industry." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function SendMessageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (serviceId === "YOUR_SERVICE_ID") {
        console.warn("EmailJS credentials not set. Simulating success.");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: `${values.firstName} ${values.lastName}`,
            from_email: values.email,
            phone: values.phone,
            company: values.company,
            industry: values.industry,
            message: values.message,
          },
          publicKey
        );
      }

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[2rem] shadow-xl shadow-accent-orange/10 overflow-hidden flex flex-col h-full items-center justify-center py-16 px-8 text-center min-h-[500px] w-full">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Received</h3>
        <p className="text-slate-600 mb-8 max-w-sm">Thank you for reaching out. Our engineering team will review your requirements and get back to you within 2 hours.</p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-accent-orange/30 text-primary hover:bg-accent-orange/10">Send Another Message</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-accent-orange/10 flex flex-col h-full w-full border border-slate-100 relative">
      
      {/* Top Panel: Info */}
      <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col bg-slate-50/50">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
          <span className="text-xs font-bold text-accent-orange tracking-wider uppercase">Contact Us</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
        <p className="text-sm text-slate-500 font-medium">
          Fill out the form and our engineering team will get back to you within 2 hours.
        </p>
      </div>

      {/* Bottom Panel: Form */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-medium">
            {error}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-slate-700">First Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} className="bg-slate-50 h-11 border-slate-200 focus-visible:ring-accent-orange transition-colors" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-slate-700">Last Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} className="bg-slate-50 h-11 border-slate-200 focus-visible:ring-accent-orange transition-colors" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-slate-700">Business Email <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" {...field} className="bg-slate-50 h-11 border-slate-200 focus-visible:ring-accent-orange transition-colors" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 border-r border-slate-200 pr-2">
                          <span className="text-xs font-bold">🇮🇳</span>
                          <span className="text-xs font-bold text-slate-600">+91</span>
                        </div>
                        <Input placeholder="99999 99999" {...field} className="bg-slate-50 h-11 border-slate-200 pl-16 focus-visible:ring-accent-orange transition-colors" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-slate-700">Company Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Corp" {...field} className="bg-slate-50 h-11 border-slate-200 focus-visible:ring-accent-orange transition-colors" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-slate-700">Industry</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate-50 h-11 border-slate-200 focus:ring-accent-orange transition-colors">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="pharma">Pharmaceuticals</SelectItem>
                        <SelectItem value="smart-city">Smart City / Gov</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold text-slate-700">Message <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="min-h-[100px] bg-slate-50 border-slate-200 resize-y focus-visible:ring-accent-orange transition-colors"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="pt-4 flex justify-end">
              <Button type="submit" className="h-11 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md shadow-primary/20" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
