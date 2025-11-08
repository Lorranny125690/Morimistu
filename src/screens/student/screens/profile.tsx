import { IoMdArrowRoundBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineTeam } from "react-icons/ai";

interface StudentProfileProps {
  closeModal: () => void;
  student: () => void;
}

export const StudentProfile = ({ closeModal }: StudentProfileProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96] as any, // 👈 força o tipo
      },
    },
  };
  

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#000F22]/70 flex items-center justify-center z-50 backdrop-blur-sm"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <motion.div
            className="flex h-60 flex-col bg-[#7C9FC9] p-6"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex h-0.5 justify-between items-center">
              <motion.div
                whileHover={{ rotate: -20, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <IoMdArrowRoundBack
                  className="hover:scale-110 cursor-pointer transition-all hover:cursor-pointer"
                  onClick={closeModal}
                  size={30}
                />
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 10px rgba(255,255,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:scale-110 cursor-pointer transition-all bg-white text-[#7C9FC9] font-medium py-3 flex text-[12px] w-[153px] h-9 justify-center items-center rounded-full"
              >
                Promover a professor
              </motion.button>
            </div>

            <motion.div
              className="flex flex-col items-center"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="flex items-center gap-6 mb-8"
                variants={item}
              >
                <motion.img
                  src="https://i.pinimg.com/736x/a5/cb/1a/a5cb1a5651d178a1bde6c41e391dacd2.jpg"
                  alt="Perfil"
                  className="h-50 w-50 items-center justify-center flex rounded-full hover:scale-110 transition-all cursor-pointer"
                  whileHover={{
                    rotate: [0, 2, -2, 0],
                    scale: 1.07,
                    transition: { duration: 0.6 },
                  }}
                />
                <motion.div
                  className="flex items-center flex-col"
                  variants={item}
                >
                  <motion.h1
                    className="text-[50px] h-15 font-bold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Garu
                  </motion.h1>
                  <motion.p
                    className="text-[40px] font-medium text-white/60"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Faixa preta
                  </motion.p>
                  <motion.p
                    className="text-[20px] text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    15 anos
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            className="grid flex flex-row justify-center items-center grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Turmas */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="hover:scale-110 cursor-pointer transition-all flex flex-col justify-center items-center bg-[#7C9FC9] text-white rounded-lg p-4"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="bg-white h-6 w-6 flex justify-center items-center rounded-[10px]">
                  <AiOutlineTeam className="text-[#7C9FC9]" />
                </div>
                <h2 className="text-[16px] font-semibold">Turmas</h2>
              </div>
              <ul className="space-y-4 mt-4">
                <motion.li whileHover={{ x: 6 }}>Turma 1 - Daniel Huckman</motion.li>
                <motion.li whileHover={{ x: 6 }}>Turma 1 - Daniel Huckman</motion.li>
                <motion.li whileHover={{ x: 6 }}>Turma 1 - Daniel Huckman</motion.li>
              </ul>
            </motion.div>

            {/* Frequências */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="hover:scale-110 cursor-pointer transition-all flex flex-col h-[88px] w-[208px] bg-[#7C9FC9] items-start rounded-lg p-2 px-4 shadow-md"
            >
              <div className="flex flex-row h-6 gap-4">
                <h2 className="text-[16px] font-semibold text-white">Frequências</h2>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:scale-110 cursor-pointer transition-all bg-gray-500 h-6 w-[76px] font-medium justify-center items-center flex bg-white text-[#7C9FC9] py-2 px-4 rounded-lg"
                >
                  Graduar
                </motion.button>
              </div>
              <motion.span
                className="text-[30px] font-semibold text-white rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                15
              </motion.span>
            </motion.div>

            {/* Equipes */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="hover:scale-110 cursor-pointer transition-all flex flex-col h-[88px] w-[208px] bg-[#7C9FC9] items-start rounded-lg p-2 px-4 shadow-md"
            >
              <div className="flex flex-row h-6 gap-4">
                <h2 className="text-[16px] font-semibold text-white">Equipes</h2>
              </div>
              <span className="text-[30px] font-semibold text-white rounded-lg">0</span>
            </motion.div>
          </motion.div>

          <motion.h2
            className="px-6 text-[30px] font-medium text-[#7C9FC9]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Informações
          </motion.h2>

          {/* Informações Section */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="hover:scale-110 cursor-pointer transition-all grid flex text-[#5482B3] bg-[#C2E8FF] ml-5 mr-5 rounded-flex-row justify-center grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-8 shadow-xl/20"
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
      </motion.div>
    </AnimatePresence>
  );
};
