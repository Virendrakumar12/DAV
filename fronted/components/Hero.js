import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 leading-tight mb-4">
                DAV Public School
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Empowering Education Since 1886
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-xl">
                Committed to excellence, moral values, and all-round development of every child.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition"
                >
                  Explore Programs
                </motion.button>
                
              </div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.img
              src="/dav.svg"
              alt="DAV Public School"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="w-full max-w-md mx-auto md:mx-0"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient or Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
