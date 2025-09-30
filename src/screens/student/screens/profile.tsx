import { IoIosExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export const StudentProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-[#9D9CC6] p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg"
      >
        {/* Header */}
        <motion.div
          className="flex flex-col bg-[#564E9B] rounded-t-lg p-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <IoIosExit
              className="hover:scale-110 cursor-pointer transition-all hover:cursor-pointer"
              onClick={() => navigate(-1)}
              size={30}
            />
            <button className="hover:scale-110 cursor-pointer transition-all bg-white text-[#564E9B] font-medium py-3 flex text-[12px] w-[153px] h-9 justify-center items-center rounded-full">
              Promover a professor
            </button>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              className="flex items-center gap-6 mb-8"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://i.pinimg.com/736x/4e/cc/bb/4eccbb1c77b903b7257770e0ecd76d1d.jpg"
                alt="Perfil"
                className="h-32 w-32 rounded-full"
              />
              <div className="flex items-center flex-col">
                <h1 className="text-[50px] h-15 font-bold text-white">Garu</h1>
                <p className="text-[40px] text-white">Faixa preta</p>
                <p className="text-[15px] text-white">15 anos</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid flex flex-row justify-center items-center grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-8">
          {/* Turmas Section */}
          <motion.div
            className="hover:scale-110 cursor-pointer transition-all flex flex-col justify-center items-center bg-[#564E9B] text-white rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold">Turmas</h2>
            <ul className="space-y-2 mt-4">
              <li className="text-sm">Turma 1 - Daniel Huckman</li>
              <li className="text-sm">Turma 1 - Daniel Huckman</li>
              <li className="text-sm">Turma 1 - Daniel Huckman</li>
            </ul>
          </motion.div>

          {/* Frequências Section */}
          <motion.div
            className="hover:scale-110 cursor-pointer transition-all flex flex-col h-[88px] w-[208px] bg-[#564E9B] items-start rounded-lg p-2 px-4 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-row h-6 gap-4">
              <h2 className="text-[16px] font-semibold text-white">Frequências</h2>
              <button className="hover:scale-110 cursor-pointer transition-all bg-gray-500 h-6 w-[76px] font-medium justify-center items-center flex bg-white text-[#564E9B] py-2 px-4 rounded-lg">
                Graduar
              </button>
            </div>
            <span className="text-[30px] font-semibold text-white rounded-lg">15</span>
          </motion.div>

          {/* Equipes Section */}
          <motion.div
            className="hover:scale-110 cursor-pointer transition-all flex flex-col h-[88px] w-[208px] bg-[#564E9B] items-start rounded-lg p-2 px-4 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-row h-6 gap-4">
              <h2 className="text-[16px] font-semibold text-white">Equipes</h2>
            </div>
            <span className="text-[30px] font-semibold text-white rounded-lg">0</span>
          </motion.div>
        </div>

        <motion.h2
          className="px-6 text-xl font-semibold text-[#564E9B] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Informações
        </motion.h2>

        {/* Informações Section */}
        <motion.div
          className="hover:scale-110 cursor-pointer transition-all grid flex text-[#564E9B] bg-[#CCC8F3] ml-5 mr-5 rounded-flex-row justify-center grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-8 shadow-xl/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <p>Nome: Lorranny</p>
            <p>Idade: 16</p>
            <p>Faixa: Preta</p>
            <p>Contato: 00 0000-0000</p>
          </div>
          <div className="space-y-2">
            <p>Matrícula: 20231031020358</p>
            <p>Cargo: rapaz</p>
            <p>Data de nasc.: 12/12/12</p>
            <p>Email: socorro@gmail.com</p>
          </div>
          <div className="flex justify- flex-col space-y-2">
            <p>Apartido: Boyfriend</p>
            <p>Gênero: masculino</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
