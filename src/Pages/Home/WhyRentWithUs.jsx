import React from "react";

export default function WhyRentWithUs() {
  const features = [
    {
      title: "Affordable Rates",
      desc: "We offer the most competitive prices in town — get premium service without breaking the bank.",
      icon: "💰",
    },
    {
      title: "Trusted by Thousands",
      desc: "Our customers love us! With 5-star ratings and years of experience, we make renting easy and reliable.",
      icon: "⭐",
    },
    {
      title: "Flexible Rentals",
      desc: "Choose from daily, weekly, or monthly plans to match your schedule perfectly.",
      icon: "🕒",
    },
    {
      title: "24/7 Support",
      desc: "Our friendly support team is always available to help with any questions or issues.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Rent With <span className="text-blue-600">Us?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience hassle-free rentals with transparent pricing, reliable service, and unbeatable flexibility.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
