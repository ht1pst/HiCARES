import logo from "../assets/logonew.png";
import heroimg from "../assets/hero-img1.png";
import img from "../assets/heroimg2.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
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
<section className="lg:h-screen pb-10 h-auto ">
    <div>
        
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

    </div>


  <div
  className="relative flex lg:px-[50px] lg:items-center pt-[100px] bg-cover bg-center bg-no-repeat px-[20px]"
  style={{
    backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  }}

  

>
<div className="pt-10">


<motion.div className="flex items-center gap-3 border border-gray-100 w-[200px] lg:py-[5px] justify-center rounded-3xl font-semibold "
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    <svg className="text-white"
  width="8"
  height="8"
  viewBox="0 0 8 8"
  fill="currentColor"
>
  <circle cx="4" cy="4" r="4" />
</svg>
    <p className="text-white">Quality Care at Home</p>
</motion.div>

<motion.h1 className="lg:text-[55px] text-[30px] font-bold lg:w-[600px] lg:leading-[60px] leading-[40px] mt-5 text-white"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.4,
  ease: "easeOut", }}
>Bringing Compassionate Home Care to Individuals and Families Across Minnesota</motion.h1>
<motion.p className="text-[16px] lg:w-[400px]  text-white mt-5 font-thin"
 style={{
    fontWeight: 500,
  }}

initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.6,
  ease: "easeOut", }}
>Providing personalized in-home care services that promote independence, dignity, safety, and peace of mind for individuals and families throughout Minnesota.</motion.p>


<div className="flex lg:flex-row flex-col lg:gap-2 gap-6 mt-5">
  <motion.button
  className="bg-[#1E3A5F] text-white lg:w-[180px] w-full h-[45px] rounded-xl font-bold lg:mx-0 mx-auto"
  initial={{ opacity: 0, y: 40, rotate: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    delay: 1,
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

    <motion.button className="bg-white text-#1E3A5F border border-[#1E3A5F] lg:w-[180px] w-full h-[40px] rounded-xl font-bold lg:mx-0 mx-auto"
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
onClick={() => navigate("/referral")}
    >Refer a Client</motion.button>
</div>
</div>




<div className="relative">




</div>
    </div>
</section>

)
}

export default Hero;