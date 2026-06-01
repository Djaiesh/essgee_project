import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OriginSection from "@/components/OriginSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SectorsSection from "@/components/SectorsSection";
import ProofSection from "@/components/ProofSection";
import ImpactSection from "@/components/ImpactSection";
import InsightsSection from "@/components/InsightsSection";
import ClientsSection from "@/components/ClientsSection";
import SpecialistsSection from "@/components/SpecialistsSection";

import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import { site } from "@/data/siteContent";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ESSGEE Projects",
  "description": "Principal-led advisory support for organisations managing complex infrastructure, capital delivery and governance challenges.",
  "url": site.url,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Perth",
    "addressRegion": "WA",
    "addressCountry": "AU"
  },
  "founder": {
    "@type": "Person",
    "name": "Satya Gady",
    "jobTitle": "Executive Director"
  },
  "areaServed": ["Australia", "International"],
  "telephone": site.phoneDisplay,
  "email": site.email,
  "serviceType": ["Governance & Assurance", "Commercial & Risk Leadership", "Bid Strategy & Investment Support", "Portfolio & Program Oversight", "Delivery Leadership"],
  "sameAs": ["https://www.linkedin.com/in/satya-gady"]
};

const Index = () => (
  <>
    <Seo title="ESSGEE" description="ESSGEE provides principal-led advisory support for organisations managing complex infrastructure, capital delivery and governance challenges." />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />
    <main>
      <Hero />
      <OriginSection />
      <CapabilitiesSection />
      <SectorsSection />
      <ProofSection />
      <ImpactSection />
      <ClientsSection />
      <SpecialistsSection />
      <InsightsSection />

    </main>
    <Footer />
  </>
);

export default Index;
