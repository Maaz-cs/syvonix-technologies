type PageIntroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  index?: string;
};

export default function PageIntro({ eyebrow, title, description, index = "SYVONIX / TECHNOLOGIES" }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] pb-16 pt-36 sm:pb-24">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="hero-orb -right-48 top-16" />
      <div className="container relative z-10">
        <div className="eyebrow">{eyebrow}</div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <h1 className="max-w-[850px] text-[clamp(3rem,7vw,6.3rem)] font-semibold leading-[.98] tracking-[-.075em] text-white">{title}</h1>
          <div className="max-w-[480px] lg:pb-2">
            <p className="text-base leading-8 text-slate-300">{description}</p>
            <p className="mt-6 font-mono text-[10px] tracking-[.2em] text-slate-600">{index}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
