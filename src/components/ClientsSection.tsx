import SectionReveal from "./SectionReveal";
import { clients } from "@/data/siteContent";

const ClientLogoPlaceholder = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter((c) => c && c.match(/[A-Z]/i))
    .join("")
    .substring(0, 3)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center justify-center p-6 border border-white/10 bg-white/5 rounded-xl transition-all duration-300 hover:border-teal-accent/60 hover:bg-white/10 group h-36">
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/15 overflow-hidden shrink-0 group-hover:border-teal-accent/40 transition-colors mb-3">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" className="text-white" strokeWidth="1" />
          <path d="M10 50 H90 M50 10 V90" stroke="currentColor" className="text-white" strokeWidth="0.5" />
        </svg>
        <span className="relative font-display text-xs font-bold tracking-widest text-vivid-amber">
          {initials}
        </span>
      </div>
      <span className="font-medium tracking-wide text-white/70 group-hover:text-white transition-colors text-center text-xs sm:text-sm line-clamp-2">
        {name}
      </span>
    </div>
  );
};

const ClientsSection = () => (
  <section className="section-dark section-padding bg-slate-navy" aria-labelledby="clients-heading">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Trusted By</p>
        <h2 id="clients-heading" className="text-h2 text-white mb-5">Our Clients</h2>
        <p className="text-body-lg text-white/60 mb-12">Partnerships built on trust, delivered through performance.</p>
      </SectionReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {clients.map((client, index) => (
          <SectionReveal key={client} delay={index * 0.04}>
            <ClientLogoPlaceholder name={client} />
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
