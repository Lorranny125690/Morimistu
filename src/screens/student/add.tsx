import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function StudentScreen() {
  const [formData, setFormData] = useState({
    photo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    nome: "",
    contato: "",
    email: "",
    cpf: "",
    nascimento: "",
    matricula: "",
    frequencia: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#41414B] flex-col">
      {/* Botão de Logout */}
      <div className="w-[1100px] flex justify-start max-w-7xl mb-6">
        <button onClick={() => navigate(-1)} className="text-gray-300 hover:text-white transition">
          <FiLogOut size={28} />
        </button>
      </div>

      {/* Container principal */}
      <div className="relative w-[1152px] max-w-7xl h-[721px] bg-white flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[40%] bg-[#11101D]" />
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-white" />

        {/* Cards */}
        <motion.div
          className="relative flex gap-20 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card Perfil */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-[250px] h-[411px] border border-gray-100">
            <div className="flex flex-col items-center">
              <img
                src={formData.photo}
                alt="Deadlock"
                className="w-[94px] h-[94px] rounded-full shadow-md"
              />
              <h2 className="font-semibold text-lg mt-4">Deadlock</h2>
              <p className="text-gray-400 text-sm">faixa branca</p>
            </div>

            <div className="mt-6 text-sm text-gray-600 space-y-3">
              <p>
                Frequências: {" "}
                <span className="text-indigo-500 cursor-pointer hover:underline">
                  15 presenças
                </span>
              </p>
              <p>
                Nome: <span className="text-gray-400"> Ishi Valorant</span>
              </p>
              <p>
                Idade: <span className="text-gray-400"> 14 anos</span>
              </p>
              <p>
                Cpf: <span className="text-gray-400"> 000.000.000-00</span>
              </p>
            </div>
          </div>

          {/* Card Formulário */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-[700px] h-[411px] border border-gray-100">
            <div className="border-b mb-4 flex gap-6 items-center">
              <h3 className="text-gray-700 font-medium text-lg">Dados</h3>
              <h3 className="text-gray-400 font-regular text-lg">Enturmar</h3>
            </div>

            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] px-1 text-gray-500">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[12px] text-black border-gray-300 border rounded-md px-1 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500">Data de nascimento</label>
                <input
                  type="date"
                  name="nascimento"
                  value={formData.nascimento}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[15px] text-black border-gray-300 border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-500">Contato</label>
                <input
                  type="text"
                  name="contato"
                  value={formData.contato}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[15px] text-black border-gray-300 border rounded-md px-1 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-500">Matrícula (opcional)</label>
                <input
                  type="text"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[15px] text-black border-gray-300 border rounded-md px-1 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[15px] text-black border-gray-300 border rounded-md px-1 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-500">Frequência</label>
                <input
                  type="text"
                  name="frequencia"
                  value={formData.frequencia}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[15px] text-black border-gray-300 border rounded-md px-1 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-500">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="w-[200px] h-[24px] text-[15px] text-black border-gray-300 border rounded-md px-1 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              
              {/* Botões */}
              <div className="flex justify-end items-center mt-8 space-x-6">
                <button
                  type="button"
                  className="text-gray-400 text-sm hover:text-gray-600 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full px-6 py-2 shadow-md transition"
                >
                  Enturmar
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
