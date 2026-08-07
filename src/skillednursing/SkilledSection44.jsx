import img from "../assets/ctaimg.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function SkilledSection44(){
    return(
         <section
            className="relative lg:hidden block lg:py-20 py-10 bg-cover bg-center bg-no-repeat px-[20px]"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0F1F33]/70"></div>
      
            {/* Optional Glow Effects */}
            
            <div className="relative z-10 flex justify-center gap-20 h-auto">
      
              <div>
      
      <motion.div className="flex items-center gap-3 border border-gray-100 w-[200px] lg:py-[5px] justify-center rounded-3xl font-semibold "
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
          <svg className="text-white"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="currentColor"
      >
        <circle cx="4" cy="4" r="4" />
      </svg>
          <p className="text-white">Skilled Nursing</p>
      </motion.div>
      
                <motion.h1 className="lg:text-[48px] mt-5 lg:mt-0 text-[30px] leading-[40px] lg:leading-[65px] font-bold lg:w-[600px] text-white"
                initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                >
                 Skilled Nursing Care You Can Trust
                </motion.h1>
      
                <motion.p className="text-[16px] lg:w-[500px]  text-gray-200 mt-4"
                initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                >
                   Our licensed nurses provide professional medical care tailored to each client's health needs. From medication management and health assessments to post-hospital recovery and chronic disease support, we deliver compassionate nursing services that promote safety, independence, and better health outcomes—all in the comfort of home.
                </motion.p>
      
                <div className="gap-3 flex flex-col lg:flex-row mt-7">
                  <motion.button className="bg-[#2EC4B6] text-[#1E3A5F] w-[180px] h-[45px] rounded-full font-bold hover:bg-white transition"
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
                  >
                    Request Care
                  </motion.button>
      
                  <button className="border lg:block hidden border-white text-white w-[180px] h-[45px] rounded-full font-bold hover:bg-white hover:text-[#1E3A5F] transition">
                    Contact
                  </button>
                </div>
      
                <div className="flex flex-col lg:flex-row gap-5 mt-10">
      
                  <div className="flex flex-col lg:items-center">
                    <motion.div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <svg
                        className="w-[40px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M12 28L32 12L52 28V50H38V38H26V50H12V28Z"
                          fill="#0F2D52"
                        />
                        <path
                          d="M46 18C46 15.8 47.8 14 50 14C52.2 14 54 15.8 54 18C54 23 50 26 50 26C50 26 46 23 46 18Z"
                          fill="#3AB7A5"
                        />
                      </svg>
                    </motion.div>
      
                    <motion.p className="mt-3 lg:text-center lg:text-[16px] text-[20px] font-semibold text-white leading-5"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >


                     Licensed Nurses <br className="lg:block hidden" />
  Care Plans
                    </motion.p>
                  </div>
      
                  <div className="flex flex-col lg:items-center">
                    <motion.div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                        <circle cx="22" cy="18" r="6" fill="#0F2D52"/>
                        <circle cx="42" cy="18" r="6" fill="#3AB7A5"/>
                        <path d="M16 48V34C16 30 19 28 22 28C25 28 28 30 28 34V48" stroke="#0F2D52" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M36 48V34C36 30 39 28 42 28C45 28 48 30 48 34V48" stroke="#3AB7A5" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M28 36L36 34" stroke="#3AB7A5" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
      
                    <motion.p className="mt-3 lg:text-center lg:text-[16px] text-[20px]  font-semibold text-white leading-5"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                     Medical Expertise <br className="lg:block hidden"/>
  Support
                    </motion.p>
                  </div>
      
                  <div className="flex flex-col lg:items-center">
                    <motion.div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                        <path d="M32 10L48 16V30C48 41 40 49 32 54C24 49 16 41 16 30V16L32 10Z" fill="#0F2D52"/>
                        <path d="M24 31L30 37L41 25" stroke="#3AB7A5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
      
                    <motion.p className="mt-3 lg:text-center lg:text-[16px] text-[20px]  font-semibold text-white leading-5"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                     Health Monitoring <br className="lg:block hidden"/>
  Reliable Care
                    </motion.p>
                  </div>
      
                  <div className="flex flex-col lg:items-center">
                    <motion.div className="bg-[#DFF7F2] w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                        <circle cx="20" cy="20" r="5" fill="#0F2D52"/>
                        <circle cx="44" cy="20" r="5" fill="#0F2D52"/>
                        <circle cx="32" cy="16" r="4" fill="#3AB7A5"/>
                        <path d="M16 46V34C16 31 18 29 20 29C22 29 24 31 24 34V46" stroke="#0F2D52" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M40 46V34C40 31 42 29 44 29C46 29 48 31 48 34V46" stroke="#0F2D52" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M28 42C28 39.8 29.8 38 32 38C34.2 38 36 39.8 36 42C36 46 32 49 32 49C32 49 28 46 28 42Z" fill="#3AB7A5"/>
                      </svg>
                    </motion.div>
      
                    <motion.p className="mt-3 lg:text-center lg:text-[16px] text-[20px]  font-semibold text-white leading-5"
                    initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}    // slides up into view
        viewport={{ once: true, amount: 0.3 }} // animate only the first time
        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      Recovery Support   <br className="lg:block hidden"/>
  Approach
                    </motion.p>
                  </div>
      
                </div>
              </div>
      
            </div>
          </section>
    )
}

export default SkilledSection44;