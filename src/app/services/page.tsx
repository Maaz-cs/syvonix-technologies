import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Workflow, PanelsTopLeft, Database, ShieldCheck, Cloud, Gauge } from "lucide-react";
import InnerPageShell from "@/components/InnerPageShell";
import PageIntro from "@/components/PageIntro";

const services = [
  { n: "01", icon: Code2, title: "Custom software development", lead: "Software shaped around the way your organisation works.", body: "We design and engineer web applications, internal platforms and tailored software that support specific workflows, users and business requirements.", deliverables: ["Web applications and portals", "Custom business systems", "API and backend development", "SaaS product engineering"] },
  { n: "02", icon: BrainCircuit, title: "AI & machine learning", lead: "Practical intelligence, integrated with purpose.", body: "We help identify useful AI opportunities and integrate intelligent capabilities into products and operations, with attention to data, reliability and user experience.", deliverables: ["LLM and AI integrations", "AI assistants and chat experiences", "Document and knowledge workflows", "Predictive and ML prototypes"] },
  { n: "03", icon: Workflow, title: "Automation & integration", lead: "Less repetitive work. Better-connected systems.", body: "We connect applications and automate repeatable processes so information moves more consistently across the tools teams already use.", deliverables: ["Workflow automation", "Third-party API integrations", "Data synchronisation", "Operational process tooling"] },
  { n: "04", icon: PanelsTopLeft, title: "UI/UX & digital product design", lead: "Experiences that make complex tools feel clear.", body: "We translate product goals and user needs into structured journeys, interfaces and design systems that are accessible, responsive and coherent.", deliverables: ["Product discovery and wireframes", "Interface and interaction design", "Responsive design systems", "Prototyping and usability review"] },
  { n: "05", icon: Database, title: "Backend, data & cloud", lead: "The foundations that keep digital products dependable.", body: "We build the application logic, data structures and deployment foundations that help products operate reliably and evolve with changing needs.", deliverables: ["Database design", "Backend services and APIs", "Cloud deployment support", "Monitoring and performance review"] },
  { n: "06", icon: ShieldCheck, title: "Maintenance & continuous improvement", lead: "Support that helps products keep moving.", body: "After launch, products need attention. We can help maintain, refine and improve existing applications through planned technical support.", deliverables: ["Bug fixes and updates", "Security and dependency reviews", "Performance optimisation", "Feature enhancements"] },
];

export default function ServicesPage() {
  return <InnerPageShell><main className="site-shell">
    <PageIntro eyebrow="Services / What we engineer" title={<>Technology built around <span className="gradient-text">your next move.</span></>} description="From a focused digital experience to a connected software platform, SYVONIX brings engineering, AI and product thinking together to solve practical challenges." />
    <section className="section-pad">
      <div className="container flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div><div className="eyebrow">Our capabilities</div><h2 className="section-title">Six disciplines. <span className="gradient-text">One thoughtful approach.</span></h2></div>
        <p className="max-w-sm text-sm leading-7 text-slate-400">The scope is shaped around your goals. Services can be delivered independently or combined into a complete product engagement.</p>
      </div>
      <div className="container mt-14">
        {services.map(({n,icon:Icon,title,lead,body,deliverables}) => <article key={n} className="grid gap-7 border-t border-white/10 py-10 lg:grid-cols-[70px_.9fr_1.1fr]">
          <span className="font-mono text-xs text-violet-300">{n}</span>
          <div><Icon className="text-violet-300" size={25}/><h3 className="mt-5 text-2xl font-medium tracking-tight text-white">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-slate-400">{lead}</p></div>
          <div><p className="text-sm leading-7 text-slate-400">{body}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{deliverables.map(d=><div className="flex items-start gap-2 text-xs leading-6 text-slate-300" key={d}><ArrowUpRight size={14} className="mt-1 shrink-0 text-violet-300"/>{d}</div>)}</div></div>
        </article>)}
        <div className="border-t border-white/10"/>
      </div>
    </section>
    <section className="section-pad border-y border-white/10 bg-[#0c0f19]">
      <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div><div className="eyebrow">How we think</div><h2 className="section-title">Technology is a means. <span className="gradient-text">Progress is the goal.</span></h2></div>
        <div className="space-y-7 text-sm leading-8 text-slate-400">
          <p>We don't begin with a preferred framework or a fashionable tool. We begin by understanding the problem, the people affected and the constraints around the work.</p>
          <p>From there, we recommend an approach that balances usability, delivery effort, security, maintainability and room to grow. The result should be appropriate to the challenge—not more complicated than it needs to be.</p>
          <div className="flex flex-wrap gap-3 pt-2">{["Discover","Design","Engineer","Validate","Evolve"].map((x,i)=><span className="border-b border-violet-400/40 pb-2 text-xs font-semibold uppercase tracking-[.15em] text-slate-300" key={x}>{`0${i+1}`} / {x}</span>)}</div>
        </div>
      </div>
    </section>
    <section className="section-pad"><div className="container"><div className="eyebrow">Let's scope your project</div><h2 className="section-title max-w-3xl">Have a challenge that needs the <span className="gradient-text">right technology?</span></h2><p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">Tell us what you are trying to achieve. We can discuss the requirements and identify a sensible next step.</p><Link href="/contact" className="btn-primary mt-8">Discuss a project <ArrowRight size={16}/></Link></div></section>
  </main></InnerPageShell>;
}
