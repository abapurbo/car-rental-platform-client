import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  // scroll state
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false)
      }
      else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
    // scroll hole handleScroll hobe
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  //navbar links
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
      className={`navbar justify-between bg-white text-black shadow-md px-8 py-3 fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      {/* Logo */}
      <div>
        <Link className="text-3xl font-bold text-red-600 tracking-wide">
          Rent<span className="text-black">Wheels</span>
        </Link>
      </div>

      {/*  Navigation Links */}
      <div className="flex gap-6">
        {navLinks.map((navLink, index) => (
          <NavLink
            to={navLink.path}
            key={index}
            className={({ isActive }) =>
              `text-[16px]  transition ${isActive
                ? "text-red-600 font-bold"
                : "text-gray-800 font-medium hover:text-red-600"
              }`
            }
          >
            {navLink.name}
          </NavLink>
        ))}
      </div>

      {/*  Avatar / Auth Buttons */}
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
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">

            {authNavLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  `px-4 py-2  rounded-full  border-2 border-red-600 text-[15px] font-semibold transition ${isActive
                    ? "bg-red-600 text-white"
                    : "text-red-600 hover:bg-red-600 hover:shadow-[10px_10px_30px_rgba(255,0,0,0.3)] hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
