import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import deliveryHero from "@/assets/delivery-hero.png";
import { Link } from "react-router-dom";
import { 
  Building2, TrendingUp, GitBranch, FileCheck, Handshake, HardHat,
  CheckCircle2
} from "lucide-react";
import { deliveryPillars } from "@/data/siteContent";

const iconMap: Record<string, any> = {
  operations: Building2,
  commercial: TrendingUp,
  operating: GitBranch,
  systems: FileCheck,
  satisfaction: Handshake,
  complex: HardHat,
};


const DeliveryPage = () => (
  <>
    <Navbar />
    <Seo 
      title="Delivery & Governance" 
      path="/delivery" 
      description="ESSGEE establishes structured systems, governance frameworks, and P&L controls to ensure delivery certainty on complex capital projects." 
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src={deliveryHero} 
          alt="Technical project controls dashboard representing delivery certainty" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-slate-navy/90" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Operations & Project Controls</p>
          <h1 className="text-hero text-white">Delivery & Governance</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Establishing operational cadence, commercial guardrails, and compliance systems to manage risk
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-light pt-20 pb-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-deep-azure mb-4">Core Principles</p>
            <h2 className="text-h2 text-slate-navy mb-8">Certainty Through Execution Discipline</h2>
            <p className="text-body-lg text-slate-navy/70 leading-relaxed">
              ESSGEE provides senior leadership and practical systems to support projects from pursuit through to delivery. We specialize in establishing the reporting structures, risk assessments, and working capital discipline required to preserve project margin and align stakeholder expectations.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Pillars Grid */}
      <section id="operations" className="section-cream py-16 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-slate-navy mb-4">Delivery & Governance Pillars</h2>
            <p className="text-body-lg text-slate-navy/60 max-w-xl mx-auto">
              Our structured approach to establishing control, driving accountability, and recovering distressed portfolios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryPillars.map((pillar) => {
              const Icon = iconMap[pillar.id] || CheckCircle2;
              return (
                <SectionReveal key={pillar.id}>
                  <div className="bg-white p-8 rounded-xl border border-slate-navy/5 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group hover:border-deep-azure/30">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-deep-azure/5 flex items-center justify-center mb-6 group-hover:bg-deep-azure/10 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-deep-azure" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-slate-navy mb-4 group-hover:text-deep-azure transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-navy/70 mb-3 leading-relaxed">
                        {pillar.description}
                      </p>
                      <p className="text-xs text-slate-navy/60 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section-padding bg-slate-navy relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <SectionReveal>
            <h2 className="text-h2 text-white mb-6">Need Operational Readiness or Recovery?</h2>
            <p className="text-body-lg text-white/70 mb-10">
              ESSGEE brings hands-on experience establishing operating cadence and recovering performance certainty on complex Capital and EPC programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/connect#connect" className="btn-pop">Schedule a Confidential Consultation</Link>
              <Link to="/proof" className="btn-outline">View Our Projects</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default DeliveryPage;
