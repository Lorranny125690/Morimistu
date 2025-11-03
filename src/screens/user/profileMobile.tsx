import { AiFillEdit } from "react-icons/ai";
import { motion } from "framer-motion";

const alunoInfoEsquerda = {
  nome: "Manoel Gomes da Silva",
  matricula: "20231031020358",
  contato: "(88) 8860–8045",
  dataNascimento: "20/05/2000",
  cpf: "00000000–00",
  email: "email@gmail.com",
  apelido: "caneta azul",
};

const alunoInfoDireita = {
  faixa: "preta",
  grau: "1",
  idade: "16",
  cargo: "aluno",
  genero: "M",
};

export function ProfileMobile() {
  return (
    <div className="min-h-screen bg-[#011023] overflow-y-auto pb-[100px]">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="p-8 flex flex-row justify-end items-center mb-6"
      >
        <AiFillEdit size={20} />
      </motion.header>

      {/* Perfil */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-row items-center justify-center gap-5 mb-13"
      >
        <img
          className="h-34 w-34 cover rounded-4xl"
          src="https://i.pinimg.com/736x/27/ca/57/27ca572a2787b088c8e148c9b4f73e84.jpg"
          alt="no tenemos"
        />
        <div className="flex flex-col text-center">
          <p className="font-bold text-[28px]">Laura Matos</p>
          <p className="font-medium text-[24px]">Faixa azul</p>
          <p className="font-thin text-[20px]">16 anos</p>
          <p className="font-regular text-[16px]">Grau 1</p>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex flex-row justify-center items-center mt-8 gap-9 flex-wrap"
      >
        {[
          { title: "Frequência", value: "15" },
          { title: "Turmas", value: "02" },
          { title: "Turmas Ministrando", value: "02" },
        ].map((card) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="bg-[#052659]/60 w-[16vh] h-[10.7vh] rounded-lg flex flex-col justify-center"
          >
            <div className="flex flex-row items-center justify-start px-2 gap-2">
              <p className="text-[16px]">{card.title}</p>
            </div>
            <p className="px-2 text-[64px] leading-none">{card.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Informações */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="px-12 py-8"
      >
        <h3 className="text-[28px] font-bold mb-2">Informações</h3>
        <div className="h-0.5 bg-white mb-4" />

        <div className="grid grid-cols-2 gap-x-8 text-[15px]">
          <div className="space-y-1">
            {Object.entries(alunoInfoEsquerda).map(([chave, valor]) => (
              <motion.p
                key={chave}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <span className="font-semibold capitalize">
                  {formatLabel(chave)}:
                </span>{" "}
                {valor}
              </motion.p>
            ))}
          </div>

          <div className="space-y-1">
            {Object.entries(alunoInfoDireita).map(([chave, valor]) => (
              <motion.p
                key={chave}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <span className="font-semibold capitalize">
                  {formatLabel(chave)}:
                </span>{" "}
                {valor}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function formatLabel(label: string) {
  const labels: Record<string, string> = {
    nome: "Nome",
    matricula: "Matrícula",
    contato: "Contato",
    dataNascimento: "Data de nasc.",
    cpf: "Cpf",
    email: "Email",
    apelido: "Apelido",
    faixa: "Faixa",
    grau: "Grau",
    idade: "Idade",
    cargo: "Cargo",
    genero: "Gênero",
  };
  return labels[label] || label;
}
