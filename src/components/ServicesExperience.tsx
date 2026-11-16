"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Code2, Workflow,
  Cloud, Database, PanelsTopLeft, Sparkles, Layers3, ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    id: "ai", number: "01", icon: BrainCircuit, title: "AI & machine learning",
    short: "Make intelligence useful.",
    description: "We explore and build AI-powered capabilities that help products understand, predict and assist—grounded in clear use cases, responsible implementation and the needs of real users.",
    focus: ["AI and LLM integrations", "AI assistants and chat experiences", "Predictive and ML prototypes"],
    glow: "violet",
  },
  {
    id: "software", number: "02", icon: Code2, title: "Custom software development",
    short: "Turn complex requirements into clear digital products.",
    description: "We design and engineer web applications, internal platforms and tailored software around specific workflows, users and business requirements.",
    focus: ["Web applications and portals", "Custom business systems", "API and backend development"],
    glow: "blue",
  },
  {
    id: "automation", number: "03", icon: Workflow, title: "Automation & integration",
    short: "Connect systems. Simplify the work between them.",
    description: "We connect applications and automate repeatable processes so information moves more consistently across the tools teams already use.",
    focus: ["Workflow automation", "Third-party API integrations", "Data synchronisation"],
    glow: "cyan",
  },
  {
    id: "cloud", number: "04", icon: Cloud, title: "Backend, data & cloud",
    short: "Build foundations designed to keep moving.",
    description: "We build application logic, data structures and deployment foundations that help digital products operate reliably and evolve with changing needs.",
    focus: ["Database and backend services", "Cloud deployment support", "Monitoring and performance review"],
    glow: "blue",
  },
  {
    id: "design", number: "05", icon: PanelsTopLeft, title: "UI/UX & product design",
    short: "Make complex tools feel intuitive.",
    description: "We translate product goals and user needs into structured journeys, interfaces and design systems that are accessible, responsive and coherent.",
    focus: ["Product discovery and wireframes", "Interface and interaction design", "Responsive design systems"],
    glow: "violet",
  },
  {
    id: "evolve", number: "06", icon: ShieldCheck, title: "Maintenance & continuous improvement",
    short: "Support that helps products evolve.",
    description: "After launch, products need attention. We can help maintain, refine and improve existing applications through planned technical support.",
    focus: ["Bug fixes and updates", "Security and dependency reviews", "Feature enhancements"],
    glow: "lime",
  },
];

const principles = [
  { icon: Sparkles, title: "Purpose before tools", text: "Start with the real problem and the people experiencing it." },
  { icon: Layers3, title: "Built with intention", text: "Make considered choices across experience, architecture and delivery." },
  { icon: ArrowUpRight, title: "Designed to evolve", text: "Create foundations that can adapt as needs and ideas grow." },
  { icon: Database, title: "Clarity through craft", text: "Keep complex systems understandable, useful and focused." },
];

