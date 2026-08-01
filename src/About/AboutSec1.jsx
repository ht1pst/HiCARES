import logo from "../assets/logonew.png";
import heroimg from "../assets/hero-img1.png";
import img from "../assets/heroimg2.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
function AboutSec1(){
const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return(
       <section className="overflow-hidden">



      <header  className={`
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between
          py-2 px-6 lg:px-20
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-md shadow-md"
              : "bg-white"
          }
        `}>
      
            {/* Logo */}
            <img src={logo} alt="HiCARES Logo" className="w-[150px] lg:w-[120px]" />
      
            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-10 text-[17px] font-semibold">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Services">Services</Link>
              <Link to="/Why">Why Choose Us</Link>
              <Link to="/Referral">Referral</Link>
              <Link to="/Contact">Contact Us</Link>
            </nav>
      
            {/* Desktop Button */}
            <button className="hidden lg:block bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2EC4B6] transition">
              Get Appointment
            </button>
      
            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-[#1E3A5F] text-3xl"
            >
              ☰
            </button>
      
            {/* Mobile Menu */}
            <AnimatePresence>
              {open && (
                <>
                  {/* Overlay */}
                  <motion.div
                    className="fixed inset-0 bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                  />
      
                  {/* Sliding Drawer */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.4 }}
                    className="fixed top-0 left-0 h-screen w-[280px] bg-white shadow-xl p-8"
                  >
                    <div className="flex justify-between items-center mb-10">
                      <img
                        src={logo}
                        alt="HiCARES Logo"
                        className="w-[90px]"
                      />
      
                      <button
                        onClick={() => setOpen(false)}
                        className="text-3xl text-[#1E3A5F]"
                      >
                        ×
                      </button>
                    </div>
      
                    <nav className="flex flex-col gap-6 text-lg font-semibold">
                      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                       <Link to="/Services" onClick={() => setOpen(false)}>Services</Link>
                      <Link to="/Why" onClick={() => setOpen(false)}>Why Choose Us</Link>
                      <Link to="/Referral" onClick={() => setOpen(false)}>Referral</Link>
                       <Link to="/Contact" onClick={() => setOpen(false)}>Contact Us</Link>
                    </nav>
      
                    <button className="mt-10 w-full bg-[#1E3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#2EC4B6] transition">
                      Get Appointment
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </header>

<div className="pt-80 bg-[#F5F9FA] h-auto pb-40 items-center relative"  >
    <div className="absolute top-[-200px] right-[-300px]  block w-[650px] h-[650px] rounded-full border-[85px] border-black/5"></div>
<div className="absolute w-[320px] h-[320px] rounded-full bg-[rgba(14,12,10,0.03)] left-[-200px]"></div>
<div className="absolute w-[320px] h-[320px] rounded-full bg-[rgba(14,12,10,0.03)] left-[-200px] top-40"></div>

    <h1 className="text-[48px] font-bold text-black flex justify-center ">About us</h1>

    <div className="flex gap-2 border border-gray-200 flex relative justify-center w-45 mx-auto rounded-full mt-5">
        
        <p className="text-[16px]">Home</p>
        <p className="text-[16px] text-[#4F6BD6]">//</p>
        <p className="text-[16px] text-[#4F6BD6]">About Us</p>
    </div>
</div>

       </section>
    )
}

export default AboutSec1;