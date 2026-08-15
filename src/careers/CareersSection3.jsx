import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CareersSection3(){
    return(
        <section className="h-auto py-10 px-[20px] bg-[#f5fafa] #f5fafa">
             <div className="flex flex-col justify-center items-center">

<p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold text-sm">
  FIND YOUR PLACE AT HiCARES
</p>

                <motion.h1 className=" mt-3 text-[#1E3A5F] text-[30px] lg:text-4xl font-bold leading-[40px] text-center "
                initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >Positions We Hire For</motion.h1>
<div className="border border-2 border-[#2EC4B6] w-[100px] mt-3 "></div>

                
            </div>


            <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 mt-10">

<motion.div className="border px-[20px] py-[10px] mx-auto lg:mx-0 w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
  <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
  <circle
    cx="32"
    cy="32"
    r="22"
    stroke="#2EC4B6"
    strokeWidth="2.5"
  />

  <path
    d="M32 19V45"
    stroke="#2EC4B6"
    strokeWidth="3"
    strokeLinecap="round"
  />

  <path
    d="M19 32H45"
    stroke="#2EC4B6"
    strokeWidth="3"
    strokeLinecap="round"
  />

  <path
    d="M25 14C27 12 29.5 11 32 11C34.5 11 37 12 39 14"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />
</svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Registered Nurses</h1>
</motion.div>

<motion.div className="border px-[20px] py-[10px] mx-auto lg:mx-0 w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
  <path
    d="M18 14V27C18 35 23.5 40 32 40C40.5 40 46 35 46 27V14"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <path
    d="M13 14H23"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <path
    d="M41 14H51"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <path
    d="M32 40V47C32 51 35 53 39 53H42C47 53 51 49 51 44"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <circle
    cx="51"
    cy="42"
    r="5"
    stroke="#2EC4B6"
    strokeWidth="2.5"
  />
</svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Licensed Practical Nurses</h1>
</motion.div>


<motion.div className="border px-[20px] py-[10px] mx-auto lg:mx-0 w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
  <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
  <path
    d="M10 30L32 12L54 30"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M16 27V51H48V27"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinejoin="round"
  />

  <circle
    cx="32"
    cy="29"
    r="5"
    stroke="#2EC4B6"
    strokeWidth="2.5"
  />

  <path
    d="M24 45C24 39.5 27.5 36 32 36C36.5 36 40 39.5 40 45"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />
</svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center ">Home Health Aides</h1>
</motion.div>


<motion.div className="border px-[20px] py-[10px] mx-auto lg:mx-0 w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
  <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
  <path
    d="M12 35L20 43C22 45 25 45 27 43L34 36"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M52 35L44 43C42 45 39 45 37 43L30 36"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M20 43L27 50C29 52 32 52 34 50L40 44"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M24 28L29 23C31 21 34 21 36 23L42 29"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Personal Care Assistants</h1>
</motion.div>


<motion.div className="border px-[20px] py-[10px] mx-auto lg:mx-0 w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
   <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
  <path
    d="M10 30L32 12L54 30"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M16 27V51H48V27"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinejoin="round"
  />

  <path
    d="M26 51V38H38V51"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinejoin="round"
  />

  <path
    d="M43 20L48 15"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <path
    d="M48 21L53 16"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />
</svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Homemakers</h1>
</motion.div>



<motion.div className="border px-[20px] py-[10px] mx-auto lg:mx-0 w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
 <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
  <rect
    x="16"
    y="13"
    width="32"
    height="40"
    rx="3"
    stroke="#2EC4B6"
    strokeWidth="2.5"
  />

  <rect
    x="25"
    y="9"
    width="14"
    height="8"
    rx="3"
    stroke="#2EC4B6"
    strokeWidth="2.5"
  />

  <path
    d="M24 27H40"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <path
    d="M24 35H40"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  <path
    d="M24 43H34"
    stroke="#2EC4B6"
    strokeWidth="2.5"
    strokeLinecap="round"
  />
</svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Administrative Staff</h1>
</motion.div>

            </div>

        </section>
    )
}

export default CareersSection3