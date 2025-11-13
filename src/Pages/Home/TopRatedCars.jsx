import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../Hooks/useAxios";
import CarCard from "../../Components/CarCard/CarCard";
import "./styles.css";

export default function TopRatedCars() {
  const [cars, setCars] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    instance.get("/top-rated-cars").then((result) => setCars(result?.data));
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Container for staggered animations
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between each card
      },
    },
  };

  return (
    <section>
      <div className="container mx-auto text-center py-16 md:px-10 p-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl text-gray-900 font-bold">
            Discover Our <span className="text-red-600">Top-Rated Cars</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Experience unmatched performance, comfort, and style with the cars our customers love the most. Find your perfect ride today.
          </p>

          <div className="w-28 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
        </motion.div>

        {/* Car Grid */}
        <motion.div
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cars.map((car, index) => (
            <motion.div key={index} variants={fadeUp}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
