import overviewImg from "../assets/homemakersection2img.jpg";
import { motion } from "framer-motion";
function HomeMakerSection2(){
const features = [
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Pot */}
        <rect x="16" y="24" width="32" height="20" rx="4" fill="#1E3A5F" />
        <path
          d="M20 24V20H44V24M26 14H38"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Meal Preparation",
    text: "Preparing nutritious meals that align with each client's dietary needs, preferences, and daily routine.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Laundry */}
        <rect x="16" y="14" width="32" height="36" rx="4" fill="#1E3A5F" />
        <circle cx="32" cy="32" r="9" fill="#2EC4B6" />
        <circle cx="24" cy="20" r="2" fill="white" />
        <circle cx="30" cy="20" r="2" fill="white" />
      </svg>
    ),
    title: "Laundry Services",
    text: "Keeping clothing, towels, and linens fresh and clean to promote comfort and a healthy living environment.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* House */}
        <path
          d="M12 30L32 14L52 30V50H12V30Z"
          fill="#1E3A5F"
        />
        <path
          d="M24 38H40"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M22 44H42"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Light Housekeeping",
    text: "Helping maintain a clean, tidy home through light housekeeping, dusting, vacuuming, and general organization.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Shopping Bag */}
        <path
          d="M18 22H46L44 48H20L18 22Z"
          fill="#1E3A5F"
        />
        <path
          d="M24 22V18C24 14 27 12 32 12C37 12 40 14 40 18V22"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Grocery Shopping",
    text: "Assisting with grocery shopping and household essentials to ensure clients have everything they need at home.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Storage Boxes */}
        <rect x="16" y="18" width="32" height="10" rx="2" fill="#1E3A5F" />
        <rect x="16" y="34" width="32" height="12" rx="2" fill="#2EC4B6" />
        <path
          d="M32 18V46"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Home Organization",
    text: "Organizing household spaces and changing bed linens to create a safe, comfortable, and welcoming environment.",
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
                   Homemaker Services
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                    Safe homemaking support to help clients maintain a clean, organized, and
comfortable home while promoting independence, well-being, and peace of
mind in their daily lives.
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
                   Homemaker Services
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                    HiCARES provides Homemaker Services to help clients maintain a clean,
  organized, and comfortable home environment. Our caregivers assist with
  everyday household tasks that promote safety, independence, and peace of
  mind while supporting each client's daily routine.
                </p>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                  From meal preparation and laundry to light housekeeping, vacuuming,
  dusting, changing bed linens, grocery shopping, and household organization,
  we help create a safe, welcoming home that enhances comfort and overall
  quality of life.
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

export default HomeMakerSection2;