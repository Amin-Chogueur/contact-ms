import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#0a0f2c] text-white   ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left p-4 h-[105px] md:h-[60px] gap-1">
        {/* Logo & Copyright */}
        <Link to={"/"}>
          <img
            src="/images.jpeg"
            alt="logo"
            width={50}
            className="rounded-3xl cursor-pointer"
          />
        </Link>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
