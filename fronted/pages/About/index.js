import React from 'react';
import { Lightbulb, Target, BookOpenCheck, Users, Star, Handshake } from 'lucide-react';

const coreValues = [
  { title: 'Excellence', desc: 'Striving for the highest standards in every endeavor.', icon: <Star className="text-yellow-500 w-6 h-6" /> },
  { title: 'Integrity', desc: 'Upholding honesty, ethics, and strong moral character.', icon: <BookOpenCheck className="text-blue-500 w-6 h-6" /> },
  { title: 'Innovation', desc: 'Encouraging creativity and embracing new ideas.', icon: <Lightbulb className="text-purple-500 w-6 h-6" /> },
  { title: 'Respect', desc: 'Fostering a culture of kindness and empathy.', icon: <Users className="text-green-500 w-6 h-6" /> },
  { title: 'Responsibility', desc: 'Developing accountable and dependable individuals.', icon: <Target className="text-red-500 w-6 h-6" /> },
  { title: 'Teamwork', desc: 'Promoting collaboration for collective growth.', icon: <Handshake className="text-indigo-500 w-6 h-6" /> },
];

const About = () => {
  return (
    <div className="pt-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-b from-white via-blue-50 to-white text-gray-800">
      <h1 className="text-4xl font-bold text-red-700 text-center mb-14 underline decoration-red-500">About Our School</h1>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our History</h2>
        <p className="text-lg leading-relaxed">
          Established in <span className="font-bold text-blue-700">2015</span>, Bright Future School started with just 30 eager learners in a small facility.
          Today, we proudly educate over <span className="font-bold text-blue-700">300+ students</span> from diverse communities, offering a
          nurturing environment built on values, discipline, and innovation.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          To emerge as a beacon of excellence in education, nurturing young minds into curious learners, confident communicators,
          and compassionate global citizens.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-4">
          We are dedicated to offering a well-rounded education that inspires students to thrive academically, grow ethically, and
          contribute meaningfully to society. Our mission stands on:
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Academic excellence through innovative teaching methods</li>
          <li>Holistic development with emphasis on values and character</li>
          <li>Technology-driven, modern learning environment</li>
          <li>Community engagement and ecological responsibility</li>
        </ul>
      </section>

      {/* Core Values Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-3">
                {value.icon}
                <h3 className="text-xl font-semibold text-blue-700">{value.title}</h3>
              </div>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <footer className="border-t pt-8 mt-12 text-center text-blue-900">
        <p className="text-lg font-medium">
          Join us in shaping the future — <span className="text-red-600">one student at a time.</span>
        </p>
      </footer>
    </div>
  );
};

export default About;
