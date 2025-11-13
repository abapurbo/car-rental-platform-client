import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { MdOutlineLogout } from "react-icons/md";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logOutUser } = useAuth();
  const location = useLocation()
  // Scroll state
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navbar links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Add Car", path: "/add-car" },
    { name: "My Listings", path: "/my-listings" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Browse Cars", path: "/browse-cars" },
  ];

  const authNavLinks = [
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signUp" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 ${location.pathname === '/login' || location.pathname === '/signUp' || location.pathname === '/add-car' || location.pathname === '/my-bookings' || location.pathname === '/my-listings' || location.pathname === '/browse-cars' || location.pathname.includes('/car-details') ? 'bg-black/35' : 'bg-black'} transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      {/* Centered container */}
      <div className="container mx-auto flex justify-between items-center lg:px-8 md:px-1  px-4 md:py-3 py-5 text-black">
        {/* Logo */}
        <div className="flex items-center">
          <div className="dropdown relative">
            {/* Dropdown Toggle Button */}
            <div

              tabIndex={0}
              role="button"
              className="lg:hidden flex items-center justify-center p-2 rounded-md transition duration-200"
            >

              <Menu className="text-white text-2xl" />


            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content absolute left-2 mt-3 ${location.pathname === '/' || location.pathname === '/browse-cars' ? 'bg-black/80' : 'bg-black/30'} backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl w-48 p-3 space-y-2 z-100`}
            >
              {navLinks.map((navLink, index) => (
                <NavLink
                  key={index}
                  to={navLink.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-[16px] text-center transition-all duration-200 ${isActive
                      ? "text-red-500 font-semibold bg-white/10"
                      : "text-white hover:text-red-500 hover:bg-white/10"
                    }`
                  }
                >
                  {navLink.name}
                </NavLink>
              ))}
            </ul>
          </div>

          <Link className="md:text-3xl -ml-1 md:ml-1 text-2xl  font-bold text-red-600">
            Rent<span className="text-white">Wheels</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <div className="flex gap-6">
            {navLinks.map((navLink, index) => (
              <NavLink
                to={navLink.path}
                key={index}
                className={({ isActive }) =>
                  `text-[16px] transition ${isActive
                    ? "text-red-600 underline underline-offset-3 font-bold"
                    : "text-white font-medium hover:text-red-600 hover:underline hover:underline-offset-3 "
                  }`
                }
              >
                {navLink.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Avatar / Auth Buttons */}
        <div className="flex-none">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring ring-red-500 ring-offset-2 ring-offset-white">
                  <img
                    alt="User avatar"
                    src={user.photoURL !== null ? user?.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className={`menu menu-sm dropdown-content ${location.pathname == '/' || location.pathname == '/browse-cars'?'bg-white/10':'bg-black/50'} backdrop-blur-xl shadow-[0_4px_15px_rgba(255,0,0,0.2)] border-red-600 text-white rounded-2xl  mt-3 w-60 p-4 z-20  animate-[fadeIn_0.2s_ease-out]`}
              >

                {/* User Info */}
                <li className="pointer-events-none">
                  <div className="flex flex-col items-center gap-3 p-3 rounded-xl ">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white font-semibold">
                      {user?.displayName?.[0] || "U"}
                    </div>
                    <div className="flex flex-col items-center ">
                      <span className="font-semibold text-sm">{user?.displayName}</span>
                      <span className="text-xs text-white">{user?.email}</span>
                    </div>
                  </div>
                </li>

                <div className="my-2 border-t border-gray-200"></div>

                {/* Logout */}
                <li className="mt-1">
                  <button onClick={logOutUser} className="flex justify-center border border-red-400 items-center gap-2 text-white hover:bg-red-600 hover:text-white rounded-xl px-3 py-2 font-medium">
                    <MdOutlineLogout className="text-lg" />
                    Logout
                  </button>
                </li>

              </ul>

            </div>
          ) :
            <div className="flex gap-4">
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full border-1  border-red-600 text-[15px] font-semibold transition ${isActive
                    ? "bg-red-600 text-white"
                    : "text-white hover:bg-red-600 hover:shadow-[10px_10px_30px_rgba(255,0,0,0.3)] hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
