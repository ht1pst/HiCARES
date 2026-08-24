import img from "../assets/servicesec3img.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hour from "../assets/24.webp";
import clockk from "../assets/clock2.webp";
import doctor from "../assets/doctor.webp";
import customer from "../assets/customer.webp";

function ServicesSection3(){
    return(
        <section className="bg-[#F5F9FA] pb-10 h-auto pt-10 px-[20px]">

<div className="flex flex-col lg:flex-row justify-center gap-20 items-center ">

<div>
     <motion.div className="flex items-center gap-3 border border-gray-300 w-[160px] py-[5px] justify-center rounded-3xl font-semibold "
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
    <p className="text-gray-700 text-[13px]">Why Choose us</p>
</motion.div>

<motion.h1 className="lg:text-[48px] text-[30px] leading-[40px] lg:leading-[55px] font-bold lg:w-[600px] mt-5 lg:mt-5"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Delivering Compassionate and Quality Healthcare</motion.h1>

<div className="flex flex-col lg:flex-row gap-6 mt-10">

<motion.div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#DFF7F2] lg:w-[280px] mx-auto lg:mx-0"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="border border-gray-400 flex justify-center items-center w-17 h-17 rounded-full">
        <img src={clockk} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold  lg:mx-0 mt-4">Quick Response</h1>
<p className="text-[17px] mx-auto lg:mx-0  mt-4 text-gray-600">Receive top-quality medical care advanced treatment</p>

</motion.div>


<motion.div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#FFF4D6] lg:w-[280px] mx-auto lg:mx-0"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>

    <div className="border border-gray-400 flex justify-center items-center w-17 h-17 rounded-full">
        <img src={customer} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold  lg:mx-0 mt-4">Customer Focus</h1>
<p className="text-[17px] mx-auto lg:mx-0  mt-4 text-gray-600">Patients first personalized and compassionate care</p>

</motion.div>
</div>

</div>


<div className="flex flex-col gap-2">
    <p className="font-bold gap-2 flex"><span className="text-[#7398c9] #7398c9"><i class="fas fa-check"></i></span>We offer flexible hours to fit your busy schedule</p>


     <p className="font-bold gap-2 flex"><span className="text-[#7398c9] #7398c9"><i class="fas fa-check"></i></span>
     We ensure you receive prompt and effective care</p>


      <p className="font-bold gap-2 flex"><span className="text-[#7398c9] #7398c9"><i class="fas fa-check"></i></span>
      Team is committed to making you feel comfortable
      </p>

       <p className="font-bold gap-2 flex"><span className="text-[#7398c9] #7398c9"><i class="fas fa-check"></i></span>
       Helping you manage your health at every stage of life
       </p>

       <img src={img} alt="" className="w-[500px] object-cover rounded-xl mt-10" />
</div>

</div>
        </section>
    )
}

export default ServicesSection3;
