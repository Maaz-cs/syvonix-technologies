"use client";

import { useEffect } from "react";

export default function ScrollMotion({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll<HTMLElement>(
      "main section .container > *, main section .container > div > article, main section .container > div > a"
    );

    targets.forEach((element, index) => {
      if (element.closest("header")) return;
      element.classList.add("scroll-reveal");
      // Small capped stagger gives adjacent editorial rows a coordinated entrance.
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 65}ms`);
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
