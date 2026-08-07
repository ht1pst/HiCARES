import overviewImg from "../assets/companioncaresection2img.jpg";
import { motion } from "framer-motion";
function CompanionCareSection2(){
const features = [
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Chat Bubbles */}
        <path
          d="M14 18H42C46 18 50 22 50 26V36C50 40 46 44 42 44H26L16 52V44H14C10 44 6 40 6 36V26C6 22 10 18 14 18Z"
          fill="#1E3A5F"
        />
        <circle cx="20" cy="31" r="2" fill="#2EC4B6" />
        <circle cx="28" cy="31" r="2" fill="#2EC4B6" />
        <circle cx="36" cy="31" r="2" fill="#2EC4B6" />
      </svg>
    ),
    title: "Friendly Conversation",
    text: "Meaningful conversation and companionship that helps reduce loneliness while promoting emotional well-being and connection.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Puzzle Piece */}
        <path
          d="M24 14H40V24C40 27 42 29 45 29H50V45H40C37 45 35 47 35 50V54H19V44C19 41 17 39 14 39H10V23H20C23 23 25 21 25 18V14H24Z"
          fill="#1E3A5F"
        />
        <circle cx="45" cy="29" r="3" fill="#2EC4B6" />
      </svg>
    ),
    title: "Activities & Engagement",
    text: "Enjoying games, reading, and engaging activities that encourage mental stimulation and enhance quality of life.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Walking */}
        <circle cx="32" cy="14" r="5" fill="#1E3A5F" />
        <path
          d="M32 20L28 30L35 36L30 50M35 24L42 30L46 42"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Walks & Community Outings",
    text: "Supporting safe walks and community outings that encourage independence, activity, and social interaction.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Calendar */}
        <rect
          x="14"
          y="16"
          width="36"
          height="34"
          rx="4"
          fill="#1E3A5F"
        />
        <path
          d="M22 12V20M42 12V20M14 26H50"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="32" cy="36" r="4" fill="#2EC4B6" />
      </svg>
    ),
    title: "Appointment Companionship",
    text: "Providing reliable companionship during appointments to help clients feel supported, comfortable, and confident.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Heart */}
        <path
          d="M32 52C32 52 14 39 14 24C14 18 18 14 24 14C28 14 31 16 32 19C33 16 36 14 40 14C46 14 50 18 50 24C50 39 32 52 32 52Z"
          fill="#1E3A5F"
        />
        <path
          d="M24 30L29 35L40 24"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Emotional Support",
    text: "Offering compassionate encouragement and emotional support that promotes confidence, comfort, and overall well-being.",
  },
];

    return(
    <section className="py-10 bg-[#FAFCFD]">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
    
            <div className="grid lg:grid-cols-2 gap-16 items-center">
    
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="relative"
              >
                <img
                  src={overviewImg}
                  alt=""
                  className="rounded-[35px] w-full h-[650px] object-cover shadow-xl"
                />
    
                <div className="absolute -bottom-8 right-8 bg-white rounded-3xl shadow-lg p-6 max-w-[260px]">
                  <h3 className="text-[#1E3A5F] font-bold text-xl">
                  Companion Care
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                    Providing meaningful companionship and emotional support that helps clients stay socially connected, engaged, and confident while enjoying a greater quality of life.
                  </p>
                </div>
              </motion.div>
    
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
              >
                <p className="uppercase tracking-[4px] text-[#2EC4B6] font-semibold">
                  Service Overview
                </p>
    
                <h2 className="mt-4 text-[42px] lg:text-[52px] font-bold text-[#1E3A5F] leading-tight">
                   Companion Care
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
  HiCARES provides Companion Care services that offer meaningful
  companionship and emotional support to help reduce isolation and
  improve quality of life. Our compassionate caregivers build genuine
  connections while encouraging clients to remain active, engaged, and
  independent in the comfort of their own home.

                </p>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                From friendly conversation and engaging activities to reading, walks,
  community outings, appointment companionship, and emotional support,
  we help clients stay socially connected while promoting confidence,
  well-being, and a greater sense of independence every day.
                </p>
    
             <div className="grid sm:grid-cols-2 gap-6 mt-12">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    
     initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
        {feature.icon}
      </div>

      <h3 className="font-bold text-[#1E3A5F] text-xl">
        {feature.title}
      </h3>

      <p className="text-gray-600 mt-3 leading-7">
        {feature.text}
      </p>
    </motion.div>
  ))}
</div>
              </motion.div>
    
            </div>
    
          </div>
        </section>
    )
}

export default CompanionCareSection2;