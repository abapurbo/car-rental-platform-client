import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import CarCard from "../../Components/CarCard/CarCard";
import './styles.css'
export default function TopRatedCars() {
  const [cars, setCars] = useState([])
  console.log(cars)
  const instance = useAxios()
  useEffect(() => {
    instance.get('/top-rated-cars')
      .then(result => setCars(result?.data))
  }, [])
  return (
    <section>
      <div className="container mx-auto text-center py-16 md:px-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl  text-gray-900 font-bold">
            Discover Our <span className="text-red-600">Top-Rated Cars</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg  max-w-2xl mx-auto">
            Experience unmatched performance, comfort, and style with the cars our customers love the most. Find your perfect ride today.
          </p>

          {/* Decorative underline */}
          <div className="w-28 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
        </div>

        <div className="grid-layout grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) =><CarCard key={index} car={car}></CarCard>)}

        </div>
      </div>
    </section>
  );
}
