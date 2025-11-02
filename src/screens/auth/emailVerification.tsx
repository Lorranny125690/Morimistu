import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../../assets/logo.png";
import sideImage from "../../assets/image.png";
import bgImage from "../../assets/image1.png";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import { ModalMsg } from "./login";

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Field = ({ icon, label, type = "text", value, onChange }: FieldProps) => (
  <div className="flex w-full lg:w-[300px] border border-[#C54848]">
    <div className="flex items-center justify-center w-12 bg-[#222121] border-r border-[#C54848]">
      {icon}
    </div>
    <div className="flex-1 flex flex-col">
      <div className="h-5 flex items-center px-1 bg-[#222121] border-b border-[#C54848]">
        <span className="text-[10px] text-gray-200 font-serif">{label}</span>
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="h-5 w-full bg-[#222121] px-1 text-[12px] text-white placeholder-gray-400 focus:outline-none"
        autoFocus
      />
    </div>
  </div>
);

export function Email() {
  const navigate = useNavigate();
  const { onVerify } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalType, setModalType] = useState<"error" | "success">("error");

  const handleVerify = async () => {
    if (!email) {
      setModalMsg("📧 Oops... falta preencher o campo de e-mail!");
      setModalType("error");
      setModalVisible(true);
      return;
    }

    setLoading(true);

    try {
      const res = await onVerify(email);

      if (!res.error) {
        setModalMsg("📨 Email de verificação enviado! Verifique sua caixa de entrada 💌");
        setModalType("success");
        setModalVisible(true);
        setTimeout(() => navigate("/code"), 700);
      } else {
        setModalMsg(
          res.status
            ? `${res.msg}`
            : "😕 Ocorreu um erro ao enviar o e-mail. Tente novamente."
        );
        setModalType("error");
        setModalVisible(true);
      }
    } catch {
      setModalMsg("💥 Erro inesperado! Verifica tua conexão, ok?");
      setModalType("error");
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative z-[1000] min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#1D1010]/70" />

      {/* Card principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex bg-[#383333] overflow-hidden shadow-xl w-[350px] lg:w-[980px] h-[600px] rounded-xl"
      >
        {/* Esquerda: formulário */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:px-20 text-white">
          <motion.img
            src={image}
            alt="logo"
            className="w-20 h-20 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          />
          <h2 className="text-4xl font-bold mb-8 text-center">
            Coloque seu Email
          </h2>

          <div className="mb-8 mt-4 w-full flex items-center justify-center flex-col space-y-6">
            <Field
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              icon={<FaUser className="text-white" />}
              label="Email"
              type="email"
            />
          </div>

          {/* Botão */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="mt-2 w-[109px] h-[37px] bg-[#C54848] hover:bg-red-700 hover:cursor-pointer text-white font-serif text-[15px] rounded-t-[30px] rounded-b-[20px] transition disabled:opacity-50"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Enviar"}
          </motion.button>
        </div>

        {/* Direita: imagem */}
        <div className="hidden lg:block w-1/2">
          <img src={sideImage} alt="login" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <ModalMsg
        show={modalVisible}
        onClose={() => setModalVisible(false)}
        message={modalMsg}
        type={modalType}
      />
    </div>
  );
}
