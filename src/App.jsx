import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";



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
            path="/about"
            element={
              <>
                <AboutSec1 />
                <AboutSec2 />
                <AboutSec3 />
                <AboutSec4 />
                <Footer />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;