import { motion } from "framer-motion";
function SkilledSection3(){
    const features = [
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Medical Cross */}
        <rect x="26" y="12" width="12" height="40" rx="2" fill="#0F2D52" />
        <rect x="12" y="26" width="40" height="12" rx="2" fill="#0F2D52" />

        {/* Heart */}
        <path
          d="M46 18
             C46 15.8 47.8 14 50 14
             C52.2 14 54 15.8 54 18
             C54 22 50 25 50 25
             C50 25 46 22 46 18Z"
          fill="#2EC4B6"
        />
      </svg>
    ),
    title: "Professional Nursing",
    text: "Our licensed nurses provide skilled, compassionate care tailored to each client's medical needs and physician-directed care plan.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="#0F2D52"
          strokeWidth="4"
        />

        <path
          d="M16 32H24L28 24L34 40L38 30H48"
          stroke="#2EC4B6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Health Monitoring",
    text: "Regular health assessments and continuous monitoring help identify changes early while supporting recovery and overall wellness.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect
          x="16"
          y="12"
          width="32"
          height="40"
          rx="4"
          fill="#0F2D52"
        />

        <rect
          x="24"
          y="8"
          width="16"
          height="8"
          rx="3"
          fill="#2EC4B6"
        />

        <rect x="29" y="24" width="6" height="18" fill="white" />
        <rect x="23" y="30" width="18" height="6" fill="white" />
      </svg>
    ),
    title: "Personalized Treatment",
    text: "Every nursing service is customized to support each client's condition, recovery goals, and long-term health needs.",
  },
  {
    icon: (
      <svg
        className="w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 10L48 16V30C48 41 40 49 32 54C24 49 16 41 16 30V16L32 10Z"
          fill="#0F2D52"
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
    title: "Trusted Care",
    text: "Families can feel confident knowing experienced professionals are delivering dependable, high-quality nursing care at home.",
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

export default SkilledSection3