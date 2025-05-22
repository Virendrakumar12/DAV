import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BadgeCheck, BookOpen, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: <GraduationCap size={36} className="text-blue-600" />,
    label: 'Students',
    value: 800,
    suffix: '+',
  },
  {
    icon: <BadgeCheck size={36} className="text-green-600" />,
    label: 'Board Results',
    value: 95,
    suffix: '%+',
  },
  {
    icon: <BookOpen size={36} className="text-yellow-500" />,
    label: 'Certified Teachers',
    value: 50,
    suffix: '+',
  },
  {
    icon: <Sparkles size={36} className="text-purple-600" />,
    label: 'Years of Excellence',
    value: 25,
    suffix: '+',
  },
];

// Custom hook to animate counting
const useCounter = (end) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(end / 60);
        const interval = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(interval);
          } else {
            setCount(start);
          }
        }, 16);

        observerRef.current?.disconnect();
      }
    });

    observerRef.current.observe(ref.current);

    return () => observerRef.current?.disconnect();
  }, [end]);

  return [count, ref];
};

const StatItem = ({ icon, label, value, suffix }) => {
  const [count, ref] = useCounter(value);

  return (
    <div
      ref={ref}
      className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-3xl font-extrabold text-blue-800">
        {count}
        <span className="text-blue-600 text-2xl">{suffix}</span>
      </h3>
      <p className="text-gray-600 mt-2 text-lg font-medium">{label}</p>
    </div>
  );
};

const SchoolStats = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">🏫 School Stats</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map(({ icon, label, value, suffix }, idx) => (
          <StatItem
            key={idx}
            icon={icon}
            label={label}
            value={value}
            suffix={suffix}
          />
        ))}
      </div>
    </section>
  );
};

export default SchoolStats;
