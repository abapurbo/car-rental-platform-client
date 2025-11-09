import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Spinner from "../Components/Spinner/Spinner";
import Home from "../Pages/Home/Home";
import AddCars from "../Pages/AddCars/AddCars";
import MyListings from "../Pages/MyListings/MyListings";
import MyBookings from "../Pages/MyBookings/MyBookings";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
// lazy loading
const MainLayouts=lazy(()=>import("../Layouts/MainLayouts"))
const Error =lazy(()=>import("../Pages/Error/Error"))
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Spinner/>}>
            <MainLayouts></MainLayouts>
        </Suspense>,
        errorElement:<Suspense fallback={<Spinner/>}>
            <Error></Error>
        </Suspense>,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:'/add-car',
                Component:AddCars
            },
            {
                path:'/my-listings',
                Component:MyListings
            },
            {
              path:'/my-bookings',
              Component:MyBookings
            },
            {
                path:'/browse-cars',
                Component:BrowseCars
            }
        ]
    }
])

