import overviewImg from "../assets/transportsection2img.webp";
import { motion } from "framer-motion";
function TransportSection2(){
const features = [
    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Car */}
          <path
            d="M14 38L18 24C19 21 21 20 24 20H40C43 20 45 21 46 24L50 38V46H14V38Z"
            fill="#1E3A5F"
          />
          <circle cx="22" cy="42" r="4" fill="#2EC4B6" />
          <circle cx="42" cy="42" r="4" fill="#2EC4B6" />
          <path
            d="M18 32H46"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Medical Appointments",
      text: "Providing dependable transportation support to help clients attend medical appointments safely and on time.",
    },

    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Pharmacy */}
          <path
            d="M16 18H48V50H16V18Z"
            fill="#1E3A5F"
          />
          <path
            d="M26 12H38V20H26V12Z"
            fill="#2EC4B6"
          />
          <path
            d="M32 26V40M25 33H39"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Pharmacy Visits",
      text: "Helping clients access pharmacy services and pick up essential medications while supporting their independence.",
    },

    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Grocery Bag */}
          <path
            d="M16 24H48L45 50H19L16 24Z"
            fill="#1E3A5F"
          />
          <path
            d="M24 24V20C24 16 27 14 32 14C37 14 40 16 40 20V24"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M25 34H39"
            stroke="#2EC4B6"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Grocery Shopping",
      text: "Assisting clients with grocery shopping and essential purchases to help ensure they have what they need at home.",
    },

    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Banking */}
          <path
            d="M10 26L32 14L54 26H10Z"
            fill="#1E3A5F"
          />
          <path
            d="M16 30V46M26 30V46M38 30V46M48 30V46"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M10 50H54"
            stroke="#1E3A5F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Banking & Essential Errands",
      text: "Providing assistance with banking and other essential errands that help clients manage their everyday responsibilities.",
    },

    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Community */}
          <circle cx="32" cy="18" r="6" fill="#1E3A5F" />
          <circle cx="18" cy="26" r="5" fill="#2EC4B6" />
          <circle cx="46" cy="26" r="5" fill="#2EC4B6" />

          <path
            d="M24 48V36C24 32 27 29 32 29C37 29 40 32 40 36V48"
            fill="#1E3A5F"
          />
          <path
            d="M10 46V38C10 35 13 32 17 32C21 32 24 35 24 38"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M40 38C40 35 43 32 47 32C51 32 54 35 54 38V46"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Community Activities",
      text: "Helping clients remain active and connected by providing support with transportation to community activities and outings.",
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
                  Transportation & Errands
                  </h3>
    
                  <p className="text-gray-600 mt-2 leading- text-[16px]">
                    Dependable transportation and errand support helping clients
                stay active, independent, and connected within their community.
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
                  Reliable Transportation & Errand Support
                </h2>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                    HiCARES provides transportation and errand assistance to help
              clients remain active, independent, and connected within their
              community. Our caregivers offer dependable support for essential
              trips and everyday activities while promoting safety and comfort.
                </p>
    
                <p className="mt-4 text-gray-600 leading-7 text-[16px]">
                  From medical appointments and pharmacy visits to grocery shopping,
              banking, essential errands, and community activities, we help
              clients access the places and services they need while maintaining
              greater independence in their daily lives.
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

export default TransportSection2;