import { CiSearch } from "react-icons/ci";
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
            className={`"hover:bg-slate-600 hover:rounded-sm text-[20px] hover:cursor-pointer transition py-6 px-4 font-medium ${
              location.pathname === link.href
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-300 hover:text-gray-100"
            }`}
            role="button"
          >
            {link.name}
          </a>
        ))}
        <div className="ml-auto relative">
          <CiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar aluno"
            className="w-[395px] h-10 pl-11 pr-3 rounded-[20px] bg-[#313538] text-[#B0A8EE] text-[16px] flex flex-row placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
