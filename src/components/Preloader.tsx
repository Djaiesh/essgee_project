import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "@/assets/essgee_logo.jpeg";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skipIntro = sessionStorage.getItem("essgee-intro-seen") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (skipIntro) {
      onComplete();
      return;
    }
    sessionStorage.setItem("essgee-intro-seen", "true");
    const timeline = gsap.timeline({ onComplete });
    timeline
      .fromTo(".preloader-mark", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" })
      .fromTo(".preloader-copy", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.15")
      .to({}, { duration: 0.35 })
      .to(container.current, { opacity: 0, duration: 0.45, ease: "power2.inOut" });
    return () => timeline.kill();
  }, [onComplete]);

  return (
    <div ref={container} className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-navy">
      <div className="flex flex-col items-center gap-5 text-center">
        <img src={logo} alt="" className="preloader-mark h-28 w-28 rounded-xl object-cover shadow-2xl" />
        <div className="preloader-copy">
          <p className="font-display text-3xl tracking-[0.14em] text-white">ESSGEE PROJECTS</p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-teal-accent">Where Strategy Meets Delivery.</p>
        </div>
      </div>
    </div>
  );
};
