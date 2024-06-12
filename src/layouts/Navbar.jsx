import React from "react";

function Navbar() {
  return (
    <nav className="bg-white  shadow-md sm:m-2  ">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-black text-xl font-bold">Logo</div>

          {/* Navbar Links */}
          <ul className="flex space-x-4 text-black">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
