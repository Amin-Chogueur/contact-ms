import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoutButton from "./LogoutButton";
import useAuthContext from "../hooks/useAuthContext";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const { userName } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a0f2c] text-white px-4 ">
      <div className="container mx-auto flex justify-between items-center h-[65px]">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          CONTACT MS
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Links */}
        <ul
          className={`md:flex md:gap-4 items-center absolute z-20 bg-[#0a0f2c] md:bg-transparent md:static  w-full md:w-auto md:flex-row flex-col   transition-all duration-300 ease-in-out ${
            isOpen ? "top-15 left-0 p-4 gap-5" : "top-[-230px]"
          }`}
        >
          {userName && (
            <li className="flex items-center gap-4 ">
              <p className="text-sm flex-1 border p-1 rounded-4xl border-sky-100 ">
                {userName}
              </p>
              <Link
                to="/contact"
                className={`block  hover:text-gray-300 mb-4 md:mb-0 ${
                  pathname === "/contact" && "bg-[#272e53] p-2 rounded-md"
                }`}
              >
                My Contact
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/about"
              className={`block  hover:text-gray-300 mb-4 md:mb-0 ${
                pathname === "/about" && "bg-[#272e53] p-2 rounded-md"
              }`}
            >
              About
            </Link>
          </li>

          {!userName && (
            <li>
              <Link
                to="/login"
                className={`block  hover:text-gray-300 mb-4 md:mb-0 ${
                  pathname === "/login" && "bg-[#272e53] p-2 rounded-md"
                }`}
              >
                Login
              </Link>
            </li>
          )}
          {!userName && (
            <li>
              <Link
                to="/register"
                className={`block  hover:text-gray-300 mb-4 md:mb-0 ${
                  pathname === "/register" && "bg-[#272e53] p-2 rounded-md"
                }`}
              >
                Register
              </Link>
            </li>
          )}
          {userName && <LogoutButton />}
        </ul>
      </div>
    </nav>
  );
}
