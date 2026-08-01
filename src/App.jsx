import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import Hero from "./Home/Hero";
import Section2 from "./Home/Section2";
import Section3 from "./Home/Section3";
import Section4 from "./Home/Section4";
import Section5 from "./Home/Section5";
import Section6 from "./Home/Section6";
import Section7 from "./Home/Section7";
import Section8 from "./Home/Section8";
import Section82 from "./Home/Section82";
import Footer from "./Home/Footer";

import AboutSec1 from "./About/AboutSec1";
import AboutSec2 from "./About/AboutSec2";
import AboutSec3 from "./About/AboutSec3";
import AboutSec4 from "./About/AboutSec4";

import SplashScreen from "./SplashScreen";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [loading, setLoading] = useState(true);

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

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <SplashScreen />
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section2 />
               
              </>
            }
          />

          
        </Routes>
      </main>
    </Router>
  );
}

export default App;