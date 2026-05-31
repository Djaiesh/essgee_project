import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import proofHero from "@/assets/proof-hero.jpg";
import { Link } from "react-router-dom";
import { Quote, Star, Building2, MapPin, Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    title: "HumeLink East Transmission Line",
    sector: "Transmission",
    value: "AUD 1.5B",
    location: "Australia",
    period: "2022–2023",
    description: "Supported delivery across a major transmission environment requiring strong execution discipline, stakeholder coordination, approvals management and commercial control. The work drew on experience in complex civil interfaces, remote delivery conditions and infrastructure settings with high delivery visibility.",
  },
  {
    title: "Major Transport Bids and EOIs",
    sector: "Transport",
    value: "AUD 500M",
    location: "Australia",
    period: "2023–2026",
    description: "Led and supported major transport bids and expressions of interest, bringing bid governance, executive decision support, stakeholder engagement and commercial discipline to complex pursuits in highly competitive delivery environments.",
  },
  {
    title: "Murrumbidgee Irrigation Project",
    sector: "Water & Utilities",
    value: "AUD 200M",
    location: "Australia",
    period: "2024",
    description: "Supported a major irrigation project in a service-critical water environment, bringing governance, delivery oversight and stakeholder coordination to a program requiring strong commercial discipline and executive visibility.",
  },
  {
    title: "Substations, Renewables and EPC Delivery",
    sector: "Energy & Utilities",
    value: "AUD 115M",
    location: "Australia",
    period: "2010–2019",
    description: "Delivered high-voltage substations, renewable generation projects and EPC programs requiring end-to-end commercial and delivery control including procurement strategy, land access, stakeholder engagement, approvals management, financial governance and reporting discipline.",
  },
  {
    title: "IT Building, AWS Data Centre Infrastructure and High-Rise Development",
    sector: "Built Environment & Digital Infrastructure",
    value: "AUD 100M",
    location: "India",
    period: "2020–2022",
    description: "Held P&L and operational governance responsibility across a growing delivery business while overseeing complex developments including hyperscale data centre civil works, high-voltage energy assets and major commercial building projects. This included design coordination, statutory approvals, land acquisition and the establishment of senior teams and governance structures to strengthen delivery certainty and margin performance.",
  },
  {
    title: "Carmichael Mine",
    sector: "Resources",
    value: "AUD 25M",
    location: "Australia",
    period: "2022–2023",
    description: "Led civil and concrete infrastructure packages within a major mining environment, combining delivery oversight with pre-contract strategy, market engagement and commercial improvement. The work also involved remote delivery coordination, land access and Traditional Owner engagement.",
  },
];

const deliveryRecord = [
  { title: "Australian Operations Establishment and Growth", description: "Established and led Australian EPC operations with full P&L accountability, executive stakeholder engagement, bid and investment governance, and systems aligned to delivery assurance and growth. This included building and converting a qualified opportunity pipeline through senior client and partner engagement, while establishing the governance cadence, executive reporting and operating discipline required to support market entry and growth. Chaired bid and investment decisions for major pursuits, applying disciplined commercial risk governance, executive decision support and practical intervention where delivery or margin exposure was emerging." },
  { title: "Commercial and Governance Leadership", description: "Led forecasting, working capital discipline, executive reporting and KPI-based performance management in delivery environments where commercial control and governance visibility were central to decision-making." },
  { title: "Acquisition, Integration & Operating Model", description: "Led acquisition integration planning and implemented governance, financial and reporting systems aligned to disciplined operating performance and executive oversight." },
  { title: "Systems & Compliance", description: "Implemented governance, financial and reporting systems to strengthen operating discipline, executive visibility and compliance across growing delivery environments." },
  { title: "Customer & Stakeholder Satisfaction", description: "Built trusted relationships with clients, partners, regulators, Traditional Owners and delivery teams through clear communication, responsive leadership and commercially grounded decision-making." },
  { title: "Complex Project and Program Delivery", description: "Directed and supported delivery across civil, utilities, energy, resources and built environment settings, including remote and interface-heavy programs where execution discipline, approvals, stakeholder coordination and commercial control were essential. Experience includes major transport and civil works, water and utility programs, renewable and power infrastructure, industrial and mining settings, and large capital developments requiring executive leadership from pursuit through delivery." },
];

const metrics = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 2.4, suffix: "B+", prefix: "AUD ", label: "Portfolio Value", decimals: 1 },
  { value: 6, suffix: "+", label: "Major Sectors" },
  { value: 100, suffix: "%", label: "Principal-Led" },
];

// Clients removed — using sector coverage instead

