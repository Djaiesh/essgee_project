import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Seo from "@/components/Seo";
import proofHero from "@/assets/proof-hero.jpg";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Quote } from "lucide-react";
import { clients, metrics, projects, testimonials } from "@/data/siteContent";

const ProofPage = () => (
  <>
    <Seo title="Delivery & Projects" path="/proof" description="ESSGEE Projects delivers principal-led governance, commercial oversight, and project delivery support across an AUD 2.7B+ portfolio." />
    <Navbar />
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={proofHero} alt="Construction project delivery site" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6"><p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Track Record</p><h1 className="text-hero text-white">Proof of Delivery</h1><p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">Recent projects and pursuits demonstrating executive delivery leadership, bid governance, stakeholder management, and commercial oversight.</p></div>
      </section>
      <section className="section-light py-16"><div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">{metrics.map((metric) => <div key={metric.label} className="text-center"><AnimatedCounter {...metric} /><p className="text-micro uppercase tracking-widest text-slate-navy/50 mt-2">{metric.label}</p></div>)}</div></section>
      <section id="projects" className="section-cream section-padding"><div className="container mx-auto px-6"><SectionReveal><p className="text-micro uppercase tracking-[0.2em] text-teal-accent text-center mb-4">Project Portfolio</p><h2 className="text-h2 text-slate-navy text-center mb-16">Projects</h2></SectionReveal><div className="space-y-7">{projects.map((project, index) => <SectionReveal key={project.title} delay={index * 0.06}><article className="card-lift rounded-xl p-7"><div className="flex flex-col sm:flex-row justify-between gap-3"><div><h3 className="font-display text-xl font-semibold text-slate-navy">{project.title}</h3><div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-navy/45"><span className="uppercase text-teal-accent font-semibold">{project.sector}</span><span className="flex gap-1"><MapPin className="w-3 h-3" />{project.location}</span><span className="flex gap-1"><Calendar className="w-3 h-3" />{project.period}</span></div></div><span className="font-display text-2xl font-bold text-deep-azure">{project.value}</span></div><p className="mt-4 leading-relaxed text-slate-navy/60">{project.description}</p></article></SectionReveal>)}</div></div></section>
      <section className="section-dark section-padding"><div className="container mx-auto px-6"><p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Trusted By</p><h2 className="text-h2 text-white mb-10">Our Clients</h2><div className="grid sm:grid-cols-2 lg:grid-cols-5">{clients.map((client) => <div key={client} className="border border-white/10 bg-white/5 p-5 text-white/70">{client}</div>)}</div></div></section>
      <section className="section-light section-padding"><div className="container mx-auto px-6"><h2 className="text-h2 text-slate-navy text-center mb-14">What Our Clients Say</h2><div className="grid md:grid-cols-3 gap-7">{testimonials.map((testimonial) => <article key={testimonial.author} className="card-lift rounded-xl p-7"><Quote className="w-8 h-8 text-teal-accent mb-4" /><p className="italic leading-relaxed text-slate-navy/70">"{testimonial.quote}"</p><p className="mt-5 font-semibold text-slate-navy">{testimonial.author}</p><p className="text-sm text-slate-navy/55">{testimonial.organisation}</p><p className="mt-2 text-sm text-teal-accent">{testimonial.project}</p></article>)}</div><div className="text-center mt-12"><Link to="/connect" className="btn-pop">Discuss Your Project</Link></div></div></section>
    </main>
    <Footer />
  </>
);

export default ProofPage;
