import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function ReferralSection5(){
return( 
    <section className="h-auto pb-10 px-[20px]">

<div>
        <motion.p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold  flex lg:justify-center
      "
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  ease: "easeOut", }}
      >
        HOW IT WORKS
      </motion.p>

 <motion.h1 className="text-[#1E3A5F] leading-[35px] text-[30px] lg:text-4xl font-bold  flex justify-center mt-5"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{
  duration: 0.8,
  delay: 0.4,
  ease: "easeOut", }}
      >
       Making a Referral Is Easy
      </motion.h1>

<div className="border border-2 hidden lg:block border-[#2EC4B6] w-[100px] mt-3 flex justify-center mx-auto"></div>

<p className="mx-auto lg:w-[650px] mt-3 lg:text-center">Helping someone connect with the right care doesn't have to be complicated. Our simple referral process makes it easy to share their needs with the HiCARES team and get the conversation started.</p>

</div>

<div className="flex flex-col lg:flex-row justify-center items-center lg:gap-15 gap-20 mt-10">

<div
>
<div className="w-26 h-26 rounded-full bg-[#E5F2E8] flex items-center justify-center mx-auto">
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-13 h-13"
  >
    <rect
      x="15"
      y="10"
      width="34"
      height="44"
      rx="4"
      stroke="#2EC4B6"
      strokeWidth="2.5"
    />

    <path
      d="M23 22H41"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M23 31H41"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M23 40H34"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M23 18V14"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M41 18V14"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>

<div className="flex gap-4 mt-4">
    <p className="bg-[#2EC4B6] text-white  flex justify-center items-center rounded-full h-[30px] w-[30px] text-[14px]">01</p>

    <div>
        <h1 className="text-[20px] font-bold text-[#1E3A5F]">Tell Us About Them</h1>
        <p className="text-[14px] w-[230px]">Complete our referral form with some basic information about the person who may need care.</p>
    </div>
</div>


</div>

<div className="rotate-90 lg:rotate-0">
  <svg
  width="120"
  height="30"
  viewBox="0 0 120 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 15H105"
    stroke="#B8CFC3"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeDasharray="1 8"
  />

  <path
    d="M99 8L107 15L99 22"
    stroke="#4C9B68"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>

<div>
<div className="w-26 h-26 rounded-full bg-[#E5F2E8] flex items-center justify-center mx-auto">
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-13 h-13"
  >
    <circle
      cx="23"
      cy="22"
      r="7"
      stroke="#2EC4B6"
      strokeWidth="2.5"
    />

    <circle
      cx="43"
      cy="22"
      r="7"
      stroke="#2EC4B6"
      strokeWidth="2.5"
    />

    <path
      d="M11 48C11 39.7 16.3 33 23 33C29.7 33 35 39.7 35 48"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M29 48C29 39.7 34.3 33 41 33C47.7 33 53 39.7 53 48"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M29 27H37"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M33 23V31"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</div>

<div className="flex gap-4 mt-4">
    <p className="bg-[#2EC4B6] text-white  flex justify-center items-center rounded-full h-[30px] w-[30px] text-[14px]">02</p>

    <div>
        <h1 className="text-[20px] font-bold text-[#1E3A5F]">Our Team Connects</h1>
        <p className="text-[14px] w-[230px]">A member of the HiCARES team reviews the referral and reaches out to discuss their needs and answer any questions.</p>
    </div>
</div>


</div>


<div className="rotate-90 lg:rotate-0">
   <svg
  width="120"
  height="30"
  viewBox="0 0 120 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 15H105"
    stroke="#B8CFC3"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeDasharray="1 8"
  />

  <path
    d="M99 8L107 15L99 22"
    stroke="#4C9B68"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>

<div>
<div className="w-26 h-26 rounded-full bg-[#E5F2E8] flex items-center justify-center mx-auto">
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-13 h-13"
  >
    <path
      d="M32 8L50 15V28C50 40 43 50 32 56C21 50 14 40 14 28V15L32 8Z"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    <path
      d="M22 32L29 39L43 24"
      stroke="#2EC4B6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

<div className="flex gap-4 mt-4">
    <p className="bg-[#2EC4B6] text-white  flex justify-center items-center rounded-full h-[30px] w-[30px] text-[14px]">03</p>

    <div>
        <h1 className="text-[20px] font-bold text-[#1E3A5F]">We Find the Right Support</h1>
        <p className="text-[14px] w-[230px]">We work with the client and their family to understand their needs and determine the appropriate care and next steps.</p>
    </div>
</div>


</div>






</div>




    </section>
)
}

export default ReferralSection5