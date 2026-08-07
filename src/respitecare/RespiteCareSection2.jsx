import overviewImg from "../assets/respitecaresection2img.jpg";
import { motion } from "framer-motion";
function RespiteCareSection2(){
const features = [
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Family */}
        <circle cx="24" cy="20" r="6" fill="#1E3A5F" />
        <circle cx="40" cy="20" r="6" fill="#2EC4B6" />
        <path
          d="M14 46V36C14 32 18 29 24 29C30 29 34 32 34 36V46"
          fill="#1E3A5F"
        />
        <path
          d="M30 46V36C30 32 34 29 40 29C46 29 50 32 50 36V46"
          fill="#2EC4B6"
        />
      </svg>
    ),
    title: "Family Caregiver Relief",
    text: "Providing temporary support that gives family caregivers time to rest, recharge, and attend to personal responsibilities.",
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
          d="M32 48C32 48 14 37 14 24C14 18 18 14 24 14C28 14 31 17 32 20C33 17 36 14 40 14C46 14 50 18 50 24C50 37 32 48 32 48Z"
          fill="#1E3A5F"
        />
        <path
          d="M25 30L30 35L40 24"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Compassionate Support",
    text: "Ensuring loved ones continue receiving caring and dependable assistance while family caregivers take a needed break.",
  },

  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Home */}
        <path
          d="M12 30L32 14L52 30V50H12V30Z"
          fill="#1E3A5F"
        />
        <path
          d="M24 50V36H40V50"
          fill="#2EC4B6"
        />
        <path
          d="M20 31H44"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Care at Home",
    text: "Providing reliable respite support in the familiar comfort of home while helping maintain daily routines and safety.",
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
          d="M24 31L30 37L41 25"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Dependable Care",
    text: "Helping families feel confident knowing their loved ones continue receiving safe, consistent, and dependable support.",
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
                   Respite Care
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                    Providing dependable temporary care that gives family caregivers time to rest, recharge, and attend to personal responsibilities while their loved ones continue receiving compassionate support at home.
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
                   Respite Care
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
  HiCARES provides Respite Care to give family caregivers temporary relief
  while ensuring their loved ones continue receiving compassionate,
  dependable support in the comfort and familiarity of home.
</p>

<p className="mt-4 text-gray-600 leading-7 text-[16px]">
  From assistance with daily routines and personal care to companionship and
  safety support, our caregivers help maintain continuity of care while
  family caregivers take time to rest, attend to responsibilities, or
  simply recharge.
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

export default RespiteCareSection2;