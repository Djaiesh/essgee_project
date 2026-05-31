import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OriginSection from "@/components/OriginSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SectorsSection from "@/components/SectorsSection";
import ProofSection from "@/components/ProofSection";
import ImpactSection from "@/components/ImpactSection";
import InsightsSection from "@/components/InsightsSection";

import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ESSGEE",
  "description": "Principal-led advisory support for organisations managing complex infrastructure, capital delivery and governance challenges.",
  "url": "https://www.essgee.pro",
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
  "serviceType": ["Governance & Assurance", "Commercial & Risk Leadership", "Bid Strategy & Investment Support", "Portfolio & Program Oversight", "Delivery Leadership"],
  "sameAs": ["https://www.linkedin.com/in/satya-gady"]
};

const Index = () => (
  <>
    <Helmet>
      <title>ESSGEE | Where Strategy Meets Delivery</title>
      <meta name="description" content="ESSGEE provides principal-led advisory support for complex infrastructure, capital delivery and governance challenges. 30+ years of executive leadership across Australia and international markets." />
      <meta property="og:title" content="ESSGEE | Where Strategy Meets Delivery" />
      <meta property="og:description" content="Principal-led advisory support for organisations managing complex infrastructure, capital delivery and governance challenges." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.essgee.pro" />
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
      <InsightsSection />

    </main>
    <Footer />
  </>
);

export default Index;