export default function ServicesExperience() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((item) => item.id === activeId) ?? capabilities[0];
  const ActiveIcon = active.icon;

  return (
    <main className="site-shell sy-services">
      <section className="sy-services-hero">
        <div className="sy-services-hero-glow" aria-hidden="true" />
        <div className="container sy-services-hero-grid">
          <div className="sy-services-copy">
            <div className="eyebrow">SYVONIX / WHAT WE DO</div>
            <h1>Big ideas need<br /><span className="sy-shine">the right kind of build.</span></h1>
            <p>We bring engineering, AI and product thinking together to create technology that solves practical challenges and moves your next idea forward.</p>
            <div className="sy-services-actions">
              <Link href="/contact" className="btn-primary">Start a conversation <ArrowUpRight size={16} /></Link>
              <a href="#capabilities" className="sy-text-link">Explore capabilities <span>↓</span></a>
            </div>
            <div className="sy-hero-note"><span className="sy-pulse-dot" /> INTELLIGENCE MEETS INNOVATION</div>
          </div>

          <div className="sy-services-stage" aria-label="Animated illustration connecting AI, software, data and automation">
            <div className="sy-stage-glow" />
            <div className="sy-stage-orbit sy-orbit-one" />
            <div className="sy-stage-orbit sy-orbit-two" />
            <div className="sy-stage-core">
              <div className="sy-stage-mark">S.</div>
              <small>SYVONIX / CORE</small>
              <strong>Think.<br />Build. Evolve.</strong>
              <p>Connected technology.<br />Purposeful outcomes.</p>
            </div>
            <div className="sy-float-tag sy-tag-ai"><b>✳ Artificial Intelligence</b><span>Learn · Predict · Assist</span></div>
            <div className="sy-float-tag sy-tag-code"><b>⌘ Software Engineering</b><span>Design · Develop · Scale</span></div>
            <div className="sy-float-tag sy-tag-data"><b>▤ Data Intelligence</b><span>Understand · Discover</span></div>
            <div className="sy-float-tag sy-tag-auto"><b>⟳ Smart Automation</b><span>Connect · Simplify</span></div>
          </div>
        </div>
        <a className="sy-scroll-cue" href="#capabilities"><span>↓</span> SCROLL TO EXPLORE</a>
      </section>

      <div className="sy-services-marquee" aria-hidden="true">
        <div className="sy-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>ARTIFICIAL INTELLIGENCE <b>✳</b> SOFTWARE ENGINEERING <b>✳</b> PRODUCT THINKING <b>✳</b> SMART AUTOMATION <b>✳</b> DATA INTELLIGENCE <b>✳</b></span>
          ))}
        </div>
      </div>

      <section className="section-pad sy-capabilities" id="capabilities">
        <div className="container">
          <div className="sy-section-head">
            <div><div className="eyebrow">01 / CAPABILITIES</div><h2 className="section-title">Technology for<br /><span className="gradient-text">what comes next.</span></h2></div>
            <p>Explore our technology capabilities. Each discipline can stand on its own—or work together as one connected solution.</p>
          </div>

          <div className="sy-service-explorer">
            <div className="sy-service-list" role="tablist" aria-label="Technology services" aria-orientation="vertical">
              {capabilities.map((item) => {
                const Icon = item.icon;
                const selected = item.id === activeId;
                return (
                  <button key={item.id} type="button" role="tab" id={`service-tab-${item.id}`} aria-selected={selected} aria-controls="service-panel" tabIndex={selected ? 0 : -1} className={`sy-service-tab ${selected ? "is-active" : ""}`} onClick={() => setActiveId(item.id)} onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      const next = capabilities[(capabilities.findIndex((x) => x.id === item.id) + 1) % capabilities.length];
                      setActiveId(next.id);
                      document.getElementById(`service-tab-${next.id}`)?.focus();
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      const index = capabilities.findIndex((x) => x.id === item.id);
                      const previous = capabilities[(index - 1 + capabilities.length) % capabilities.length];
                      setActiveId(previous.id);
                      document.getElementById(`service-tab-${previous.id}`)?.focus();
                    }
                  }}>
                    <span className="sy-tab-number">{item.number}</span><Icon size={17} /><strong>{item.title}</strong><ArrowUpRight className="sy-tab-arrow" size={16} />
                  </button>
                );
              })}
            </div>

            <article key={active.id} className={`sy-service-detail glow-${active.glow}`} id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${active.id}`}>
              <div className="sy-detail-top"><span className="sy-detail-icon"><ActiveIcon size={25} /></span><span className="sy-detail-index">CAPABILITY {active.number} / 06</span></div>
              <div className="sy-detail-short">{active.short}</div>
              <h3>{active.title}</h3>
              <p className="sy-detail-description">{active.description}</p>
              <div className="sy-feature-row">
                {active.focus.map((feature, index) => <div className="sy-feature" key={feature}><span>FOCUS 0{index + 1}</span>{feature}</div>)}
              </div>
              <Link href="/contact" className="sy-detail-cta">Discuss this capability <ArrowRight size={16} /></Link>
            </article>
          </div>
          <p className="sy-explorer-hint">SELECT A CAPABILITY TO EXPLORE <span>↗</span></p>
        </div>
      </section>

      <section className="section-pad sy-thinking">
        <div className="container sy-manifesto">
          <div><div className="eyebrow">02 / OUR THINKING</div><h2 className="section-title">Not technology<br />for its own sake.<br /><span className="gradient-text">Technology that matters.</span></h2><p className="sy-manifesto-copy">Good digital solutions start with the right question. We bring curiosity, engineering discipline and a product mindset to every challenge—choosing technology to serve the outcome, not the other way around.</p></div>
          <div className="sy-principles">
            {principles.map(({ icon: Icon, title, text }, index) => <article className="sy-principle" key={title}><span className="sy-principle-number">0{index + 1}</span><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad sy-process">
        <div className="container">
          <div className="sy-section-head"><div><div className="eyebrow">03 / THE PROCESS</div><h2 className="section-title">From first question<br /><span className="gradient-text">to working solution.</span></h2></div><p>A flexible, collaborative path that brings structure to the unknown and momentum to the work.</p></div>
          <div className="sy-workflow">
            {[
              ["01", "Discover", "Understand the challenge, users, context and constraints."],
              ["02", "Architect", "Shape the approach, experience, scope and technical direction."],
              ["03", "Engineer", "Build, test and refine through focused iterations."],
              ["04", "Evolve", "Deliver, learn from feedback and identify what comes next."],
            ].map(([number, title, text]) => <article className="sy-phase" key={number}><small>PHASE {number}</small><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="container sy-services-cta">
        <div className="sy-cta-content"><div><div className="eyebrow">HAVE SOMETHING IN MIND?</div><h2>Let&apos;s create<br /><span className="gradient-text">what&apos;s next.</span></h2><p>Bring us a challenge, an idea or an early sketch. Let&apos;s explore the possibilities.</p></div><Link href="/contact" className="btn-primary">Start a conversation <ArrowUpRight size={16} /></Link></div>
      </section>
    </main>
  );
}
