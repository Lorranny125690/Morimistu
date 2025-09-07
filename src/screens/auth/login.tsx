import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import image from "../../assets/logo.png"
import sideImage from "../../assets/image.png"
import bgImage from "../../assets/image1.png";

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  type?: string;
};

const Field = ({ icon, label, type = "text" }: FieldProps) => (
  <div className="flex w-69 border border-[#C54848]">
    {/* ícone em caixa preta com divisor à direita */}
    <div className="flex items-center justify-center w-12 bg-[#222121] border-r border-[#C54848]">
      {icon}
    </div>

    {/* coluna com label + input */}
    <div className="flex-1 flex flex-col">
      <div className="h-5 flex items-center px-1 bg-[#222121] border-b border-[#C54848]">
        <span className="text-[10px] text-gray-200 font-serif">{label}</span>
      </div>
      <input
        type={type}
        className="h-5 w-full bg-[#222121] px-1 text-[12px] text-white placeholder-gray-400 focus:outline-none"
      />
    </div>
  </div>
);

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // simulação de carregamento (API, validação etc.)
    setTimeout(() => {
      navigate("/home");
    }, 2000); // 2 segundos de loading
  };

  return (
    <div
      className="relative min-h-screen min-w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay vermelho */}
      <div className="absolute inset-0 bg-[#1D1010]/70" />

      {/* card principal */}
      <div className="relative z-10 flex bg-[#383333] overflow-hidden shadow-xl w-[980px] h-[600px]">
        {/* esquerda: formulário */}
        <div className="flex flex-col justify-center items-center w-1/2 px-27 text-white">
          <img src={image} alt="logo" className="w-20 h-20 mb-4" />
          <h2 id="text" className="text-4xl font-bold mb-8">Entrar</h2>

          <div className="mt-4 w-full flex items-center flex-col space-y-6">
            <Field icon={<FaUser className="text-white" />} label="Nome de usuário" />
            <Field icon={<FaLock className="text-white" />} label="Senha" type="password" />
          </div>

          <a
            href="#"
            className="text-xs flex text-gray-300 self-start mt-3 mb-8 hover:text-[#C54848]"
          >
            Esqueceu a senha?
          </a>

          {/* botão login */}
          <button
            className="x-auto mt-2 w-[109px] h-[37px] bg-[#C54848] hover:bg-red-700 hover:cursor-pointer text-white font-serif text-[15px] rounded-t-[30px] rounded-b-[20px] transition disabled:opacity-50"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>

          <p className="text-lg text-gray-200 mt-6 font-serif text-center leading-tight">
            Não tem uma conta?
            <br />
            <a href="#" className="text-[#C54848] hover:underline">
              Enviar email a Administrador
            </a>
          </p>
        </div>

        {/* direita: imagem */}
        <div className="w-1/2">
          <img src={sideImage} alt="login" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* overlay de loading (spinner centralizado) */}
      {loading && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
}