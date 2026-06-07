import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import moreVideo from "../assets/more.mp4";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const gridLinesH = useRef<HTMLDivElement>(null);
  const gridLinesV = useRef<HTMLDivElement>(null);
  const essgeeText = useRef<HTMLDivElement>(null);
  const taglineText = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete });

      timeline
        .fromTo(videoContainer.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" })
        .to({}, { duration: 5.0 })
        .to(videoContainer.current, { opacity: 0, scale: 1.05, duration: 0.8, ease: "power3.inOut" })
        .fromTo(".h-line", { scaleX: 0, transformOrigin: "left center", opacity: 0 }, { scaleX: 1, opacity: 0.15, duration: 0.6, ease: "power4.inOut", stagger: 0.02 }, "-=0.2")
        .fromTo(".v-line", { scaleY: 0, transformOrigin: "top center", opacity: 0 }, { scaleY: 1, opacity: 0.15, duration: 0.6, ease: "power4.inOut", stagger: 0.02 }, "-=0.6")
        .to(glow.current, { opacity: 0.4, duration: 0.4, ease: "power2.out" }, "-=0.3")
        .fromTo(".char", { yPercent: 100 }, { yPercent: 0, duration: 0.5, ease: "power4.out", stagger: 0.04 }, "-=0.2")
        .fromTo(taglineText.current, { opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.5 }, "-=0.2")
        .to({}, { duration: 0.8 })
        .to(".char", { yPercent: -100, duration: 0.4, ease: "power3.in", stagger: 0.02 })
        .to(taglineText.current, { opacity: 0, duration: 0.3 }, "<")
        .to(".h-line, .v-line", { opacity: 0, duration: 0.3 }, "<")
        .to(container.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.1");
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={container} className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-navy overflow-hidden">
      <div ref={videoContainer} className="absolute inset-0 z-20 w-full h-full pointer-events-none">
        <video autoPlay muted playsInline className="w-full h-full object-cover" src={moreVideo} />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div ref={glow} className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-vivid-amber rounded-full blur-[120px] opacity-0 mix-blend-screen pointer-events-none" />
        <div ref={gridLinesH} className="absolute inset-0 flex flex-col justify-between py-[10vh] pointer-events-none opacity-60">
          {[...Array(10)].map((_, index) => <div key={`h-${index}`} className="h-line w-full h-px bg-vivid-amber" />)}
        </div>
        <div ref={gridLinesV} className="absolute inset-0 flex justify-between px-[10vw] pointer-events-none opacity-60">
          {[...Array(10)].map((_, index) => <div key={`v-${index}`} className="v-line w-px h-full bg-vivid-amber" />)}
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div ref={essgeeText} className="overflow-hidden flex">
            {"ESSGEE".split("").map((char, index) => (
              <span key={index} className="char font-display font-medium text-white tracking-[0.1em]" style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}>
                {char}
              </span>
            ))}
          </div>
          <div ref={taglineText} className="mt-6 font-display text-vivid-amber text-sm sm:text-base md:text-xl font-light tracking-widest uppercase opacity-0">
            Sustainability Through Strategy!
          </div>
        </div>
      </div>
    </div>
  );
};
