"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Process", "/process"],
  ["Pricing", "/pricing"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="container flex h-[78px] items-center justify-between">
        <Link href="/" aria-label="SYVONIX Technologies home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-sm font-black text-violet-200 transition group-hover:border-violet-200/70 group-hover:bg-violet-400/20">S</span>
          <span className="leading-none">
            <span className="block text-[17px] font-extrabold tracking-[.13em] text-white">SYVONIX</span>
            <span className="mt-1 block text-[8px] font-semibold tracking-[.32em] text-slate-400">TECHNOLOGIES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link className={`nav-link ${active(href) ? "nav-link-active" : ""}`} href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-secondary hidden min-h-[42px] px-4 text-xs sm:inline-flex">
          Let's talk <ArrowUpRight size={15}/>
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-violet-300/60 hover:bg-white/5 lg:hidden"
        >
          {menuOpen ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav lg:hidden ${menuOpen ? "mobile-nav-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="container flex flex-col" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link
              href={href}
              key={href}
              tabIndex={menuOpen ? 0 : -1}
              className={`mobile-nav-link ${active(href) ? "mobile-nav-link-active" : ""}`}
              style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
            >
              <span className="font-mono text-[10px] text-violet-300">0{index + 1}</span>
              <span>{label}</span>
              <ArrowUpRight size={16} className="ml-auto"/>
            </Link>
          ))}
          <Link href="/contact" tabIndex={menuOpen ? 0 : -1} className="btn-primary mt-6 w-full">Start a conversation <ArrowUpRight size={16}/></Link>
        </nav>
      </div>
      {menuOpen && <button aria-label="Close menu overlay" className="mobile-nav-backdrop lg:hidden" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
