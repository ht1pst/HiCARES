import img from "../assets/ctaimg.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
function Section82(){
const navigate = useNavigate();
    return(
<section className="hidden lg:block">

<div className="flex justify-center gap-20 h-auto pb-10 pt-20">

<div>
<motion.h1 className="text-[48px] leading-[65px] font-bold w-[600px]"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Compassionate Care That Feels Like Family</motion.h1>
<motion.p className="text-[16px] w-[500px] font-bold text-gray-500"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Receive personalized in-home care from experienced professionals dedicated to helping you or your loved one live safely, comfortably, and independently.</motion.p>

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
  onClick={() => navigate("/about")}
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
      <path
        d="M12 28L32 12L52 28V50H38V38H26V50H12V28Z"
        fill="#0F2D52"
      />
      <path
        d="M46 18
           C46 15.8 47.8 14 50 14
           C52.2 14 54 15.8 54 18
           C54 23 50 26 50 26
           C50 26 46 23 46 18Z"
        fill="#3AB7A5"
      />
    </svg>
  </div>

  <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
    Personalized <br />
    Care Plans
  </p>
</motion.div>

<motion.div className="flex flex-col items-center"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
    <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="22" cy="18" r="6" fill="#0F2D52"/>
  <circle cx="42" cy="18" r="6" fill="#3AB7A5"/>

  <path d="M16 48V34C16 30 19 28 22 28C25 28 28 30 28 34V48"
        stroke="#0F2D52" stroke-width="4" stroke-linecap="round"/>

  <path d="M36 48V34C36 30 39 28 42 28C45 28 48 30 48 34V48"
        stroke="#3AB7A5" stroke-width="4" stroke-linecap="round"/>

  <path d="M28 36L36 34"
        stroke="#3AB7A5" stroke-width="4" stroke-linecap="round"/>
</svg>
  </div>

  <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
    Compassionate <br />
    Caregivers
  </p>
</motion.div>

<motion.div className="flex flex-col items-center"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
   <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <path d="M32 10L48 16V30C48 41 40 49 32 54C24 49 16 41 16 30V16L32 10Z"
        fill="#0F2D52"/>
  <path d="M24 31L30 37L41 25"
        stroke="#3AB7A5"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>
  </div>

  <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
    Trusted &  <br />
    Reliable
  </p>
</motion.div>

<motion.div className="flex flex-col items-center"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center">
   <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="20" cy="20" r="5" fill="#0F2D52"/>
  <circle cx="44" cy="20" r="5" fill="#0F2D52"/>
  <circle cx="32" cy="16" r="4" fill="#3AB7A5"/>

  <path d="M16 46V34C16 31 18 29 20 29C22 29 24 31 24 34V46"
        stroke="#0F2D52"
        stroke-width="4"
        stroke-linecap="round"/>

  <path d="M40 46V34C40 31 42 29 44 29C46 29 48 31 48 34V46"
        stroke="#0F2D52"
        stroke-width="4"
        stroke-linecap="round"/>

  <path d="M28 42
           C28 39.8 29.8 38 32 38
           C34.2 38 36 39.8 36 42
           C36 46 32 49 32 49
           C32 49 28 46 28 42Z"
        fill="#3AB7A5"/>
</svg>
  </div>

  <p className="mt-3 text-center text-[16px] font-semibold text-gray-600 leading-5">
    Family-Focused<br />
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

export default Section82