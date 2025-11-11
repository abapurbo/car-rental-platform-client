import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Spinner from "../Components/Spinner/Spinner";
import Home from "../Pages/Home/Home";
import AddCars from "../Pages/AddCars/AddCars";
import MyListings from "../Pages/MyListings/MyListings";
import MyBookings from "../Pages/MyBookings/MyBookings";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
import Login from "../Pages/LoginAndSignup/Login";
import SignUp from "../Pages/LoginAndSignup/SignUp";
import PrivateRoutes from "../Private/PrivateRoutes";
import CarDetails from "../Pages/CarDetails/CarDetails";
// lazy loading
const MainLayouts = lazy(() => import("../Layouts/MainLayouts"))
const Error = lazy(() => import("../Pages/Error/Error"))
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Spinner />}>
            <MainLayouts></MainLayouts>
        </Suspense>,
        errorElement: <Suspense fallback={<Spinner />}>
            <Error></Error>
        </Suspense>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/add-car',
                element: <PrivateRoutes>
                    <AddCars></AddCars>
                </PrivateRoutes>
            },
            {
                path: '/my-listings',
                element: <PrivateRoutes>
                    <MyListings></MyListings>
                </PrivateRoutes>
            },
            {
                path:'/car-details/:id',
                element:<PrivateRoutes>
                    <CarDetails></CarDetails>
                </PrivateRoutes>
            },
            {
                path: '/my-bookings',
                element: <PrivateRoutes>
                    <MyBookings></MyBookings>
                </PrivateRoutes>
            },
            {
                path: '/browse-cars',
                Component: BrowseCars
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signUp',
                Component: SignUp
            }
        ]

    },

])

