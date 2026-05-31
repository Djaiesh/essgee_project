import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import capabilitiesHero from "@/assets/capabilities-hero.jpg";
import {
  Shield, TrendingUp, Target, BarChart3, Settings,
  CheckCircle, Users, HardHat
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  { id: "governance-assurance", icon: Shield, title: "Governance & Assurance", description: "Governance frameworks, executive reporting, assurance reviews and decision support for complex projects and portfolios.", detail: "ESSGEE establishes practical governance structures that help sponsors, boards, and executive teams make confident decisions. This includes stage-gate discipline, assurance frameworks, executive dashboards, portfolio reviews, performance reporting, controls aligned with delivery risk, and targeted intervention when program complexity or commercial exposure increases." },
  { id: "commercial-risk", icon: TrendingUp, title: "Commercial & Risk Leadership", description: "Commercial guardrails, risk governance and performance control for bids, projects and operating portfolios.", detail: "With deep experience in P&L ownership, forecasting, working capital discipline, bid governance, and executive risk oversight, ESSGEE helps clients sharpen commercial decision-making and improve confidence in delivery. Support includes commercial guardrails for pursuits and live projects, performance monitoring, contract and risk leadership, and practical reporting that enables earlier intervention." },
  { id: "bid-strategy", icon: Target, title: "Bid Strategy & Investment Support", description: "Strategic input on pursuit decisions, bid governance, market entry, due diligence and capital planning.", detail: "ESSGEE supports growth and investment decisions in which technical complexity, commercial risk, and executive scrutiny are high. Services include bid strategy, investment decision support, due diligence, acquisition and integration planning, market entry support, and operating model input for businesses entering or scaling into new markets." },
  { id: "portfolio-program", icon: BarChart3, title: "Portfolio & Program Oversight", description: "Executive oversight across multiple projects, interfaces, delivery priorities and reporting lines.", detail: "For clients managing portfolios or major programs, ESSGEE brings structure to governance cadence, executive reporting, performance reviews and intervention planning. This is particularly valuable where there are multiple contractor interfaces, high stakeholder visibility, inconsistent control across delivery teams, or a need to improve predictability across a portfolio." },
  { id: "operating-model", icon: Settings, title: "Operating Model & Performance Improvement", description: "Operating cadence, performance controls and leadership structures that improve predictability and accountability.", detail: "Drawing on experience establishing and leading operations, ESSGEE helps clients design fit-for-purpose operating models, reporting structures and leadership routines that improve execution discipline and organisational readiness during growth or change." },
  { id: "accountability", icon: CheckCircle, title: "Accountability & Ownership", description: "Clear accountability, delivery ownership and executive responsibility across complex programs and operating environments.", detail: "ESSGEE brings a strong sense of ownership to each engagement, with leadership grounded in executive responsibility, delivery accountability and timely decision-making where outcomes matter." },
  { id: "stakeholder-leadership", icon: Users, title: "Executive Stakeholder Leadership", description: "Board, client, partner, regulator and delivery-team engagement in high-stakes environments.", detail: "ESSGEE supports executive engagement across clients, partners, regulators, Traditional Owners and delivery teams, helping maintain alignment and confidence where relationships, expectations and approvals must be managed carefully." },
  { id: "delivery-leadership", icon: HardHat, title: "Delivery Leadership for Complex Projects", description: "Senior delivery support from strategy through execution across complex infrastructure and EPC environments.", detail: "ESSGEE brings practical experience from project and site delivery through to executive leadership. This enables credible support for delivery strategy, contractor coordination, interface management, readiness, escalation, approvals, remote delivery environments, and performance recovery, where complexity is high and certainty matters." },
];

const CapabilitiesPage = () => (
  <>
    <Navbar />
    <main>
      <Helmet>
        <title>Capabilities | ESSGEE</title>
        <meta name="description" content="ESSGEE offers principal-led advisory services in governance, commercial strategy, delivery leadership, and capital program oversight." />
        <link rel="canonical" href="https://www.essgee.pro/capabilities" />
      </Helmet>
      {/* Hero — 30% Slate Navy overlay */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={capabilitiesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Our Capabilities</p>
          <h1 className="text-hero text-white">Capabilities</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Principal-led advisory in governance, commercial strategy, and delivery leadership
          </p>
        </div>
      </section>

      {/* Capability details — 60% Main Space bg */}
      <section className="section-light section-padding">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {capabilities.map((cap, i) => (
              <SectionReveal key={cap.id}>
                <div id={cap.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-deep-azure/10 flex items-center justify-center">
                        <cap.icon className="w-7 h-7 text-deep-azure" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-h3 text-slate-navy">{cap.title}</h2>
                    </div>
                    <p className="text-body-lg text-slate-navy/70 mb-4">{cap.description}</p>
                    <p className="text-slate-navy/60 leading-relaxed">{cap.detail}</p>
                    <Link to="/connect" className="btn-pop mt-8 inline-block">Discuss This Service</Link>
                  </div>
                  <div className={`rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-navy/5 to-deep-azure/10 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <cap.icon className="w-24 h-24 text-deep-azure/15" strokeWidth={0.8} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CapabilitiesPage;
