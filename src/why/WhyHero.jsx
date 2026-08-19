import logo from "../assets/logonew.png";
import heroimg from "../assets/hero-img1.png";
import img from "../assets/heroimg2.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../assets/whyheroimg.jpg";
function WhyHero(){

   const whyChooseUs = [
  {
    title: "Personalized  Care Plans",
    description:
      "Care tailored to unique needs and preferences.",
    iconBg: "#E5F2E8",
    iconColor: "#4C9B68",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <circle cx="28" cy="22" r="9" stroke="#4C9B68" strokeWidth="2.5" />
        <path
          d="M11 49C11 39.6 18.6 32 28 32C37.4 32 45 39.6 45 49"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    title: "Safety & Reliability",
    description:
      "Your loved one’s safety is our top priority.",
    iconBg: "#E4F0F9",
    iconColor: "#5B8DB8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <path
          d="M32 7L51 14V28C51 41 43 51 32 57C21 51 13 41 13 28V14L32 7Z"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M23 31L29 37L42 23"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Compassionate Caregivers",
    description:
      "Trained professionals who treat every client like family.",
    iconBg: "#EEECF7",
    iconColor: "#8E86B8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <circle cx="32" cy="19" r="8" stroke="#8E86B8" strokeWidth="2.5" />
        <path
          d="M19 48C19 39.7 24.8 33 32 33C39.2 33 45 39.7 45 48"
          stroke="#8E86B8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="13" cy="29" r="5" stroke="#8E86B8" strokeWidth="2.5" />
        <circle cx="51" cy="29" r="5" stroke="#8E86B8" strokeWidth="2.5" />
      </svg>
    ),
  },

  {
    title: "Family-Centered Support",
    description:
      "We keep families informed and involved every step of the way.",
    iconBg: "#FAF2D8",
    iconColor: "#D6A52C",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <circle cx="32" cy="17" r="7" stroke="#D6A52C" strokeWidth="2.5" />
        <circle cx="14" cy="25" r="5" stroke="#D6A52C" strokeWidth="2.5" />
        <circle cx="50" cy="25" r="5" stroke="#D6A52C" strokeWidth="2.5" />
        <path
          d="M21 47C21 37.6 25.9 30 32 30C38.1 30 43 37.6 43 47"
          stroke="#D6A52C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    title: "Promoting Independence",
    description:
      "Empowering clients to live safely and confidently at home.",
    iconBg: "#E5F2E8",
    iconColor: "#4C9B68",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <path
          d="M9 30L32 10L55 30"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 27V53H49V27"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 42C32 42 24 38 24 33C24 30.5 26 29 28 29C30 29 32 31 32 31C32 31 34 29 36 29C38 29 40 30.5 40 33C40 38 32 42 32 42Z"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Built on Trust, Driven by Heart",
    description:
      "We build lasting relationships through honesty, respect, and compassion.",
    iconBg: "#E4F0F9",
    iconColor: "#5B8DB8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <path
          d="M11 30L24 17C26.8 14.2 31.2 14.2 34 17L37 20"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M53 34L40 47C37.2 49.8 32.8 49.8 30 47L27 44"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 31L29 36C30.7 37.7 33.3 37.7 35 36L45 26"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 33L35 28C33.3 26.3 30.7 26.3 29 28L19 38"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

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

        <section className="h-auto pb-10">
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
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                    <Link to="/why" onClick={() => setOpen(false)}>Why Choose Us</Link>
                    <Link to="/referral" onClick={() => setOpen(false)}>Referral</Link>
                     <Link to="/careers" onClick={() => setOpen(false)}>careers</Link>
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

<div
  className="relative z-10 min-h-screen bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url(${img2})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10 pt-10">
    <div className="max-w-[750px]">
      <motion.p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold 
      "
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  ease: "easeOut", }}
      >
        WHY HiCARES
      </motion.p>

      <motion.h1 className="text-white text-[40px] lg:text-7xl font-bold lg:leading-[70px] leading-[50px] mt-3"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.4,
  ease: "easeOut", }}
      >
       Care You Can Trust.<br/>
People Who Truly Care.
      </motion.h1>

      <motion.p className="mt-5 text-gray-200 text-lg lg:w-[500px] lg:text-xl leading-[25px]"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.6,
  ease: "easeOut", }}
      >
      At HiCARES, we go beyond providing care we build meaningful relationships, support independence, and bring peace of mind to every family we serve.
      </motion.p>

      <div className="lg:mt-5 mt-10 flex flex-col sm:flex-row gap-5">
        <motion.button className="bg-[#2EC4B6] hover:bg-white hover:text-[#1E3A5F] text-[15px] text-white font-semibold lg:w-[340px] h-[50px] rounded-3xl transition"
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
         Experience the HiCARES Difference →
        </motion.button>

     
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center flex-col lg:flex-row lg:gap-6">
  {whyChooseUs.map((item, index) => (
    <div
      key={index}
      className="rounded-2xl bg-white p-7 flex flex-col justify-center items-center "
    >
      <div
        className="w-26 h-26 rounded-full flex items-center justify-center lg:mb-5"
        style={{ backgroundColor: item.iconBg }}
      >
        {item.icon}
      </div>

      <h3 className="lg:text-[15px] text-[23px] font-semibold text-[#1E3A5F] lg:mb-3 lg:w-[120px] text-center">
        {item.title}
      </h3>

      <p className="text-[#334E68] lg:text-[12px] text-[18px] leading-relaxed lg:w-[130px] text-center">
        {item.description}
      </p>
    </div>
  ))}
</div>

        </section>

    )
}

export default WhyHero;