import img from "../assets/section5img.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Section5(){
return(
    <section className="relative px-[20px]">


        <div className="absolute  block top-90 left-0 w-30 h-80 bg-[#aefdec] #aefdec rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute block top-0 right-0 w-40 h-80 bg-[#f3b499] #f3b499 rounded-full blur-[120px] opacity-70"></div>

        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center h-auto pb-10 pt-20">
<motion.div
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img
    src={img}
    alt=""
    className="lg:w-[600px] rounded-xl border border-5 border-gray-200 z-30 relative "
  />
</motion.div>

            <div>

  <motion.div className="flex items-center gap-3 border border-gray-300 w-[200px] py-[5px] justify-center rounded-3xl font-semibold "
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
    <p className="text-gray-700 text-[13px]">Personalized Care Plans</p>
</motion.div>

<motion.h1 className="lg:text-[48px] text-[30px] leading-[40px] lg:leading-[65px] font-bold lg:w-[600px] mt-3 lg:mt-0"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Care Designed Around Your Unique Needs</motion.h1>

<motion.p className="text-[16px] lg:w-[500px]  text-gray-500"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Every client receives an individualized care plan tailored to their unique health needs, personal preferences, and daily routine. Our team works closely with clients, families, and healthcare professionals to deliver compassionate care that promotes independence, comfort, and overall well-being.</motion.p>

<motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-6"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>

Comprehensive Care Assessment
</motion.p>

<motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>

Customized Care Plans
</motion.p>

<motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>

Ongoing Care Monitoring
</motion.p>

<motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-3"
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
> 
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>

Family & Provider Collaboration
</motion.p>

 <div className="mt-7 lg:mt-5">
       <motion.button className="bg-[#1E3A5F] text-white w-[140px] h-[50px] rounded-xl font-bold"
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
    </div>



            </div>
        </div>
    </section>
)
}

export default Section5




