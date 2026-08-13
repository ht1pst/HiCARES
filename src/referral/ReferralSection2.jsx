import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function ReferralSection2(){
    return(
        <section className="h-auto pb-10 px-[20px]">
            <div className="flex flex-col justify-center lg:items-center">

                <motion.p className="mt-4 text-[#2EC4B6] font-semibold"
                 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >WHY REFER?</motion.p>

                <motion.h1 className=" mt-4 text-[#1E3A5F] text-[30px] lg:text-4xl font-bold leading-[35px]"
                 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >A Simple Referral Can Make a Difference</motion.h1>


<div className="border hidden lg:block border-2 border-[#2EC4B6] w-[100px] mt-3"></div>

                <motion.p className=" mt-3 text-[#12243b]  #12243b text-md leading-[25px] lg:w-[800px] lg:text-center"
                 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                >Whether you're a family member, healthcare professional, community organization, or someone who simply knows a person in need of support, your referral can help connect them with trusted home care.</motion.p>
            </div>

<div className=" flex flex-col lg:flex-row justify-center lg:gap-10 gap-15 mt-20">

<motion.div className="lg:w-[360px] bg-[#fcfdfc] #fcfdfc  flex flex-col items-center pt-24  px-[20px] py-[10px]  shadow-[0_10px_30px_rgba(0,0,0,0.18)] shadow-xl relative h-[200px] rounded-xl"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="w-26 h-26 rounded-full bg-[#EEECF7] flex items-center justify-center absolute top-[-20px]">
  <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <path
      d="M32 52C32 52 11 39 11 24C11 17.5 16 13 22 13C27 13 30 16 32 19C34 16 37 13 42 13C48 13 53 17.5 53 24C53 39 32 52 32 52Z"
      stroke="#8E86B8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M23 32L29 38L41 25"
      stroke="#8E86B8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

    <h1 className="text-[#1E3A5F] font-bold text-[25px] text-center">Compassionate Care</h1>
    <p className="text-[#12243b] text-[15px] text-center">Care delivered with dignity, kindness, and understanding.</p>
</motion.div>

<motion.div className="lg:w-[360px] bg-[#fcfdfc] flex flex-col items-center pt-24  px-[20px] py-[10px]  shadow-[0_10px_30px_rgba(0,0,0,0.18)] shadow-xl relative h-[200px] rounded-xl"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

  <div className="w-26 h-26 rounded-full bg-[#E5F2E8] #ebf3ed flex items-center justify-center absolute top-[-20px]">
  <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <circle
      cx="32"
      cy="20"
      r="8"
      stroke="#4C9B68"
      strokeWidth="2.5"
    />
    <path
      d="M18 49C18 39.6 24.3 32 32 32C39.7 32 46 39.6 46 49"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M43 37V49"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M37 43H49"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>

    <h1 className="text-[#1E3A5F] font-bold text-[25px] text-center">Personalized Support</h1>
    <p className="text-[#12243b] text-[15px] text-center">Support tailored to each client's unique needs and preferences.</p>
</motion.div>


<motion.div className="lg:w-[360px] bg-[#fcfdfc] flex flex-col items-center pt-24  px-[20px] py-[10px]  shadow-[0_10px_30px_rgba(0,0,0,0.18)] shadow-xl relative h-[200px] rounded-xl"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="w-26 h-26 rounded-full bg-[#E4F0F9] flex items-center justify-center absolute top-[-20px]">
    <svg viewBox="0 0 64 64" fill="none" className="w-19 h-19">
    <path
      d="M32 7L51 14V28C51 41 43 51 32 57C21 51 13 41 13 28V14L32 7Z"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 32L29 39L43 24"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

    <h1 className="text-[#1E3A5F] font-bold text-[25px] text-center">Peace of Mind</h1>
    <p className="text-[#12243b] text-[15px] text-center">Reliable care that helps families feel confident and reassured.</p>
</motion.div>

</div>

        </section>
    )
}

export default ReferralSection2