import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/essgee_logo.jpeg";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subs?: SubItem[];
}

const NAV_LINKS: NavItem[] = [
  {
    label: "Capabilities",
    href: "/capabilities",
    subs: [
      { label: "Governance & Assurance", href: "/capabilities#governance-assurance" },
      { label: "Commercial & Risk Leadership", href: "/capabilities#commercial-risk" },
      { label: "Bid Strategy & Investment", href: "/capabilities#bid-strategy" },
      { label: "Portfolio & Program Oversight", href: "/capabilities#portfolio-program" },
      { label: "Operating Model & Performance", href: "/capabilities#operating-model" },
      { label: "Delivery Leadership", href: "/capabilities#delivery-leadership" },
    ],
  },
  {
    label: "Sector Experience",
    href: "/sectors",
    subs: [
      { label: "Transport & Civil", href: "/sectors#transport" },
      { label: "Water & Utilities", href: "/sectors#water" },
      { label: "Energy, Resources & Industrial", href: "/sectors#energy-resources" },
      { label: "Built Environment & Property", href: "/sectors#built-environment" },
      { label: "Defence", href: "/sectors#defence" },
      { label: "Urban Rail", href: "/sectors#urban-rail" },
      { label: "Major Capital Programs", href: "/sectors#capital-programs" },
    ],
  },
  {
    label: "Projects",
    href: "/proof",
    subs: [
      { label: "HumeLink East", href: "/proof#humelink" },
      { label: "Transport Bids", href: "/proof#transport-bids" },
      { label: "Murrumbidgee Irrigation", href: "/proof#murrumbidgee" },
      { label: "Renewables & EPC", href: "/proof#substations-epc" },
      { label: "AWS Data Centre", href: "/proof#it-building-aws" },
      { label: "Carmichael Mine", href: "/proof#carmichael" },
    ]
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Contact",
    href: "/connect",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const isHashLink = (href: string) => href.startsWith("/#") || href.startsWith("#");

  const renderLink = (href: string, children: React.ReactNode, className: string, onClick?: () => void) => {
    if (isHashLink(href)) {
      return (
        <a href={href} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  };

  const isHomePage = location.pathname === "/";
  const shouldBeSolid = !isHomePage || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldBeSolid ? "glass-nav" : "glass-nav-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 h-20" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3 z-10" aria-label="ESSGEE home">
          <img src={logo} alt="ESSGEE Projects" className="h-12 w-12 rounded-md object-cover border border-white/20 shadow-md" />
          <span className="text-sm font-bold tracking-[0.16em] text-white">ESSGEE PROJECTS</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.subs && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                {renderLink(
                  link.href,
                  <>
                    {link.label}
                    {link.subs && <ChevronDown className="w-3.5 h-3.5 mt-0.5" />}
                  </>,
                  `flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium tracking-wide text-white/80 hover:text-vivid-amber hover:bg-white/10 transition-all duration-200`
                )}
              </div>

              {/* Desktop dropdown */}
              <AnimatePresence>
                {link.subs && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                    style={{ background: "hsla(220, 14%, 15%, 0.95)", backdropFilter: "blur(16px)" }}
                  >
                    {link.subs.map((sub) => (
                      <div key={sub.label}>
                        {renderLink(
                          sub.href,
                          sub.label,
                          "block px-5 py-3 text-xs text-white/65 hover:text-vivid-amber hover:bg-white/5 transition-all duration-150 flex items-center gap-2 group/item",
                          () => setOpenDropdown(null)
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden z-10 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute inset-x-0 top-20 glass-nav border-t-0 max-h-[80vh] overflow-y-auto"
          >
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="border-b border-white/5 last:border-b-0">
                  {link.subs ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-6 py-4 text-white text-base font-medium"
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-white/5"
                          >
                            {link.subs.map((sub) => (
                              <div key={sub.label}>
                                {renderLink(
                                  sub.href,
                                  sub.label,
                                  "block px-10 py-3.5 text-white/60 text-sm hover:text-vivid-amber hover:bg-white/5 transition-colors",
                                  () => setMobileOpen(false)
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <div>
                      {renderLink(
                        link.href,
                        link.label,
                        "block px-6 py-4 text-white text-base font-medium",
                        () => setMobileOpen(false)
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
