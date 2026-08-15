import { motion } from "framer-motion";
import careersCtaImg from "../assets/careersection4img.jpg";

function CareersSection5() {
  return (
    <section className="relative overflow-hidden bg-[#064C73]">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="relative min-h-[350px] lg:min-h-[390px] flex items-center">

          {/* Large background circle */}
          <div
            className="
              absolute
              -left-[180px]
              -bottom-[220px]
              w-[520px]
              h-[520px]
              rounded-full
              bg-[#B8EFEA]
            "
          ></div>


          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              absolute
              left-0
              bottom-0
              z-10
              w-[300px]
              lg:w-[430px]
            "
          >
            <img
              src={careersCtaImg}
              alt="HiCARES caregiver supporting a client"
              className="w-full object-contain"
            />
          </motion.div>


          {/* HEART / DECORATIVE LINE */}
          <div
            className="
              absolute
              z-20
              left-[250px]
              lg:left-[360px]
              top-[100px]
              lg:top-[85px]
            "
          >

            <svg
              width="170"
              height="110"
              viewBox="0 0 170 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* Heart */}
              <path
                d="
                  M93 32
                  C93 17 106 9 117 17
                  C128 9 141 17 141 32
                  C141 48 117 64 117 64
                  C117 64 93 48 93 32Z
                "
                stroke="#2EC4B6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Decorative flowing line */}
              <path
                d="
                  M0 78
                  C22 72 34 55 51 55
                  C68 55 73 72 91 72
                  C110 72 116 53 135 53
                  C149 53 158 58 168 62
                "
                stroke="#2EC4B6"
                strokeWidth="2"
                strokeLinecap="round"
              />

            </svg>

          </div>


          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              ml-auto
              w-full
              lg:w-[52%]
              py-16
              lg:py-20
              pl-0
              lg:pl-10
            "
          >

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                text-white
                text-[30px]
                sm:text-[34px]
                lg:text-[40px]
                font-bold
                leading-tight
                max-w-[600px]
              "
            >
              Your Next Career Could Make Someone’s Next Chapter Better.
            </motion.h2>


            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mt-5
                text-gray-200
                text-[16px]
                lg:text-lg
                leading-7
                max-w-[500px]
              "
            >
              Join a team dedicated to compassionate, dependable, and
              person-centered care.
            </motion.p>


            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-7
                bg-[#2EC4B6]
                hover:bg-white
                hover:text-[#1E3A5F]
                text-white
                font-semibold
                px-8
                py-4
                rounded-xl
                transition
              "
            >
              Apply to Join HiCARES →
            </motion.button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CareersSection5;