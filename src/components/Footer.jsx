import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f2c] text-white   ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left p-4 h-[100px] md:h-[60px] gap-1">
        {/* Logo & Copyright */}
        <h2 className="text-xl font-bold"> Contact MS</h2>
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
