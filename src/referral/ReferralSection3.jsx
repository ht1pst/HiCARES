import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ReferralSection3(){
    return(
        <section className="h-auto pb-10 px-[20px]">
             <div className="flex flex-col justify-center items-center">
                <motion.h1 className=" mt-4 text-[#1E3A5F] text-[30px] lg:text-4xl font-bold leading-[40px] text-center "
                initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >Who Can Benefit From HiCARES?</motion.h1>
<div className="border border-2 border-[#2EC4B6] w-[100px] mt-3 "></div>

                <motion.p className=" mt-3 text-[#12243b]  #12243b text-md leading-[25px] lg:w-[800px] text-center"
                initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >You can refer someone who may need help with:</motion.p>
            </div>


            <div className="flex flex-col lg:flex-row justify-center gap-5 mt-10">

<motion.div className="border px-[20px] py-[10px] mx-auto w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <circle cx="32" cy="18" r="8" stroke="#2EC4B6" strokeWidth="2.5"/>
    <path
      d="M18 49C18 39.6 24.3 32 32 32C39.7 32 46 39.6 46 49"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M25 25C27 27 29.5 28 32 28C34.5 28 37 27 39 25"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Personal Care and Daily activities</h1>
</motion.div>

<motion.div className="border px-[20px] py-[10px] mx-auto w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <rect
      x="14"
      y="14"
      width="36"
      height="36"
      rx="5"
      stroke="#5B8DB8"
      strokeWidth="2.5"
    />
    <path
      d="M22 25H42"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M22 33H42"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M22 41H34"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M39 38V46"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M35 42H43"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Medication Management</h1>
</motion.div>


<motion.div className="border px-[20px] py-[10px] mx-auto w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <path
      d="M12 30L32 13L52 30"
      stroke="#D6A52C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 27V51H47V27"
      stroke="#D6A52C"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M24 51V37H40V51"
      stroke="#D6A52C"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M23 33C25 30 29 30 32 33C35 30 39 30 41 33"
      stroke="#D6A52C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center mt-5">Respite Care</h1>
</motion.div>


<motion.div className="border px-[20px] py-[10px] mx-auto w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <path
      d="M9 29L32 10L55 29"
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
      d="M25 53V38H39V53"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 33H22.01"
      stroke="#4C9B68"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M42 33H42.01"
      stroke="#4C9B68"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Homemaking and household support</h1>
</motion.div>


<motion.div className="border px-[20px] py-[10px] mx-auto w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <circle cx="22" cy="22" r="7" stroke="#9275A8" strokeWidth="2.5"/>
    <circle cx="42" cy="22" r="7" stroke="#9275A8" strokeWidth="2.5"/>
    <path
      d="M9 48C9 39.7 14.7 33 22 33C29.3 33 35 39.7 35 48"
      stroke="#9275A8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M29 48C29 39.7 34.7 33 42 33C49.3 33 55 39.7 55 48"
      stroke="#9275A8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 18V30"
      stroke="#9275A8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M26 24H38"
      stroke="#9275A8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Maintaining independence at home</h1>
</motion.div>



<motion.div className="border px-[20px] py-[10px] mx-auto w-[100%] lg:w-[180px] rounded-xl border-gray-100 border-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

<div className="flex justify-center">
   <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <path
      d="M8 30L32 10L56 30"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 27V53H50V27"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M25 53V36H39V53"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M32 23C32 23 26 27 26 31C26 33.5 28 35 30 35C31 35 32 34 32 34C32 34 33 35 34 35C36 35 38 33.5 38 31C38 27 32 23 32 23Z"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
</div>
    <h1 className="text-[#1E3A5F] font-bold text-center">Ongoing companionship and assistance</h1>
</motion.div>

            </div>

        </section>
    )
}

export default ReferralSection3