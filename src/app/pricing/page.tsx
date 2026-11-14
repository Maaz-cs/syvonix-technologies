import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import InnerPageShell from "@/components/InnerPageShell";
import PageIntro from "@/components/PageIntro";

const models = [
  { n: "01", title: "Defined-scope project", fit: "A clear deliverable with agreed requirements and milestones.", details: ["Discovery and scope definition", "Milestone-based delivery plan", "Defined deliverables and acceptance", "Handover options"] },
  { n: "02", title: "AI or automation engagement", fit: "A focused workflow, integration or AI capability with measurable requirements.", details: ["Use-case and feasibility review", "Data and integration assessment", "Prototype or implementation scope", "Validation and iteration"] },
  { n: "03", title: "Ongoing engineering support", fit: "An existing product that needs regular maintenance or planned development.", details: ["Agreed support scope", "Prioritised improvement backlog", "Scheduled engineering capacity", "Regular progress reviews"] },
];

const factors = ["Feature scope and technical complexity", "Number of platforms and integrations", "Design, content and data requirements", "Security, compliance and hosting needs", "Delivery timeline and dependencies", "Ongoing support expectations"];

export default function PricingPage() {
  return <InnerPageShell><main className="site-shell">
    <PageIntro eyebrow="Pricing / Engagement" title={<>Clear scope. Thoughtful investment. <span className="gradient-text">No guesswork.</span></>} description="Every project is different. We discuss the desired outcome, technical requirements and delivery constraints before recommending an engagement model and preparing a proposal."/>
    <section className="section-pad">
      <div className="container"><div className="eyebrow">Ways to work together</div><h2 className="section-title">Choose a model that fits <span className="gradient-text">the work.</span></h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">We don't publish one-size-fits-all prices for work whose scope has not been defined. Instead, we align on requirements and provide a proposal based on the actual work involved.</p>
        <div className="mt-14">{models.map(({n,title,fit,details})=><article key={n} className="grid gap-6 border-t border-white/10 py-9 lg:grid-cols-[70px_.9fr_1.1fr]"><span className="font-mono text-xs text-violet-300">{n}</span><div><h3 className="text-2xl font-medium text-white">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-slate-400">{fit}</p></div><div className="grid gap-3 sm:grid-cols-2">{details.map(d=><p key={d} className="flex gap-2 text-xs leading-6 text-slate-400"><Check size={14} className="mt-1 shrink-0 text-violet-300"/>{d}</p>)}</div></article>)}<div className="border-t border-white/10"/></div>
      </div>
    </section>
    <section className="section-pad border-y border-white/10 bg-[#0c0f19]">
      <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><div className="eyebrow">What shapes an estimate</div><h2 className="section-title">The details behind <span className="gradient-text">the number.</span></h2><p className="mt-5 text-sm leading-7 text-slate-400">A useful estimate is based on more than a feature list. We consider the full delivery context before proposing a budget and timeline.</p></div>
        <div className="grid gap-x-8 sm:grid-cols-2">{factors.map((f,i)=><div className="flex gap-4 border-b border-white/10 py-5" key={f}><span className="font-mono text-xs text-violet-300">0{i+1}</span><p className="text-sm leading-6 text-slate-300">{f}</p></div>)}</div>
      </div>
    </section>
    <section className="section-pad"><div className="container"><div className="glass max-w-4xl rounded-2xl p-7 sm:p-10"><div className="flex gap-3"><Info className="mt-1 shrink-0 text-violet-300" size={19}/><div><h3 className="text-lg font-semibold text-white">A note on estimates</h3><p className="mt-3 text-sm leading-7 text-slate-400">Any estimate shared before discovery is indicative only. Final pricing, milestones, payment terms, assumptions and exclusions should be documented in a written proposal or statement of work before development begins.</p></div></div></div></div></section>
    <section className="pb-24"><div className="container border-y border-violet-300/20 py-14 sm:py-20"><div className="eyebrow">Request a project estimate</div><h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-.05em] text-white sm:text-6xl">Tell us what you're planning. <span className="gradient-text">We'll take it from there.</span></h2><Link href="/contact" className="btn-primary mt-8">Request a proposal <ArrowRight size={16}/></Link></div></section>
  </main></InnerPageShell>;
}
