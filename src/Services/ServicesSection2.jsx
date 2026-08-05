import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
function ServicesSection2(){
    return(
<section className="lg:px-[165px] px-[20px] h-auto pb-10 lg:pt-20 pt-5">

<div className="flex gap-5 justify-between flex-col lg:flex-row  mt-10">

<Link to="/personalizedcare">
<motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
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
</Link>

<motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
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

    <motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
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

<div className="flex gap-5 justify-between flex-col lg:flex-row  mt-10">
    
<motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
    
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v6m-3-3h6"
    />
  </svg>

</div>


<div className="bg-gray-200 flex justify-center items-center w-[140px] h-[30px] rounded-xl">
    <p>Home Health</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Home Health Aide Services</h1>
         <p className="text-[16px] leading-[28px] mt-5">Compassionate in-home support with daily routines, personal well-being, and health monitoring under professional supervision.
</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>

<motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3 3 0 11-6 0 3 3 0 016 0ZM5.25 8.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0ZM3.75 18a4.5 4.5 0 019 0v.75h-9V18ZM11.25 18a5.25 5.25 0 0110.5 0v.75h-10.5V18Z"
    />
  </svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[160px] h-[30px] rounded-xl">
    <p>Companion Care</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Companion Care</h1>
         <p className="text-[16px] leading-[28px] mt-5">Providing meaningful companionship, conversation, and emotional support to help clients stay socially engaged and connected.
</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>

 <motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
     <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10.5L12 3l9 7.5M5.25 9.75V21h13.5V9.75"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 21v-6h6v6"
    />
  </svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[190px] h-[30px] rounded-xl">
    <p>Homemaker Services</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Homemaker Services</h1>
         <p className="text-[16px] leading-[28px] mt-5">Helping maintain a clean, safe, and comfortable home through light housekeeping, laundry, meals, and organization.
</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>

 </div>


 <div className="flex gap-5 justify-between flex-col lg:flex-row  mt-10">
<motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
       <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5l-2.25-2.25a1.75 1.75 0 012.475-2.475L12 12.045l-.225-.225a1.75 1.75 0 112.475 2.475L12 16.5z"
    />
  </svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[120px] h-[30px] rounded-xl">
    <p>Respite Care</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Respite Care</h1>
         <p className="text-[16px] leading-[28px] mt-5">Giving family caregivers peace of mind with trusted temporary care while their loved ones remain safe and supported.</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>


        <motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 16h10M5.5 16l1-6A2 2 0 018.5 8h7a2 2 0 012 2l1 6M7 16a1.5 1.5 0 11-3 0A1.5 1.5 0 017 16Zm13 0a1.5 1.5 0 11-3 0A1.5 1.5 0 0120 16ZM8.5 8l1-3h5l1 3"
    />
  </svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[140px] h-[30px] rounded-xl">
    <p>Transportation</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Transportation & Errands</h1>
         <p className="text-[16px] leading-[28px] mt-5">Providing reliable transportation and assistance with appointments, shopping, pharmacy visits, and everyday errands.
</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>


          <motion.div className="lg:w-[380px] border border-gray-200 lg:h-[360px] px-[15px] rounded-2xl border border-gray-200 bg-white h-auto py-10 lg:py-[30px]  transition-all duration-300 hover:border-teal-500 hover:shadow-lg"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
        <div className="flex items-center justify-between">

<div className="bg-[#1E3A5F] flex justify-center items-center w-[50px] h-[50px] rounded-full">
       <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h8M7.5 10.5l8-3M7.5 13.5l8 3"
    />
  </svg>
</div>


<div className="bg-gray-200 flex justify-center items-center w-[155px] h-[30px] rounded-xl">
    <p>Care Coordination</p>
</div>

</div>
         
         <h1 className="text-[24px] font-bold mt-5">Care Coordination</h1>
         <p className="text-[16px] leading-[28px] mt-5">We collaborate with healthcare providers and families to create personalized care plans that evolve with each client's needs.
</p>

<div className="mt-8">
         <a href="#" className="underline">Read More</a>
         </div>
        </motion.div>

 </div>

</section>

    )
}

export default ServicesSection2