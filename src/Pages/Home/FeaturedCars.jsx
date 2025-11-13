import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CarCard from "../../Components/CarCard/CarCard";
import useAxios from "../../Hooks/useAxios";
import Spinner from '../../Components/Spinner/Spinner';
import { Link } from "react-router";
import error from '../../assets/Lottie/error.json';
import Lottie from "lottie-react";
import { FaSearch } from "react-icons/fa";

export default function FeaturedCars() {
  const [latestCars, setLatestCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const instance = useAxios();

  // Initial fetch
  useEffect(() => {
    setLoading(true);
    instance.get("/latest-cars")
      .then((res) => {
        setLatestCars(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Search debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setLoading(true);
      const endpoint = searchText.trim() === "" ? "/latest-cars" : `/cars?search=${searchText}`;
      instance.get(endpoint)
        .then((res) => {
          setLatestCars(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 500);

    return () => clearTimeout(handler);
  }, [searchText, instance]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="pt-20 ">
      <div className="container mx-auto md:px-10 px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-black">
            Explore Our <span className="text-red-600">Featured Cars</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Handpicked premium cars — newest arrivals ready for your next journey.
          </p>
          <div className="w-28 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="relative md:w-[500px]">
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search cars by name or brand..."
              className="w-full max-w-lg text-gray-900 bg-white border border-gray-300 rounded-full pl-10 pr-5 py-3 shadow-md
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
            />
          </div>
        </motion.div>

        {/* Car Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {loading ? (
            <div className="flex justify-center items-center col-span-full">
              <Spinner />
            </div>
          ) : latestCars.length > 0 ? (
            latestCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))
          ) : (
            <div className=" col-span-4 flex flex-col items-center justify-center py-16">
              <div className="w-48 h-48">
                <Lottie animationData={error} loop={true} />
              </div>
              <p className="text-center text-2xl font-semibold text-gray-500 mt-2">
                No cars found
              </p>
            </div>
          )}
        </motion.div>

        {/* View All Button */}
        {latestCars.length > 0 && (
          <motion.div
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              to="/browse-cars"
              className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-all shadow-lg"
            >
              View All Cars
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
