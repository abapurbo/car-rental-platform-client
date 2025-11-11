import React, { useEffect, useState, useRef } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Spinner from '../../Components/Spinner/Spinner'
import {
  CardContent,
  TextField,
  InputAdornment,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";
import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
export default function MyListings() {
  const [myCars, setMyCars] = useState([])
  const modalRef = useRef(null)
  const [updateForm, setUpdateForm] = useState({})
  const [modalId, setModalId] = useState(null)
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure(`/my-listing-cars?email=${user?.email}`)
      .then(result => {
        setMyCars(result.data)
      })
  }, [user])

  // form data
  useEffect(() => {
    if (modalId) {
      axiosSecure.get(`/form-data/${modalId}`)
        .then(result => {
          setUpdateForm(result.data)
          openModal()
        })
    }

  }, [modalId])

  //handle delete car 
  const handleDeleteCar = (id) => {
    console.log(id)
    axiosSecure.delete(`/delete-car/${id}`)
      .then(result => {
        toast.success('Car deleted successfully');
        setMyCars(prev => prev.filter(car => car._id !== id))
      })
      .catch(err => {
        console.log(err)
      })
  }

  // handle modal close
  const openModal = () => {
    modalRef.current.showModal(); // open modal
  };

  const closeModal = () => {
    modalRef.current.close(); // close modal
  };

  return (
    <div className="min-h-screen inter-font flex items-center justify-center px-4 pt-32 pb-20 ">

      <div className="w-full max-w-6xl bg-black/20 backdrop-blur-2xl border border-white/20 rounded-xs shadow-2xl p-10">

        {/* Header */}
        {
          myCars.length < 0 ? <div className="flex justify-center items-center">
            <Spinner></Spinner>
          </div> : <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-red-600 tracking-wide drop-shadow-[0_0_4px_rgba(255,75,75,0.4)]">
              ({myCars.length})
              My Car <span className="text-black">Listings</span>
            </h2>
            <button className="bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold px-5 py-2 rounded-xl shadow-lg shadow-red-600/40">
              + Add New Car
            </button>
          </div>
        }

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
              {myCars.map((car, index) => (
                <tr
                  key={index}
                  className="bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-xl shadow-sm hover:shadow-red-500/20"
                >
                  <td className="py-3 px-4 flex items-center gap-2 text-black font-semibold">
                    <img className="w-14 rounded-xs" src={car?.image} alt="" />
                    {car.car_name}
                  </td>

                  <td className="py-3 px-4 text-black/90">{car.category}</td>
                  <td className="py-3 px-4 text-black/90 font-semibold">${car.rent_price}<small>/day</small></td>
                  <td className="py-3 px-4 text-black/90">{car.location}</td>

                  {/* Status Badge */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[14px] font-bold    ${car.status === "available"
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
                      onClick={() => setModalId(car?._id)}

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
                      onClick={() => handleDeleteCar(car?._id)}
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

      {/* update car info modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box relative bg-gray-50 backdrop-blur-lg mt-22">
          <button onClick={closeModal} className="text-black absolute right-6 top-4 rounded-full hover:text-red-600 text-xl">✕</button>
          <h1 className="text-4xl text-red-600 font-bold text-center mt-5 mb-8">Update  <span className="text-black">Car</span> </h1>
          <form method="dialog">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Car Name */}
              <TextField
                name="name"
                defaultValue={updateForm?.car_name}
                label="Car Name"
                placeholder="Enter car name"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsCarIcon style={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                required
              />

              {/* Category */}
              <TextField
                select              
                name="category"
                label="Category"
                defaultValue='Sedan'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon style={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                required
              >
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
                <MenuItem value="Luxury">Luxury</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </TextField>

              {/* Description - full width */}
              <TextField
                name="description"
                label="Description"
                defaultValue={updateForm?.description}
                placeholder="Write car description"
                multiline
                rows={1}
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon style={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                className="col-span-1 md:col-span-2"
                required
              />


              {/* Rent Price */}
              <TextField
                name="price"
                defaultValue={updateForm?.rent_price}
                label="Rent Price (Per Day)"
                placeholder="Enter rent price"
                type="number"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PaidIcon style={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                required
              />

              {/* Location */}
              <TextField
                name="location"
                label="Location"
                defaultValue={updateForm?.location}
                placeholder="Enter location"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon style={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                required
              />

              {/* Image URL - full width */}
              <TextField
                name="image"
                label="Image URL"
                defaultValue={updateForm?.image}
                placeholder="Enter image URL"
                type="url"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ImageIcon style={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                className="col-span-1 md:col-span-2"
                required
              />

              {/* Provider Name */}
              <TextField
                name="providerName"
                label="Provider Name"
                value={user?.displayName}
                fullWidth
                InputProps={{ readOnly: true }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                required
              />

              {/* Provider Email */}
              <TextField
                name="providerEmail"
                label="Provider Email"
                value={user?.email}
                fullWidth
                InputProps={{ readOnly: true }}
                sx={{
                  "& .MuiOutlinedInput-input": { color: "black" },
                  "& .MuiInputLabel-root": { color: "black" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "black" },
                  "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
                }}
                required
              />

              {/* Button - full width */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  paddingY: 1.5,
                  backgroundColor: "red",
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": { backgroundColor: "#c60000" },
                }}
                className="col-span-1 md:col-span-2 mt-2"
              >
                Add Car
              </Button>
            </CardContent>
          </form>

        </div>
      </dialog>
    </div>
  );
}
