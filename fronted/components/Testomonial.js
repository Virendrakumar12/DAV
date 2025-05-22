import React from 'react';

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Class 10 Student",
    quote:
      "Studying at this school has completely changed my life. The teachers are supportive and the environment is amazing!",
    image: "/images/student1.jpg", // Put the image in public/images
  },
  {
    name: "Rajiv Kumar",
    role: "Parent",
    quote:
      "I’ve seen great progress in my child’s learning. The teachers really care and communicate well with us.",
    image: "/images/parent1.jpg",
  },
  {
    name: "Priya Verma",
    role: "Class 12 Student",
    quote:
      "The focus on board results and practical learning helped me score well and gain confidence.",
    image: "/images/student2.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">💬 Testimonials</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-blue-50 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow"
            />
            <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
            <h3 className="text-lg font-semibold text-blue-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
