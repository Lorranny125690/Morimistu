import { FaUser, FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { classesMock } from "./components/classesMock";
import { PiStudentBold } from "react-icons/pi";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export function Classes() {
  return (
    <div className="min-h-screen bg-[#0D0C15] mb-40 text-white font-sans">
      {/* Conteúdo */}
      <div className="flex flex-col max-w-6xl mx-auto px-6 mt-4">
        {/* Título + botões */}
        <div className="flex items-center justify-between mb-4">
          {/* Tabs */}
          <div className="flex flex-row gap-[64px]">
            <h1 className="text-xl cursor-pointer text-[#0086C9] font-medium">
              Normais
            </h1>
            <h1 className="text-xl cursor-pointer text-gray-400 hover:text-white">
              Baby
            </h1>
            <h1 className="text-xl cursor-pointer text-gray-400 hover:text-white">
              Feminina
            </h1>
            <h1 className="text-xl cursor-pointer text-gray-400 hover:text-white">
              Masculina
            </h1>
            <h1 className="text-xl cursor-pointer text-gray-400 hover:text-white">
              Kids
            </h1>
          </div>

          {/* Search + Add button */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex hover:scale-110 transition items-center justify-center h-[50px] w-[50px] bg-[#323D4E] rounded-full hover:bg-[#3f4c63] cursor-pointer">
              <FaSearch size={20} />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex justify-center flex-row text-[15px] items-center h-10 w-[177px] gap-2 py-2 bg-[#076185] hover:bg-blue-700 rounded-[10px] font-medium transition"
            >
              Adicionar turma <IoMdAdd size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700" />

      {/* Grid de Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-6xl mx-auto mt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[64px] w-full">
          {classesMock.map((classe, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-end items-center gap-3 w-full mb-4">
                <FaEdit className="cursor-pointer hover:text-blue-500 transition" />
                <FaTrash className="cursor-pointer hover:text-red-500 transition" />
              </div>

              {/* Imagem */}
              <div className="bg-[#19262A] rounded-b-[6px]"><div className="h-[200px] w-full overflow-hidden">
                <img
                  src={classe.image}
                  alt={classe.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-4 flex items-center flex-col gap-2">
                <h2 className="text-[16px] font-semibold">
                  {classe.name || "Turma de faixas pretas"}
                </h2>

                {/* Instrutor */}
                <div className="flex items-center gap-2 text-gray-300">
                  <FaUser size={14} />
                  <p className="text-sm">{classe.professor || "Instrutor não definido"}</p>
                </div>

                {/* Infos */}
                <div className="flex flex-row gap-2 mt-12 text-gray-400 text-[10px]">
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
