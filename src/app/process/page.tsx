import Link from "next/link";
import { ArrowRight, Search, DraftingCompass, Code2, TestTube2, Rocket, RefreshCw } from "lucide-react";
import InnerPageShell from "@/components/InnerPageShell";
import PageIntro from "@/components/PageIntro";

const phases = [
  { n: "01", title: "Discovery & alignment", icon: Search, outcome: "A shared understanding of the problem and the intended outcome.", work: ["Understand business goals and users", "Review existing systems and constraints", "Identify scope, risks and dependencies", "Agree on priorities and success criteria"] },
  { n: "02", title: "Product & experience design", icon: DraftingCompass, outcome: "A clear product direction and experience blueprint.", work: ["Map user journeys and key workflows", "Define information architecture", "Create wireframes and interface direction", "Review and refine before implementation"] },
  { n: "03", title: "Architecture & development", icon: Code2, outcome: "A working solution built on an appropriate technical foundation.", work: ["Choose suitable frameworks and services", "Design data models and integrations", "Build in reviewable increments", "Keep implementation documented"] },
  { n: "04", title: "Testing & validation", icon: TestTube2, outcome: "A release candidate checked against agreed requirements.", work: ["Test core functionality and edge cases", "Review responsiveness and accessibility", "Check performance and security basics", "Resolve issues and confirm acceptance"] },
  { n: "05", title: "Deployment & handover", icon: Rocket, outcome: "A prepared release and a clear handover.", work: ["Prepare hosting and environment settings", "Configure domain and deployment", "Document key operational details", "Coordinate release and handover"] },
  { n: "06", title: "Support & evolution", icon: RefreshCw, outcome: "A practical path for maintaining and improving the product.", work: ["Monitor issues and user feedback", "Plan fixes and enhancements", "Review dependencies and performance", "Prioritise the next iteration"] },
];

export default function ProcessPage() {
  return <InnerPageShell><main className="site-shell">
    <PageIntro eyebrow="Process / How we work" title={<>Clear thinking. Careful engineering. <span className="gradient-text">Better outcomes.</span></>} description="A transparent, collaborative delivery process helps keep decisions clear, expectations realistic and the work connected to the problem it is meant to solve."/>
    <section className="section-pad">
      <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><div className="eyebrow">The delivery framework</div><h2 className="section-title">From first conversation to <span className="gradient-text">continuous improvement.</span></h2><p className="mt-6 text-sm leading-7 text-slate-400">Not every engagement needs every phase in the same depth. We adapt the process to the size, risk and maturity of the project while keeping communication and review points visible.</p></div>
        <div className="border-t border-white/10">{phases.map(({n,title,icon:Icon,outcome,work})=><article key={n} className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[60px_1fr]"><span className="font-mono text-xs text-violet-300">{n} / 06</span><div><div className="flex flex-wrap items-center gap-3"><Icon size={20} className="text-violet-300"/><h3 className="text-xl font-medium text-white sm:text-2xl">{title}</h3></div><p className="mt-3 text-sm leading-7 text-slate-300">{outcome}</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{work.map(w=><p className="flex gap-2 text-xs leading-6 text-slate-500" key={w}><span className="text-violet-300">—</span>{w}</p>)}</div></div></article>)}</div>
      </div>
    </section>
    <section className="section-pad border-y border-white/10 bg-[#0c0f19]"><div className="container grid gap-10 md:grid-cols-3">{[["Visibility","Progress, open questions and decisions are communicated at agreed checkpoints."],["Feedback","Reviews are built into the process so important changes are surfaced early."],["Ownership","Scope, responsibilities and handover expectations are documented before delivery."]].map(([t,d],i)=><div className="border-t border-violet-400/40 pt-5" key={t}><span className="font-mono text-xs text-violet-300">0{i+1}</span><h3 className="mt-5 text-xl font-medium text-white">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{d}</p></div>)}</div></section>
    <section className="section-pad"><div className="container"><div className="eyebrow">Start with a conversation</div><h2 className="section-title max-w-3xl">Have a goal? We'll help map the <span className="gradient-text">way forward.</span></h2><Link href="/contact" className="btn-primary mt-8">Discuss your project <ArrowRight size={16}/></Link></div></section>
  </main></InnerPageShell>;
}
