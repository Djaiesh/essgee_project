import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Seo from "@/components/Seo";
import proofHero from "@/assets/proof-hero.jpg";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Quote, Briefcase, DollarSign, Clock } from "lucide-react";
import { clients, metrics, testimonials } from "@/data/siteContent";

import transportImg from "@/assets/sector-transport.jpg";
import waterImg from "@/assets/sector-water.jpg";
import resourcesImg from "@/assets/sector-resources.jpg";
import urbanImg from "@/assets/sector-urban.png";
import transmissionImg from "@/assets/project-transmission.png";
import renewablesImg from "@/assets/project-renewables.png";

const projectsList = [
  {
    id: "humelink",
    title: "HumeLink East Transmission Line",
    sector: "Transmission",
    value: "AUD 1.5B",
    location: "Australia",
    period: "2022-2023",
    image: transmissionImg,
    description: "Supported delivery across a major transmission environment requiring strong execution discipline, stakeholder coordination, approvals management and commercial control.",
    detail: "The work drew on experience in complex civil interfaces, remote delivery conditions and infrastructure settings with high delivery visibility. Key contributions involved establishing stage-gate project controls, coordinating contractor interactions, alignment of commercial risks, and securing critical project approvals under strict regulatory timelines."
  },
  {
    id: "transport-bids",
    title: "Major Transport Bids and EOIs",
    sector: "Transport",
    value: "AUD 500M",
    location: "Australia",
    period: "2023-2026",
    image: transportImg,
    description: "Led and supported major transport bids and expressions of interest, bringing bid governance, executive decision support, stakeholder engagement and commercial discipline to complex pursuits in highly competitive delivery environments.",
    detail: "Our advisory leadership provided strategic direction on pursuit decisions, commercial guardrails, due diligence, and risk governance. We enabled structured executive reporting and interface management to improve predictability and secure board-level alignment for high-visibility tenders."
  },
  {
    id: "murrumbidgee",
    title: "Murrumbidgee Irrigation Project",
    sector: "Water & Utilities",
    value: "AUD 200M",
    location: "Australia",
    period: "2024",
    image: waterImg,
    description: "Supported a major irrigation project in a service-critical water environment, bringing governance, delivery oversight and stakeholder coordination to a program requiring strong commercial discipline and executive visibility.",
    detail: "We implemented fit-for-purpose performance reporting structures and stage-gate frameworks. By establishing transparent reporting lines and interfaces, ESSGEE helped the utility manage contractor coordination and mitigate delivery risks while maintaining continuous service."
  },
  {
    id: "substations-epc",
    title: "Substations, Renewables and EPC Delivery",
    sector: "Energy & Utilities",
    value: "AUD 115M",
    location: "Australia",
    period: "2010-2019",
    image: renewablesImg,
    description: "Delivered high-voltage substations, renewable generation projects and EPC programs requiring end-to-end commercial and delivery control.",
    detail: "Responsibilities included procurement strategy, land access, stakeholder engagement, approvals management, financial governance and reporting discipline across complex transmission and energy environments."
  },
  {
    id: "it-building-aws",
    title: "IT AWS Data Centre & High-Rise Development",
    sector: "Built Environment & Digital Infrastructure",
    value: "AUD 100M",
    location: "India",
    period: "2020-2022",
    image: urbanImg,
    description: "Held P&L and operational governance responsibility across a growing delivery business while overseeing complex developments including hyperscale data centre civil works, high-voltage energy assets and major commercial building projects.",
    detail: "This included design coordination, statutory approvals, land acquisition and the establishment of senior teams and governance structures to strengthen delivery certainty and margin performance. We aligned the organization's operating model to ensure operational readiness and scaling."
  },
  {
    id: "carmichael",
    title: "Carmichael Mine Infrastructure",
    sector: "Resources",
    value: "AUD 25M",
    location: "Australia",
    period: "2022-2023",
    image: resourcesImg,
    description: "Led civil and concrete infrastructure packages within a major mining environment, combining delivery oversight with pre-contract strategy, market engagement and commercial improvement.",
    detail: "The work also involved remote delivery coordination, land access and Traditional Owner engagement, showing delivery leadership in complex and sensitive operating environments."
  }
];

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

const ProofPage = () => (
  <>
    <Navbar />
    <Seo title="Projects" path="/proof" description="ESSGEE Projects delivers principal-led governance, commercial oversight, and project support across an AUD 2.7B+ portfolio." />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={proofHero} alt="Construction project delivery site" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Track Record</p>
          <h1 className="text-hero text-white">Projects</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Recent projects and pursuits demonstrating executive leadership, bid governance, stakeholder management, and commercial oversight.
          </p>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="section-light py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <AnimatedCounter {...metric} />
              <p className="text-micro uppercase tracking-widest text-slate-navy/50 mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Alternating Layout */}
      <section id="projects" className="section-cream section-padding scroll-mt-20">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-teal-accent text-center mb-4">Project Portfolio</p>
            <h2 className="text-h2 text-slate-navy text-center mb-20">Track Record of Delivery</h2>
          </SectionReveal>

          <div className="space-y-24">
            {projectsList.map((project, i) => (
              <SectionReveal key={project.id}>
                <div id={project.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image container */}
                  <div className={`rounded-xl overflow-hidden aspect-[16/10] shadow-xl border border-slate-navy/5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  
                  {/* Content details */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] px-2.5 py-1 rounded bg-deep-azure/10 text-deep-azure font-bold tracking-widest uppercase">
                        {project.sector}
                      </span>
                    </div>
                    
                    <h2 className="text-h3 text-slate-navy mb-4">{project.title}</h2>
                    <p className="text-body-lg text-slate-navy/70 mb-4">{project.description}</p>
                    <p className="text-slate-navy/60 leading-relaxed mb-6">{project.detail}</p>
                    
                    {/* Project Metadata tags */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-navy/10 mb-6">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-vivid-amber" />
                        <span className="text-xs text-slate-navy/60">Value: <strong className="text-slate-navy font-semibold">{project.value}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-vivid-amber" />
                        <span className="text-xs text-slate-navy/60">Location: <strong className="text-slate-navy font-semibold">{project.location}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-vivid-amber" />
                        <span className="text-xs text-slate-navy/60">Period: <strong className="text-slate-navy font-semibold">{project.period}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-vivid-amber" />
                        <span className="text-xs text-slate-navy/60">Role: <strong className="text-slate-navy font-semibold">Principal-Led Advisory</strong></span>
                      </div>
                    </div>

                    <Link to="/connect#connect" className="btn-pop inline-block">Discuss This Project</Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients section with SVG Logo placeholders */}
      <section className="section-dark section-padding bg-slate-navy">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Trusted By</p>
            <h2 className="text-h2 text-white mb-12">Our Clients</h2>
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

      {/* Testimonials */}
      <section className="section-light section-padding">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-slate-navy text-center mb-14">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="card-lift rounded-xl p-7 flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-teal-accent mb-4" />
                  <p className="italic leading-relaxed text-slate-navy/70">"{testimonial.quote}"</p>
                </div>
                <div className="mt-8">
                  <p className="font-semibold text-slate-navy">{testimonial.author}</p>
                  <p className="text-sm text-slate-navy/55">{testimonial.organisation}</p>
                  <p className="mt-2 text-sm text-teal-accent">{testimonial.project}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ProofPage;
