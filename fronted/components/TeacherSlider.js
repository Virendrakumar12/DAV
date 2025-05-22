import React, { useEffect, useState, useRef } from "react";

const teachers = [
  {
    name: "Amit Sharma",
    subject: "Mathematics",
    bio: "Amit Sharma has been teaching Mathematics for over 12 years and is known for his engaging and interactive teaching style.",
    image: "/images/teachers/amit.jpg",
  },
  {
    name: "Neha Verma",
    subject: "Science",
    bio: "Neha specializes in simplifying complex science concepts and has helped many students fall in love with the subject.",
    image: "/images/teachers/neha.jpg",
  },
  {
    name: "Rahul Sinha",
    subject: "English",
    bio: "Rahul has a knack for literature and communication, inspiring students through poetry and storytelling.",
    image: "/images/teachers/rahul.jpg",
  },
  {
    name: "Sunita Das",
    subject: "Social Science",
    bio: "Sunita connects history and civics with real-world events to create thoughtful global citizens.",
    image: "/images/teachers/sunita.jpg",
  },
  {
    name: "Virendra Kumar",
    subject: "Computer Science",
    bio: "Virendra is passionate about technology and programming, making students industry-ready with hands-on projects.",
    image: "/images/teachers/vire.jpg",
  },
];

const TeacherCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const intervalRef = useRef(null);

  // Go to next teacher
  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
    pauseAutoSlide();
  };

  // Go to previous teacher
  const prevTeacher = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
    pauseAutoSlide();
  };

  // Select teacher by dot
  const selectTeacher = (index) => {
    setCurrentIndex(index);
    pauseAutoSlide();
  };

  // Pause auto sliding
  const pauseAutoSlide = () => {
    setIsAutoSlide(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume auto sliding
  const resumeAutoSlide = () => {
    setIsAutoSlide(true);
  };

  useEffect(() => {
    if (isAutoSlide) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % teachers.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoSlide]);

  const teacher = teachers[currentIndex];

  return (
    <section
      className="bg-gradient-to-b from-blue-50 to-white py-16 px-4"
      aria-label="Teacher Profiles Slider"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 select-none">
        Meet Our Teachers
      </h2>

      <div
        onMouseEnter={pauseAutoSlide}
        onMouseLeave={resumeAutoSlide}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 transition-all duration-700 hover:shadow-3xl cursor-pointer group"
        aria-live="polite"
      >
        {/* Text Info */}
        <div
          key={teacher.name}
          className="md:w-1/2 text-left space-y-4 transition-opacity duration-700 opacity-100"
          style={{ minHeight: "180px" }}
        >
          <h3 className="text-3xl font-bold text-blue-800 tracking-wide">
            {teacher.subject}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">{teacher.bio}</p>
        </div>

        {/* Teacher Image and Name */}
        <div className="md:w-1/2 flex flex-col items-center space-y-4">
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg transform transition-transform duration-500 group-hover:scale-105">
            <img
              src={teacher.image}
              alt={`${teacher.name}, ${teacher.subject} Teacher`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-2xl font-semibold text-blue-900 select-text">
            {teacher.name}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          aria-label="Previous Teacher"
          onClick={prevTeacher}
          className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          &#8592; Prev
        </button>
        <button
          aria-label="Next Teacher"
          onClick={nextTeacher}
          className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Next &#8594;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {teachers.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Select ${teachers[idx].name}`}
            onClick={() => selectTeacher(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-blue-600 scale-125"
                : "bg-blue-300 hover:bg-blue-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeacherCardSlider;
