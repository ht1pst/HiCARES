import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function HowItWorks(){
    return(

        <section className="py-10 px-[20px]">
 <div>
    <p className="flex lg:justify-center lg:text-[40px] text-[26px] font-bold">How It Works</p>
    <h1 className="flex justify-center text-[40px] font-bold text-[#2EC4B6] leading-[43px] lg:leading-[55px] mt-4">Personalized Care, Centered Around You</h1>
    <p className="flex justify-center lg:mx-auto text-[18px] lg:text-center lg:w-[900px] mt-4 ">Personalized home care provided for children, adults, and seniors always with compassion, professionalism, and respect. Each service is designed to enhance daily life, support independence, and give you lasting peace of mind.</p>
 </div>

 <div className="flex flex-col lg:flex-row justify-center lg:gap-10 gap-15 mt-15">

<div className="shadow-[0_10px_30px_rgba(30,58,95,0.15)] w-[280px]  px-[20px] pt-[60px] pb-[20px] relative rounded-xl mx-auto lg:mx-0">

<div className="absolute top-[-50px] left-1/2 -translate-x-1/2">
<h1 className="font-bold text-[70px] text-[#2EC4B6]">1</h1>
</div>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.8}
  stroke="currentColor"
  className="w-10 h-10 flex justify-center mx-auto "

>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2.25 6.75c0 8.146 6.604 14.75 14.75 14.75.674 0 1.33-.046 1.972-.134a1.5 1.5 0 001.278-1.487v-3.136a1.5 1.5 0 00-1.094-1.445l-2.918-.834a1.5 1.5 0 00-1.546.444l-.639.78a12.034 12.034 0 01-5.4-5.4l.78-.639a1.5 1.5 0 00.444-1.546l-.834-2.918A1.5 1.5 0 007.257 3.5H4.121A1.5 1.5 0 002.634 4.778c-.088.642-.134 1.298-.134 1.972z"
  />
</svg>

<p className="font-bold text-[25px] text-center leading-[25px] mt-3 text-[#2EC4B6]">Reach Out to Our Care Team</p>
<p className="text-center text-[15px] leading-[25px] mt-3">Contact HiCARES to discuss your care needs. Our friendly team will answer your questions and help you find the right care solution.</p>





</div>


<div className="shadow-[0_10px_30px_rgba(30,58,95,0.15)] w-[280px]  px-[20px] pt-[60px] pb-[20px] relative rounded-xl mx-auto lg:mx-0">

<div className="absolute top-[-50px] left-1/2 -translate-x-1/2">
<h1 className="font-bold text-[70px] text-[#2EC4B6]">2</h1>
</div>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.8}
  stroke="currentColor"
  className="w-10 h-10 flex justify-center mx-auto "
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 4.5h6m-7.5 3h9A1.5 1.5 0 0118 9v10.5A1.5 1.5 0 0116.5 21h-9A1.5 1.5 0 016 19.5V9a1.5 1.5 0 011.5-1.5zm2.25 5.25l1.5 1.5 3-3"
  />
</svg>

<p className="font-bold text-[25px] text-center leading-[25px] mt-3 text-[#2EC4B6]">Schedule a Free Assessment</p>
<p className="text-center text-[15px] leading-[25px] mt-3">We'll arrange a visit with a Registered Nurse to assess your needs and create a personalized care plan tailored just for you.</p>





</div>


<div className="shadow-[0_10px_30px_rgba(30,58,95,0.15)] w-[280px]  px-[20px] pt-[60px] pb-[20px] relative rounded-xl mx-auto lg:mx-0">

<div className="absolute top-[-50px] left-1/2 -translate-x-1/2">
<h1 className="font-bold text-[70px] text-[#2EC4B6]">3</h1>
</div>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.8}
  stroke="currentColor"
 className="w-10 h-10 flex justify-center mx-auto "
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0"
  />
</svg>
<p className="font-bold text-[25px] text-center leading-[25px] mt-3 text-[#2EC4B6]">Meet Your Caregiver</p>
<p className="text-center text-[15px] leading-[25px] mt-3">We'll carefully match you with a qualified caregiver whose skills, availability, and personality fit your unique care needs.</p>





</div>



<div className="shadow-[0_10px_30px_rgba(30,58,95,0.15)] w-[280px]  px-[20px] pt-[60px] pb-[20px] relative rounded-xl mx-auto lg:mx-0">

<div className="absolute top-[-50px] left-1/2 -translate-x-1/2">
<h1 className="font-bold text-[70px] text-[#2EC4B6]">4</h1>
</div>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.8}
  stroke="currentColor"
  className="w-10 h-10 flex justify-center mx-auto "
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M7.5 8.25h9m-9 3h6m-9.75 7.5l2.64-2.112a1.5 1.5 0 01.936-.338h9.18A1.5 1.5 0 0019.5 14.8V6.75A1.5 1.5 0 0018 5.25H6A1.5 1.5 0 004.5 6.75v10.5a1.5 1.5 0 001.5 1.5z"
  />
</svg>

<p className="font-bold text-[25px] text-center leading-[25px] mt-3 text-[#2EC4B6]">Receive Ongoing Support</p>
<p className="text-center text-[15px] leading-[25px] mt-3">We'll stay in touch to ensure your care continues to meet your needs, making adjustments and providing support whenever necessary.</p>





</div>

 </div>

<div className="flex  justify-center lg:flex-row flex-col lg:gap-6 gap-6 mt-10">
    <motion.button className="bg-[#2EC4B6] text-white lg:w-[180px] w-full h-[45px] rounded-xl font-bold lg:mx-0 mx-auto"
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
    >Request Care</motion.button>


    <motion.button className="bg-white text-#1E3A5F border border-[#2EC4B6] lg:w-[180px] w-full h-[45px] rounded-xl font-bold lg:mx-0 mx-auto"
     initial={{ opacity: 0, y: 40, rotate: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    delay: 1.5,
    ease: "easeOut",
  }}
  animate={{
    rotate: [0, -4, 4, -4, 4, 0],
  }}
  style={{ transformOrigin: "center center" }}

    >Refer a Client</motion.button>
</div>

</section>

    )
}

export default HowItWorks;