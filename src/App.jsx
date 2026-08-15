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
import ServicesSection2 from "./Services/ServicesSection2";
import ServicesSection3 from "./Services/ServicesSection3";
import "@fortawesome/fontawesome-free/css/all.min.css";


import ServicesDeetsHero from "./personalizedcare/ServicesDeetsHero";
import ServicesOverview from "./personalizedcare/ServicesOverview";
import WhyChooseHiCARES from "./personalizedcare/WhyChooseHiCARES";
import HowItWorks from "./personalizedcare/HowItWorks";
import CTA from "./personalizedcare/CTA";
import CTA2 from "./personalizedcare/CTA2";
import FAQ from "./personalizedcare/FAQ";


import SkilledHero from "./skillednursing/SkilledHero";
import SkilledSection2 from "./skillednursing/SkilledSection2";
import SkilledSection3 from "./skillednursing/SkilledSection3";
import SkilledSection4 from "./skillednursing/SkilledSection4";
import SkilledSection44 from "./skillednursing/SkilledSection44";
import FAQ2 from "./skillednursing/FAQ2";


import MedicineAssistHero from "./medicineassist/MedicineAssistHero";
import MedicineAssistSection2 from "./medicineassist/MedicineAssistSection2";
import MedicineAssistSection3 from "./medicineassist/MedicineAssistSection3";
import MedicineAssistSection4 from "./medicineassist/MedicineAssistSection4";
import MedicineAssistSection5 from "./medicineassist/MedicineAssistSection5";
import FAQ3 from "./medicineassist/FAQ3";


import HomeHealthHero from "./homehealth/HomeHealthHero";
import HomeHealthsection2 from "./homehealth/HomeHealthsection2";
import FAQ4 from "./homehealth/FAQ4";


import CompanionCareHero from "./companioncare/CompanionCareHero";
import CompanionCareSection2 from "./companioncare/CompanionCareSection2";
import FAQ5 from "./companioncare/FAQ5";


import HomeMakerHero from "./homemaker/HomeMakerHero";
import HomeMakerSection2 from "./homemaker/HomeMakerSection2";
import FAQ6 from "./homemaker/FAQ6";


import RespiteCareHero from "./respitecare/RespiteCareHero";
import RespiteCareSection2 from "./respitecare/RespiteCareSection2";
import FAQ7 from "./respitecare/FAQ7.";

import TransportHero from "./transport/TransportHero";
import TransportSection2 from "./transport/TransportSection2";
import FAQ8 from "./transport/FAQ8";

import CareCoordinationHero from "./carecoordination/CareCoordinationHero";
import CareCoordinationSection2 from "./carecoordination/CareCoordinationSection2";
import FAQ9 from "./carecoordination/FAQ9";

import WhyHero from "./why/WhyHero";
import WhySection2 from "./why/WhySection2";
import WhySection3 from "./why/WhySection3";

import ReferralHero from "./referral/ReferralHero";
import ReferralSection2 from "./referral/ReferralSection2";
import ReferralSection3 from "./referral/ReferralSection3";
import ReferralSection4 from "./referral/ReferralSection4";
import ReferralSection5 from "./referral/ReferralSection5";
import ReferralSection6 from "./referral/ReferralSection6";


import CareersHero from "./careers/CareersHero";
import CareersSection2 from "./careers/CareersSection2";
import CareersSection3 from "./careers/CareersSection3";
import CareersSection4 from "./careers/CareersSection4";
import CareersSection5 from "./careers/CareersSection5";
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
                <ServicesSection2/>
                <ServicesSection3/>
                <Section7 />
                <Footer />
              </>
            }
          />

 <Route
            path="/personalizedcare"
            element={
              <>
                <ServicesDeetsHero/>
              <ServicesOverview/>
               <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ/>
               <Footer />
              </>
            }
          />


          <Route
            path="/skillednursing"
            element={
              <>
              <SkilledHero/>
              <SkilledSection2/>
               <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ2/>
               <Footer />
              </>
            }
          />

          MedicineAssistHero

 <Route
            path="/medicineassist"
            element={
              <>
              <MedicineAssistHero/>
              <MedicineAssistSection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ3/>
               <Footer />
              </>
            }
          />
          

          <Route
            path="/homehealth"
            element={
              <>
              <HomeHealthHero/>
              <HomeHealthsection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ4/>
               <Footer />
              </>
            }
          />


 <Route
            path="/companioncare"
            element={
              <>
              <CompanionCareHero/>
              <CompanionCareSection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ5/>
               <Footer />
              </>
            }
          />


          <Route
            path="/homemaker"
            element={
              <>
              <HomeMakerHero/>
            <HomeMakerSection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ6/>
               <Footer />
              </>
            }
          />


           <Route
            path="/respitecare"
            element={
              <>
              <RespiteCareHero/>
            <RespiteCareSection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ7/>
               <Footer />
              </>
            }
          />

           <Route
            path="/transport"
            element={
              <>
              <TransportHero/>
            <TransportSection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ8/>
               <Footer />
              </>
            }
          />

            <Route
            path="/carecoordination"
            element={
              <>
              <CareCoordinationHero/>
            <CareCoordinationSection2/>
              <WhyChooseHiCARES/>
               <HowItWorks/>
               <CTA/>
               <CTA2/>
               <FAQ9/>
               <Footer />
              </>
            }
          />

           <Route
            path="/why"
            element={
              <>
              <WhyHero/>
              <WhySection3/>
               <CTA/>
               <CTA2/>
               <Footer />
              </>
            }
          />

           <Route
            path="/referral"
            element={
              <>
             <ReferralHero/>
              <ReferralSection2/>
              <ReferralSection3/>
              <ReferralSection4/>
              <ReferralSection5/>
              <ReferralSection6/>
               <CTA/>
               <CTA2/>
               <Footer />
              </>
            }
          />

           <Route
            path="/careers"
            element={
              <>
            <CareersHero/>
            <CareersSection2/>
            <CareersSection3/>
            <CareersSection4/>
               <Footer />
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