const testimonials = [
  {
    quote: "ESSGEE brought a level of governance rigour we had never experienced before. Their risk-led approach identified critical issues months before they became problems, saving us significant time and capital.",
    author: "Director of Infrastructure",
    organisation: "State Government Agency",
    project: "Urban Rail Extension — AUD 1.2B",
    rating: 5,
  },
  {
    quote: "Principal-led from day one. Satya and his team were in the field, in the meetings, and across every contract interface. The outcome speaks for itself — delivered early and under budget.",
    author: "Project Executive",
    organisation: "Major Resources Company",
    project: "Regional Highway Upgrade — AUD 480M",
    rating: 5,
  },
  {
    quote: "We selected ESSGEE for their depth of experience and their no-template, no-junior-staff commitment. They delivered exactly as promised — transparent, rigorous, and outcome-focused.",
    author: "General Manager, Capital Works",
    organisation: "Water Utility",
    project: "Water Treatment Expansion — AUD 220M",
    rating: 5,
  },
];

const ProofPage = () => (
  <>
    <Navbar />
    <main>
      <Helmet>
        <title>Delivery & Projects | ESSGEE</title>
        <meta name="description" content="Recent projects and pursuits demonstrating executive delivery leadership, bid governance, stakeholder management, and commercial oversight across AUD 2.4B+ portfolio." />
        <link rel="canonical" href="https://www.essgee.pro/proof" />
      </Helmet>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={proofHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Delivery & Projects</p>
          <h1 className="text-hero text-white">Track Record</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Recent projects and pursuits demonstrating executive delivery leadership, bid governance, stakeholder management, and commercial oversight.
          </p>
        </div>
      </section>

      {/* Metrics bar */}
      <section id="track-record" className="section-light py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                <p className="text-micro uppercase tracking-widest text-slate-navy/50 mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Governance Track Record */}
      <section id="delivery-governance" className="section-light section-padding">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber text-center mb-4">Delivery & Governance</p>
            <h2 className="text-h2 text-slate-navy text-center mb-16">Executive Track Record</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryRecord.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="card-lift p-8 rounded-xl bg-card border border-border/50 h-full hover:border-vivid-amber/30 transition-all duration-500">
                  <h3 className="font-display text-lg font-semibold text-slate-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-navy/60 leading-relaxed">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-cream section-padding">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber text-center mb-4">Project Portfolio</p>
            <h2 className="text-h2 text-slate-navy text-center mb-16">Projects</h2>
          </SectionReveal>
          <div className="space-y-10">
            {projects.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.1}>
                <div className="p-6 md:p-8 lg:p-10 rounded-xl bg-card border border-border/50 hover:shadow-[0_20px_40px_-12px_rgba(51,71,91,0.12)] hover:-translate-y-1 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-navy">{p.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="text-xs uppercase tracking-wider text-vivid-amber font-semibold">{p.sector}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-navy/40"><MapPin className="w-3 h-3" />{p.location}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-navy/40"><Calendar className="w-3 h-3" />{p.period}</span>
                      </div>
                    </div>
                    <span className="counter-value text-2xl whitespace-nowrap">{p.value}</span>
                  </div>
                  <p className="text-slate-navy/60 leading-relaxed">{p.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Coverage */}
      <section id="sector-coverage" className="section-dark section-padding scroll-mt-20" aria-labelledby="sectors-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Building2 className="w-5 h-5 text-vivid-amber" />
              <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Sector Coverage</p>
            </div>
            <h2 id="sectors-heading" className="text-h2 text-white text-center mb-4">Where We Operate</h2>
            <p className="text-body-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
              ESSGEE brings experience across transport, water, utilities, energy, resources, the built environment, and major capital programs.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Transport & Civil", "Water & Utilities", "Energy & Resources", "Built Environment", "Major Capital Programs"].map((sector, i) => (
              <SectionReveal key={sector} delay={i * 0.05}>
                <div className="group card-lift flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 text-center hover:border-vivid-amber/40 hover:bg-white/8 transition-all duration-300 h-full min-h-[100px]">
                  <span className="font-display text-sm font-semibold text-white/80 group-hover:text-vivid-amber transition-colors duration-300 leading-snug">
                    {sector}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-light section-padding scroll-mt-20" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber text-center mb-4">Client Voices</p>
            <h2 id="testimonials-heading" className="text-h2 text-slate-navy text-center mb-16">
              What Our Clients Say
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card-lift flex flex-col p-8 rounded-2xl bg-card border border-border/50 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-vivid-amber text-vivid-amber" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-vivid-amber/25 mb-4" />

                  <p className="text-slate-navy/70 leading-relaxed text-sm flex-1 mb-6 italic">
                    "{t.quote}"
                  </p>

                  <div className="border-t border-border/40 pt-5">
                    <p className="font-semibold text-slate-navy text-sm">{t.author}</p>
                    <p className="text-xs text-slate-navy/50 mt-0.5">{t.organisation}</p>
                    <p className="text-xs text-vivid-amber mt-2 font-medium">{t.project}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/connect" className="btn-pop">Discuss Your Project</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ProofPage;
