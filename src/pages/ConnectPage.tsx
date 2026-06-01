import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectSection from "@/components/ConnectSection";
import connectHero from "@/assets/connect-hero.jpg";
import SectionReveal from "@/components/SectionReveal";
import { Linkedin, Mail, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import logo from "@/assets/essgee_logo.jpeg";

const leadership = [
  {
    name: "Satya Gady",
    title: "Executive Director",
    email: "satya.gady@essgee.pro",
    linkedin: "https://www.linkedin.com/in/satya-gady",
    bio: "Satya Gady is an executive director and infrastructure leader with over 30 years of experience in complex capital delivery, governance, commercial oversight, and operational leadership across Australia and international markets, guiding clients through strategic infrastructure challenges.",
    credentials: ["MBA (completing)", "Master of Project Management and related advanced study", "Bachelor of Engineering (Civil)", "Chartered Manager", "Fellow, Institute of Managers and Leaders", "Certified Practising Project Manager"],
  },
];

const ConnectPage = () => (
  <>
    <Navbar />
    <main>
      <Seo title="Contact & Leadership" path="/connect" description="Contact Satya Gady, Executive Director of ESSGEE Projects. Principal-led advisory for complex infrastructure and capital delivery." />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={connectHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-hero text-white">Contact</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Begin a confidential discussion about your next infrastructure or capital delivery challenge
          </p>
        </div>
      </section>


      {/* Leadership */}
      <section id="leadership" className="section-light section-padding scroll-mt-20" aria-labelledby="leadership-heading">
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

          {leadership.map((person) => (
            <SectionReveal key={person.name}>
              <div className="grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-border/50 shadow-[0_12px_48px_-12px_hsla(210,28%,28%,0.14)]">

                {/* ── LEFT: Photo placeholder ── */}
                <div
                  className="lg:col-span-2 relative min-h-[280px] lg:min-h-[540px] flex flex-col items-center justify-center gap-4"
                  style={{ background: "linear-gradient(155deg, hsl(210,28%,20%) 0%, hsl(210,28%,30%) 100%)" }}
                >
                  <img src={logo} alt="" className="h-32 w-32 rounded-xl object-cover opacity-30 mix-blend-screen" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">Leadership portrait reserved</p>
                </div>

                {/* ── RIGHT: Bio content ── */}
                <div className="lg:col-span-3 bg-white p-7 md:p-10 lg:p-14 flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-bold text-slate-navy leading-tight mb-1">
                    {person.name}
                  </h3>
                  <p className="text-vivid-amber font-semibold text-sm uppercase tracking-widest mb-7">
                    {person.title}
                  </p>

                  <p className="text-slate-navy/65 leading-relaxed mb-5">{person.bio}</p>
                  <p className="text-sm text-slate-navy/50 leading-relaxed mb-8">
                    With a career spanning major public and private sector programs across transport, water, utilities, energy, resources and the built environment, Satya's methodology is built on the principle that governance, commercial discipline and executive accountability must start before the first contract is signed. His direct involvement ensures clients receive senior insight at every critical decision point.
                  </p>

                  {/* Credentials */}
                  <div className="mb-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-navy/30 mb-3">
                      Qualifications & Credentials
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {person.credentials.map(c => (
                        <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-slate-navy/12 bg-slate-navy/5 text-slate-navy/65 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact links */}
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-border/40">
                    <a
                      href={`mailto:${person.email}`}
                      className="group flex items-center gap-2 text-sm text-slate-navy/50 hover:text-vivid-amber transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      {person.email}
                    </a>
                    <a
                      href={person.linkedin}
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
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section id="approach" className="section-light section-padding scroll-mt-20" aria-labelledby="approach-heading">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">How We Work</p>
            <h2 id="approach-heading" className="text-h2 text-slate-navy mb-8">
              An Extension of Your Leadership Team
            </h2>
            <p className="text-body-lg text-slate-navy/70 leading-relaxed">
              ESSGEE works as an extension of client leadership teams, bringing practical judgement, executive communication and decision support in environments where delivery complexity, stakeholder visibility and commercial exposure are high.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Confidential Discussion — always last */}
      <ConnectSection />
    </main>
    <Footer />
  </>
);

export default ConnectPage;
