import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import capImg from "@/assets/capabilities-hero.jpg";
import {
  Shield, TrendingUp, Target, BarChart3, Settings,
  CheckCircle, Users, HardHat
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { icon: Shield, title: "Governance & Assurance", href: "/capabilities#governance-assurance" },
  { icon: TrendingUp, title: "Commercial & Risk Leadership", href: "/capabilities#commercial-risk" },
  { icon: Target, title: "Bid Strategy & Investment", href: "/capabilities#bid-strategy" },
  { icon: BarChart3, title: "Portfolio & Program Oversight", href: "/capabilities#portfolio-program" },
  { icon: Settings, title: "Operating Model & Performance", href: "/capabilities#operating-model" },
  { icon: CheckCircle, title: "Accountability & Ownership", href: "/capabilities#accountability" },
  { icon: Users, title: "Executive Stakeholder Leadership", href: "/capabilities#stakeholder-leadership" },
  { icon: HardHat, title: "Delivery Leadership", href: "/capabilities#delivery-leadership" },
];

const CapabilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Staggered reveal for text
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".cap-text",
    stagger: 0.1,
    y: 30,
  });

  // Image reveal with a slight scale down
  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 1.1, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Mechanical precision grid stagger
  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".cap-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: {
            each: 0.05,
            grid: [2, 4],
            from: "start"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="section-cream section-padding" aria-labelledby="cap-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img ref={imgRef} src={capImg} alt="Professional project management team reviewing plans" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="cap-text text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">What We Do</p>
            <h2 id="cap-heading" className="cap-text text-h2 text-slate-navy mb-6">
              Capabilities
            </h2>
            <p className="cap-text text-body-lg text-slate-navy/70 mb-8">
              ESSGEE offers principal-led advisory services in governance, commercial strategy, delivery leadership, and capital program oversight.
            </p>
            <div className="cap-text">
              <MagneticButton>
                <Link to="/capabilities" className="btn-cta">Explore All Services</Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <Link key={cap.title} to={cap.href} className="cap-card group flex items-center gap-4 p-5 rounded-lg bg-card border border-border/50 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,74,0,0.15)] hover:border-vivid-amber/30 hover:-translate-y-1">
              <cap.icon
                className="w-8 h-8 text-vivid-amber shrink-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-base font-semibold text-slate-navy group-hover:text-vivid-amber transition-colors duration-300">
                {cap.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
