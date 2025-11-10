import React from "react";

export default function TopRatedCars() {
  const cars = [
    {
      name: "Tesla Model 3",
      image: "https://images.unsplash.com/photo-1610465299998-7c7c8b3f75d3?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      price: "$120/day",
    },
    {
      name: "BMW M4 Coupe",
      image: "https://images.unsplash.com/photo-1605559424843-9e4f04a6c5b0?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: "$150/day",
    },
    {
      name: "Audi A6",
      image: "https://images.unsplash.com/photo-1618354691423-7e9b17e6ad74?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      price: "$110/day",
    },
    {
      name: "Mercedes C-Class",
      image: "https://images.unsplash.com/photo-1627459946964-cb7db09fdf8f?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: "$130/day",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Top <span className="text-blue-600">Rated Cars</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Drive the best — explore our most popular cars loved by customers for performance, comfort, and style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{car.name}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  {"★".repeat(Math.floor(car.rating))} 
                  <span className="text-gray-500 text-sm ml-2">
                    {car.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-blue-600 font-semibold">{car.price}</span>
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-all">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
