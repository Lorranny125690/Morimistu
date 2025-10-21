import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Field = ({ icon, label, type = "text", value, onChange }: FieldProps) => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // alterna dinamicamente o tipo do input
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
  const { onLogin } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    setErro(null);
    setLoading(true);

    try {
      const res = await onLogin!(email, senha);

      if (res?.error) {
        setErro(res.msg || "Erro ao fazer login");
      } else {
        navigate("/home");
      }
    } catch (e) {
      setErro("Erro inesperado. Tente novamente.");
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
          <h2 className="text-4xl font-bold mb-8">Entrar</h2>

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

          {/* botão login com animação */}
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
    </div>
  );
}
