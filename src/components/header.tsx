import logo from "../assets/logo.png";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Alunos", href: "#" },
  { name: "Turmas", href: "#" },
  { name: "Campeonatos", href: "#" },
];

import {
  FaBars,
  FaTimes,
  FaRegUser,
} from "react-icons/fa";

export function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="bg-[#0D0C15] border-b border-gray-800 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo Morimitsu Jiu-Jitsu" className="w-10 h-10 rounded-full" />
          <span className="font-semibold">Morimitsu Jiu-jitsu</span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={link.name === "Início" ? "text-green-400" : "hover:text-gray-300"}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botões */}
        <div className="flex items-center gap-3">
          {/* Menu mobile */}
          <button
            className="md:hidden p-2 rounded-full border border-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Usuário */}
          <button className="hidden md:flex p-2 rounded-full border border-gray-600 hover:bg-gray-700 transition">
            <FaRegUser />
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0D0C15] border-t border-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={link.name === "Início" ? "text-green-400" : "hover:text-gray-300"}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}