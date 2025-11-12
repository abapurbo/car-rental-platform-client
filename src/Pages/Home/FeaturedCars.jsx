import React, { useEffect, useState } from "react";
import CarCard from "../../Components/CarCard/CarCard";
import useAxios from "../../Hooks/useAxios";
import Spinner from '../../Components/Spinner/Spinner'
import { Link } from "react-router";
export default function FeaturedCars() {
  const [latestCars, setLatestCars] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    instance.get("/latest-cars").then((result) => {
      setLatestCars(result?.data);
    });
  }, []);

  return (
    <section className="pt-20 px-6 lg:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-black ">
            Explore Our <span className="text-red-600">Featured Cars</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Handpicked premium cars — newest arrivals ready for your next journey.
          </p>
          {/* Decorative underline */}
          <div className="w-28 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {latestCars.length > 0 ? (
            latestCars.map((car, index) => <CarCard key={index} car={car} />)
          ) : (
            <div className="flex justify-center items-center col-span-4">
              <Spinner></Spinner>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link to='/browse-cars' className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-all shadow-lg">
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
}
