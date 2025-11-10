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

export default function AddCar() {

  // handle add car
  const handleAddCar = (e) => {
    e.preventDefault()

    const formData = e.target
    const name=formData.name.value;
    const category=formData.category.value;
    const description=formData.description.value;
    const rentPrice=formData.price.value;
    const location=formData.location.value;
    const carImg=formData.image.value;
    const providerName=formData.providerName.value;
    const providerEmail=formData.providerEmail.value
    
    console.log(name,category,description,rentPrice,location,carImg,providerEmail,providerName);
    

  }
  return (
    <div className="min-h-screen  pt-32 pb-18 flex justify-center items-center p-6  ">
      <div className="w-full max-w-4xl p-8 rounded-[5px] bg-black/30 backdrop-blur-lg border border-white/20 shadow-xl">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={800}
          color="red"
          gutterBottom
        >
          Add a <span className="text-black">New Car</span>
        </Typography>

        <Typography textAlign="center" color="white" mb={6}>
          Fill in the details to list your car for rent
        </Typography>

        <form onSubmit={handleAddCar}>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
              className="col-span-1 md:col-span-2"
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
            />

            {/* Image URL - full width */}
            <TextField
              name="image"
              label="Image URL"
              placeholder="Enter image URL"
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
            />

            {/* Provider Name */}
            <TextField
              name="providerName"
              label="Provider Name"
              value="Provider Name"
              fullWidth
              InputProps={{ readOnly: true }}
              sx={{
                "& .MuiOutlinedInput-input": { color: "black" },
                "& .MuiInputLabel-root": { color: "black" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
            />

            {/* Provider Email */}
            <TextField
              name="providerEmail"
              label="Provider Email"
              value="provider@example.com"
              fullWidth
              InputProps={{ readOnly: true }}
              sx={{
                "& .MuiOutlinedInput-input": { color: "black" },
                "& .MuiInputLabel-root": { color: "black" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
                "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#ff6b6b" },
              }}
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
