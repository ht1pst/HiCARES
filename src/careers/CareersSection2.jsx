import img from "../assets/careerssection2img.jpg";
import img4 from "../assets/team-img1.jpg";
import img2 from "../assets/healthcare.png";
import img3 from "../assets/protection.png";
import clock from "../assets/clock.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function CareersSection2() {
  return (
    <section className="h-auto pb-10 lg:pt-20 pt-10 px-[20px]">
      <div className="flex flex-col flex-col-reverse lg:flex-row relative justify-center lg:items-center lg:gap-25 gap-10">
        <div className="lg:w-150 relative">

<motion.div 
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
            <img src={img} alt="" className="lg:w-150 rounded-xl border border-5 border-gray-200" />
            </motion.div>
        </div>



        <div className="">
            <div>
             <motion.div className="flex items-center gap-3 border border-gray-300 w-[220px] py-[5px] justify-center rounded-3xl  "
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
    <p className="text-gray-700 text-[13px]">JOIN THE HiCARES TEAM </p>
</motion.div>
           
           </div>
           <motion.h1 className="lg:text-[50px] font-bold text-[33px]  lg:w-[650px] lg:leading-[60px] leading-[40px] mt-5"
           initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
           >Make a Difference Through Compassionate Care</motion.h1>


           <motion.p className="text-[16px] lg:w-[700px]  text-gray-600 mt-5"
           initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
           >At HiCARES LLC, we believe great care starts with people who genuinely care about others. We are looking for compassionate, dependable, and dedicated professionals who want to make a meaningful difference in the lives of individuals and families.</motion.p>

<div className="flex flex-col lg:flex-row lg:items-center gap-3 mt-5">
    <motion.div className="bg-[#7fe7db] flex justify-center items-center w-14 h-14 rounded-full"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >
   


   <svg
  className="w-7"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  {/* Heart */}
  <path
    d="M32 48C32 48 14 37 14 25C14 19 18.5 15 24 15C27.5 15 30.5 17 32 20C33.5 17 36.5 15 40 15C45.5 15 50 19 50 25C50 37 32 48 32 48Z"
    fill="#000000"
  />

  {/* Heart highlight */}
  <path
    d="M24 22C21.5 22 20 23.8 20 26"
    stroke="#000000"
    strokeWidth="3"
    strokeLinecap="round"
  />

  {/* Small hands/support lines */}
  <path
    d="M16 43C20 47 25 49 32 50C39 49 44 47 48 43"
    stroke="#1E3A5F"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg>
    </motion.div>

    <div className="leading-[30px]">
        <motion.h1 className="text-[25px] font-bold "
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
        >Meaningful Work</motion.h1>
        <motion.p className="text-[16px] lg:w-[500px] text-gray-600"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
        >Build a rewarding career while helping clients remain safe, comfortable, and independent in their own homes.</motion.p>
    </div>

    
</div>


<div className="flex flex-col lg:flex-row lg:items-center gap-3 mt-5">
    <motion.div className="bg-[#FFF4D6] #7fe7db flex justify-center items-center w-14 h-14 rounded-full"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <svg
  className="w-7"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  {/* Main person */}
  <circle
    cx="32"
    cy="20"
    r="7"
    fill="#2EC4B6"
  />

  <path
    d="M20 46C20 37.7 25.4 32 32 32C38.6 32 44 37.7 44 46"
    stroke="#1E3A5F"
    strokeWidth="4"
    strokeLinecap="round"
  />

  {/* Left person */}
  <circle
    cx="14"
    cy="25"
    r="5"
    fill="#1E3A5F"
  />

  <path
    d="M6 45C6 39.5 9.5 35 14 35C17 35 19.5 36.7 21 39"
    stroke="#1E3A5F"
    strokeWidth="3"
    strokeLinecap="round"
  />

  {/* Right person */}
  <circle
    cx="50"
    cy="25"
    r="5"
    fill="#1E3A5F"
  />

  <path
    d="M58 45C58 39.5 54.5 35 50 35C47 35 44.5 36.7 43 39"
    stroke="#1E3A5F"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg>
    </motion.div>

    <div className="leading-[30px]">
        <motion.h1 className="text-[25px] font-bold "
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
        >A Team That Cares</motion.h1>
        <motion.p className="text-[16px] lg:w-[500px] text-gray-600"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
        >Join a supportive team committed to professionalism, compassion, teamwork, and delivering high-quality client-centered care.</motion.p>
    </div>

    
</div>

            <motion.div className="mt-5 flex">
       <motion.button
  className="bg-[#1E3A5F] text-white w-[120px] h-[40px] rounded-xl "
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
>
  Apply Now
</motion.button>
    </motion.div>



        </div>




      </div>
    </section>
  );
}

export default CareersSection2;