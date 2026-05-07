"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const animations = {
  "fade-up": "translate-y-8",
  "fade-in": "",
  "slide-left": "-translate-x-8",
  "slide-right": "translate-x-8",
  "scale-in": "scale-95",
};

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0,
  once = true,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [state, setState] = useState("ready");

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setState("visible");
      return;
    }

    const rect = node.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < viewportHeight) {
      setState("visible");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          if (once) observer.unobserve(node);
        } else if (!once) {
          setState("hidden");
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);

    const fallback = window.setTimeout(() => setState("visible"), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold, once]);

  const initial = animations[animation] ?? animations["fade-up"];

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: state === "visible" ? `${delay}ms` : "0ms",
        transitionDuration:
          state === "visible" ? `${duration}ms` : "0ms",
      }}
      className={cn(
        "transition-all ease-out",
        state === "hidden"
          ? `opacity-0 ${initial}`
          : "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
    >
      {children}
    </Tag>
  );
}
