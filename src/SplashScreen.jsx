import { motion } from "framer-motion";
import logo from "./assets/logonew.png";

function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.img
        src={logo}
        alt="HiCARES"
        className="w-[220px] lg:w-[300px]"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* Loading Bar */}
      <div className="w-[220px] lg:w-[300px] h-[6px] bg-gray-200 rounded-full overflow-hidden mt-10">
        <motion.div
          className="h-full bg-[#1E3A5F]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.p
        className="mt-5 text-[#1E3A5F] font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}

export default SplashScreen;