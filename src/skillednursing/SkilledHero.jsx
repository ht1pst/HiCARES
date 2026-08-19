import logo from "../assets/logonew.png";
import heroimg from "../assets/hero-img1.png";
import img from "../assets/heroimg2.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../assets/skilledheroimg.webp";
function SkilledHero(){
     const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    return(

        <section>
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

<div
  className="relative z-10 min-h-screen bg-cover bg-center flex items-center pt-20"
  style={{ backgroundImage: `url(${img2})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10">
    <div className="max-w-[750px]">
      <motion.p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold mb-4
      "
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  ease: "easeOut", }}
      >
        HiCARES Services
      </motion.p>

      <motion.h1 className="text-white text-[40px] lg:text-7xl font-bold leading-tight lg:leading-[90px]"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.4,
  ease: "easeOut", }}
      >
       Skilled Nursing Services
      </motion.h1>

      <motion.p className="mt-5 text-gray-200 text-lg lg:text-xl leading-7"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.6,
  ease: "easeOut", }}
      >
       Our licensed nurses deliver professional, compassionate medical care in the comfort of your home, providing personalized support, health monitoring, and treatment tailored to your physician's orders and individual care needs.
      </motion.p>

      <div className="mt-10 flex flex-col sm:flex-row gap-5">
        <motion.button className="bg-[#2EC4B6] hover:bg-white hover:text-[#1E3A5F] text-white font-semibold px-8 py-4 rounded-xl transition"
         initial={{ opacity: 0, y: 40, rotate: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    delay: 1.5,
    ease: "easeOut",
  }}
  animate={{
    rotate: [0, -4, 4, -4, 4, 0],
  }}
  style={{ transformOrigin: "center center" }}
    onClick={() => navigate("/contact")}
        >
          Request Care
        </motion.button>

        <motion.button className="border border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-4 rounded-xl transition"
         initial={{ opacity: 0, y: 40, rotate: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    delay: 1.5,
    ease: "easeOut",
  }}
  animate={{
    rotate: [0, -4, 4, -4, 4, 0],
  }}
  style={{ transformOrigin: "center center" }}
    onClick={() => navigate("/contact")}
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  </div>
</div>

        </section>

    )
}

export default SkilledHero;