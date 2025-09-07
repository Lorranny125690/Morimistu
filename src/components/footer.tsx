import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-400">
        <div className="flex gap-4 text-lg mb-4 md:mb-0 justify-center md:justify-start">
          <FaFacebookF className="cursor-pointer hover:text-white transition" />
          <FaInstagram className="cursor-pointer hover:text-white transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
        </div>
        <p className="text-center md:text-right">
          Todos os direitos reservados • Morimitsu Jiu-jitsu
        </p>
      </div>
    </footer>
  );
}