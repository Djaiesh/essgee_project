import SectionReveal from "./SectionReveal";
import { clients } from "@/data/siteContent";

const ClientsSection = () => (
  <section className="section-dark section-padding" aria-labelledby="clients-heading">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Trusted By</p>
        <h2 id="clients-heading" className="text-h2 text-white mb-5">Our Clients</h2>
        <p className="text-body-lg text-white/60 mb-12">Partnerships built on trust, delivered through performance.</p>
      </SectionReveal>
      <div className="grid sm:grid-cols-2">
        {clients.map((client, index) => (
          <SectionReveal key={client} delay={index * 0.04}>
            <div className="border border-white/10 bg-white/5 px-6 py-5 text-white/75 transition-colors duration-300 hover:border-teal-accent/60 hover:bg-white/10 hover:text-white">
              {client}
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
