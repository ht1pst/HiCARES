import logo from "../assets/logonew.png";
import heroimg from "../assets/hero-img1.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/aboutsec3img.jpg";
function AboutSec3(){
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
    <section className="bg-[#F5F9FA] pt-10 h-auto pb-10 px-[20px]">

<header  className={`
    fixed top-0 left-0 w-full z-50
    flex items-center justify-between
    py-4 px-6 lg:px-20
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
        <Link to="/contact">Contact Us</Link>
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
                 <Link to="/about">About</Link>
                <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                <Link to="/why" onClick={() => setOpen(false)}>Why Choose Us</Link>
                <Link to="/referral" onClick={() => setOpen(false)}>Referral</Link>
                 <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
              </nav>

              <button className="mt-10 w-full bg-[#1E3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#2EC4B6] transition">
                Get Appointment
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>

        <div className="hidden">
            <motion.h1 className="text-[48px] font-bold flex justify-center"
              initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
            > WHO WE ARE </motion.h1>

            <motion.p className="text-gray-500 text-[25px] w-[550px] text-center flex mx-auto"
             initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
            >Compassionate, Personalized Home Care for You and Your Loved Ones </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 items-center">

<div>

<div className="relative">
   <div className="absolute left-[-370px] top-1/2 -translate-y-1/2 hidden lg:block">
  <h2 className="whitespace-nowrap text-[68px] font-bold text-gray-200 rotate-[-90deg] ">
    Personalized Care
  </h2>
</div>
<motion.div className="flex items-center gap-3 border border-gray-300 w-[200px] lg:py-[5px] justify-center rounded-3xl font-semibold "
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    <svg className="text-black"
  width="8"
  height="8"
  viewBox="0 0 8 8"
  fill="currentColor"
>
  <circle cx="4" cy="4" r="4" />
</svg>
    <p className="text-black">Quality Care at Home</p>
</motion.div>

     <motion.h1 className="text-[38px] font-bold mt-4 "
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
     > WHO WE ARE </motion.h1>
    <motion.p className="font-[16px] text-gray-500 lg:w-[520px]"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >HiCARES LLC is a Minnesota licensed Comprehensive Home Care agency dedicated to providing compassionate, dependable, and personalized in-home care services. Our mission is to help individuals remain safe, comfortable, and independent while receiving high-quality care in the comfort of their own homes.</motion.p>

    <motion.p className="font-[16px] text-gray-500 lg:w-[520px] mt-4"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >We believe every individual deserves to be treated with dignity, respect, compassion, and professionalism. Our experienced caregivers work closely with clients, families, physicians, hospitals, and case managers to develop individualized care plans that support each client’s health, independence, and quality of life.</motion.p>

    <motion.p className="font-[16px] text-gray-500 lg:w-[520px] mt-4"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >Whether a client requires temporary assistance following an illness or surgery, or ongoing support with daily living activities, HiCARES LLC is committed to delivering exceptional care with integrity and excellence.
</motion.p>
</div>
</div>
<div>
    <img src={img} alt="" className="object-cover lg:h-[600px] h-[400px] w-[500px] rounded-xl" />
</div>

        </div>
    </section>
)

}

export default AboutSec3