import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";

export default function MyListings() {
  const cars = [
    { id: 1, name: "BMW X5", category: "SUV", rentPrice: 120, location: "Dhaka", status: "available" },
    { id: 2, name: "Toyota Corolla", category: "Sedan", rentPrice: 80, location: "Chattogram", status: "booked" },
    { id: 3, name: "Tesla Model 3", category: "Electric", rentPrice: 200, location: "Dhaka", status: "available" },
  ];

  return (
    <div className="min-h-screen inter-font flex items-center justify-center px-4 pt-32 pb-20 ">
      
      <div className="w-full max-w-6xl bg-black/30 backdrop-blur-2xl border border-white/20 rounded-xs shadow-2xl p-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-red-600 tracking-wide drop-shadow-[0_0_4px_rgba(255,75,75,0.4)]">
            My Car <span className="text-black">Listings</span>
          </h2>
          <button className="bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold px-5 py-2 rounded-xl shadow-lg shadow-red-600/40">
            + Add New Car
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-800 uppercase text-sm tracking-wider">
                <th className="py-3 px-4 text-left">Car Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Rent Price</th>
                <th className="py-3 px-4 text-left">Location</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car) => (
                <tr
                  key={car.id}
                  className="bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-xl shadow-sm hover:shadow-red-500/20"
                >
                  <td className="py-3 px-4 flex items-center gap-2 text-black font-semibold">
                    <ImageIcon className="text-red-600" fontSize="small" />
                    {car.name}
                  </td>

                  <td className="py-3 px-4 text-black/90">{car.category}</td>
                  <td className="py-3 px-4 text-black/90 font-semibold">${car.rentPrice}</td>
                  <td className="py-3 px-4 text-black/90">{car.location}</td>

                  {/* Status Badge */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[14px] font-bold    ${
                        car.status === "available"
                          ? " text-green-500 border border-green-500/30"
                          : " text-red-600 border border-red-400/30"
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-3 px-4 flex justify-center gap-3">
                    <IconButton
                      size="small"
                      title="Edit"
                      sx={{
                        color: "r",
                        backgroundColor: "rgba(255,255,255,0.08)",
                        "&:hover": {
                          backgroundColor: "rgba(255,75,75,0.2)",
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      size="small"
                      title="Delete"
                      sx={{
                        color: "red",
                        backgroundColor: "rgba(255,255,255,0.08)",
                        "&:hover": {
                          backgroundColor: "rgba(239,68,68,0.25)",
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
