import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBullhorn, FaRunning, FaUsers } from "react-icons/fa";

const updatesData = {
  news: [
    {
      id: 1,
      title: "Annual Exhibition",
      description: "Showcasing innovative projects and creative achievements.",
      date: "2025-06-01",
      icon: <FaBullhorn className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Cultural Festival",
      description: "Celebrating diversity through art, music, and dance.",
      date: "2025-07-15",
      icon: <FaUsers className="text-green-500" />,
    },
  ],
  events: [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      description: "Join us for our monthly progress discussion.",
      date: "2025-06-20",
      icon: <FaCalendarAlt className="text-yellow-500" />,
    },
    {
      id: 2,
      title: "Sports Day",
      description: "Annual sports competition and athletic showcase.",
      date: "2025-08-05",
      icon: <FaRunning className="text-red-500" />,
    },
  ],
};

const Updates = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-extrabold text-blue-900 tracking-tight mb-3">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Stay informed about our school activities and events at DAV Public
            School.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* News Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-800 mb-8 border-b-2 border-blue-300 pb-2">
              News
            </h3>

            <div className="space-y-8">
              {updatesData.news.map(({ id, title, description, date, icon }) => (
                <motion.div
                  key={id}
                  whileHover={{ x: 15, scale: 1.03 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4 items-start border-l-4 border-blue-500"
                >
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-700 mb-1">
                      {title}
                    </h4>
                    <p className="text-gray-600 mb-2">{description}</p>
                    <time className="text-sm text-gray-400 italic">
                    
                    </time>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-800 mb-8 border-b-2 border-green-300 pb-2">
              Upcoming Events
            </h3>

            <div className="space-y-8">
              {updatesData.events.map(({ id, title, description, date, icon }) => (
                <motion.div
                  key={id}
                  whileHover={{ x: 15, scale: 1.03 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4 items-start border-l-4 border-green-500"
                >
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-700 mb-1">
                      {title}
                    </h4>
                    <p className="text-gray-600 mb-2">{description}</p>
                    <time className="text-sm text-gray-400 italic">
                     
                    </time>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
