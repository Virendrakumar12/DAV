import React from 'react';
import { School, Users, Laptop, Bus, BookOpenCheck, Star } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Experienced Faculty',
    description: 'Our teachers bring decades of academic excellence and innovative teaching methods.',
  },
  {
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    title: 'Outstanding Results',
    description: 'Consistently achieving top board results with student-centric mentorship.',
  },
  {
    icon: <Laptop className="h-8 w-8 text-green-600" />,
    title: 'Smart Classrooms',
    description: 'Equipped with digital tools to enhance interactive and visual learning.',
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-purple-600" />,
    title: 'Personalized Learning',
    description: 'We tailor learning experiences to match each student’s pace and strengths.',
  },
  {
    icon: <Bus className="h-8 w-8 text-orange-500" />,
    title: 'Safe Transport',
    description: 'GPS-enabled buses and responsible staff ensure safety and punctuality.',
  },
  {
    icon: <School className="h-8 w-8 text-pink-600" />,
    title: 'Holistic Development',
    description: 'Sports, arts, and activities build confidence and leadership skills.',
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Our School?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We believe in nurturing not just academic excellence but also confident, ethical, and well-rounded individuals.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 text-left hover:scale-[1.02] transition-transform duration-300 border-t-4 border-blue-100 hover:border-blue-500"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
