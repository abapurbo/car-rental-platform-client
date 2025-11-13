# 🚗 RentWheels – Car Rental Platform 

## 🔗 Live Demo  
[🔴 Click Here to Visit Live Site](https://car-rental-platform.pages.dev/)  

---
## 📘 Project Overview

**RentWheels** is a modern, full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** car rental web application that connects customers with local car owners or rental providers.  
Users can **browse**, **book**, and **manage** car rentals online, while providers can **list**, **update**, or **delete** their car listings.

The app ensures a smooth, secure, and responsive experience with real-time booking status updates and a clean professional UI.

---

## 🌟 Key Features

✅ **Authentication System (Firebase):**  
- Email-password & Google login  
- Password validation with proper error messages  
- Private routes protected & persistent on reload  
- Toast/SweetAlert used for all notifications  

✅ **Car Management (CRUD):**  
- Providers can **Add**, **Update**, and **Delete** cars  
- Real-time car status: “Available” / “Booked”  
- Providers can manage their own listings only  

✅ **Smart Booking System:**  
- Authenticated users can **book cars**  
- Once booked, the car becomes **Unavailable** in DB  
- Prevents **double booking**  
- “My Bookings” shows all cars booked by the user  

✅ **Search & Filtering:**  
- Search cars by name  
- Public users can browse all available cars  



## 🧱 Website Structure

### 🧭 Navbar (Sticky & Conditional)
- **Public:** Home | Browse Cars | Login  
- **Authenticated:** Home | Add Car | My Listings | My Bookings | Browse Cars | Profile Dropdown  
- Dropdown shows user’s photo, name, email, and a logout option  

---

### 📄 Main Pages
| Page | Access | Description |
|------|---------|-------------|
| **Home** | Public | Hero Banner, Featured Cars, Why Rent With Us, Extra Sections |
| **Browse Cars** | Public | All cars posted by all users |
| **Car Details** | Private | Complete car info + “Book Now” button |
| **Add Car** | Private | Add new car listings |
| **My Listings** | Private | User’s own cars with update/delete actions |
| **My Bookings** | Private | Cars the user booked |
| **Login / Signup** | Public | Firebase authentication pages |
| **404 Page** | Public | Custom error page without navbar/footer |

---

### 🦶 Footer Includes:
- RentWheels Logo & Website Name  
- Contact Info  
- Terms & Conditions  
- Social Media Links  


---

## 🏠 Home Page Sections

1. **Hero Banner / Slider:**  
   - 3 meaningful slider use

2. **Featured Cars:**  
   - Shows 6 newest cars from MongoDB  

3. **Why Rent With Us:**  
   - 4 info cards: Easy Booking, Affordable Rates, Trusted Providers, 24/7 Support  

4. **Extra Sections (2):**  
   - ⭐ **Top Rated Cars**  
   - 💬 **Customer Testimonials**  

---

## ⚙️ CRUD Functionalities

- **Add Car:** Add a new car with name, category, price, image URL, etc.  
- **Update Car:** Edit all fields except provider info  
- **Delete Car:** Confirm before deleting, instantly updates UI  
- **Book Car:** Creates a booking record, changes car status to "Unavailable"  
- **Search Car:** Search cars by name on the home page  

---

## 🔐 Authentication Details

- Firebase authentication (Email/Password + Google)  
- Password validation rules:  
  - Minimum 6 characters  
  - At least one uppercase & one lowercase letter  
- Toast used for all error & success messages  
- Private routes persist after page reload  

---

## 🧠 Challenge Implementations

✅ Car status automatically updates to **Available/Unavailable**  
✅ Prevents double booking for the same car  
✅ Displays **status badge** (Available / Booked) on car cards  
✅ Search implemented for car names  
✅ Fully responsive layout across devices  

---

## 🧰 Technologies Used

### **Frontend:**
- React.js (Vite or CRA)
- React Router DOM
- Firebase Authentication
- Axios
- Tailwind CSS / DaisyUI / Material UI
- Framer Motion / Lottie 
- React Toastify 

### **Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Firebase Admin SDK 
- CORS  

### **Hosting:**
- Client → Cloudflare
- Server → Vercel  

---

## My project repo and live link 
- [🔴 Client-side Github repo link](https://github.com/abapurbo/car-rental-platform-client)
- [🔴 Server-side Github repo link](http://github.com/abapurbo/car-rental-server)
- [🔴 Live-client-side Site](https://car-rental-platform.pages.dev/)
- [🔴 Live-server-side Site](Live Website Link Server-side)

---

