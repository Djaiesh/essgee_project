import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import transportImg from "@/assets/sector-transport.jpg";
import waterImg from "@/assets/sector-water.jpg";
import resourcesImg from "@/assets/sector-resources.jpg";
import socialImg from "@/assets/sector-social.jpg";
import defenceImg from "@/assets/sector-defence.jpg";
import urbanImg from "@/assets/sector-urban.png";
import railImg from "@/assets/sector-rail.jpg";
import capitalProgramsImg from "@/assets/hero-bg.jpg";

const sectors = [
  { id: "transport", title: "Transport & Civil Infrastructure", image: transportImg, description: "Transport corridors, civil infrastructure, remote works and complex interface environments.", detail: "Experience includes civil and transport environments where delivery certainty depends on strong planning, stakeholder coordination, approvals management and disciplined commercial control." },
  { id: "water", title: "Water & Utilities", image: waterImg, description: "Water, utilities, treatment, networks and service-critical infrastructure.", detail: "ESSGEE understands utility and water environments in which governance, continuity of service, operational interfaces, and stakeholder assurance are central to project success." },
  { id: "energy-resources", title: "Energy, Resources & Industrial", image: resourcesImg, description: "Power, renewables, mining, industrial assets and remote delivery programs.", detail: "Experience spans complex industrial and resource settings where executive control, delivery discipline, stakeholder management and remote program execution are critical." },
  { id: "built-environment", title: "Built Environment & Property", image: socialImg, description: "Commercial developments, large mixed-use environments and complex capital works.", detail: "ESSGEE brings experience from large-scale development and capital project environments where commercial clarity, design coordination, approvals and delivery governance all intersect." },
  { id: "defence", title: "Defence", image: defenceImg, description: "Defence estate, high-security infrastructure, and strategic capital works.", detail: "ESSGEE provides advisory and governance for complex defense infrastructure programs, managing strict compliance, security protocols, multi-stakeholder approvals, and schedule predictability." },
  { id: "urban-rail", title: "Urban Rail", image: railImg, description: "Urban rail systems, heavy and light rail corridor upgrades, and complex authority interfaces.", detail: "Specialized in urban transport construction, operating corridor shut-downs, signaling integration, regulatory safety alignment, and cost controls while navigating complex authority interfaces and community disruptions." },
  { id: "capital-programs", title: "Major Capital Programs", image: capitalProgramsImg, description: "Multi-project environments requiring governance cadence, executive visibility and disciplined intervention.", detail: "Where clients are managing multiple workstreams, significant risk exposure or investor and board scrutiny, ESSGEE provides senior support to improve clarity, control and delivery confidence." },
];

const SectorsPage = () => (
  <>
    <Seo title="Sector Experience" path="/sectors" description="ESSGEE brings experience across transport, water, utilities, energy, resources, the built environment, defense, urban rail, and major capital programs." />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={transportImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Sector Experience</p>
          <h1 className="text-hero text-white">Sector Experience</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Governance, delivery leadership and commercial oversight across key sectors
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="section-light section-padding">
        <div className="container mx-auto px-6 space-y-20">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector.id}>
              <div id={sector.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center">
                <div className={`rounded-xl overflow-hidden aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={sector.image} alt={sector.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-h2 text-slate-navy mb-4">{sector.title}</h2>
                  <p className="text-body-lg text-slate-navy/70 mb-4">{sector.description}</p>
                  <p className="text-slate-navy/60 leading-relaxed">{sector.detail}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-dark py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-body-lg text-white/70 max-w-3xl mx-auto italic">
            ESSGEE brings experience across transport, water, utilities, energy, resources, the built environment, defense, urban rail, and major capital programs, with a focus on governance, delivery leadership, commercial oversight, and executive stakeholder management.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default SectorsPage;
