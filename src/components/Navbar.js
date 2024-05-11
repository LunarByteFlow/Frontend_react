import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="bg-black fixed top-0 left-0 w-full z-50 position-sticky">
          <div className="text-white flex justify-between items-center px-4 py-2 mx-auto container font-3xl h-16 ">
            <a href="#" className="text-2xl font-bold">
              Your Logo
            </a>

            <ul className="hidden sm:flex space-x-4 font-3xl text-white font-bold ">
              <li>
                <a href="#" className="hover:text-gray-300 text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700 text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700 text-lg">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700 text-lg">
                  Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700 text-lg">
                  Other Pages
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="px-3 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded sm:hidden"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
