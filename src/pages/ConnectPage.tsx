import Footer from "@/components/Footer";
import ConnectSection from "@/components/ConnectSection";
import connectHero from "@/assets/connect-hero.jpg";
import SectionReveal from "@/components/SectionReveal";
import { Linkedin, Mail, Award, Download } from "lucide-react";
import Seo from "@/components/Seo";
import satyaImg from "@/assets/satya.jpeg";
import { leadershipDetails, site } from "@/data/siteContent";

const ConnectPage = () => (
  <>
    <Seo 
      title="Contact & Leadership" 
      path="/connect" 
      description="Contact Satya Gady, Executive Director of ESSGEE Projects. 30+ years of principal-led capital delivery and project governance leadership." 
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={connectHero} alt="Business consultation environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-hero text-white">Contact & Leadership</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Begin a confidential discussion with our Executive Director
          </p>
        </div>
      </section>

      {/* Leadership Bio */}
      <section id="leadership" className="section-light pt-20 pb-20 scroll-mt-20" aria-labelledby="leadership-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Award className="w-5 h-5 text-vivid-amber" />
              <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Our Leadership</p>
            </div>
            <h2 id="leadership-heading" className="text-h2 text-slate-navy text-center mb-14">
              Principal-Led. Every Engagement.
            </h2>
          </SectionReveal>

          <SectionReveal>
            <div className="grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-border/50 shadow-[0_12px_48px_-12px_hsla(210,28%,28%,0.14)]">
              {/* LEFT: Photo */}
              <div className="lg:col-span-2 relative h-[350px] sm:h-[450px] lg:h-auto lg:min-h-[580px] overflow-hidden bg-[#fafafc] border-b lg:border-b-0 lg:border-r border-border/10">
                <img
                  src={satyaImg}
                  alt="Satya Gady - Executive Director"
                  className="w-full h-full object-cover object-[center_12%] scale-[1.03]"
                />
              </div>

              {/* RIGHT: Bio & Credentials */}
              <div className="lg:col-span-3 bg-white p-7 md:p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="font-display text-3xl font-bold text-slate-navy leading-tight mb-1">
                  {leadershipDetails.name}
                </h3>
                <p className="text-vivid-amber font-semibold text-sm uppercase tracking-widest mb-6">
                  {leadershipDetails.title}
                </p>

                <p className="text-slate-navy/75 leading-relaxed mb-5">{leadershipDetails.bio}</p>
                <p className="text-sm text-slate-navy/60 leading-relaxed mb-8">
                  With a career spanning major public and private sector programs across transport, water, utilities, energy, resources and the built environment, Satya's methodology is built on the principle that governance, commercial discipline and executive accountability must start before the first contract is signed. His direct involvement ensures clients receive senior insight at every critical decision point.
                </p>

                {/* Professional badges */}
                <div className="mb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-navy/40 mb-3">
                    Professional Credentials & Fellowships
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leadershipDetails.professionalCredentials.map(pc => (
                      <span key={pc} className="text-xs px-3 py-1.5 rounded-full border border-teal-accent/20 bg-teal-accent/5 text-teal-accent font-semibold">
                        {pc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic credentials */}
                <div className="mb-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-navy/40 mb-3">
                    Education & Training
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leadershipDetails.credentials.map(c => (
                      <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-slate-navy/12 bg-slate-navy/5 text-slate-navy/65 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capability Statement Showcase */}
                <div className="mb-8 pt-6 border-t border-border/40">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-navy/40 mb-3">
                    Full Profile & Track Record
                  </p>
                  <a
                    href={site.capabilityStatement}
                    download
                    className="btn-pop inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" strokeWidth={2.5} />
                    Download Capability Statement
                  </a>
                </div>

                {/* Contact links */}
                <div className="flex flex-wrap gap-6 pt-6 border-t border-border/40">
                  <a
                    href={`mailto:${leadershipDetails.email}`}
                    className="group flex items-center gap-2 text-sm text-slate-navy/50 hover:text-vivid-amber transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    {leadershipDetails.email}
                  </a>
                  <a
                    href={leadershipDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-slate-navy/50 hover:text-vivid-amber transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Confidential Discussion */}
      <ConnectSection />
    </main>
    <Footer />
  </>
);

export default ConnectPage;
