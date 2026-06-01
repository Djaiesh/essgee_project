import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import { Preloader } from "./components/Preloader";
import { ScrollProgress } from "./components/ScrollProgress";

const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const ProofPage = lazy(() => import("./pages/ProofPage"));

const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, filter: "blur(4px)" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const location = useLocation();
  const completePreloader = useCallback(() => setPreloaderComplete(true), []);

  useEffect(() => {
    // Prevent scrolling while preloader is active, by hiding body overflow.
    if (!preloaderComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [preloaderComplete]);

  // Make sure we scroll to top on location change during page transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const suspenseFallback = (
    <div className="h-screen w-full flex items-center justify-center bg-slate-navy">
      <span className="text-vivid-amber font-display tracking-widest text-sm uppercase">Loading...</span>
    </div>
  );

  return (
    <>
      <ScrollProgress />
      {!preloaderComplete && <Preloader onComplete={completePreloader} />}
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Suspense fallback={suspenseFallback}><Index /></Suspense></PageWrapper>} />
            <Route path="/capabilities" element={<PageWrapper><Suspense fallback={suspenseFallback}><CapabilitiesPage /></Suspense></PageWrapper>} />
            <Route path="/sectors" element={<PageWrapper><Suspense fallback={suspenseFallback}><SectorsPage /></Suspense></PageWrapper>} />
            <Route path="/proof" element={<PageWrapper><Suspense fallback={suspenseFallback}><ProofPage /></Suspense></PageWrapper>} />
            <Route path="/insights" element={<PageWrapper><Suspense fallback={suspenseFallback}><InsightsPage /></Suspense></PageWrapper>} />
            <Route path="/connect" element={<PageWrapper><Suspense fallback={suspenseFallback}><ConnectPage /></Suspense></PageWrapper>} />
            <Route path="*" element={<PageWrapper><Suspense fallback={suspenseFallback}><NotFound /></Suspense></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
