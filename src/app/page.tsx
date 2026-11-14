import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Cpu,
  Database, Layers3, Workflow, Globe2, ShieldCheck, Gauge,
} from "lucide-react";

const capabilities = [
  ["01", "Web architecture", "High-performance websites, SaaS platforms and custom dashboards built around your users and business goals."],
  ["02", "Software systems", "Purpose-built business applications, internal portals, workflow platforms and connected digital systems."],
  ["03", "AI solutions", "AI assistants, LLM integrations, knowledge experiences and machine-learning capabilities grounded in real use cases."],
  ["04", "Business automation", "Intelligent workflows, API integrations and data pipelines that reduce repetitive work and operational friction."],
  ["05", "UI/UX engineering", "Clear product experiences, thoughtful interaction design and responsive interfaces that feel as good as they work."],
  ["06", "Maintenance & support", "Ongoing improvements, performance tuning, security updates and technical support as products evolve."],
];

const process = [
  ["01", "Discovery & strategy", "Understand the business, users, constraints and desired outcomes. Define the problem before choosing the technology."],
  ["02", "UX & product design", "Map user journeys, structure the experience and validate the interface direction before development begins."],
  ["03", "Architecture & engineering", "Build the product with maintainable architecture, considered integrations and a clear focus on reliability."],
  ["04", "Quality & deployment", "Test across devices and real-world scenarios, then prepare a stable release and a path for ongoing improvement."],
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "OpenAI", "REST APIs", "Cloud deployment"];

const engagement = [
  ["Product development", "For teams taking a new digital product, platform or MVP from concept to launch.", "Project-based"],
  ["AI & workflow automation", "For organisations looking to connect tools, streamline processes and introduce practical AI.", "Scoped solution"],
  ["Ongoing engineering", "For products that need continued development, maintenance and technical direction.", "Retainer"],
];

