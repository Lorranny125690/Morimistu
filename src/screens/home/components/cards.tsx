import { FaBirthdayCake, FaPen } from "react-icons/fa";
import { BiSolidGraduation } from "react-icons/bi";

export const cards = [
  {
    icon: <BiSolidGraduation className="mb-3 lg:h-10 lg:w-10 h-5 w-5 text-[#453E7D]" />,
    title: "Gerenciar graduações",
    targetId: "graduacoes",
    href: "/notification"
  },
  {
    icon: <FaPen className="mb-3 lg:h-8 lg:w-8 h-5 w-5 text-[#453E7D]" />,
    title: "Consultar frequência",
    targetId: "turmas",
    href: "/student"
  },
  {
    icon: <FaBirthdayCake className="mb-3 lg:h-10 lg:w-10 h-5 w-5 text-[#453E7D]" />,
    title: "Anivesariantes do mês",
    targetId: "aniversariantes",
    href: "/student"
  },
];