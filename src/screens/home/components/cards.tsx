import { FaBirthdayCake } from "react-icons/fa";
import { FiBookOpen, FiEdit3 } from "react-icons/fi";

export const cards = [
  {
    icon: <FiBookOpen className="mb-3 lg:h-10 lg:w-10 h-5 w-5 text-[#453E7D]" />,
    title: "Gerenciar graduações",
    targetId: "graduacoes",
    href: "/notification"
  },
  {
    icon: <FiEdit3 className="mb-3 lg:h-10 lg:w-10 h-5 w-5 text-[#453E7D]" />,
    title: "Consultar frequência",
    targetId: "turmas",
    href: "/student"
  },
  {
    icon: <FaBirthdayCake className="mb-3 lg:h-10 lg:w-10 h-5 w-5 text-[#453E7D]" />,
    title: "Aniversariante do mês",
    targetId: "aniversariantes",
    href: "/student"
  },
];