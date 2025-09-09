import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

type Student = {
  id: number;
  name: string;
  number: string;
  beltColor: string;
  degree: string;
  status: string;
  photo?: string;
};

const studentsMock: Student[] = [
  {
    id: 1,
    name: "Deadlock",
    number: "0000-0000",
    beltColor: "red",
    degree: "1°",
    status: "Ativa",
    photo: "https://i.pravatar.cc/40?img=65",
  },
];

export function Student() {
  return (
    <div className="min-h-screen bg-[#0D0C15] text-white font-sans">
      {/* Tabs */}
      <div className="border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center px-6">
          <button className="py-2 px-4 border-b-2 border-blue-500 text-blue-500 font-medium">
            Graduando
          </button>
          <button className="py-2 px-4 text-gray-400">
            Notificação sobre grau
          </button>
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Pesquisar aluno"
              className="px-3 py-1 rounded bg-[#1E1E2F] text-white text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        {/* Título + botões */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Alunos graduando</h1>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-[#0070F3] hover:bg-blue-700 rounded-md font-medium transition"
            >
              Adicionar aluno
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-[#0070F3] hover:bg-blue-700 rounded-md font-medium transition"
            >
              Filtrar por ▾
            </motion.button>
          </div>
        </div>

        {/* Card com tabela */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#162026] rounded-md shadow-lg overflow-hidden"
        >
          <table className="w-full border-collapse text-left table-fixed">
            <thead className="text-gray-400 text-sm">
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 w-20">Foto</th>
                <th className="py-3 px-4 w-25">Nome</th>
                <th className="py-3 px-4 w-70">Número</th>
                <th className="py-3 px-4 w-20 text-center">Faixa</th>
                <th className="py-3 px-4 w-16 text-center">Grau</th>
                <th className="py-3 px-4 w-24 text-center">Status</th>
                <th className="py-3 px-4 w-28 text-center">Operação</th>
                <th className="py-3 px-4 w-24 text-center">Conferir</th>
              </tr>
            </thead>
            <tbody>
              {studentsMock.map((student) => (
                <motion.tr
                  key={student.id}
                  whileHover={{ backgroundColor: "#1E1E2F", scale: 1.01 }}
                  className="border-b border-gray-800 transition"
                >
                  <td className="py-3 px-4">
                    <img
                      src={student.photo || "/foto.jpg"}
                      alt="Foto"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.number}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block w-6 h-6 rounded ${
                        student.beltColor === "red" ? "bg-red-600" : "bg-gray-500"
                      }`}
                    />
                  </td>
                  <td className="py-3 px-4 text-center">{student.degree}</td>
                  <td className="py-3 px-4 text-center text-green-500 font-medium">
                    {student.status}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <FaEdit className="cursor-pointer hover:text-blue-500 transition" />
                      <FaTrash className="cursor-pointer hover:text-red-500 transition" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-1 bg-[#0070F3] hover:bg-blue-700 rounded-md text-white text-sm font-medium transition"
                    >
                      Ver
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