const faqs = [
  ["Can we work with SYVONIX on one specific service?", "Yes. Work can be scoped around a standalone need such as a website, product interface, API integration or AI feature, as well as a broader end-to-end build."],
  ["Do you build custom software or use ready-made templates?", "The approach depends on the problem. We select suitable frameworks and services, then shape the implementation around the required functionality, user experience and future needs."],
  ["Can you integrate AI into an existing product?", "AI integration can be considered for suitable use cases, including assistants, document workflows, search and process automation. The best approach depends on the available data, systems and expected outcome."],
  ["Do you provide support after launch?", "Post-launch support can be included in the project scope or arranged as an ongoing engagement covering maintenance, fixes, improvements and technical updates."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />

      <section className="border-y border-white/10 py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-slate-500">Technology for ambitious ideas</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-400">
            <span>Software engineering</span><span>Artificial intelligence</span><span>Automation</span><span>Digital products</span>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><div className="eyebrow">Build with purpose</div><p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">SYVONIX / TECHNOLOGIES</p></div>
          <div>
            <h2 className="text-3xl font-medium leading-[1.18] tracking-[-.045em] text-white sm:text-5xl">We believe technology should solve meaningful problems — not add another layer of complexity.</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400">SYVONIX Technologies brings software engineering, artificial intelligence and digital product thinking together. We work from the challenge outward: understanding what needs to change, shaping the right solution and engineering digital systems that are useful, dependable and ready to evolve.</p>
            <a href="/about" className="mt-8 inline-flex items-center gap-2 border-b border-violet-400/60 pb-2 text-sm font-semibold text-violet-300 hover:text-white">More about SYVONIX <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad border-y border-white/10 bg-[#0c0f19]">
        <div className="container">
          <div className="eyebrow">What we engineer</div>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-.055em] text-white sm:text-6xl">Digital capability for the <span className="gradient-text">next stage.</span></h2>
            <p className="max-w-sm text-sm leading-7 text-slate-400">From a focused feature to a connected business platform, we bring the right disciplines together around the outcome.</p>
          </div>
          <div className="mt-16">
            {capabilities.map(([num,title,desc]) => (
              <a href="#services" key={num} className="group grid gap-4 border-t border-white/10 py-7 transition-colors hover:border-violet-400/50 md:grid-cols-[80px_.8fr_1.2fr_32px] md:items-center">
                <span className="font-mono text-xs text-violet-300">{num}</span>
                <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-400">{desc}</p>
                <ArrowUpRight className="text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" size={20}/>
              </a>
            ))}
            <div className="border-t border-white/10"/>
          </div>
        </div>
      </section>

      <section id="work" className="section-pad">
        <div className="container">
          <div className="eyebrow">Selected work</div>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h2 className="text-4xl font-medium leading-[1.08] tracking-[-.055em] text-white sm:text-6xl">Thoughtful work.<br/><span className="gradient-text">Real-world purpose.</span></h2>
            <p className="max-w-lg text-sm leading-7 text-slate-400">We are building a portfolio of digital products and engineering work. Each published case study will explain the challenge, the approach, the technology and the outcome — with project details shared only when approved.</p>
          </div>
          <div className="mt-14 grid gap-8 border-y border-white/10 py-8 md:grid-cols-[1fr_1fr] md:gap-16">
            <div className="relative min-h-[250px] overflow-hidden rounded-sm bg-[radial-gradient(ellipse_at_55%_45%,rgba(128,91,255,.3),transparent_55%),linear-gradient(130deg,#17182c,#0b1220)]">
              <div className="absolute inset-[17%] rotate-[-13deg] border border-violet-200/30"/><div className="absolute inset-[27%] rotate-[19deg] border border-cyan-200/25"/><div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/40 bg-violet-300/10 shadow-[0_0_80px_rgba(128,91,255,.3)]"/>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-300">Case studies / Coming soon</p>
              <h3 className="mt-5 text-2xl font-medium text-white sm:text-3xl">A closer look at how ideas become working systems.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">Explore our upcoming project stories across software platforms, intelligent workflows and digital experiences.</p>
              <a href="#work" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">Explore portfolio <ArrowRight size={16}/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-[#0c0f19]">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div><div className="eyebrow">Why work with us</div><h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-[-.05em] text-white sm:text-5xl">The difference is in <span className="gradient-text">how it is built.</span></h2></div>
          <div className="space-y-9">
            {[
              [Gauge,"Performance considered from the start","We think about speed, usability and reliability as part of the product—not as last-minute fixes."],
              [Globe2,"Business context matters","Technology choices should support real workflows, customer needs and the outcomes a business is trying to achieve."],
              [ShieldCheck,"Built to be maintained","Clear structure, appropriate security practices and documentation help products remain understandable as they grow."],
              [Cpu,"Practical use of emerging technology","We evaluate AI and modern tools based on usefulness, feasibility and fit—not trends alone."],
            ].map(([Icon,title,desc]) => {
              const I = Icon as typeof Gauge;
              return <div className="grid gap-4 border-b border-white/10 pb-8 sm:grid-cols-[42px_1fr]" key={title as string}><I size={21} className="text-violet-300"/><div><h3 className="text-lg font-semibold text-white">{title as string}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{desc as string}</p></div></div>;
            })}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad">
        <div className="container">
          <div className="eyebrow">The blueprint</div>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-.055em] text-white sm:text-6xl">A considered path from <span className="gradient-text">idea to impact.</span></h2><p className="max-w-sm text-sm leading-7 text-slate-400">A clear, collaborative process keeps the work aligned from first conversation through launch.</p></div>
          <div className="mt-16">
            {process.map(([n,title,desc],i)=><div key={n} className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-[90px_.8fr_1.2fr]">
              <span className="font-mono text-sm text-violet-300">PHASE {n}</span><h3 className="text-xl font-medium text-white sm:text-2xl">{title}</h3><p className="max-w-2xl text-sm leading-7 text-slate-400">{desc}</p>
            </div>)}
            <div className="border-t border-white/10"/>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0f19] py-14">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><div className="eyebrow">Engineered with</div><p className="mt-3 text-sm text-slate-400">A modern, adaptable technology toolkit.</p></div><div className="flex max-w-3xl flex-wrap gap-x-7 gap-y-4">{stack.map(item=><span key={item} className="text-sm font-medium text-slate-300">{item}</span>)}</div></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Engagement models</div>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-.055em] text-white sm:text-6xl">The right way to <span className="gradient-text">work together.</span></h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">Every engagement is scoped around its objectives, complexity and delivery needs. We discuss the requirements first, then recommend a suitable working model.</p>
          <div className="mt-12">
            {engagement.map(([title,desc,model],i)=><div key={title} className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-[70px_1fr_1fr_150px] md:items-center"><span className="font-mono text-xs text-violet-300">0{i+1}</span><h3 className="text-xl font-medium text-white">{title}</h3><p className="text-sm leading-7 text-slate-400">{desc}</p><span className="text-xs uppercase tracking-[.16em] text-slate-500 md:text-right">{model}</span></div>)}
            <div className="border-t border-white/10"/>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-[#0c0f19]">
        <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div><div className="eyebrow">Where we can help</div><h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-[-.05em] text-white sm:text-5xl">Technology for different <span className="gradient-text">industries.</span></h2></div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            {["Healthcare","FinTech","E-commerce","SaaS & Startups","Education","Real Estate","Professional Services","Operations","Enterprise Systems"].map((item,i)=><div className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm text-slate-300" key={item}><span className="font-mono text-[10px] text-slate-600">0{i+1}</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div><div className="eyebrow">Questions, answered</div><h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-[-.05em] text-white sm:text-5xl">A few things you may want to <span className="gradient-text">know.</span></h2></div>
          <div>{faqs.map(([q,a])=><details key={q} className="group border-t border-white/10 py-6 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium text-white marker:hidden">{q}<ChevronDown size={18} className="shrink-0 text-violet-300 transition-transform group-open:rotate-180"/></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-slate-400">{a}</p></details>)}</div>
        </div>
      </section>

      <section id="contact" className="pb-24">
        <div className="container">
          <div className="relative overflow-hidden border-y border-violet-300/20 py-16 sm:py-24">
            <div className="hero-orb -right-40 top-0"/>
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div><div className="eyebrow">Initiate a project</div><h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-.06em] text-white sm:text-7xl">Let&apos;s engineer <span className="gradient-text">what&apos;s next.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">Have a product idea, a workflow to improve or a technical challenge to solve? Start a conversation with SYVONIX.</p></div>
              <a href="mailto:hello@syvonix.com?subject=Project%20Enquiry" className="btn-primary w-fit">Start a project <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] py-10">
        <div className="container flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div><a href="#" className="text-lg font-extrabold tracking-[.16em] text-white">SYVONIX</a><p className="mt-1 text-[9px] font-semibold tracking-[.32em] text-slate-500">TECHNOLOGIES</p><p className="mt-4 text-xs text-slate-500">Intelligence Meets Innovation.</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3"><a className="footer-link" href="/about">About</a><a className="footer-link" href="#services">Services</a><a className="footer-link" href="#work">Portfolio</a><a className="footer-link" href="mailto:hello@syvonix.com">Email</a></div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} SYVONIX Technologies. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
