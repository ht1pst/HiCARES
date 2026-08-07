import overviewImg from "../assets/homehealthsection2img.jpg";
import { motion } from "framer-motion";
function HomeHealthsection2(){
const features = [
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Person */}
        <circle cx="32" cy="18" r="8" fill="#1E3A5F" />
        <path
          d="M20 48V36C20 31 25 28 32 28C39 28 44 31 44 36V48"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Personal Care",
    text: "Providing respectful assistance with daily personal care to help clients remain comfortable, independent, and confident at home.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Eye */}
        <path
          d="M8 32C12 22 21 16 32 16C43 16 52 22 56 32C52 42 43 48 32 48C21 48 12 42 8 32Z"
          stroke="#1E3A5F"
          strokeWidth="4"
        />
        <circle cx="32" cy="32" r="6" fill="#2EC4B6" />
      </svg>
    ),
    title: "Observation & Reporting",
    text: "Monitoring clients for changes in health or wellbeing and reporting important observations to support quality care.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Helping Hands */}
        <path
          d="M18 38L28 28L34 34L46 22"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 46H52"
          stroke="#1E3A5F"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Daily Living Support",
    text: "Helping clients with everyday activities while encouraging independence, comfort, and a safe daily routine.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Heartbeat */}
        <circle cx="32" cy="32" r="20" stroke="#1E3A5F" strokeWidth="4" />
        <path
          d="M18 32H26L30 24L35 40L39 30H46"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Health Monitoring",
    text: "Supporting ongoing health through routine monitoring and helping identify changes that may require attention.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Shield */}
        <path
          d="M32 10L48 16V30C48 41 40 49 32 54C24 49 16 41 16 30V16L32 10Z"
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
    ),
    title: "Client Comfort & Safety",
    text: "Creating a safe, supportive environment that promotes comfort, confidence, and overall wellbeing every day.",
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
                   Home Health Aide
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                     Compassionate personal care and health-related support provided by trained Home Health Aides to promote comfo
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
                   Home Health Aide
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                    HiCARES provides Home Health Aide Services to assist clients with
  personal care and everyday activities in the comfort of their home.
  Our trained aides work under the supervision of a registered nurse to
  deliver compassionate support that promotes comfort, independence, and
  overall well-being.
                </p>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                From assisting with daily activities and personal care to observing
  changes in health and promoting client comfort and safety, our Home
  Health Aides provide dependable support that helps clients maintain
  their independence while giving families greater peace of mind.
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

export default HomeHealthsection2;