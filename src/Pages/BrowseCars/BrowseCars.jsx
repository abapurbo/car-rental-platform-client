import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import CarCard from "../../Components/CarCard/CarCard";
import Spinner from "../../Components/Spinner/Spinner";

export default function BrowseCars() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const instance = useAxios();

  // Initial fetch
  useEffect(() => {
    setLoading(true);
    instance.get("/all-cars")
      .then(res => {
        setAllCars(res.data);
        setLoading(false);
      })
      .catch(err => setLoading(false));
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setLoading(true); 
      const endpoint = searchText.trim() === "" ? "/all-cars" : `/cars?search=${searchText}`;
      instance.get(endpoint)
        .then(res => {
          setAllCars(res.data);
          setLoading(false);
        })
        .catch(err => setLoading(false));
    }, 500); 

    return () => clearTimeout(handler);
  }, [searchText, instance]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 pb-18">
      <div className="relative mb-18 pt-32 pb-20 h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="https://i.ibb.co/JRtT5cqw/red-bmw-m-car-black-background-72594621-removebg-preview.png"
            alt="car"
            className="w-full max-w-2xl object-center mt-30"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold noto-sans-georgian text-red-600 leading-tight mb-4 tracking-tight drop-shadow-lg">
            Browse <span className="text-white">Available Cars for Rent</span>
          </h1>
          <p className="text-white/90 italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Choose from our wide range of premium, luxury, and electric cars — all ready for your next ride.
            Drive your dream today!
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                id="search"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search cars, brands or categories..."
                className="w-full text-[18px] text-gray-900 bg-white border border-gray-300 rounded-full pl-12 pr-5 py-3 shadow-md
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                           transition duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-10">
        {loading ? (
          <div className="flex justify-center items-center col-span-full">
            <Spinner />
          </div>
        ) : allCars.length > 0 ? (
          allCars.map((car, index) => <CarCard key={index} car={car} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No cars found</p>
        )}
      </div>
    </div>
  );
}
