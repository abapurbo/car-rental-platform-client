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
  return (
    <div className="min-h-screen  pt-32 pb-18 flex justify-center items-center p-6 bg-gradient-to-r from-gray-300 to-white">
      <div className="w-full max-w-4xl p-8 rounded-2xl bg-black/30 backdrop-blur-lg border border-white/20 shadow-xl">
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

        <form action="">
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
                    <DirectionsCarIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
                "& .MuiSelect-icon": { color: "white" },
                "& .MuiMenuItem-root": { color: "black" },
              }}
            />

            {/* Category */}
            <TextField
              select
              name="category"
              label="Category"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CategoryIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
                "& .MuiSelect-icon": { color: "white" },
                "& .MuiMenuItem-root": { color: "black" },
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
                    <DescriptionIcon style={{ color: "#ff6b6b" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
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
                    <PaidIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
                    <LocationOnIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
                    <ImageIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
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
