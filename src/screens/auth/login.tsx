import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/authContext";
import image from "@/assets/logo.png";
import sideImage from "@/assets/image.png";
import bgImage from "@/assets/image1.png";

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
import { FaTimes } from "react-icons/fa";

type ModalMsgProps = {
  show: boolean;
  onClose: () => void;
  message: string;
  type?: "error" | "success";
};

export const ModalMsg = ({ show, onClose, message, type = "error" }: ModalMsgProps) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`relative bg-[#2c2222] rounded-2xl shadow-2xl w-[320px] p-6 text-center border ${
            type === "error" ? "border-red-400" : "border-green-400"
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="absolute top-3 right-3 text-gray-300 hover:text-white"
            onClick={onClose}
          >
            <FaTimes size={14} />
          </button>

          <div className="text-4xl mb-2">
            {type === "error" ? "💔" : "✨"}
          </div>

          <p className="text-gray-200 font-serif text-sm leading-snug">{message}</p>

          <motion.button
            onClick={onClose}
            whileTap={{ scale: 0.95 }}
            className={`mt-5 w-[100px] py-1 rounded-full text-sm font-semibold ${
              type === "error"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white transition`}
          >
            Ok
          </motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);


const Field = ({ icon, label, type = "text", value, onChange }: FieldProps) => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const inputType = type === "password" && mostrarSenha ? "text" : type;

  return (
    <div className="flex w-full lg:w-[300px] border border-[#C54848] relative">
      <div className="flex items-center justify-center w-12 bg-[#222121] border-r border-[#C54848]">
        {icon}
      </div>

      <div className="flex-1 flex flex-col relative">
        <div className="h-5 flex items-center px-1 bg-[#222121] border-b border-[#C54848]">
          <span className="text-[10px] text-gray-200 font-serif">{label}</span>
        </div>

        <div className="relative flex items-center">
          <input
            type={inputType}
            value={value}
            onChange={onChange}
            className="h-5 w-full bg-[#222121] px-1 text-[12px] text-white placeholder-gray-400 focus:outline-none pr-7"
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="absolute right-1 text-gray-400 hover:text-white transition"
            >
              {mostrarSenha ? <FaEyeSlash size={10} /> : <FaEye size={10} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { onLogin } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalType, setModalType] = useState<"error" | "success">("error");

  //acessa o tipo do usuário enviado pelo navigate (ADMIN ou TEACHER)
  const userType = location.state?.userType || "Usuário";

  const handleLogin = async () => {
    if (!email || !senha) {
      setModalMsg("📧 Oops... falta preencher tudo!");
      setModalType("error");
      setModalVisible(true);
      return;
    }
  
    setLoading(true);
  
    try {
      const res = await onLogin!(email, senha, userType);
  
      if (res.data?.status === 200) {
        setModalMsg("🎉 Login feito com sucesso! Bem-vindo de volta 💖");
        setModalType("success");
        setModalVisible(true);
        setTimeout(() => navigate("/home"), 1500);
      } else if (res.data?.status === 400) {
        setModalMsg("⚠️ Email obrigatório — digita direitinho, vai! 💌");
        setModalType("error");
        setModalVisible(true);
      } else if (res.data?.status === 401) {
        setModalMsg("🙈 Esse e-mail não existe ou tá incorreto!");
        setModalType("error");
        setModalVisible(true);
      } else if (res.data?.status === 422) {
        setModalMsg("💫 Formato de e-mail inválido! Confere se não faltou um '@'.");
        setModalType("error");
        setModalVisible(true);
      } else {
        setModalMsg("😕 Algo deu errado... tenta novamente mais tarde!");
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
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#1D1010]/70" />

      {/* Card principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex bg-[#383333] overflow-hidden shadow-xl w-[350px] lg:w-[980px] h-[600px]"
      >
        {/* esquerda: formulário */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:px-20 text-white">
          <motion.img
            src={image}
            alt="logo"
            className="w-20 h-20 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          />

          {/* 👇 muda o texto conforme o tipo */}
          <h2 className="text-4xl font-bold mb-2">Entrar</h2>
          <p className="text-sm text-gray-300 mb-6 font-serif">
            Login como <span className="text-[#C54848] font-semibold">{userType}</span>
          </p>

          <div className="mt-4 w-full flex items-center justify-center flex-col space-y-6">
            <Field
              icon={<FaUser className="text-white" />}
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Field
              icon={<FaLock className="text-white" />}
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {erro && <p className="text-red-400 text-sm mt-3">{erro}</p>}

          <a
            href="/email"
            className="text-xs flex text-gray-300 self-start px-4 mt-3 mb-8 hover:text-[#C54848] transition"
          >
            Esqueceu a senha?
          </a>

          {/* botão login */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="mt-2 w-[109px] h-[37px] bg-[#C54848] hover:bg-red-700 hover:cursor-pointer text-white font-serif text-[15px] rounded-t-[30px] rounded-b-[20px] transition disabled:opacity-50"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entrar"}
          </motion.button>

          <p className="text-lg text-gray-200 mt-6 font-serif text-center leading-tight">
            Não tem uma conta?
            <br />
            <a href="#" className="text-[#C54848] hover:underline">
              Enviar email ao Administrador
            </a>
          </p>
        </div>

        {/* direita: imagem */}
        <div className="hidden lg:block w-1/2">
          <img src={sideImage} alt="login" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* overlay de loading */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              className="rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ModalMsg
  show={modalVisible}
  onClose={() => setModalVisible(false)}
  message={modalMsg}
  type={modalType}
/>

    </div>
  );
}
