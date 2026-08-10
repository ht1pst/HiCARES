import overviewImg from "../assets/medicineassistsec2img.jpg";
import { motion } from "framer-motion";
function MedicineAssistSection2(){
const features = [
  {
    icon: (
      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="20" fill="#1E3A5F"/>
        <path
          d="M32 18V32L40 38"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Medication Reminders",
    text: "Timely reminders help clients stay on schedule with their prescribed medications and maintain consistent treatment routines.",
  },

  {
    icon: (
      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <rect x="18" y="14" width="28" height="36" rx="5" fill="#1E3A5F"/>
        <rect x="26" y="8" width="12" height="8" rx="2" fill="#2EC4B6"/>
        <path
          d="M24 32L30 38L40 26"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Self-Administration Assistance",
    text: "Providing appropriate assistance with self-administering medications while encouraging safety, confidence, and independence.",
  },

  {
    icon: (
      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <rect x="14" y="18" width="36" height="28" rx="4" fill="#1E3A5F"/>
        <line x1="26" y1="18" x2="26" y2="46" stroke="white" strokeWidth="3"/>
        <line x1="38" y1="18" x2="38" y2="46" stroke="white" strokeWidth="3"/>
        <circle cx="20" cy="24" r="2" fill="#2EC4B6"/>
        <circle cx="32" cy="24" r="2" fill="#2EC4B6"/>
        <circle cx="44" cy="24" r="2" fill="#2EC4B6"/>
      </svg>
    ),
    title: "Medication Organization",
    text: "Organizing medications to help clients follow their prescribed schedules accurately and reduce the risk of missed doses.",
  },

  {
    icon: (
      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="28" cy="28" r="14" stroke="#1E3A5F" strokeWidth="4"/>
        <line x1="38" y1="38" x2="48" y2="48" stroke="#1E3A5F" strokeWidth="4" strokeLinecap="round"/>
        <path
          d="M22 28H34"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Medication Monitoring",
    text: "Observing for medication-related concerns and reporting changes to help support safe, effective, and ongoing care.",
  },

  {
    icon: (
      <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
        <circle cx="20" cy="20" r="5" fill="#1E3A5F"/>
        <circle cx="44" cy="20" r="5" fill="#1E3A5F"/>
        <circle cx="32" cy="44" r="5" fill="#2EC4B6"/>

        <path
          d="M24 22L40 22"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24 24L30 40"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M40 24L34 40"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Healthcare Communication",
    text: "Maintaining communication with healthcare providers to address medication concerns and support coordinated client care.",
  },
];

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
                   Medicine Assistance
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                    Safe medication support to help clients stay on schedule, organized, and confident while following their prescribed care plan.
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
                   Medication Assistance
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                    HiCARES provides medication management and assistance to help clients
  safely follow their prescribed medication routines. Our caregivers
  offer dependable support that encourages consistency while promoting
  health, independence, and peace of mind.
                </p>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                 From medication reminders and organization to monitoring concerns and
  communicating with healthcare providers when appropriate, we help
  clients manage their medications confidently while reducing the risk
  of missed or incorrect doses.
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

export default MedicineAssistSection2;