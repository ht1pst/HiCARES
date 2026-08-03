import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import ScrollToTop from "./ScrollToTop";
import SplashScreen from "./SplashScreen";

import Hero from "./HOME/Hero";
import Section2 from "./HOME/Section2";
import Section3 from "./HOME/Section3";
import Section4 from "./HOME/Section4";
import Section5 from "./HOME/Section5";
import Section6 from "./HOME/Section6";
import Section7 from "./HOME/Section7";
import Section8 from "./HOME/Section8";
import Section82 from "./HOME/Section82";
import Footer from "./HOME/Footer";

import AboutSec1 from "./About/AboutSec1";
import AboutSec2 from "./About/AboutSec2";
import AboutSec3 from "./About/AboutSec3";
import AboutSec4 from "./About/AboutSec4";
import AboutSec5 from "./About/AboutSec5";

import ServicesHero from "./Services/ServicesHero";
import "@fortawesome/fontawesome-free/css/all.min.css";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Splash screen on every page change
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <ScrollToTop />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section8 />
                <Section82 />
                <Section7 />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <AboutSec1 />
                <AboutSec2 />
                <AboutSec3 />
                <AboutSec4 />
                <AboutSec5 />
                <Section8 />
                <Section82 />
                <Footer />
              </>
            }
          />


           <Route
            path="/services"
            element={
              <>
                <ServicesHero/>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;