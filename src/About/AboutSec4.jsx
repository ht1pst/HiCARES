import AboutSec3 from "./AboutSec3"
import { motion } from "framer-motion";
import quality from "../assets/star.png";
import phunk from "../assets/phunksc.png";
import partner from "../assets/partner2.webp";

function AboutSec4(){
    const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
    return(
        
    <section className=" lg:h-auto pb-10 lg:pt-20 px-[20px]">

      {/* Section Title */}
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-black font-bold mt-10 lg:text-6xl text-4xl ">
          HiCARES{" "}
          <span className="text-black ">
            Values.
          </span>
        </h1>
      </motion.div>

      {/* First Row */}
      <div className="flex flex-col lg:px-4 lg:flex-row lg:gap-3 gap-[20px] justify-center pt-10">
        <motion.div
          className="lg:w-135 w-[100%] h-auto   bg-[#DFF7F2] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="lg:px-5 lg:py-5 p-[20px]">
        
            <div className="flex justify-between items-center text-4xl">
                <div>
                 

 <h1 className="text-black font-bold  lg:text-md text-[30px] ">
               Compassion
              </h1>
</div>
        
             <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "rgb(0, 0, 0)", // Tailwind gray-600
  }}
>
  01
</p>

            </div>
            <p className="text-gray-500 #635e5e lg:w-125 w-[100%]  text-[15px] pt-5 ">
             We believe exceptional care begins with genuine compassion. Every client is treated with kindness, dignity, and respect, ensuring they feel valued, supported, and comfortable in their own home. We take the time to listen, understand individual needs, and provide care that makes a meaningful difference every single day.
            </p>
          </div>
        </motion.div>



         <motion.div
          className="lg:w-135 w-[100%] h-auto   bg-[#FFF4D6] rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="lg:px-5 lg:py-5 p-[20px]">
        
            <div className="flex justify-between items-center text-4xl">
                <div>
                 

 <h1 className="text-black font-bold  lg:text-md text-[30px] ">
              Excellence
              </h1>
</div>
        
             <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "rgb(0, 0, 0)", // Tailwind gray-600
  }}
>
  02
</p>

            </div>
            <p className="text-gray-500 #635e5e lg:w-125 w-[100%]  text-[15px] pt-5 ">
             We never compromise on the quality of care we provide. Every service is delivered with professionalism, attention to detail, and a commitment to the highest standards. From daily assistance to specialized support, we continuously strive to exceed expectations and improve the lives of those we serve.
            </p>
          </div>
        </motion.div>
      </div>

 

      {/* Second Row */}
      <div className="flex flex-col lg:px-4 lg:flex-row lg:gap-3 gap-5 justify-center pt-10 lg:pt-5">
      <motion.div
          className="lg:w-135 w-[100%] h-auto  bg-[#FFE8DE]  rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="lg:px-5 lg:py-5 p-[20px]">
        
            <div className="flex justify-between items-center text-4xl">
                <div>
                 

 <h1 className="text-black font-bold  lg:text-md text-[30px] ">
               Integrity
              </h1>
</div>
        
             <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "rgb(0, 0, 0)", // Tailwind gray-600
  }}
>
  03
</p>

            </div>
            <p className="text-gray-500 #635e5e lg:w-125 w-[100%]  text-[15px] pt-5 ">
            Trust is the foundation of every relationship we build. We are honest, transparent, and accountable in everything we do, always acting in the best interests of our clients and their families. Our commitment to ethical care ensures peace of mind and confidence in every decision we make.
            </p>
          </div>
        </motion.div>


       <motion.div
          className="lg:w-135 w-[100%]h-auto  bg-[#F2E8FF]  rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="lg:px-5 lg:py-5 p-[20px]">
        
            <div className="flex justify-between items-center text-4xl">
                <div>
                 

 <h1 className="text-black font-bold  lg:text-md text-[30px] ">
               Personalized Care
              </h1>
</div>
        
             <p
  className="lg:text-7xl text-6xl font-extrabold leading-none text-transparent"
  style={{
    WebkitTextFillColor: "transparent", // ensure no fill color
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "rgb(0, 0, 0)", // Tailwind gray-600
  }}
>
  04
</p>

            </div>
            <p className="text-gray-500 #635e5e lg:w-125 w-[100%]  text-[15px] pt-5 ">
           No two people have the same needs, which is why we never believe in one-size-fits-all care. We carefully tailor every care plan to each client's health, preferences, and lifestyle, ensuring they receive the right level of support while maintaining their independence and quality of life.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Webflow Section */}
      

<div className="flex flex-col lg:flex-row justify-center gap-3 mt-5 h-auto">

<motion.div
  initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
>
    <h1 className="text-[30px] lg:w-135 bg-[#FFF4D6]  lg:px-[10px] p-[20px] h-[50px] items-center flex rounded-xl font-bold"
    
    >Mission</h1>
    <p className="lg:w-135  p-3 bg-gray-100 rounded-xl text-gray-500 mt-3 text-[15px]">To provide compassionate, dependable, and high-quality home care services that promote independence, dignity, safety, and an improved quality of life for every client we serve.
</p>
</motion.div>

<motion.div
  initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
>
    <h1 className="text-[30px] bg-[#FFE8DE] lg:w-135 lg:px-[10px] p-[20px] h-[50px] items-center flex rounded-xl font-bold">Vision</h1>
    <p className="lg:w-135  p-3 bg-gray-100 rounded-xl text-gray-500 mt-3 text-[15px]">To become one of Minnesota’s most trusted home care providers by delivering exceptional, person-centered care that empowers individuals to live safely and independently in their own homes.
</p>
</motion.div>


</div>

    </section>

    

    )
}

export default AboutSec4;