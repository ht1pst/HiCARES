import { motion } from "framer-motion";
function WhySection3(){
  const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <circle cx="32" cy="18" r="8" stroke="#8E86B8" strokeWidth="2.5"/>
    <path
      d="M18 49C18 39.6 24.3 32 32 32C39.7 32 46 39.6 46 49"
      stroke="#8E86B8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M26 18C27.5 20 29.5 21 32 21C34.5 21 36.5 20 38 18"
      stroke="#8E86B8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
    ),
    title: "Compassionate & Experienced Caregivers",
    text: "Our dedicated caregivers provide compassionate, professional support with experience you can trust.",
  },

  {
    icon: (
       <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <rect
      x="14"
      y="9"
      width="36"
      height="46"
      rx="4"
      stroke="#4C9B68"
      strokeWidth="2.5"
    />
    <path
      d="M22 21H42"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M22 30H42"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M22 39H34"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M22 47H29"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
    ),
    title: "Personalized Care Plans",
    text: "Care plans are tailored to each client’s unique needs, preferences, and daily routines.",
  },

  {
    icon: (
     <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <circle
      cx="32"
      cy="32"
      r="22"
      stroke="#5B8DB8"
      strokeWidth="2.5"
    />
    <path
      d="M32 19V32L40 38"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 11L15 17"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M43 11L49 17"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
    ),
    title: "Reliable & Dependable Services",
    text: "Count on consistent, dependable care designed to provide peace of mind for clients and families.",
  },

  {
    icon: (
       <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <rect
      x="12"
      y="15"
      width="40"
      height="38"
      rx="5"
      stroke="#D6A52C"
      strokeWidth="2.5"
    />
    <path
      d="M21 10V20"
      stroke="#D6A52C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M43 10V20"
      stroke="#D6A52C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 26H52"
      stroke="#D6A52C"
      strokeWidth="2.5"
    />
    <circle cx="23" cy="36" r="2" fill="#D6A52C"/>
    <circle cx="32" cy="36" r="2" fill="#D6A52C"/>
    <circle cx="41" cy="36" r="2" fill="#D6A52C"/>
    <circle cx="23" cy="44" r="2" fill="#D6A52C"/>
    <circle cx="32" cy="44" r="2" fill="#D6A52C"/>
    <circle cx="41" cy="44" r="2" fill="#D6A52C"/>
  </svg>
    ),
    title: "Flexible Scheduling",
    text: "Flexible care options make it easier to receive the support you need, when you need it.",
  },

  {
    icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <path
      d="M32 52C32 52 11 39 11 24C11 17.5 16 13 22 13C27 13 30 16 32 19C34 16 37 13 42 13C48 13 53 17.5 53 24C53 39 32 52 32 52Z"
      stroke="#C87870"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M23 31L29 37L41 24"
      stroke="#C87870"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
    ),
    title: "Client-Centered Approach",
    text: "We put each client first, respecting their choices, independence, comfort, and individual goals.",
  },

   {
    icon: (
         <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <path
      d="M32 7L50 14V27C50 40 43 50 32 56C21 50 14 40 14 27V14L32 7Z"
      stroke="#5273A6"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M32 19V35"
      stroke="#5273A6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 27H40"
      stroke="#5273A6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
    ),
    title: "Professional Nursing Oversight",
    text: "Experienced nursing professionals help ensure care is delivered safely, effectively, and to high standards.",
  },

   {
    icon: (
  <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <circle
      cx="32"
      cy="32"
      r="22"
      stroke="#9275A8"
      strokeWidth="2.5"
    />
    <path
      d="M10 32H54"
      stroke="#9275A8"
      strokeWidth="2.5"
    />
    <path
      d="M32 10C38 16 41 23 41 32C41 41 38 48 32 54"
      stroke="#9275A8"
      strokeWidth="2.5"
    />
    <path
      d="M32 10C26 16 23 23 23 32C23 41 26 48 32 54"
      stroke="#9275A8"
      strokeWidth="2.5"
    />
  </svg>
    ),
    title: "Respectful & Culturally Sensitive Care",
    text: "We honor every client’s background, values, beliefs, and personal preferences with dignity and respect.",
  },

   {
    icon: (
   <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <path
      d="M10 13H54V43H30L20 52V43H10V13Z"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M20 23H44"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M20 32H38"
      stroke="#4C9B68"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
    ),
    title: "Family-Focused Communication",
    text: "We keep families informed and involved through clear, compassionate, and ongoing communication.",
  },

   {
    icon: (
   <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
    <path
      d="M32 7L51 14V28C51 41 43 51 32 57C21 51 13 41 13 28V14L32 7Z"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 32L29 39L43 24"
      stroke="#5B8DB8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
    ),
    title: "Safety & Quality Care",
    text: "Your safety and well-being are our priority, with a strong commitment to quality, dignity, and dependable care.",
  },
  
];
    return(
        <section className="pt-10 h-auto pb-10">
<div>
    <h1 className="flex justify-center font-bold lg:text-[50px] text-[30px]">WHY CHOOSE US</h1>
</div>
     <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-[100px]  gap-6 mt-7 px-[20px]">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl px-[20px] py-[20px]  lg:w-[400px] shadow-sm border border-gray-100 mx-auto"
    
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

        </section>
    )
}

export default WhySection3