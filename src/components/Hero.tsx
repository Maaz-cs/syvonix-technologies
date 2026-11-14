"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check,
  Code2, Database, GitBranch, Layers3, Play, RotateCcw, Workflow,
} from "lucide-react";

const scenes = [
  { id: "ai", number: "01", label: "AI intelligence", title: "Make data work smarter.", description: "Turn information into useful insights, intelligent assistants and better decisions.", icon: BrainCircuit },
  { id: "engineering", number: "02", label: "Software engineering", title: "Build beyond the ordinary.", description: "Shape reliable digital products, connected platforms and experiences people enjoy using.", icon: Code2 },
  { id: "automation", number: "03", label: "Smart automation", title: "Let workflows move.", description: "Connect tools, remove repetitive steps and make everyday operations flow.", icon: Workflow },
];

function ShowcaseScene({ scene }: { scene: (typeof scenes)[number] }) {
  if (scene.id === "ai") {
    return (
      <div className="showcase-content ai-scene">
        <div className="showcase-topline"><span className="live-dot" /> MODEL WORKSPACE <span className="ml-auto">SESSION / 01</span></div>
        <div className="ai-workspace">
          <div className="ai-orbit"><div className="ai-orbit-ring ring-one" /><div className="ai-orbit-ring ring-two" /><div className="ai-core"><BrainCircuit size={34} /></div><span className="ai-node node-one" /><span className="ai-node node-two" /><span className="ai-node node-three" /></div>
          <div className="ai-insight-panel">
            <div className="panel-label">INTELLIGENCE ENGINE</div>
            <div className="insight-line wide" /><div className="insight-line medium" /><div className="insight-line short" />
            <div className="insight-result"><span><Check size={12} /></span><div><b>Pattern identified</b><small>Insights are ready to explore</small></div></div>
          </div>
        </div>
        <div className="showcase-metrics"><div><small>INPUT DATA</small><b>Structured</b></div><div><small>PROCESS</small><b>AI analysis</b></div><div><small>OUTPUT</small><b>Actionable insight</b></div></div>
      </div>
    );
  }

  if (scene.id === "engineering") {
    return (
      <div className="showcase-content engineering-scene">
        <div className="showcase-topline"><span className="live-dot" /> PRODUCT ENVIRONMENT <span className="ml-auto">BUILD / 02</span></div>
        <div className="product-window">
          <div className="window-bar"><span /><span /><span /><small>syvonix / product-studio</small><span className="window-status">● BUILD READY</span></div>
          <div className="product-layout">
            <aside className="product-sidebar"><div className="sidebar-mark"><Layers3 size={17} /></div><i /><i /><i /><i /></aside>
            <div className="product-main">
              <div className="product-heading"><div><small>OVERVIEW / WORKSPACE</small><b>Good ideas, engineered.</b></div><span className="product-avatar">S</span></div>
              <div className="product-stats"><div><small>PROJECT STATUS</small><b>In progress</b><span className="status-track"><i /></span></div><div><small>COMPONENTS</small><b>24 <em>modules</em></b><span className="component-bars"><i /><i /><i /><i /><i /></span></div></div>
              <div className="product-chart"><div className="chart-head"><b>System performance</b><small>LIVE PREVIEW</small></div><div className="chart-grid"><svg viewBox="0 0 420 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 72 C35 67 38 42 78 50 S125 72 158 42 S204 55 236 27 S284 48 319 22 S374 31 420 8" fill="none" stroke="url(#lineGradient)" strokeWidth="3" /><defs><linearGradient id="lineGradient"><stop stopColor="#9b83ff"/><stop offset="1" stopColor="#55d9f5"/></linearGradient></defs></svg></div></div>
            </div>
          </div>
        </div>
        <div className="floating-code"><Code2 size={14} /><span>Clean architecture</span><Check size={13} /></div>
      </div>
    );
  }

  return (
    <div className="showcase-content automation-scene">
      <div className="showcase-topline"><span className="live-dot" /> WORKFLOW AUTOMATION <span className="ml-auto">FLOW / 03</span></div>
      <div className="workflow-canvas">
        <div className="workflow-node source"><span><Database size={17} /></span><small>INPUT</small><b>New request</b><em>Trigger received</em></div>
        <div className="workflow-connector"><i /><i /><i /></div>
        <div className="workflow-node process"><span><Bot size={17} /></span><small>PROCESS</small><b>Smart routing</b><em>Rules applied</em></div>
        <div className="workflow-connector"><i /><i /><i /></div>
        <div className="workflow-node output"><span><GitBranch size={17} /></span><small>OUTPUT</small><b>Task complete</b><em>Team notified</em></div>
      </div>
      <div className="workflow-footer"><span className="live-dot" /> Workflow running <b>3 steps connected</b></div>
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % scenes.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const scene = scenes[active];

  return (
    <section className="sy-hero relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-36">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="hero-orb -right-36 top-24" />
      <div className="hero-orb -left-72 bottom-0 opacity-60" />
      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-10">
        <div className="max-w-[610px]">
          <div className="eyebrow mb-7"><span className="hero-spark">✳</span> Intelligence meets innovation</div>
          <h1 className="text-[clamp(3.25rem,7vw,6.4rem)] font-semibold leading-[.96] tracking-[-.075em] text-white">
            We engineer <span className="gradient-text">what&apos;s next.</span>
          </h1>
          <p className="mt-8 max-w-[520px] text-base leading-8 text-slate-400 sm:text-lg">
            Intelligent software, thoughtful digital products and AI-powered solutions — engineered to turn ambitious ideas into meaningful outcomes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Start a project <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-secondary">Explore capabilities <ArrowUpRight size={15} /></Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[.16em] text-slate-500 sm:text-[11px]">
            <span>Software engineering</span><span className="h-1 w-1 rounded-full bg-violet-400" />
            <span>Artificial intelligence</span><span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>Smart automation</span>
          </div>
        </div>

        <div className="sy-showcase glass" aria-label="Animated SYVONIX capabilities showcase">
          <div className="showcase-glow" />
          <div className="showcase-heading">
            <div><span className="showcase-kicker">THE SYVONIX ECOSYSTEM</span><h2>{scene.title}</h2><p>{scene.description}</p></div>
            <button className="showcase-replay" type="button" onClick={() => { setActive(0); setPaused(false); }} aria-label="Replay showcase"><RotateCcw size={15} /></button>
          </div>
          <div className="showcase-stage" key={scene.id}>
            <ShowcaseScene scene={scene} />
          </div>
          <div className="showcase-controls">
            <div className="showcase-tabs" role="tablist" aria-label="Showcase scenes">
              {scenes.map((item, index) => {
                const Icon = item.icon;
                return <button key={item.id} type="button" role="tab" aria-selected={active === index} className={`showcase-tab ${active === index ? "is-active" : ""}`} onClick={() => { setActive(index); setPaused(true); }}><Icon size={14} /><span>{item.label}</span></button>;
              })}
            </div>
            <div className="showcase-progress" aria-label={`Scene ${active + 1} of 3`}>
              {scenes.map((item, index) => <button key={item.id} type="button" onClick={() => { setActive(index); setPaused(true); }} className={active === index ? "is-active" : ""} aria-label={`Show ${item.label}`}><span /></button>)}
            </div>
            <div className="showcase-foot"><span>{scene.number} / 03</span><span><Play size={10} fill="currentColor" /> {paused ? "MANUAL MODE" : "AUTO PRESENTATION"}</span></div>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.2em] text-slate-500 md:flex">
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  );
}
