import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Send us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-10"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">School Address</h3>
                  <p className="text-gray-700">
                    NH33 Road, Near Damodar River <br />
                    Kaitha, Ramgarh <br />
                    Jharkhand, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">Phone & Email</h3>
                  <p className="text-gray-700">Phone: (06553) 123456</p>
                  <p className="text-gray-700">Email: info@sunriseschool.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">Office Hours</h3>
                  <p className="text-gray-700">Mon - Fri: 8:00 AM - 2:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 12:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
