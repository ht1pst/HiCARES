import img1 from "../assets/Referralsection4img1.jpg";
import img2 from "../assets/Referralsection4img2.jpg";
import img3 from "../assets/Referralsection4img3.jpg";
import img4 from "../assets/Referralsection4img4.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function ReferralSection4(){
    return(
<section className="h-auto pb-10 lg:px-[30px] py-[10px]">

    <div
    className="bg-[#F7FAF8] #f3f3f3 px-[20px] lg:px-0 rounded-xl py-[30px]"
    >
<motion.h1 className=" mt-4 text-[#1E3A5F] text-[30px] text-center lg:text-4xl font-bold "
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>Anyone Can Help Connect Someone To Care</motion.h1>

<motion.div className="border border-2 border-[#2EC4B6] w-[100px] mt-3 flex justify-center mx-auto"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
></motion.div>


<div className="mt-20 flex flex-col lg:flex-row  justify-center lg:gap-10 gap-20">

<motion.div className="border relative border-gray-200 mx-auto pt-[50px] border-3 rounded-xl w-[300px]  flex flex-col  items-center h-[220px]"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    
    <div className="absolute top-[-40px]"><img src={img1} alt="" className="object-cover w-[80px] h-[80px] rounded-full" />
</div>

<h1 className="text-[#1E3A5F] text-[25px]  font-bold flex justify-content">Family Members</h1>
<p className="mx-auto w-[90%] mt-3 text-center">Refer a parent, grandparent, spouse, or loved one who could benefit from additional support at home.</p>
</motion.div>

<motion.div className="border relative border-gray-200 mx-auto pt-[50px] border-3 rounded-xl w-[300px]  flex flex-col  items-center h-[220px]"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    
    <div className="absolute top-[-40px]"><img src={img2} alt="" className="object-cover w-[80px] h-[80px] rounded-full" />
</div>

<h1 className="text-[#1E3A5F] text-[25px]  font-bold flex justify-content text-center leading-[28px]">Healthcare Professionals</h1>
<p className="mx-auto w-[90%] mt-3 text-center">Help connect clients with reliable home care services that complement their existing care and support.</p>
</motion.div>

<motion.div className="border relative border-gray-200 mx-auto pt-[50px] border-3 rounded-xl w-[300px]  flex flex-col  items-center h-[220px]"
 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    
    <div className="absolute top-[-40px]"><img src={img3} alt="" className="object-cover w-[80px] h-[80px] rounded-full" />
</div>

<h1 className="text-[#1E3A5F] text-[25px]  font-bold text-center leading-[27px]">Community Organizations</h1>
<p className="mx-auto w-[90%] mt-3 text-center">Support members of your community by connecting them with compassionate in-home assistance.</p>
</motion.div>

<motion.div className="border relative border-gray-200 mx-auto pt-[50px] border-3 rounded-xl w-[300px]  flex flex-col  items-center h-[220px]"

 initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    
    <div className="absolute top-[-40px]"><img src={img4} alt="" className="object-cover w-[80px] h-[80px] rounded-full" />
</div>

<h1 className="text-[#1E3A5F] text-[25px]  font-bold ">Friends & Caregivers</h1>
<p className="mx-auto w-[90%] mt-3 text-center">If you know someone who needs extra support at home, you can help them take the first step toward care.</p>
</motion.div>



</div>
</div>
</section>
    )
}

export default ReferralSection4