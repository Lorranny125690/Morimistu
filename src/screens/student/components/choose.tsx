import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "Graduando", href: "/student" },
  { name: "Notificação sobre grau", href: "/notification" },
];

export function Choice() {
  const location = useLocation();

  return (
    <div className="border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center px-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`"hover:bg-slate-600 hover:rounded-sm hover:cursor-pointer transition py-2 px-4 font-medium ${
              location.pathname === link.href
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-white hover:text-gray-300"
            }`}
            role="button"
          >
            {link.name}
          </a>
        ))}
        <div className="ml-auto relative">
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar aluno"
            className="pl-8 pr-3 py-1 rounded bg-[#1E1E2F] text-white text-sm placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
