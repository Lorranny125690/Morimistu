import { FaBirthdayCake } from "react-icons/fa";
import { FiBookOpen, FiEdit3 } from "react-icons/fi";

export const cards = [
  {
    icon: <FiBookOpen className="mb-3 h-10 w-10 text-[#453E7D]" />,
    title: "Gerenciar graduações",
    href: "/notification"
  },
  {
    icon: <FiEdit3 className="mb-3 h-10 w-10 text-[#453E7D]" />,
    title: "Consultar frequência",
    href: "/student"
  },
  {
    icon: <FaBirthdayCake className="mb-3 h-10 w-10 text-[#453E7D]" />,
    title: "Aniversariante do mês",
    href: "/student"
  },
];