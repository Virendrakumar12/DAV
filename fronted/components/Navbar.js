'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const loginOptions = [
  { role: 'Student', path: 'https://new-school-5kv1.vercel.app/StudentLogin', emoji: '🧑‍🎓' },
  { role: 'Parent', path: 'https://new-school-5kv1.vercel.app/ParentLogin', emoji: '👨‍👩‍👧' },
  { role: 'Teacher', path: 'https://new-school-5kv1.vercel.app/TeacherLogin', emoji: '👨‍🏫' },
  { role: 'School', path: 'https://new-school-5kv1.vercel.app/Login', emoji: '🏫' },
];

// Navigation links with full paths
const navLinks = [
  
  { label: 'About', path: '/About' },
  { label: 'Admission', path: '/Admission' },
  { label: 'Contact', path: '/Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleLoginRedirect = (path) => {
    setModalOpen(false);
    router.push(path);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            className="text-xl font-extrabold cursor-pointer flex items-center gap-2"
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🏫{' '}
            <span className="bg-white text-indigo-600 px-2 py-1 rounded">
              DAV PUBLIC SCHOOL
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-semibold text-white tracking-wide">
            {navLinks.map(({ label, path }) => (
              <motion.li
                key={label}
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <button
                  onClick={() => router.push(path)}
                  className="hover:text-yellow-300 transition capitalize"
                >
                  {label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-yellow-400 text-indigo-800 px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              🎉 Login
            </button>
          </motion.div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden bg-white text-indigo-800 px-6 py-4 space-y-3 border-t rounded-b-lg shadow-md"
            >
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => {
                      router.push(path);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left hover:text-blue-600 transition capitalize"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setModalOpen(true);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left text-blue-600 font-semibold"
                >
                  🎉 Login
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-6 relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-extrabold mb-5 text-center text-indigo-700">
                Select Login Role
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {loginOptions.map(({ role, path, emoji }) => (
                  <motion.button
                    key={role}
                    onClick={() => handleLoginRedirect(path)}
                    className="w-full bg-gradient-to-r from-blue-100 to-blue-200 hover:from-yellow-100 hover:to-yellow-200 text-blue-900 py-3 rounded-xl flex flex-col items-center gap-2 font-medium transition-all shadow hover:shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                  >
                    <span className="text-2xl">{emoji}</span>
                    <span>{role}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
