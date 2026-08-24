import img from "../assets/faqimg.webp";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
const cardFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger effect
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const faqs = [
  {
    question: "What Companion Care services do you provide?",
    answer:
      "Our Companion Care services include friendly conversation, games and activities, reading, walks, community outings, appointment companionship, and emotional support to help clients stay socially connected and engaged.",
  },
  {
    question: "Who can benefit from Companion Care?",
    answer:
      "Companion Care is ideal for individuals who may feel isolated, need social interaction, or would benefit from encouragement and companionship while remaining safe and independent at home.",
  },
  {
    question: "Can Companion Care include outings and appointments?",
    answer:
      "Yes. Our caregivers can accompany clients on walks, community outings, and appointments, providing companionship, support, and reassurance throughout the experience.",
  },
  {
    question: "Can Companion Care be combined with other home care services?",
    answer:
      "Yes. Companion Care can be combined with other HiCARES services, such as personal care, homemaker services, medication assistance, and skilled nursing to create a personalized care plan.",
  },
];
function FAQ5(){

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   const faqFade = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

    return(
        <section className="h-auto pb-10 lg:pt-20 pt-10 px-[20px]">

<div className="flex flex-col lg:flex-row flex-col-reverse justify-center lg:gap-30 gap-10 items-center">

<div className="hidden lg:block">
    <img src={img} alt="" className="lg:w-[600px] lg:h-[450px] w-[450px] h-[200px] object-cover rounded-xl border border-5 border-gray-200" />
</div>

<div className="max-w-xl mx-auto lg:mx-0 space-y-4">
    <div>

<motion.div className="flex items-center gap-3 border border-gray-300 w-[80px] py-[5px] justify-center rounded-3xl font-semibold "
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
    <p className="text-gray-700 text-[13px]">FAQ's</p>
</motion.div>


        <motion.h1 className="lg:text-[46px] mt-4 text-[30px] font-semibold"
          initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
        >Have a question look here</motion.h1>

                 <motion.p className="text-[18px] text-gray-500"
                
                 initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate to visible and in place
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
                >For quick answers, visit our FAQ section. Can't find what you need? Contact our support team.</motion.p>
                </div>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div initial={{ opacity: 0, y: 30 }}        // start slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}     // slide up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                className=" border border-gray-300 p-2 rounded-xl bg-white mx-auto lg:mx-0  lg:w-140 overflow-hidden transition-all duration-300"
              >
            
                {/* Questions */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center  py-1 bg-white transition"
                >
                  <span className=" text-[18px] lg:font-bold text-start font-bold ">
                    {faq.question}
                  </span>
                  <span className="transition-all duration-300 text-2xl font-bold text-[#1E3A5F]">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden  text-[15px] text-gray-500 bg-white">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        </div>
        </section>
    )
}

export default FAQ5

