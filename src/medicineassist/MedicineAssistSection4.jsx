import img from "../assets/ctaimg.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function MedicineAssistSection5(){
    return(
   <section className="hidden lg:block">
        
        <div className="flex justify-center gap-20 h-auto pb-10 pt-20">
        
        <div>
        <motion.h1 className="text-[48px] leading-[55px] font-bold w-[600px]"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        > Safe Medication Support Every Day</motion.h1>
        <motion.p className="text-[16px] w-[500px] font-bold text-gray-500"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >  Our caregivers provide reliable medication reminders and assistance,
  helping clients take medications safely and on schedule while supporting
  physician instructions, promoting wellness, and giving families added
  confidence and peace of mind.</motion.p>
        
        <div className="gap-3 flex mt-7">
         <motion.button className="bg-[#1E3A5F] text-white w-[180px] h-[40px] rounded-full font-bold"
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
         >Request Care</motion.button>
        
        
         <motion.button className="border border-[#7fe7db] text-[#7fe7db] w-[180px] h-[40px] rounded-full font-bold"
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
         >Contact</motion.button>
        </div>
        
        <div className="flex gap-5 mt-10">
        
        <motion.div className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
       <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  <rect x="18" y="14" width="28" height="36" rx="4" fill="#1E3A5F"/>
  <rect x="24" y="8" width="16" height="8" rx="3" fill="#2EC4B6"/>

  <path
    d="M32 24V32L38 36"
    stroke="white"
    strokeWidth="4"
    strokeLinecap="round"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
 Medication <br />
Reminders
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
        <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  <rect
    x="16"
    y="18"
    width="32"
    height="24"
    rx="12"
    fill="#1E3A5F"
  />

  <line
    x1="32"
    y1="18"
    x2="32"
    y2="42"
    stroke="white"
    strokeWidth="4"
  />

  <path
    d="M44 18L50 12"
    stroke="#2EC4B6"
    strokeWidth="4"
    strokeLinecap="round"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
         Medication <br />
Assistance
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
   <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  <rect x="18" y="10" width="28" height="40" rx="4" fill="#1E3A5F"/>

  <rect
    x="24"
    y="18"
    width="16"
    height="3"
    fill="white"
  />

  <rect
    x="24"
    y="26"
    width="12"
    height="3"
    fill="white"
  />

  <path
    d="M26 40L30 44L38 34"
    stroke="#2EC4B6"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
           Personalized <br />
Medication Plans
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
      <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  <path
    d="M32 10L48 16V30C48 41 40 49 32 54C24 49 16 41 16 30V16L32 10Z"
    fill="#1E3A5F"
  />

  <path
    d="M26 31L31 36L40 26"
    stroke="#2EC4B6"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
      Peace of <br />
Mind
          </p>
        </motion.div>
        
        </div>
        
        </div>
        
        
        <motion.div
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <img src={img} alt=""  className="object-cover w-[600px] rounded-xl border border-5 border-gray-200"/>
        </motion.div>
        
        </div>
        
                </section>
    )
}

export default MedicineAssistSection5