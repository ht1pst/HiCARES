import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Section3(){
    return(
<section className="lg:px-[70px] px-[20px] h-auto pb-10 lg:pt-20 pt-5">
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
    <p className="text-gray-700 text-[13px]">Our Services</p>
</motion.div>

<div className="flex flex-col lg:flex-row lg:items-center mt-5 lg:mt-0 justify-between ">

<div>
    <motion.h1 className="lg:text-[48px] text-[30px] font-bold lg:w-[500px] w-full leading-[40px]"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >Quality Care Across Every Medical Specialty</motion.h1>
</div>

 <div className="mt-5 lg:mt-0">
       <motion.button className="bg-[#1E3A5F] text-white w-[190px] h-[50px] rounded-xl font-bold"
        initial={{ opacity: 0, y: 40, rotate: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    delay: 1,
    ease: "easeOut",
  }}
  animate={{
    rotate: [0, -4, 4, -4, 4, 0],
  }}
  style={{ transformOrigin: "center center" }}
       >View All Service</motion.button>


    </div>
</div>

    </div>

    <div className="flex gap-5 justify-between flex-col lg:flex-row  mt-10">

<motion.div className="lg:w-[450px] border border-gray-200 lg:px-[30px] px-[15px] rounded-2xl border border-gray-200 bg-white py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
      <svg className="text-white"
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M11 14s-1-1-4-1a4 4 0 0 0-4 4v1h10" />
  <path d="M18.5 8.5a2.5 2.5 0 0 0-3.5 0L14 9.5l-1-1a2.5 2.5 0 0 0-3.5 3.5l1 1L14 16.5l3.5-3.5 1-1a2.5 2.5 0 0 0 0-3.5z" />
</svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[120px] h-[30px] rounded-xl">
    <p>Personal Care</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Personal Care Assistance</h1>
         <p className="text-[16px] leading-[28px] mt-5">We provide respectful, hands-on assistance with activities of daily living while promoting independence and preserving dignity.</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>


<motion.div className="lg:w-[450px] border border-gray-200 lg:px-[30px] px-[15px] rounded-2xl border border-gray-200 bg-white py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
     <svg className="text-white"
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M12 5v14" />
  <path d="M5 12h14" />
</svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[120px] h-[30px] rounded-xl">
    <p>Clinical Care</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Skilled Nursing Services</h1>
         <p className="text-[16px] leading-[28px] mt-5">Our licensed nurses provide professional nursing care according to physician orders and individualized care plans.
</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>


        <motion.div className="lg:w-[450px] border border-gray-200 lg:px-[30px] px-[15px] rounded-2xl border border-gray-200 bg-white py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
         initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
      <svg className="text-white"
  xmlns="http://www.w3.org/2000/svg"
  width="35"
  height="35"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="7" y="2" width="10" height="20" rx="2" />
  <path d="M9 6h6" />
  <path d="M12 10v6" />
  <path d="M9 13h6" />
</svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[150px] h-[30px] rounded-xl">
    <p>Medication Care</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Medicine Assistance</h1>
         <p className="text-[16px] leading-[28px] mt-5">Our trained caregivers provide safe medication support according to each client's care plan, helping ensure medications are taken correctly and on schedule.</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>

         </div>
        </motion.div>


    </div>


</section>
    )
}

export default Section3