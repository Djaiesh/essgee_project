import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "@/assets/hero_video.MP4";
import AnimatedCounter from "./AnimatedCounter";
import { Link } from "react-router-dom";
import { metrics } from "@/data/siteContent";

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  "Governance Becomes Clarity.",
  "Complexity Becomes Confidence.",
  "Decisions Become Direction.",
  "Delivery Becomes Certainty.",
];

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);
  
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (!container.current) return;

    // --- Entry Animation ---
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Background fade-in & scale down
      tl.fromTo(bgRef.current, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 0.6, duration: 2.5 })
        // Midground dots/lines appearing
        .fromTo(midRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 }, "-=1.5")
        // Staggered text reveal
        .fromTo(".hero-text", { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.15, duration: 1.2 }, "-=1")
        .fromTo(".hero-metric", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=0.8");

      // Optional: Sweep effect across the main title
      const lightSweep = gsap.to(textRef.current, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "linear",
        repeat: -1,
        delay: 2
      });

      // --- Phrase Rotation ---
      const interval = setInterval(() => {
        gsap.to(phraseRef.current, {
          y: -20, opacity: 0, duration: 0.4, onComplete: () => {
            setPhraseIndex(i => (i + 1) % phrases.length);
            gsap.fromTo(phraseRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
          }
        });
      }, 4000);

      // --- Parallax on Scroll ---
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(midRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      return () => {
        clearInterval(interval);
        lightSweep.kill();
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="origin" className="relative min-h-screen lg:h-screen overflow-hidden bg-black text-white" aria-label="Hero">
      
      {/* Layer 1: Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      {/* Layer 2: Midground Elements */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none opacity-40">
      </div>

      {/* Layer 3: Foreground Content */}
      <div ref={frontRef} className="relative z-10 min-h-screen lg:h-full flex flex-col justify-center items-center text-center px-6 pt-28 pb-12 lg:pt-0 lg:pb-0">
        


        <h1 
          ref={textRef}
          className="hero-text font-display font-bold text-transparent bg-clip-text bg-[linear-gradient(110deg,#FFFFFF,45%,#7a7a7a,55%,#FFFFFF)] bg-[length:250%_100%] leading-tight text-balance"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", marginBottom: "0.2em" }}
        >
          Where Strategy Meets Delivery.
        </h1>

        <div className="font-display font-bold leading-tight mb-4 text-center text-vivid-amber" style={{ fontSize: "clamp(1.8rem, 4.5vw, 4rem)", minHeight: "1.5em" }}>
          <div ref={phraseRef}>
            {phrases[phraseIndex]}
          </div>
        </div>

        <div className="hero-text w-24 h-px bg-vivid-amber/50 mb-6" />

        <p className="hero-text text-sm md:text-lg text-white/55 max-w-xl mb-8 lg:mb-12 px-2">
          Principal-led advisory support for organisations managing complex infrastructure, capital delivery and governance challenges.
        </p>

        <div className="hero-text mb-8 lg:mb-12 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link to="/connect#connect" className="btn-pop animate-pulse hover:animate-none w-full sm:w-auto">Start a Confidential Discussion</Link>
          <Link to="/capabilities" className="btn-outline w-full sm:w-auto">View Our Capabilities</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="hero-metric text-center">
              <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
              <p className="text-micro uppercase tracking-widest text-white/40 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
