import img from "../assets/aboutsec2img1.jpg";
import img2 from "../assets/aboutsec2img2.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function AboutSec2(){
    return(
       <section className="lg:pt-10 pb-10 h-auto overflow-hidden px-[20px]">
<div className="flex flex-col lg:flex-row justify-center lg:gap-20  gap-10 ">

<div className="flex flex-col lg:flex-row gap-15 ">
<div className="mt-10">
    <motion.h1 className="text-[38px] font-bold w-[300px] leading-[40px]"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >Healthcare With Personal Touch</motion.h1>

<motion.div
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    <img src={img} alt="" className="w-[400px] object-cover h-[400px] rounded-xl mt-5"/>

    </motion.div>
</div>

<div className="">
<motion.div
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <img src={img2} alt="" className="w-[400px] object-cover h-[400px] rounded-xl" />

    </motion.div>


    <motion.p className="text-[14px] font-bold leading-[25px] lg:w-[380px] text-gray-500 mt-5"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >
        At HiCARES, we're committed to delivering compassionate home care that puts people first. Through personalized care plans and dependable caregivers, we help individuals and families enjoy greater comfort, confidence, and independence.
    </motion.p>
</div>

</div>

<div className="flex flex-col gap-4">
    <motion.p className="text-[14px] font-bold leading-[25px] lg:w-[380px] text-gray-500"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >Your comfort is our priority, providing personalized home care services tailored to help you live safely, independently, and with confidence.</motion.p>

    <motion.p className="font-bold flex gap-3"
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    ><span><i class="far fa-check-circle text-[#90d5ec] #90d5ec"></i></span> Experienced Team</motion.p>


     <motion.p className="font-bold flex gap-3"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
     ><span><i class="far fa-check-circle text-[#90d5ec]"
     
     ></i></span>Emergency Healthcare Services</motion.p>


      <motion.p className="font-bold flex gap-3"
       initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      ><span><i class="far fa-check-circle text-[#90d5ec]"></i></span> State-of The Digital Technology</motion.p>


       <motion.p className="font-bold flex gap-3"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
       ><span><i class="far fa-check-circle text-[#90d5ec]"></i></span> 24/7 Emergency Supported Team</motion.p>

       <motion.div className="bg-[#FFF4D6] lg:w-[350px] h-[120px] justify-center flex items-center gap-9 rounded-xl mt-8"
        initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
       >
        <h1 className="lg:text-[48px] text-[30px] font-bold">24/7</h1>
        <p className="text-[16px] w-[150px]">Comprehensive Care & Support</p>
       </motion.div>

         <motion.div className="bg-[#7fe7db] lg:w-[350px] mt-7 h-[120px] justify-center flex items-center gap-9 rounded-xl"
          initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
         >
        <h1 className="lg:text-[48px] text-[30px] font-bold">100%</h1>
        <p className="text-[16px] w-[150px]">Dedicated Home Care Team</p>
       </motion.div>
</div>
        
</div>

       </section> 
    )
}
export default AboutSec2