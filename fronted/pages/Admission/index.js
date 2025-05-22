import React from 'react';
import { FaFileAlt, FaClipboardCheck, FaComments, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
};

const Admissions = () => {
  return (
    <div className="pt-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-blue-900"
      >
        Admissions
      </motion.h1>

      {/* Admission Process */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaFileAlt className="text-blue-500 text-3xl mb-4" />,
              title: 'Step 1: Application',
              description: 'Complete and submit the online application form with required documents.',
            },
            {
              icon: <FaClipboardCheck className="text-green-500 text-3xl mb-4" />,
              title: 'Step 2: Assessment',
              description: 'Schedule and complete the entrance assessment.',
            },
            {
              icon: <FaComments className="text-purple-500 text-3xl mb-4" />,
              title: 'Step 3: Interview',
              description: 'Parent and student interview with school administrators.',
            },
          ].map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl cursor-default transition duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Requirements</h2>
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Required Documents</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Completed application form</li>
            <li>Birth certificate</li>
            <li>Previous academic records</li>
            <li>Passport-size photographs</li>
            <li>Transfer certificate (if applicable)</li>
          </ul>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-800">
          <FaQuestionCircle className="text-indigo-500" /> Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question: 'What age group do you accept?',
              answer: 'We accept students starting from 5 years of age for Grade 1 and above.',
            },
            {
              question: 'Is there an entrance test?',
              answer: 'Yes, students are assessed through a basic entrance test before admission is confirmed.',
            },
            {
              question: 'Are scholarships available?',
              answer: 'Yes, merit-based scholarships are available. Contact the admissions office for details.',
            },
          ].map(({ question, answer }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <h4 className="font-semibold text-lg mb-2 text-blue-900">{question}</h4>
              <p className="text-gray-700">{answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 text-center shadow-lg">
        <motion.h2
          className="text-2xl font-bold mb-3 text-blue-900"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Join Us?
        </motion.h2>
        <motion.p
          className="mb-6 text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Start your journey with us today. Contact our admissions team for any help or guidance.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-shadow shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Admissions
        </motion.a>
      </section>
    </div>
  );
};

export default Admissions;
