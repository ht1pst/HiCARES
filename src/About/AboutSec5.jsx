import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/aboutsec5img.jpg";
import { useEffect, useState } from "react";
function AboutSec5(){
    return(
        <section className="px-[20px] lg:px-0">

            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-30 gap-10 h-auto pt-20 pb-10">

                <div>
       <motion.div className="flex items-center gap-3 border border-gray-300 w-[120px] py-[5px] justify-center rounded-3xl font-semibold "
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
    <p className="text-gray-700 text-[13px]">How We Work</p>
</motion.div>   

 <motion.h1 className="lg:text-[50px] font-bold text-[33px]  lg:w-[650px] lg:leading-[70px] leading-[40px] mt-5"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
 >How We Working Deliver Exceptional Healthcare</motion.h1>


 <motion.div
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
 >
    <img src={img} alt="" className="w-[600px] rounded-xl object-cover mt-5" />
</motion.div>

    </div>



<div className="flex flex-col gap-15">

   <div className="flex flex-col lg:flex-row gap-5">

    <motion.p className="text-[30px] bg-[#1E3A5F] h-[100px] w-[100px] flex justify-center items-center rounded-full text-white font-bold"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >98%</motion.p>


    <div>


<motion.h1 className="text-[24px] font-bold"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Client Satisfaction</motion.h1>

<motion.p className="text-[16px] lg:w-[370px]  mt-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Delivering compassionate, personalized home care that helps individuals feel safe, respected, and supported every day.</motion.p>

    </div>

    </div> 


 <div className="flex flex-col lg:flex-row gap-5">

    <motion.p className="text-[30px] bg-[#1E3A5F] h-[100px] w-[100px] flex justify-center items-center rounded-full text-white font-bold"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >100%</motion.p>
    <div>
<motion.h1 className="text-[24px] font-bold"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Personalized Care Plans</motion.h1>


<motion.p className="text-[16px] lg:w-[370px]  mt-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Every client receives an individualized care plan designed around their unique needs, preferences, and lifestyle.</motion.p>

    </div>

    </div> 


 <div className="flex flex-col lg:flex-row gap-5">

    <motion.p className="text-[30px] bg-[#1E3A5F] h-[100px] w-[100px] flex justify-center items-center rounded-full text-white font-bold"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >24/7</motion.p>
    <div>
<motion.h1 className="text-[24px] font-bold"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Compassionate Care</motion.h1>

<motion.p className="text-[16px] lg:w-[370px]  mt-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Providing respectful, person-centered support that promotes dignity, comfort, and independence at home.</motion.p>

    </div>

    </div> 


</div>

    </div>
        </section>
    )
}

export default AboutSec5;