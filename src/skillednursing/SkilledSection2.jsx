import overviewImg from "../assets/skilledsec2img.webp";
import { motion } from "framer-motion";
function SkilledSection2(){
    return(
    <section className="py-10 bg-[#FAFCFD]">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
    
            <div className="grid lg:grid-cols-2 gap-16 items-center">
    
              {/* Image */}
              <motion.div
               initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <img
                  src={overviewImg}
                  alt=""
                  className="rounded-[35px] w-full h-[650px] object-cover shadow-xl"
                />
    
                <div className="absolute -bottom-8 right-8 bg-white rounded-3xl shadow-lg p-6 max-w-[260px]">
                  <h3 className="text-[#1E3A5F] font-bold text-xl">
                   Skilled Nursing
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                     Professional nursing care delivered by licensed nurses to support health, recovery, and overall well-being.
                  </p>
                </div>
              </motion.div>
    
              {/* Content */}
              <motion.div
              initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="uppercase tracking-[4px] text-[#2EC4B6] font-semibold">
                  Service Overview
                </p>
    
                <h2 className="mt-4 text-[42px] lg:text-[52px] font-bold text-[#1E3A5F] leading-tight">
                   Professional Nursing Care at Home
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                   HiCARES provides skilled nursing services designed to meet each client's
      medical needs in the comfort of their home. Our licensed nurses deliver
      compassionate, professional care while following physician-directed
      treatment plans to promote recovery, safety, and overall well-being.
                </p>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                  From health assessments and medication management to wound care and
      ongoing health monitoring, our team works closely with clients,
      families, and healthcare providers to ensure high-quality,
      individualized care every step of the way.
                </p>
    
                <div className="grid sm:grid-cols-2 gap-6 mt-12">
    
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
               <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="18" stroke="#1E3A5F" strokeWidth="4"/>
        <path
          d="M22 32H28L31 26L35 38L38 32H42"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                    Health Assessments
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                      Comprehensive nursing assessments to evaluate each client's health condition and support personalized care planning.
                    </p>
                  </div>
    
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
            <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <rect x="20" y="12" width="24" height="40" rx="5" fill="#1E3A5F"/>
        <rect x="29" y="22" width="6" height="20" fill="white"/>
        <rect x="23" y="29" width="18" height="6" fill="white"/>
        <rect x="26" y="8" width="12" height="6" rx="2" fill="#2EC4B6"/>
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                    Medication Management
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                     Safe medication management and monitoring according to physician orders and individualized care plans.
                    </p>
                  </div>
    
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <rect x="18" y="14" width="28" height="36" rx="4" fill="#1E3A5F"/>
        <path
          d="M26 32L31 37L39 27"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                     Wound Care
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                      Professional wound care services that promote healing, reduce complications, and support a safe recovery.
                    </p>
                  </div>
    
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="18" fill="#1E3A5F"/>
        <path
          d="M20 32H26L30 24L35 40L38 32H44"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                     Chronic Disease Management
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                     Ongoing nursing support to help clients manage chronic health conditions while maintaining their quality of life.
                    </p>
                  </div>

                       <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <path
          d="M16 18H48V46H16V18Z"
          fill="#1E3A5F"
        />
        <path
          d="M24 32L30 38L40 26"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                     Post-Hospital Care
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                    Skilled nursing care that supports a smooth transition from hospital to home while promoting recovery.
                    </p>
                  </div>

                   <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="6" fill="#1E3A5F"/>
        <path
          d="M32 24V48"
          stroke="#1E3A5F"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M22 34H42"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                    Patient Education
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                    Helping clients and families understand health conditions, treatments, and ongoing care through clear guidance.
                    </p>
                  </div>

                       <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="18" cy="18" r="5" fill="#1E3A5F"/>
        <circle cx="46" cy="18" r="5" fill="#1E3A5F"/>
        <circle cx="32" cy="46" r="5" fill="#2EC4B6"/>
        <path
          d="M22 20L42 20"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M22 22L30 42"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M42 22L34 42"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
                    </div>
    
                    <h3 className="font-bold text-[#1E3A5F] text-xl">
                    Care Coordination
                    </h3>
    
                    <p className="text-gray-600 mt-3 leading-7">
                  Coordinating with physicians, families, and healthcare providers to ensure seamless, client-centered nursing care.
                    </p>
                  </div>
    
                </div>
              </motion.div>
    
            </div>
    
          </div>
        </section>
    )
}

export default SkilledSection2;