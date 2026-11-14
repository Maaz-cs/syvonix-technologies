import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers3, BrainCircuit, Route, Smartphone } from "lucide-react";
import InnerPageShell from "@/components/InnerPageShell";
import PageIntro from "@/components/PageIntro";

const projects = [
  { id: "01", category: "Civic technology / Mobile platform", title: "SafeGuard", summary: "A concept for a role-based reporting and legal-aid platform connecting citizens with relevant support workflows.", tags: ["Flutter", "Firebase", "Role-based workflows"], icon: Smartphone, status: "Product development case study" },
  { id: "02", category: "AI / Mobility / Data", title: "Intelligent Traffic Management", summary: "An intelligent mobility system concept exploring vehicle detection, traffic-density analysis, congestion prediction and route optimisation.", tags: ["Computer vision", "Python", "PostgreSQL"], icon: Route, status: "Research and prototype" },
  { id: "03", category: "AI / Business productivity", title: "AI Business Assistant", summary: "A product concept exploring how an AI assistant could help teams retrieve information, handle routine requests and streamline knowledge workflows.", tags: ["LLM integration", "Automation", "API design"], icon: BrainCircuit, status: "Concept exploration" },
];

export default function PortfolioPage() {
  return <InnerPageShell><main className="site-shell">
    <PageIntro eyebrow="Portfolio / Selected explorations" title={<>Ideas become systems. <span className="gradient-text">Systems create possibilities.</span></>} description="A developing collection of software, AI and digital product work. We share project context transparently and distinguish prototypes and concepts from completed client deployments."/>
    <section className="section-pad">
      <div className="container flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><div className="eyebrow">Project stories</div><h2 className="section-title">A closer look at <span className="gradient-text">the work.</span></h2></div><p className="max-w-sm text-sm leading-7 text-slate-400">Each case study is structured around the challenge, the approach, the technology and what was learned.</p></div>
      <div className="container mt-14 space-y-16">
        {projects.map(({id,category,title,summary,tags,icon:Icon,status},i)=><article key={id} className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className={`relative min-h-[280px] overflow-hidden border border-white/10 ${i===1?"bg-[radial-gradient(ellipse_at_50%_50%,rgba(53,199,244,.23),transparent_55%),linear-gradient(130deg,#101d2a,#101020)]":i===2?"bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,157,94,.16),transparent_55%),linear-gradient(130deg,#241a26,#101020)]":"bg-[radial-gradient(ellipse_at_50%_50%,rgba(128,91,255,.28),transparent_55%),linear-gradient(130deg,#17182c,#0b1220)]"}`}>
            <div className="absolute inset-[18%] rotate-[-12deg] border border-white/20"/><div className="absolute inset-[28%] rotate-[17deg] border border-white/15"/><div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/25 bg-white/[0.06] text-white shadow-[0_0_70px_rgba(128,91,255,.2)]"><Icon size={30}/></div>
            <span className="absolute left-5 top-5 font-mono text-xs text-slate-400">CASE / {id}</span>
          </div>
          <div className="flex flex-col justify-center"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-violet-300">{category}</p><h3 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">{title}</h3><p className="mt-5 max-w-xl text-sm leading-8 text-slate-400">{summary}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map(t=><span className="border border-white/10 px-3 py-1.5 text-[10px] text-slate-400" key={t}>{t}</span>)}</div><p className="mt-7 text-[10px] uppercase tracking-[.16em] text-slate-600">{status} · Details shared as work is validated and approved</p></div>
        </article>)}
      </div>
    </section>
    <section className="section-pad border-y border-white/10 bg-[#0c0f19]"><div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><div className="eyebrow">Have a project in mind?</div><h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-.05em] text-white sm:text-5xl">Let's make the next case study <span className="gradient-text">yours.</span></h2></div><Link href="/contact" className="btn-primary w-fit">Start a conversation <ArrowRight size={16}/></Link></div></section>
  </main></InnerPageShell>;
}
