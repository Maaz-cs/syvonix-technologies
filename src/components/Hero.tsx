import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-36">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="hero-orb -right-36 top-24" />
      <div className="hero-orb -left-72 bottom-0 opacity-60" />
      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-[650px]">
          <div className="eyebrow mb-7"><Sparkles size={13} /> Intelligence meets innovation</div>
          <h1 className="text-[clamp(3.4rem,7.5vw,6.8rem)] font-semibold leading-[.96] tracking-[-.075em] text-white">
            We build what&apos;s <span className="gradient-text">what's next.</span>
          </h1>
          <p className="mt-8 max-w-[540px] text-base leading-8 text-slate-400 sm:text-lg">
            From intelligent software to AI-powered experiences, we turn ambitious ideas into useful digital products built for what comes what's next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#contact" className="btn-primary">Start a project <ArrowRight size={16} /></Link>
            <Link href="#work" className="btn-secondary">View capabilities</Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] font-semibold uppercase tracking-[.16em] text-slate-500">
            <span>Software engineering</span><span className="h-1 w-1 rounded-full bg-violet-400" />
            <span>Artificial intelligence</span><span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>Digital innovation</span>
          </div>
        </div>

        <div className="hero-art glass">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="hero-core" />
          <span className="orbit-dot left-[22%] top-[26%]" />
          <span className="orbit-dot right-[21%] top-[32%] !bg-violet-300 !shadow-[0_0_22px_#a78bfa]" />
          <span className="orbit-dot bottom-[22%] left-[34%]" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
            <div><p className="text-[9px] uppercase tracking-[.2em] text-slate-500">Our mindset</p><p className="mt-1 text-xs font-semibold text-slate-200">Think beyond the expected.</p></div>
            <span className="text-xs tracking-[.2em] text-violet-300">S / 01</span>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.2em] text-slate-500 md:flex">
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  );
}
