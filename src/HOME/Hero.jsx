import logo from "../assets/HiCARES LOGO.jpeg";
import heroimg from "../assets/hero-img1.png";
import img from "../assets/heroimg2.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Hero(){
    const [open, setOpen] = useState(false);
return(
<section className="h-auto pb-10 ">
    <div>
        
<header className="flex items-center justify-between py-4 px-6 lg:px-20 relative z-50 bg-white">

      {/* Logo */}
      <img src={logo} alt="HiCARES Logo" className="w-[100px] lg:w-[120px]" />

      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-10 text-[17px] font-semibold">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Why Choose Us</a>
        <a href="#">Referral</a>
        <a href="#">Careers</a>
        <a href="#">Contact Us</a>
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
                <a href="#" onClick={() => setOpen(false)}>Home</a>
                <a href="#" onClick={() => setOpen(false)}>Services</a>
                <a href="#" onClick={() => setOpen(false)}>Why Choose Us</a>
                <a href="#" onClick={() => setOpen(false)}>Referral</a>
                <a href="#" onClick={() => setOpen(false)}>Careers</a>
                <a href="#" onClick={() => setOpen(false)}>Contact Us</a>
              </nav>

              <button className="mt-10 w-full bg-[#1E3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#2EC4B6] transition">
                Get Appointment
              </button>
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
    minHeight: "90vh",
  }}
>
<div className="">


<div className="flex items-center gap-3 border border-gray-100 w-[200px] lg:py-[5px] justify-center rounded-3xl font-semibold ">
    <svg className="text-white"
  width="8"
  height="8"
  viewBox="0 0 8 8"
  fill="currentColor"
>
  <circle cx="4" cy="4" r="4" />
</svg>
    <p className="text-white">Quality Care at Home</p>
</div>

<h1 className="lg:text-[55px] text-[30px] font-bold lg:w-[600px] lg:leading-[60px] leading-[40px] mt-5 text-white">Bringing Compassionate Home Care to Individuals and Families Across Minnesota</h1>
<p className="text-[16px] lg:w-[400px] font-semibold text-white mt-5">Providing personalized in-home care services that promote independence, dignity, safety, and peace of mind for individuals and families throughout Minnesota.</p>


<div className="flex lg:flex-row flex-col lg:gap-2 gap-6 mt-5">
    <button className="bg-[#1E3A5F] text-white lg:w-[180px] w-full h-[45px] rounded-xl font-bold mx-auto">Request Care</button>
    <button className="bg-white text-#1E3A5F border border-[#1E3A5F] lg:w-[180px] w-full h-[40px] rounded-xl font-bold mx-auto">Refer a Client</button>
</div>
</div>




<div className="relative">




</div>
    </div>
</section>

)
}

export default Hero;