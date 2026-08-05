import { motion } from "framer-motion";

function WhyChooseHiCARES() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2EC4B6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364 4.318 12.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      ),
      title: "Compassionate Care",
      text: "Every client is treated with kindness, dignity, and genuine compassion, ensuring they always feel respected and valued.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2EC4B6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 11V7a4 4 0 118 0v4m-9 0h10a2 2 0 012 2v6H5v-6a2 2 0 012-2z"
          />
        </svg>
      ),
      title: "Safe & Reliable",
      text: "We focus on providing dependable care that promotes comfort, safety, and peace of mind for clients and their families.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2EC4B6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-2.761 0-5 2.239-5 5v5h10v-5c0-2.761-2.239-5-5-5zm0 0V5m0 0l-2 2m2-2l2 2"
          />
        </svg>
      ),
      title: "Personalized Support",
      text: "Every care plan is tailored to meet individual needs, preferences, and goals for a truly personal experience.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2EC4B6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Flexible Care",
      text: "Whether you need short-term assistance or ongoing support, our services are designed to fit your lifestyle.",
    },
  ];

  return (
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
  );
}

export default WhyChooseHiCARES;