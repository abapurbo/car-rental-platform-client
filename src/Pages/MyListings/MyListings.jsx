import React, { useEffect, useState, useRef } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Spinner from "../../Components/Spinner/Spinner";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";
import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Lottie from "lottie-react";
import error from "../../assets/Lottie/error.json";
import { Link } from "react-router";

export default function MyListings() {
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);
  const [updateForm, setUpdateForm] = useState({});
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch user's cars
  useEffect(() => {
    if (!user?.email) return;
    axiosSecure(`/my-listing-cars?email=${user.email}`)
      .then((result) => setMyCars(result.data))
      .catch((err) => console.error("Error fetching cars:", err))
      .finally(() => setLoading(false));
  }, [user, axiosSecure]);

  // Handle delete
  const handleDeleteCar = (id) => {
    axiosSecure
      .delete(`/delete-car/${id}`)
      .then(() => {
        toast.success("Car deleted successfully");
        setMyCars((prev) => prev.filter((car) => car._id !== id));
      })
      .catch(() => toast.error("Failed to delete car."));
  };

  // Modal controls
  const openModal = () => modalRef.current.showModal();
  const closeModal = () => modalRef.current.close();

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCar = {
      car_name: form.car_name.value,
      category: form.category.value,
      description: form.description.value,
      rent_price: form.rent_price.value,
      location: form.location.value,
      image: form.image.value,
    };

    axiosSecure
      .patch(`/update-car/${updateForm._id}`, updatedCar)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Car updated successfully!");
          setMyCars((prev) =>
            prev.map((car) =>
              car._id === updateForm._id ? { ...car, ...updatedCar } : car
            )
          );
        } else {
          toast.error("Car info not updated!");
        }
        closeModal();
      })
      .catch(() => toast.error("Failed to update car."));
  };

  return (
    <div className=" min-h-screen flex justify-center items-center inter-font pt-34 pb-20">
     <title>
      car-rental-platform-client || My Listings
     </title>
      <div className="container mx-auto  md:px-10 px-6">
        <div className="bg-black/20   backdrop-blur-2xl h-full border border-white/20 rounded-xl shadow-2xl p-5 sm:p-8 md:p-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600 tracking-wide drop-shadow-[0_0_4px_rgba(255,75,75,0.4)] text-center sm:text-left">
              ({myCars.length}) My <span className="text-black">Listings</span>
            </h2>
            <Link to='/add-car' className="bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold px-5 py-2 rounded-xl shadow-lg shadow-red-600/40 w-full sm:w-auto">
              + Add New Car
            </Link>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          ) : myCars.length > 0 ? (
            <div className="overflow-x-auto w-full">
              <table className="min-w-[800px] lg:min-w-full table-auto border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-gray-800 uppercase text-xs sm:text-sm tracking-wider">
                    <th className="py-2 sm:py-3 px-3 sm:px-4 text-left">Car Name</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4 text-left">Category</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4 text-left">Price</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4 text-left hidden md:table-cell">
                      Location
                    </th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4 text-left">Status</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myCars.map((car) => (
                    <tr
                      key={car._id}
                      className="bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-xl shadow-sm hover:shadow-red-500/20"
                    >
                      <td className="py-2 sm:py-3 px-3 sm:px-4 flex items-center gap-2 text-black font-semibold">
                        <img className="w-12 sm:w-14 rounded" src={car?.image} alt="" />
                        <span className="text-sm sm:text-base">{car.car_name}</span>
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 text-black/90 text-sm sm:text-base">
                        {car.category}
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 text-black/90 font-semibold text-sm sm:text-base">
                        ${car.rent_price}
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 text-black/90 hidden md:table-cell">
                        {car.location}
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4">
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-[12px] sm:text-[14px] font-bold ${car.status === "available"
                              ? "text-green-500 border border-green-500/30"
                              : "text-red-600 border border-red-400/30"
                            }`}
                        >
                          {car.status}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 flex justify-center gap-2 sm:gap-3">
                        <IconButton
                          onClick={() => {
                            setUpdateForm(car);
                            openModal();
                          }}
                          size="small"
                          title="Edit"
                          sx={{
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
                          onClick={() => handleDeleteCar(car._id)}
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
          ) : (
            // No listings
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-48 h-48 sm:w-56 sm:h-56">
                <Lottie animationData={error} loop />
              </div>
              <p className="text-center text-xl sm:text-2xl font-semibold text-gray-500 mt-4">
                No listings found
              </p>
            </div>
          )}
        </div>

        {/* Update Modal */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box relative bg-white shadow-xl rounded-xl p-6 sm:p-8">
            <button
              onClick={closeModal}
              className="absolute right-4 top-3 text-gray-500 hover:text-red-600 text-2xl"
            >
              ✕
            </button>

            <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-6">
              Update <span className="text-black">Car</span>
            </h1>

            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Car Name */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Car Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-red-500">
                  <DirectionsCarIcon className="text-red-500 mr-2" />
                  <input
                    type="text"
                    name="car_name"
                    defaultValue={updateForm?.car_name}
                    required
                    className="w-full py-2 bg-transparent text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Category</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-red-500">
                  <CategoryIcon className="text-red-500 mr-2" />
                  <select
                    name="category"
                    value={updateForm?.category || ""}
                    onChange={(e) =>
                      setUpdateForm((prev) => ({ ...prev, category: e.target.value }))
                    }
                    required
                    className="w-full py-2 bg-transparent text-black focus:outline-none"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block font-semibold text-gray-700 mb-1">Description</label>
                <div className="flex items-start border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-red-500">
                  <DescriptionIcon className="text-red-500 mt-2 mr-2" />
                  <textarea
                    name="description"
                    defaultValue={updateForm?.description}
                    rows="2"
                    required
                    className="w-full py-2 bg-transparent text-black focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Rent Price */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Rent Price (Per Day)
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-red-500">
                  <PaidIcon className="text-red-500 mr-2" />
                  <input
                    type="number"
                    name="rent_price"
                    defaultValue={updateForm?.rent_price}
                    required
                    className="w-full py-2 bg-transparent text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Location</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-red-500">
                  <LocationOnIcon className="text-red-500 mr-2" />
                  <input
                    type="text"
                    name="location"
                    defaultValue={updateForm?.location}
                    required
                    className="w-full py-2 bg-transparent text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block font-semibold text-gray-700 mb-1">Image URL</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-red-500">
                  <ImageIcon className="text-red-500 mr-2" />
                  <input
                    type="url"
                    name="image"
                    defaultValue={updateForm?.image}
                    required
                    className="w-full py-2 bg-transparent text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Provider */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Provider Name</label>
                <div className="flex items-center border border-gray-200 rounded-lg px-3 bg-gray-100">
                  <PersonIcon className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    value={user?.displayName || ""}
                    readOnly
                    className="w-full py-2 bg-transparent text-gray-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Provider Email</label>
                <div className="flex items-center border border-gray-200 rounded-lg px-3 bg-gray-100">
                  <EmailIcon className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="w-full py-2 bg-transparent text-gray-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Update Car
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
