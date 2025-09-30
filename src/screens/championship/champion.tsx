import { FaEdit, FaGrinWink, FaTrash } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { PiStudentBold } from "react-icons/pi";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { groupMosck } from "./components/groupMosck";
import { AiFillTrophy } from "react-icons/ai";

// Cards Data
export const cards = [
  {
    icon: <AiFillTrophy className="flex items-end justify-end h-4 w-4 text-[#564E9B]" />,
    title: "Campeonatos",
    number: "05",
    bg: "#564E9B",
    text: "white",
    bgIcon: "white",
  },
  {
    icon: <PiStudentBold className="flex items-end justify-end h-4 w-4 text-white" />,
    title: "Alunos",
    number: 12,
    bg: "#D9D9D9",
    text: "#564E9B",
    bgIcon: "#564E9B",
  },
  {
    icon: <FaGrinWink className="h-4 w-4 text-[#564E9B]" />,
    title: "Equipes",
    number: 12,
    bg: "#564E9B",
    text: "white",
    bgIcon: "white",
  },
];

export function Championship() {
  return (
    <div className="min-h-screen bg-[#0D0C15] mb-40 text-white font-sans">
      {/* Main Content */}
      <div className="flex flex-col max-w-6xl mx-auto px-6 mt-4">
        {/* Title + buttons */}
        <div className="flex bg-blue items-center justify-between mb-4">
          {/* Search + Add button */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex gap-3">
              <a href="">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:cursor-pointer text-[18px] w-[190px] h-[59px] px-5 py-2 bg-[#570785] hover:bg-blue-700 rounded-md font-medium transition"
                >
                  Adicionar aluno
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:cursor-pointer text-[18px] w-[158px] h-[59px] px-5 py-2 bg-[#570785] hover:bg-blue-700 rounded-md font-medium transition"
              >
                Filtrar por ▾
              </motion.button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="ml-auto relative">
            <CiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar aluno"
              className="w-[395px] h-10 pl-11 pr-3 rounded-[20px] bg-[#353138] text-[#B0A8EE] text-[16px] flex flex-row placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full mt-8 border-b border-gray-700" />

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row justify-center gap-[77px] mt-[60px] mb-[60px]"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`hover:cursor-pointer hover:scale-110 transition-all flex items-start justify-center flex-col h-[72px] w-[184px] p-2 text-center rounded-lg shadow-md`}
            style={{ background: card.bg, color: card.text }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-5 flex justify-between items-center mt-2 w-full">
              <p className="text-[16px] font-medium">{card.title}</p>
              <div
                className="flex mt-2 justify-center items-center h-[30px] w-[30px] rounded-[8px]"
                style={{ background: card.bgIcon }}
              >
                {card.icon}
              </div>
            </div>
            <p className="text-[30px] font-bold">{card.number}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Grid de Cards (Turmas) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex max-w-6xl mx-auto mt-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[64px] w-full">
          {groupMosck.map((classe, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="hover:cursor-pointer bg-[#473255] rounded-lg overflow-hidden shadow-md"
            >
              {/* Image */}
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={classe.image}
                  alt={classe.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Class Info */}
              <div className="p-4 flex items-center flex-col gap-2">
                <h2 className="text-[16px] font-semibold">
                  {classe.name || "Turma de faixas pretas"}
                </h2>

                <div className="flex flex-row justify-center mt-5 text-[12px] items-center gap-4 text-gray-300">
                  <div className="flex items-center flex-row gap-2">
                    <p>Idade: </p>
                    <p className="text-sm">{classe.idade || "Instrutor não definido"}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <p>Faixa: </p>
                    <p className="text-sm">{classe.faixa || "Instrutor não definido"}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-6">
                  <FaEdit className="cursor-pointer hover:text-blue-500 transition" />
                  <FaTrash className="cursor-pointer hover:text-red-500 transition" />
                </div>

                {/* Additional Information */}
                <div className="flex flex-row gap-2 mt-8 text-gray-400 text-[10px]">
                  <div className="flex items-center gap-2">
                    <PiStudentBold size={14} />
                    <p>{classe.classmates || "0"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt size={14} />
                    <p>{classe.data || "00/00/0000"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt size={14} />
                    <p>{classe.local || "Local indefinido"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
