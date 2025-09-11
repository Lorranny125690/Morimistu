import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "Início", href: "/home" },
  { name: "Alunos", href: "/student" },
  { name: "Turmas", href: "/classes" },
  { name: "Campeonatos", href: "/championship" },
  { name: "Estatísticas", href: "/dashboard" },
];

export function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const location = useLocation(); // Rota atual

  // Fecha quando clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);

  return (
    <header className="z-50 text-white bg-[#0D0C15] relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo Morimitsu Jiu-Jitsu"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Morimitsu Jiu-jitsu</span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                location.pathname === link.href
                  ? link.name === "Início"
                    ? "text-green-400"
                    : link.name === "Alunos"
                    ? "text-violet-400"
                    : "text-blue-400"
                  : "hover:text-gray-300"
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botões */}
        <div className="flex items-center gap-3 relative" ref={profileRef}>
          {/* Menu mobile */}
          <button
            className="md:hidden p-2 rounded-full border border-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Usuário */}
          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="hover:cursor-pointer hidden md:flex p-2 rounded-full border border-gray-600 hover:bg-gray-700 transition"
          >
            <FaRegUser />
          </button>

          {/* Telinha (dropdown) com animação */}
          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 right-0 w-48 bg-[#1E1E2F] border border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden"
              >
                <button className="hover:cursor-pointer px-4 py-2 text-left hover:bg-[#29235F] transition">
                  Ver perfil
                </button>
                <button className="hover:cursor-pointer px-4 py-2 text-left hover:bg-[#29235F] transition">
                  Trocar senha
                </button>
                <button className="hover:cursor-pointer px-4 py-2 text-left hover:bg-[#C54848] transition">
                  Sair
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0D0C15] border-t border-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                location.pathname === link.href
                  ? link.name === "Início"
                    ? "text-green-400"
                    : link.name === "Alunos"
                    ? "text-violet-400"
                    : "text-blue-400" // padrão para os outros
                  : "hover:text-gray-300"
              }              
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
