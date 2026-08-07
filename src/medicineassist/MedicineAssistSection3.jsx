import { motion } from "framer-motion";
function MedicineAssistSection3(){
  const features = [
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Pill */}
        <rect x="16" y="22" width="32" height="18" rx="9" fill="#0F2D52" />
        <path d="M32 22V40" stroke="white" strokeWidth="3" />
        <path
          d="M44 16L48 20L54 12"
          stroke="#2EC4B6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Medication Assistance",
    text: "We provide dependable medication reminders and support to help clients safely follow their prescribed medication routine.",
  },

  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Clock */}
        <circle cx="32" cy="32" r="20" fill="#0F2D52" />
        <path
          d="M32 20V32L40 38"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Timely Reminders",
    text: "Helping clients stay on schedule with reliable medication reminders that encourage consistency and better health outcomes.",
  },

  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Clipboard */}
        <rect x="18" y="14" width="28" height="36" rx="4" fill="#0F2D52" />
        <rect x="26" y="10" width="12" height="6" rx="2" fill="#2EC4B6" />
        <path
          d="M24 28H40M24 36H36"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Medication Organization",
    text: "Keeping medications organized to reduce confusion and support safe, effective medication management every day.",
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
          fill="#0F2D52"
        />

        {/* Medical Cross */}
        <path
          d="M32 22V38M24 30H40"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Safe Medication Practices",
    text: "Promoting safe medication routines while providing reassurance, confidence, and peace of mind for clients and families.",
  },
];
    return(
        <section className="py-10 bg-[#F8FBFC]">
      <div className="max-w-[1300px] lg:mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold">
            Why Choose HiCARES
          </p>

          <h2 className="text-[35px] lg:text-[52px] font-bold text-[#1E3A5F] mt-4 leading-[40px] lg:leading-[50px]">
            Care You Can Feel Good About
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            We are committed to delivering thoughtful, dependable home care
            that helps individuals live safely, comfortably, and independently
            while giving families confidence and peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#EAF8F6] flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default MedicineAssistSection3;