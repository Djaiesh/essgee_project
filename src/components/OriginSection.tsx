import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";
import { Shield, Target, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const differentiators = [
  {
    icon: Shield,
    title: "Governance & Assurance",
    description: "Governance frameworks, executive reporting, assurance reviews and decision support for complex projects and portfolios.",
  },
  {
    icon: Target,
    title: "Commercial & Risk Leadership",
    description: "Commercial guardrails, risk governance and performance control for bids, projects and operating portfolios.",
  },
  {
    icon: Eye,
    title: "Executive Stakeholder Leadership",
    description: "Board, client, partner, regulator and delivery-team engagement in high-stakes environments.",
  },
];

const OriginSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Staggered text reveal for about content
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".about-reveal",
    stagger: 0.15,
    y: 30,
  });

  // Stagger reveal for the image wrapper
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".about-img-reveal",
    stagger: 0,
    y: 40,
  });

  // Stagger for differentiators
  useScrollAnimation({
    triggerRef: cardsRef,
    childrenSelector: ".about-card-reveal",
    stagger: 0.15,
    y: 40,
  });

  // Parallax for the background image inside the wrapper
  useParallax({
    triggerRef: sectionRef,
    targetRef: imgRef,
    yPercent: 15,
    scale: 1.15,
  });

  return (
    <section ref={sectionRef} id="about" className="section-light section-padding scroll-mt-20 overflow-hidden" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="about-reveal text-micro uppercase tracking-[0.15em] text-deep-azure mb-4">About ESSGEE</p>
            <h2 id="about-heading" className="about-reveal text-h2 text-slate-navy mb-6">
              Principal-Led Advisory for Complex Capital Delivery
            </h2>
            <p className="about-reveal text-body-lg text-slate-navy/70 mb-8">
              ESSGEE is a principal-led advisory practice established by Satya Gady to support clients navigating complex capital delivery, governance, commercial risk and executive decision-making. Drawing on experience across infrastructure, utilities, energy, resources and the built environment, ESSGEE works as an extension of client leadership teams.
            </p>
            <p className="about-reveal text-body-lg text-slate-navy/60">
              Engagements are principal-led, commercially grounded, and shaped by the realities of each program, portfolio, or investment decision. ESSGEE brings practical judgement, executive communication and decision support in environments where delivery complexity, stakeholder visibility and commercial exposure are high.
            </p>
          </div>

          {/* Image */}
          <div ref={imgWrapperRef} className="about-img-reveal relative rounded-lg overflow-hidden aspect-[4/3]">
            <img
              ref={imgRef}
              src={aboutBg}
              alt="Executive boardroom representing strategic project oversight"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/40 to-transparent" />
          </div>
        </div>

        {/* Differentiators */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mt-24">
          {differentiators.map((d, i) => (
            <div key={d.title} className="about-card-reveal card-lift p-8 rounded-lg bg-card border border-border/50">
              <d.icon className="w-10 h-10 text-deep-azure mb-5" strokeWidth={1.5} />
              <h3 className="text-h3 text-slate-navy mb-3">{d.title}</h3>
              <p className="text-slate-navy/60 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
