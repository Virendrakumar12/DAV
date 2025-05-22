import React, { useState, useEffect } from "react";
import Image from "next/image";

const PrincipalCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleImageClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-100 to-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>

      <div
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:flex md:items-center gap-10 group hover:shadow-blue-500/30 transition-shadow duration-500">
          {/* Principal Image */}
          <div className="relative flex-shrink-0 mb-8 md:mb-0 cursor-pointer">
            <div className="rounded-full border-8 border-blue-500 p-1 shadow-lg hover:shadow-xl transition-shadow duration-400 transform hover:scale-110">
              <Image
                src="/images/pr.jpg"
                alt="Principal CHHOTAN MAHTO"
                width={160}
                height={160}
                className="rounded-full object-cover"
                onClick={handleImageClick}
                priority
              />
              {/* Soft glowing ring */}
              <span className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-70 animate-pulse pointer-events-none"></span>
            </div>
          </div>

          {/* Text info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 relative inline-block mb-3 cursor-default group-hover:text-blue-700 transition-colors duration-300">
              RAJ MAHTO
              <span className="absolute bottom-0 left-0 h-1 bg-blue-400 rounded-full transition-all duration-500 group-hover:w-full w-20"></span>
            </h2>
            <p className="text-xl text-blue-700 font-semibold italic mb-6 tracking-wide">
              Principal, DAV Public School
            </p>
            <p className="text-gray-800 text-lg max-w-xl leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-400">
              With over 10 years of dedicated service, Principal RAJ MAHTO
              leads DAV Public School with a vision to cultivate excellence,
              integrity, and innovation. His focus is on shaping future leaders
              who excel academically and grow with strong values.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            className="relative max-w-md max-h-[80vh] animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/pr.jpg"
              alt="Principal RAJ MAHTO Full Size"
              width={600}
              height={600}
              className="rounded-3xl object-cover shadow-2xl border-8 border-white"
              priority
            />
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 text-white text-5xl font-extrabold hover:text-red-600 transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-zoomIn {
          animation: zoomIn 0.35s ease forwards;
        }
        @keyframes zoomIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        /* animation delay helper */
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PrincipalCard;
