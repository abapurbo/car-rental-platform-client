import React from "react";
import {
    SiToyota,
    SiFord,
    SiTesla,
    SiVolkswagen,
    SiHonda,
    SiChevrolet,
    SiBmw,
    SiMercedes,
    SiHyundai,
    SiAudi,
} from "react-icons/si";

export default function BrandLogo() {
    const brands = [
        { name: "Toyota", icon: <SiToyota /> },
        { name: "Ford", icon: <SiFord /> },
        { name: "Tesla", icon: <SiTesla /> },
        { name: "Volkswagen", icon: <SiVolkswagen /> },
        { name: "Honda", icon: <SiHonda /> },
        { name: "Chevrolet", icon: <SiChevrolet /> },
        { name: "BMW", icon: <SiBmw /> },
        { name: "Mercedes-Benz", icon: <SiMercedes /> },
        { name: "Hyundai", icon: <SiHyundai /> },
        { name: "Audi", icon: <SiAudi /> },
    ];

    return (
        <section className="bg-gray-50   text-center">
            <div className="py-16 md:px-10 px-6 container mx-auto">
                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-2">
                        Brands <span className="text-red-600">we offer</span>
                    </h2>

                    {/* Sub-title */}
                    <p className="text-gray-600 text-lg md:max-w-lg mx-auto md:mt-4 mt-2 w-auto md:mb-10 ">
                        We collaborate with the world’s top automotive brands to bring you a
                        reliable and luxurious car rental experience.
                    </p>
                    <div className="w-28 h-1 bg-red-600 mt-6 mx-auto rounded-full"></div>
                </div>
                {/* Brand Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                    {brands.map((brand, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center bg-white shadow-sm border border-gray-100 rounded-xl w-full  h-36 hover:shadow-md hover:scale-105 transition-all duration-200"
                        >
                            <div className="text-5xl text-gray-800 mb-2">{brand.icon}</div>
                            <p className="text-gray-700 font-semibold text-lg">{brand.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
