import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { title: "Explore", links: [["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Process", "/process"]] },
  { title: "Connect", links: [["Pricing", "/pricing"], ["Contact", "/contact"], ["Home", "/"]] },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#080a12] py-12">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-sm font-black text-violet-200">S</span>
              <span><span className="block text-lg font-extrabold tracking-[.13em] text-white">SYVONIX</span><span className="mt-1 block text-[8px] font-semibold tracking-[.32em] text-slate-500">TECHNOLOGIES</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">Intelligence Meets Innovation. Software engineering, AI and digital solutions shaped around meaningful outcomes.</p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">{group.title}</p>
              <div className="mt-5 flex flex-col items-start gap-3">
                {group.links.map(([label, href]) => <Link className="footer-link" href={href} key={label}>{label}</Link>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} SYVONIX Technologies. All rights reserved.</p>
          <a href="mailto:hello@syvonix.com" className="inline-flex items-center gap-1 hover:text-slate-300">hello@syvonix.com <ArrowUpRight size={13}/></a>
        </div>
      </div>
    </footer>
  );
}
