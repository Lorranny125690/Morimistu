import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const navLinks = [
  { name: "Início", href: ["/home"], activeClass: "text-green-400 border-b" },
  { name: "Alunos", href: ["/student", "/notification"], activeClass: "text-violet-400 border-b" },
  { name: "Turmas", href: ["/classes"], activeClass: "text-red-400 border-b" },
  { name: "Estatísticas", href: ["/dashboard"], activeClass: "text-pink-400 border-b" },
  { name: "Ajuda", href: ["/dashboard"], activeClass: "text-yellow-400 border-b" },
];

export function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { onLogout } = useAuth();

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  // Função helper para renderizar links
  const renderLinks = (_isMobile = false) =>
    navLinks.map((link) => {
      const hrefs = Array.isArray(link.href) ? link.href : [link.href];
      const isActive = hrefs.includes(location.pathname);

      return (
        <a
          key={link.name}
          href={hrefs[0]} // sempre usa o primeiro como destino
          className={isActive ? link.activeClass : "hover:text-gray-300"}
        >
          {link.name}
        </a>
      );
    });

  // Função para lidar com o clique no botão "Sair"
  const handleLogout = () => {
    // limpar o estado de autenticação ou fazer o que for necessário
    onLogout();
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <header className="z-50 text-white hidden lg:block bg-[#0D0C15] relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo Morimitsu Jiu-Jitsu" className="w-10 h-10 rounded-full" />
          <span className="font-semibold">Morimitsu Jiu-jitsu</span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {renderLinks()}
        </nav>

        {/* Botões */}
        <div className="flex items-center gap-3 relative" ref={profileRef}>

          {/* Usuário */}
          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="cursor-pointer hidden md:flex p-2 rounded-full border border-gray-600 hover:bg-gray-700 transition"
          >
            <FaRegUser />
          </button>

          {/* Dropdown perfil */}
          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 right-0 w-48 bg-[#1E1E2F] border border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden"
              >
                {["Ver perfil", "Trocar senha"].map((item, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 text-left transition hover:cursor-pointer hover:bg-[#29235F] ${
                      item === "sair" ? "hover:bg-[#29235F]" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}

                {/* Botão "Sair" */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-left transition hover:cursor-pointer hover:bg-[#C54848]"
                >
                  Sair
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
