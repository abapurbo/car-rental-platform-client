import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David P.",
      role: "Business Traveler",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Hertz is my go-to for business trips. The booking process is smooth, and I'm always impressed by the cleanliness and quality of the vehicles.",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "Adventure Seeker",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      review:
        "Rented a Jeep Grand Cherokee for a weekend mountain trip, and it was amazing! The car handled rough roads easily, and we had an incredible time.",
      rating: 5,
    },
    {
      name: "James C.",
      role: "Luxury Enthusiast",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      review:
        "I rented a BMW for a weekend getaway, and it was such a treat! The car was immaculate and luxurious, and the service made everything even more enjoyable.",
      rating: 5,
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto md:px-10 px-6 text-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-black mb-2">
            What Our <span className="text-red-500">Customers Say</span>
          </h2>
          <p className="text-gray-500 md:max-w-lg mx-auto text-lg">
            Hear from our satisfied clients who experienced the comfort and quality of our car rental service.
          </p>
          <div className="w-28 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative bg-white shadow-lg rounded-2xl p-8 pt-12 border-t-4 border-red-500 hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 p-3 rounded-full text-white shadow-lg">
                <Quote size={24} />
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic mb-8">“{t.review}”</p>

              {/* User Info */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-red-500 object-cover"
                />
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
