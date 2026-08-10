import overviewImg from "../assets/carecoordinationsection2img.webp";
import { motion } from "framer-motion";

function CompanionCareSection2() {
  const features = [
    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Conversation */}
          <path
            d="M12 16H52V42H28L18 50V42H12V16Z"
            fill="#1E3A5F"
          />
          <circle cx="24" cy="29" r="3" fill="#2EC4B6" />
          <circle cx="32" cy="29" r="3" fill="#2EC4B6" />
          <circle cx="40" cy="29" r="3" fill="#2EC4B6" />
        </svg>
      ),
      title: "Friendly Conversation",
      text: "Providing meaningful conversation and companionship to help clients feel connected, valued, and supported.",
    },

    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Activity */}
          <circle
            cx="32"
            cy="32"
            r="20"
            fill="#1E3A5F"
          />
          <path
            d="M22 34L28 40L42 25"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Games & Activities",
      text: "Encouraging enjoyable games and activities that promote engagement, social interaction, and a positive daily routine.",
    },

    {
      icon: (
        <svg
          className="w-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Book */}
          <path
            d="M12 16C20 14 27 16 32 20V50C27 46 20 44 12 46V16Z"
            fill="#1E3A5F"
          />
          <path
            d="M52 16C44 14 37 16 32 20V50C37 46 44 44 52 46V16Z"
            fill="#2EC4B6"
          />
          <path
            d="M32 20V50"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      ),
      title: "Reading",
      text: "Supporting clients with reading and other quiet activities that provide comfort, enjoyment, and meaningful engagement.",
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
            d="M30 21L25 34L20 48"
            stroke="#1E3A5F"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M30 23L40 32L45 46"
            stroke="#2EC4B6"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M25 34L37 36"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Walks & Outings",
      text: "Helping clients enjoy walks and community outings while providing companionship and support along the way.",
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
            x="12"
            y="16"
            width="40"
            height="36"
            rx="4"
            fill="#1E3A5F"
          />
          <path
            d="M20 12V22M44 12V22"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M20 30H44"
            stroke="#2EC4B6"
            strokeWidth="3"
          />
          <circle cx="24" cy="39" r="3" fill="#2EC4B6" />
          <circle cx="32" cy="39" r="3" fill="#2EC4B6" />
          <circle cx="40" cy="39" r="3" fill="#2EC4B6" />
        </svg>
      ),
      title: "Appointment Companionship",
      text: "Accompanying clients to appointments and providing dependable companionship and support throughout their visit.",
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
            d="M32 50C32 50 12 38 12 24C12 18 16 14 22 14C27 14 30 17 32 21C34 17 37 14 42 14C48 14 52 18 52 24C52 38 32 50 32 50Z"
            fill="#1E3A5F"
          />
          <path
            d="M24 30C26 34 29 36 32 36C35 36 38 34 40 30"
            stroke="#2EC4B6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Emotional Support",
      text: "Offering compassionate companionship and emotional support to help reduce isolation and improve quality of life.",
    },
  ];

  return (
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
                Companion Care
              </h3>

              <p className="text-gray-600 mt-2 leading- text-[16px]">
                Meaningful companionship and emotional support designed to
                reduce isolation and improve quality of life.
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
              Compassionate Companionship at Home
            </h2>

            <p className="mt-4 text-gray-600 leading-7 text-[16px]">
              HiCARES provides companion care to offer meaningful
              companionship and emotional support for clients who may
              experience isolation or benefit from having someone by their
              side. Our caregivers create opportunities for connection,
              conversation, and enjoyable daily activities.
            </p>

            <p className="mt-4 text-gray-600 leading-7 text-[16px]">
              From friendly conversation and reading to walks, community
              outings, and appointment companionship, we help clients remain
              engaged and supported while promoting comfort, connection, and
              an improved quality of life.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
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
  );
}

export default CompanionCareSection2;