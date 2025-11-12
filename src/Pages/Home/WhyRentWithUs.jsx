import React from "react";
import './styles.css'
export default function WhyRentWithUs() {
  const features = [
    {
      title: "Easy Booking",
      desc: "Book your desired car in just a few clicks — fast, simple, and hassle-free.",
      icon: "🚗",
    },
    {
      title: "Affordable Rates",
      desc: "We offer the most competitive prices in town — premium service without breaking the bank.",
      icon: "💰",
    },
    {
      title: "Trusted Providers",
      desc: "Thousands of happy customers trust us for our reliability and top-quality vehicles.",
      icon: "⭐",
    },
    {
      title: "24/7 Support",
      desc: "Our friendly support team is always available to help with any questions or issues.",
      icon: "📞",
    },
  ];


  return (
    <section className="relative py-20 px-6 mt-24  lg:px-20 bg-black/25">
      <div className="container mx-auto ">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 flex justify-center">
          <img
            src="https://i.ibb.co/JRtT5cqw/red-bmw-m-car-black-background-72594621-removebg-preview.png"
            alt="car"
            className="h-auto hidden md:block -mt-4 object-contain"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Why Rent With <span className="text-red-600">Us?</span>
            </h2>
            <p className="text-white mt-4 max-w-2xl mx-auto text-lg">
              Drive with confidence — seamless bookings, reliable cars, and customer-first service every step of the way.
            </p>
            <div className="w-24 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rent-card bg-gray-800/60 border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:bg-red-600/30 transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="text-5xl bg-red-50/20 text-red-600 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm">{feature.desc}</p>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
