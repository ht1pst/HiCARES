import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../assets/careersection4img.webp";
function CareersSection4(){
  const whyChooseUs = [
  {
    title: "Personalized  Care Plans",
    description:
      "Care tailored to unique needs and preferences.",
    iconBg: "#E5F2E8",
    iconColor: "#4C9B68",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <circle cx="28" cy="22" r="9" stroke="#4C9B68" strokeWidth="2.5" />
        <path
          d="M11 49C11 39.6 18.6 32 28 32C37.4 32 45 39.6 45 49"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    title: "Safety & Reliability",
    description:
      "Your loved one’s safety is our top priority.",
    iconBg: "#E4F0F9",
    iconColor: "#5B8DB8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <path
          d="M32 7L51 14V28C51 41 43 51 32 57C21 51 13 41 13 28V14L32 7Z"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M23 31L29 37L42 23"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Compassionate Caregivers",
    description:
      "Trained professionals who treat every client like family.",
    iconBg: "#EEECF7",
    iconColor: "#8E86B8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <circle cx="32" cy="19" r="8" stroke="#8E86B8" strokeWidth="2.5" />
        <path
          d="M19 48C19 39.7 24.8 33 32 33C39.2 33 45 39.7 45 48"
          stroke="#8E86B8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="13" cy="29" r="5" stroke="#8E86B8" strokeWidth="2.5" />
        <circle cx="51" cy="29" r="5" stroke="#8E86B8" strokeWidth="2.5" />
      </svg>
    ),
  },

  {
    title: "Family-Centered Support",
    description:
      "We keep families informed and involved every step of the way.",
    iconBg: "#FAF2D8",
    iconColor: "#D6A52C",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <circle cx="32" cy="17" r="7" stroke="#D6A52C" strokeWidth="2.5" />
        <circle cx="14" cy="25" r="5" stroke="#D6A52C" strokeWidth="2.5" />
        <circle cx="50" cy="25" r="5" stroke="#D6A52C" strokeWidth="2.5" />
        <path
          d="M21 47C21 37.6 25.9 30 32 30C38.1 30 43 37.6 43 47"
          stroke="#D6A52C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    title: "Promoting Independence",
    description:
      "Empowering clients to live safely and confidently at home.",
    iconBg: "#E5F2E8",
    iconColor: "#4C9B68",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <path
          d="M9 30L32 10L55 30"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 27V53H49V27"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 42C32 42 24 38 24 33C24 30.5 26 29 28 29C30 29 32 31 32 31C32 31 34 29 36 29C38 29 40 30.5 40 33C40 38 32 42 32 42Z"
          stroke="#4C9B68"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Built on Trust, Driven by Heart",
    description:
      "We build lasting relationships through honesty, respect, and compassion.",
    iconBg: "#E4F0F9",
    iconColor: "#5B8DB8",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-15 h-15">
        <path
          d="M11 30L24 17C26.8 14.2 31.2 14.2 34 17L37 20"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M53 34L40 47C37.2 49.8 32.8 49.8 30 47L27 44"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 31L29 36C30.7 37.7 33.3 37.7 35 36L45 26"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 33L35 28C33.3 26.3 30.7 26.3 29 28L19 38"
          stroke="#5B8DB8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

return(

     <section className="relative px-[20px]">
   
   
           <div className="absolute  block top-90 left-0 w-30 h-80 bg-[#aefdec] #aefdec rounded-full blur-[120px] opacity-70"></div>
         <div className="absolute block top-0 right-0 w-40 h-80 bg-[#f3b499] #f3b499 rounded-full blur-[120px] opacity-70"></div>
   
           <div className="flex flex-col lg:flex-row   justify-center lg:gap-20 gap-10 items-center h-auto pb-10 pt-20">
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
   
     <motion.div className="flex items-center gap-3 border border-gray-300 w-[170px] py-[5px] justify-center rounded-3xl font-semibold "
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
       <p className="text-gray-700 text-[13px]"> WHY JOIN HiCARES</p>
   </motion.div>
   
   <motion.h1 className="lg:text-[48px] text-[30px] leading-[40px] lg:leading-[65px] font-bold lg:w-[600px] mt-3 lg:mt-4"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   >BENEFITS OF JOINING OUR TEAM</motion.h1>
   
   <motion.p className="text-[16px] lg:w-[500px]  text-gray-500"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   >At HiCARES, we believe our team is at the heart of everything we do. Join a supportive environment where your work is valued, your growth is encouraged, and every day brings an opportunity to make a meaningful difference in someone’s life.</motion.p>
   
   <motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-6"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
   
   Compassion Culture
   </motion.p>
   
   <motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-1"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
   
   Meaningful Work
   </motion.p>
   
   <motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-1"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
   
   Professional Environment
   </motion.p>
   
   <motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-1"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   > 
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
   
   Client-centered
   </motion.p>

   <motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-1"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   > 
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
   
   Teamwork & Communication
   </motion.p>


   <motion.p className="text-[15px] font-bold text-gray-500 flex items-center gap-3 mt-1"
   initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
     whileInView={{ opacity: 1, y: 0 }}    // slides up into view
     viewport={{ once: true, amount: 0.3 }} // animate only the first time
     transition={{ duration: 0.8, ease: "easeOut" }}
   > 
   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00ff04"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
   
   Make an impact
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
          >Apply Now</motion.button>
       </div>
   
   
   
               </div>
           </div>




<section className="lg:py-20 py-10 bg-[#FAFCFD]">


  <div className="max-w-[1200px] lg:mx-auto lg:px-6 lg:px-10">

    {/* Heading */}
    <div className="lg:text-center max-w-[700px] lg:mx-auto mb-12">

      <motion.p className="uppercase tracking-[3px] text-[#2EC4B6] font-bold text-sm"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      >
        JOIN THE HiCARES TEAM
      </motion.p>

      <motion.h2 className="mt-3 text-[#1E3A5F] text-[32px] lg:text-5xl font-bold"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Start Your Career With HiCARES
      </motion.h2>

      <motion.p className="mt-4 text-gray-600 leading-7"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      >
        We’re always looking for compassionate, dependable professionals
        who are passionate about making a difference. Tell us a little about
        yourself and your experience, and our team will review your
        application for available opportunities.
      </motion.p>


    </div>

    {/* Form */}
    <motion.form className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 lg:p-10"
    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="grid md:grid-cols-2 gap-6">

        {/* First Name */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            First Name *
          </label>

          <input
            type="text"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Last Name *
          </label>

          <input
            type="text"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition"
            placeholder="Enter your last name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Email Address *
          </label>

          <input
            type="email"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Phone Number *
          </label>

          <input
            type="tel"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Position Applying For *
          </label>

          <select
            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-[#2EC4B6] transition"
          >
            <option value="">Select a position</option>
            <option>Registered Nurse</option>
            <option>Licensed Practical Nurse</option>
            <option>Home Health Aide</option>
            <option>Personal Care Assistant</option>
            <option>Homemaker</option>
            <option>Administrative Staff</option>
            <option>Other</option>
          </select>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Preferred Employment Type *
          </label>

          <select
            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-[#2EC4B6] transition"
          >
            <option value="">Select employment type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Flexible</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Years of Relevant Experience
          </label>

          <input
            type="text"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition"
            placeholder="e.g. 2 years"
          />
        </div>

        {/* Resume */}
        <div>
          <label className="block text-[#1E3A5F] font-semibold mb-2">
            Upload Résumé *
          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
          />
        </div>

      </div>

      {/* About */}
      <div className="mt-6">
        <label className="block text-[#1E3A5F] font-semibold mb-2">
          Tell Us About Yourself
        </label>

        <textarea
          rows="5"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition resize-none"
          placeholder="Tell us why you would like to join HiCARES..."
        />
      </div>

      {/* Additional Information */}
      <div className="mt-6">
        <label className="block text-[#1E3A5F] font-semibold mb-2">
          Additional Information
        </label>

        <textarea
          rows="4"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2EC4B6] transition resize-none"
          placeholder="Anything else you'd like us to know?"
        />
      </div>

      {/* Agreement */}
      <label className="flex items-start gap-3 mt-6 text-gray-600 text-sm">
        <input
          type="checkbox"
          className="mt-1 accent-[#2EC4B6]"
        />

        <span>
          I confirm that the information provided is accurate and complete.
        </span>
      </label>

      {/* Button */}
      <div className="mt-8">
        <button
          type="submit"
          className="bg-[#1E3A5F] hover:bg-[#2EC4B6] text-white font-semibold px-8 py-4 rounded-xl transition"
        >
          Submit Application →
        </button>
      </div>

    </motion.form>

  </div>
</section>

       </section>
)
}

export default CareersSection4