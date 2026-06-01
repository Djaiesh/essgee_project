import { ShieldCheck, TrendingUp, FileText, Users } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { specialists } from "@/data/siteContent";

const icons = [ShieldCheck, TrendingUp, FileText, Users];

const SpecialistsSection = () => (
  <section className="section-light section-padding" aria-labelledby="specialists-heading">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Our Team</p>
        <h2 id="specialists-heading" className="text-h2 text-slate-navy mb-5">Specialists. Not Generalists.</h2>
        <p className="text-body-lg text-slate-navy/65 mb-12">Deep discipline expertise across the full project lifecycle - deployed where it matters most.</p>
      </SectionReveal>
      <div className="grid md:grid-cols-2 gap-5">
        {specialists.map((specialist, index) => {
          const Icon = icons[index];
          return (
            <SectionReveal key={specialist.name} delay={index * 0.06}>
              <article className="card-lift h-full rounded-xl p-7">
                <Icon className="mb-5 h-10 w-10 text-teal-accent" strokeWidth={1.5} />
                <h3 className="text-h3 text-slate-navy">{specialist.name}</h3>
                <p className="mb-3 mt-1 font-semibold text-deep-azure">{specialist.role}</p>
                <p className="leading-relaxed text-slate-navy/60">{specialist.description}</p>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default SpecialistsSection;
