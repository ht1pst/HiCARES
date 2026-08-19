import hour from "../assets/24.png";
import clockk from "../assets/clock2.png";
import doctor from "../assets/doctor.png";
import customer from "../assets/customer.png";
import img from "../assets/section4img.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
function Section4(){
    const navigate = useNavigate();
    return(
        <section className="h-auto pb-10 lg:pt-20 pt-10 bg-[#F5F9FA] px-[20px]">

<div className="flex flex-col lg:flex-row justify-center gap-15 items-center">

<div>
     <motion.div className="flex items-center gap-3 border border-gray-300 w-[160px] py-[5px] justify-center rounded-3xl font-semibold "
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
     >
    <svg
  width="8"
  height="8"
  viewBox="0 0 8 8"
  fill="currentColor"
>
  <circle cx="4" cy="4" r="4" />
</svg>
    <p className="text-gray-700 text-[13px]">Why Choose us</p>
</motion.div>

<motion.h1 className="lg:text-[48px] text-[30px] leading-[40px] lg:leading-[50px] font-bold lg:w-[600px] mt-5 lg:mt-5"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Experience Compassionate Care at Home</motion.h1>


<motion.p className="text-[16px] lg:w-[500px]  text-gray-500 mt-5 lg:mt-0"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Receive compassionate, personalized home care services designed to support your independence, comfort, and overall well-being with care you can trust.</motion.p>

<div className="mt-5 flex">
       <motion.button className="bg-[#1E3A5F] text-white w-[120px] h-[40px] rounded-xl font-bold"
       initial={{ opacity: 0, y: 40 }}
  whileInView={{
    opacity: 1,
    y: 0,
    rotate: [0, -4, 4, -4, 4, 0],
  }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    opacity: { duration: 0.8 },
    y: { duration: 0.8, ease: "easeOut" },
    rotate: {
      delay: 0.8,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    },
  }}
  style={{ transformOrigin: "center center" }}
    onClick={() => navigate("/why")}
       >Learn More</motion.button>

    </div>
</div>


<motion.div className=""
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    <img src={img} alt="" className="lg:w-170 rounded-xl border border-5 border-white" />
</motion.div>

</div>


<div className="flex flex-col lg:flex-row justify-center gap-5 mt-20">

<motion.div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#DFF7F2] lg:w-[320px] mx-auto"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={clockk} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">Quick Response</h1>
<p className="text-[17px] mx-auto text-center mt-4 text-gray-600">Receive top-quality medical care advanced treatment</p>

</motion.div>


<motion.div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#FFF4D6] lg:w-[320px] mx-auto"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={customer} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">Customer Focus</h1>
<p className="text-[17px] mx-auto text-center mt-4 text-gray-600">Patients first personalized and compassionate care</p>

</motion.div>


<motion.div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#FFE8DE] lg:w-[320px] mx-auto"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={doctor} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">50+ Expert Doctors</h1>
<p className="text-[17px] mx-auto text-center mt-4 text-gray-600">Experience doctor providing specialized quality</p>

</motion.div>


<motion.div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#F2E8FF] lg:w-[320px] mx-auto"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={hour} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">24/7 Instant Support</h1>
<p className="text-[17px] mx-auto text-center mt-4">Round-the-clock support for your healthcare</p>

</motion.div>




</div>
        </section>
    )
}

export default Section4
