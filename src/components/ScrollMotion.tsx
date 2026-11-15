"use client";

import { useEffect } from "react";

export default function ScrollMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const animatedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    const observeElements = (root: ParentNode) => {
      const targets = root.querySelectorAll<HTMLElement>(
        "main section .container > *, main section .container article"
      );

      targets.forEach((element, index) => {
        if (animatedElements.has(element)) return;

        if (element.closest("header")) return;

        animatedElements.add(element);

        element.classList.add("scroll-reveal");

        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index % 4, 3) * 65}ms`
        );

        observer.observe(element);
      });
    };

    // Observe the initial page.
    observeElements(document);

    // Detect new page content after Next.js navigation.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}