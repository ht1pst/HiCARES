import img from "../assets/ctaimg.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function SkilledSection4(){
    return(
   <section className="hidden lg:block">
        
        <div className="flex justify-center gap-20 h-auto pb-10 pt-20">
        
        <div>
        <motion.h1 className="text-[48px] leading-[55px] font-bold w-[600px]"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        >Skilled Nursing Care You Can Trust</motion.h1>
        <motion.p className="text-[16px] w-[500px] font-bold text-gray-500"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }}    // slides up into view
          viewport={{ once: true, amount: 0.3 }} // animate only the first time
          transition={{ duration: 0.8, ease: "easeOut" }}
        > Our licensed nurses provide professional medical care in the comfort of home, helping clients recover safely, manage ongoing health conditions, and maintain their independence through personalized, physician-directed care.</motion.p>
        
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
  <rect x="26" y="12" width="12" height="40" rx="2" fill="#0F2D52"/>
  <rect x="12" y="26" width="40" height="12" rx="2" fill="#0F2D52"/>

  <path
    d="M46 18
       C46 15.8 47.8 14 50 14
       C52.2 14 54 15.8 54 18
       C54 22 50 25 50 25
       C50 25 46 22 46 18Z"
    fill="#2EC4B6"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
 Professional <br />
Nursing Care
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
  <circle
    cx="32"
    cy="32"
    r="22"
    stroke="#0F2D52"
    strokeWidth="4"
  />

  <path
    d="M16 32H24L28 24L34 40L38 30H48"
    stroke="#2EC4B6"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
          Health <br />
Monitoring
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
    y="12"
    width="32"
    height="40"
    rx="4"
    fill="#0F2D52"
  />

  <rect
    x="24"
    y="8"
    width="16"
    height="8"
    rx="3"
    fill="#2EC4B6"
  />

  <rect x="29" y="24" width="6" height="18" fill="white"/>
  <rect x="23" y="30" width="18" height="6" fill="white"/>
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
           Personalized <br />
Treatment
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
    fill="#0F2D52"
  />

  <path
    d="M24 32L30 38L40 26"
    stroke="#2EC4B6"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </div>
        
          <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
          Trusted <br />
Support
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

export default SkilledSection4