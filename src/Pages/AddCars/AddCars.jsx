import React from "react";
import {
  TextField,
  MenuItem,
  Button,
  CardContent,
  Typography,
  InputAdornment,
} from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CategoryIcon from "@mui/icons-material/Category";
import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import useAuth from '../../Hooks/useAuth'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
export default function AddCar() {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  // handle add car
  const handleAddCar = (e) => {
    e.preventDefault()

    const formData = e.target
    const name = formData.name.value;
    const category = formData.category.value;
    const description = formData.description.value;
    const rentPrice = formData.price.value;
    const location = formData.location.value;
    const carImg = formData.image.value;
    const providerName = formData.providerName.value;
    const providerEmail = formData.providerEmail.value

    const addCarInfo = {
      car_name: name,
      category: category,
      description: description,
      rent_price: rentPrice,
      location: location,
      image: carImg,
      providerName: providerName,
      providerEmail: providerEmail
    }

    axiosSecure.post('/all-cars', addCarInfo)
      .then(res => {
        if (res.data.success) {
          toast.success("Car added successfully!");
          formData.reset();
        }
      })
      .catch(() => toast.error("Failed to add car"));

  }
  return (
    <div className="min-h-screen pt-32 pb-18 flex justify-center items-center p-6  ">
     <title>
      car-rental-platform-client || AddCar
     </title>
      <div className="w-full max-w-4xl md:p-8 pl-4 pr-4 py-5 rounded-[5px] bg-black/25 backdrop-blur-lg border border-white/20 shadow-xl">
        <Typography
          textAlign="center"
          fontWeight={800}
          color="red"
          gutterBottom
         
        >
          <p className="md:text-4xl text-2xl">Add a <span className="text-black">New Car</span></p>
        </Typography>

        <Typography textAlign="center" color="white">
          Fill in the details to list your car for rent
        </Typography>

        <form onSubmit={handleAddCar}>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-6 mt-4">

            {/* Car Name */}
            <TextField
              name="name"
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
              required
            />

            {/* Category */}
            <TextField
              select
              name="category"
              label="Category"
              defaultValue="Sedan"
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
              placeholder="Write car description"
              multiline
              rows={2}
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
              className="col-span-1 md:col-span-2"
              required
            />


            {/* Rent Price */}
            <TextField
              name="price"
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
              required
            />

            {/* Location */}
            <TextField
              name="location"
              label="Location"
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
              required
            />

            {/* Image URL - full width */}
            <TextField
              name="image"
              label="Image URL"
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
    </div>
  );
}
