import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, MapPin, Clock, ArrowRight } from "lucide-react";
import InnerPageShell from "@/components/InnerPageShell";
import PageIntro from "@/components/PageIntro";

const contactEmail = "hello@syvonix.com";

export default function ContactPage() {
  return <InnerPageShell><main className="site-shell">
    <PageIntro eyebrow="Contact / Start a conversation" title={<>Let's talk about what you're <span className="gradient-text">building next.</span></>} description="Share a little about your idea, product or business challenge. We'll use the details to understand what you need and identify a sensible next step."/>
    <section className="section-pad">
      <div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div><div className="eyebrow">Get in touch</div><h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-[-.05em] text-white sm:text-5xl">Good work starts with a <span className="gradient-text">good conversation.</span></h2><p className="mt-6 text-sm leading-7 text-slate-400">Whether you have a detailed brief or are still exploring an idea, tell us what you have in mind. We can discuss the challenge, likely scope and possible next steps.</p>
          <div className="mt-10 space-y-7 border-t border-white/10 pt-7">
            <div className="flex gap-4"><div className="icon-box"><Mail size={19}/></div><div><p className="text-xs uppercase tracking-[.16em] text-slate-500">Email</p><a href={`mailto:${contactEmail}`} className="mt-2 inline-flex items-center gap-2 text-base text-white hover:text-violet-300">{contactEmail}<ArrowUpRight size={14}/></a><p className="mt-1 text-xs text-slate-600">Replace this placeholder with your verified company email before launch.</p></div></div>
            <div className="flex gap-4"><div className="icon-box"><MessageSquare size={19}/></div><div><p className="text-xs uppercase tracking-[.16em] text-slate-500">Project enquiries</p><p className="mt-2 text-sm leading-6 text-slate-300">For new projects, collaborations and technical discussions.</p></div></div>
            <div className="flex gap-4"><div className="icon-box"><Clock size={19}/></div><div><p className="text-xs uppercase tracking-[.16em] text-slate-500">Response</p><p className="mt-2 text-sm leading-6 text-slate-300">Response time and business hours can be added once your operating process is finalised.</p></div></div>
          </div>
        </div>
        <div className="border border-white/10 bg-white/[0.025] p-6 sm:p-9">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-300">Project brief</p>
          <h3 className="mt-3 text-2xl font-medium text-white">Tell us about your requirements.</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">Use the button below to open an email draft with a project brief template. A connected form and notification service can be added before the public launch.</p>
          <div className="mt-8 space-y-5">
            {["Your name and organisation","What are you looking to build?","The problem you want to solve","Expected timeline and budget range","Any useful links or references"].map((x,i)=><div className="border-b border-white/10 pb-3" key={x}><p className="text-[10px] uppercase tracking-[.15em] text-slate-600">0{i+1}</p><p className="mt-2 text-sm text-slate-300">{x}</p></div>)}
          </div>
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent("Project enquiry — SYVONIX Technologies")}&body=${encodeURIComponent("Hello SYVONIX Technologies,\n\nMy name / organisation:\n\nWhat I am looking to build:\n\nProblem to solve:\n\nExpected timeline:\n\nBudget range:\n\nRelevant links or references:\n\nThank you.")}`} className="btn-primary mt-9 w-full">Prepare project enquiry <ArrowRight size={16}/></a>
          <p className="mt-4 text-center text-[10px] leading-5 text-slate-600">This opens your default email application. It does not submit data to a server.</p>
        </div>
      </div>
    </section>
    <section className="border-y border-white/10 bg-[#0c0f19] py-12"><div className="container flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-xs uppercase tracking-[.18em] text-slate-500">SYVONIX Technologies</p><p className="mt-2 text-xl font-medium text-white">Intelligence Meets Innovation.</p></div><Link href="/services" className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-white">Explore our capabilities <ArrowUpRight size={16}/></Link></div></section>
  </main></InnerPageShell>;
}
