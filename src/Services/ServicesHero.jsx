import logo from "../assets/logonew.png";
import heroimg from "../assets/hero-img1.png";
import img from "../assets/heroimg2.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
function ServicesHero(){

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
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/why">Why Choose Us</Link>
              <Link to="/referral">Referral</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
      
            {/* Desktop Button */}
            <Link to="/contact" className="hidden lg:block bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2EC4B6] transition">
             Get Appointment
            </Link>
      
      
            
      
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
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/why" onClick={() => setOpen(false)}>Why Choose Us</Link>
              <Link to="/referral" onClick={() => setOpen(false)}>Referral</Link>
               <Link to="/careers" onClick={() => setOpen(false)}>careers</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
                    </nav>
      
      
      
      <div className="mt-10 w-full bg-[#1E3A5F] text-white py-3 rounded-xl flex justify-center font-semibold hover:bg-[#2EC4B6] transition">
       <Link to="/contact" onClick={() => setOpen(false)}>Get Appointment</Link>
      </div>
                   
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </header>

<div className="pt-80 bg-[#F5F9FA] h-auto pb-40 items-center relative"  >
    <div className="absolute top-[-200px] right-[-300px]  block w-[650px] h-[650px] rounded-full border-[85px] border-black/5"></div>
<div className="absolute w-[320px] h-[320px] rounded-full bg-[rgba(14,12,10,0.03)] left-[-200px]"></div>
<div className="absolute w-[320px] h-[320px] rounded-full bg-[rgba(14,12,10,0.03)] left-[-200px] top-40"></div>

    <motion.h1 className="text-[48px] font-bold text-black flex justify-center "
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >Services</motion.h1>

    <motion.div className="flex gap-2 border border-gray-200 flex relative justify-center w-45 mx-auto rounded-full mt-5"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >
        
        <p className="text-[16px]"
         initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
        >Home</p>
        <p className="text-[16px] text-[#4F6BD6]">//</p>
        <p className="text-[16px] text-[#4F6BD6]">Services</p>
    </motion.div>
</div>




</section>



    )
}

export default ServicesHero;