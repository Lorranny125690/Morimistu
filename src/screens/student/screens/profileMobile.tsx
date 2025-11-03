import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const alunoInfo = {
  nome: "Manoel Gomes da Silva",
  matricula: "20231031020358",
  contato: "(88) 8860–8045",
  dataNascimento: "20/05/2000",
  cpf: "00000000–00",
  email: "email@gmail.com",
  apelido: "caneta azul",
  faixa: "preta",
  cargo: "aluno",
  genero: "M",
};

export function ProfileMobile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#011023]">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="p-8 flex flex-row justify-between items-center mb-6"
      >
        <IoMdArrowRoundBack onClick={() => navigate(-1)} size={20} />
        <button className="bg-[#02304F] h-[2.5vh] w-[15.5vh] text-[10px] rounded-full">
          Promover a professor
        </button>
        <AiFillEdit size={20} />
      </motion.header>

      {/* Perfil */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center gap-5 mb-13"
      >
        <img
          className="h-34 w-34 cover rounded-4xl"
          src="https://i.pinimg.com/736x/27/ca/57/27ca572a2787b088c8e148c9b4f73e84.jpg"
          alt="no tenemos"
        />
        <div className="flex flex-col text-center">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-bold text-[28px]"
          >
            Laura Matos
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-medium text-[24px]"
          >
            Faixa azul
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-thin text-[20px]"
          >
            16 anos
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-regular text-[16px]"
          >
            Grau 1
          </motion.p>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-row justify-center items-center mt-8 gap-9">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[#052659]/60 w-[16vh] h-[10.7vh] rounded-lg"
        >
          <div className="flex flex-row items-center justify-center">
            <p className="px-2 text-[16px]">Frequência</p>
            <div className="flex justify-center items-center bg-[#011023] w-[5vh] h-[1.7vh] rounded-full text-[8px]">
              Graduar
            </div>
          </div>
          <p className="px-2 text-[64px] leading-none">15</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#052659]/60 w-[16vh] h-[10.7vh] rounded-lg"
        >
          <div className="flex flex-row items-center justify-start px-2 gap-2">
            <p className="text-[16px]">Turmas</p>
          </div>
          <p className="px-2 text-[64px] leading-none">02</p>
        </motion.div>
      </div>

      {/* Informações */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="px-12 py-8"
      >
        <h3 className="text-[28px] font-bold mb-2">Informações</h3>
        <div className="h-0.5 bg-white mb-2" />
        {Object.entries(alunoInfo).map(([chave, valor]) => (
          <motion.p
            key={chave}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-[16px] capitalize">{chave}:</span> {valor}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
