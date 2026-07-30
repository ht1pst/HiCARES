import { useEffect } from "react";
import Lenis from "lenis";

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

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
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

  return (
    <main>
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
    </main>
  );
}

export default App;