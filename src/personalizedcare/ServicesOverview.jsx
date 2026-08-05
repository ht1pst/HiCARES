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
                 <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  {/* Hands */}
  <path
    d="M18 42C18 36 22 32 28 32H36C42 32 46 36 46 42"
    stroke="#0F2D52"
    strokeWidth="4"
    strokeLinecap="round"
  />

  {/* Heart */}
  <path
    d="M32 30
       C32 30 24 24 24 18
       C24 14.5 26.7 12 30 12
       C31.9 12 33.7 13 35 14.8
       C36.3 13 38.1 12 40 12
       C43.3 12 46 14.5 46 18
       C46 24 38 30 32 34
       C26 30 18 24 18 18
       C18 14.5 20.7 12 24 12
       C27.3 12 30 14.5 30 18"
    fill="#2EC4B6"
  />
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Compassion
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Care delivered with kindness, respect, and genuine
                  understanding.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
                 <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  {/* House */}
  <path
    d="M12 30L32 14L52 30V50C52 51.1 51.1 52 50 52H14C12.9 52 12 51.1 12 50V30Z"
    fill="#0F2D52"
  />

  {/* Door */}
  <rect
    x="28"
    y="36"
    width="8"
    height="16"
    rx="2"
    fill="white"
  />

  {/* Heart */}
  <path
    d="M32 30
       C32 30 26 25 26 20
       C26 17.2 28.2 15 31 15
       C32.5 15 33.9 15.8 35 17
       C36.1 15.8 37.5 15 39 15
       C41.8 15 44 17.2 44 20
       C44 25 38 30 35 32
       C32 30 32 30 32 30Z"
    fill="#2EC4B6"
  />
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Comfort at Home
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Helping clients remain comfortable in familiar surroundings.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
                <svg
  className="w-[40px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
>
  {/* Clipboard */}
  <rect
    x="16"
    y="12"
    width="32"
    height="40"
    rx="4"
    fill="#0F2D52"
  />

  {/* Clipboard Top */}
  <rect
    x="24"
    y="8"
    width="16"
    height="8"
    rx="3"
    fill="#2EC4B6"
  />

  {/* Heart */}
  <path
    d="M32 28
       C32 28 28 24.5 28 21.5
       C28 19.6 29.5 18 31.5 18
       C32.6 18 33.5 18.6 34 19.5
       C34.5 18.6 35.4 18 36.5 18
       C38.5 18 40 19.6 40 21.5
       C40 24.5 36 28 32 30
       C28 28 32 28 32 28Z"
    fill="white"
  />

  {/* Checkmark */}
  <path
    d="M25 40L30 45L39 35"
    stroke="#2EC4B6"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Personalized Care
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Every care plan is tailored to support each client's unique
                  lifestyle and needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#EAF8F6] flex items-center justify-center mb-4">
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

  {/* Heart */}
  <path
    d="M32 38
       C32 38 27 34 27 30
       C27 27.8 28.8 26 31 26
       C32.2 26 33.2 26.6 34 27.6
       C34.8 26.6 35.8 26 37 26
       C39.2 26 41 27.8 41 30
       C41 34 36 38 32 41
       C28 38 32 38 32 38Z"
    fill="#2EC4B6"
  />
</svg>
                </div>

                <h3 className="font-bold text-[#1E3A5F] text-xl">
                  Peace of Mind
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Reliable support for clients and reassurance for their
                  families.
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