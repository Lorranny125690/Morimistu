import { FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-7xl h-20 mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm text-white">
        <div className="flex gap-4 items-center text-lg mb-4 md:mb-0 justify-center md:justify-start">
          <FaFacebook className="h-7 w-7 cursor-pointer hover:text-gray-400 transition" />
          <FaLinkedinIn className="h-7 w-7 cursor-pointer hover:text-gray-400 transition" />
          <FaWhatsapp className="h-7 w-7 cursor-pointer hover:text-gray-400 transition" />
          <MdOutlineEmail className="h-7 w-7 cursor-pointer hover:text-gray-400 transition"/>
          <div className="bg-white w-[2px] h-16"/>
          <text className=""> Redes Sociais</text>
        </div>
        <p className="text-center md:text-right">
          Todos os direitos reservados • Morimitsu Jiu-jitsu
        </p>
      </div>
    </footer>
  );
}