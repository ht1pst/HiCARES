import overviewImg from "../assets/servicesoverviewimg.jpg";
import { motion } from "framer-motion";
function ServicesOverview(){
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
                Personalized Care
              </h3>

              <p className="text-gray-600 mt-2 leading- text-[16px]">
                Every care plan is thoughtfully tailored to meet each client's
                unique needs and goals.
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
              Care That Feels Like Home
            </h2>

            <p className="mt-4 text-gray-600 leading-7 text-[16px]">
              At HiCARES, we believe quality home care begins with
              understanding each individual's unique needs. Our compassionate
              team provides thoughtful, personalized support that helps clients
              remain safe, comfortable, and independent in the place they know
              best their home.
            </p>

            <p className="mt-4 text-gray-600 leading-7 text-[16px]">
              Whether you require short-term assistance or ongoing daily care,
              we work closely with clients and their families to create care
              plans that promote dignity, confidence, and peace of mind every
              step of the way.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <path d="M20 28H44V46H20V28Z" fill="#1E3A5F"/>
  <path d="M24 28V22C24 17.5 27.5 14 32 14C36.5 14 40 17.5 40 22" stroke="#2EC4B6" strokeWidth="4" strokeLinecap="round"/>
  <circle cx="48" cy="18" r="2" fill="#2EC4B6"/>
  <circle cx="52" cy="24" r="2" fill="#2EC4B6"/>
  <circle cx="46" cy="24" r="2" fill="#2EC4B6"/>
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Bathing & Personal Hygiene
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Respectful assistance with bathing, grooming, and personal hygiene to help clients stay clean, comfortable, and confident.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
     <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <path d="M24 14L18 22L24 28L28 22H36L40 28L46 22L40 14H24Z" fill="#1E3A5F"/>
  <path d="M28 22V50H36V22" fill="#2EC4B6"/>
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Dressing & Grooming
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Helping clients dress comfortably and maintain a neat, well-groomed appearance while preserving independence and dignity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
       <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="24" cy="14" r="5" fill="#1E3A5F"/>
  <path d="M24 20L30 30L40 26" stroke="#1E3A5F" strokeWidth="4" strokeLinecap="round"/>
  <path d="M30 30L24 46" stroke="#2EC4B6" strokeWidth="4" strokeLinecap="round"/>
  <path d="M30 30L42 44" stroke="#2EC4B6" strokeWidth="4" strokeLinecap="round"/>
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Mobility & Transfers
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                 Safe assistance with walking, repositioning, and transfers to help clients move confidently throughout their daily routine.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
                <svg className="w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="16" r="5" fill="#1E3A5F"/>
  <path d="M32 22V44" stroke="#1E3A5F" strokeWidth="4" strokeLinecap="round"/>
  <path d="M20 30H44" stroke="#2EC4B6" strokeWidth="4" strokeLinecap="round"/>
  <path d="M24 50H40" stroke="#2EC4B6" strokeWidth="4" strokeLinecap="round"/>
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                 Daily Living Support
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Assistance with eating, toileting, and everyday routines to promote independence, comfort, and overall well-being.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default ServicesOverview;