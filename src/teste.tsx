import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FaUserShield, FaChalkboardTeacher, FaUser, FaLock } from "react-icons/fa";
import image from "./assets/logo.png"
import sideImage from "./assets/image.png"

// Componente base do card
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col bg-[#383333] w-105 h-137 p-8 items-center justify-center shadow-lg text-center relative z-10">
    {children}
  </div>
);

// Página: Escolher Login
import bgImage from "./assets/image1.png";
import { Home } from "./home";

export function SelectLogin() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen min-w-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay vermelho */}
      <div className="absolute inset-0 bg-[#1D1010]/70"></div>

      <Card>
        <div className="flex flex-col gap-8 mb-10">
          <img
          src={image}
          alt="logo"
          className="w-19 h-19 mx-auto"
          />
          <h2 id="text" className="font-(family-name: JetBrains Mono) text-2xl font-bold">Entrar como:</h2>
        </div>

        <div className="flex flex-col gap-6 mb-10">
          {/* Botão Administrador */}
          <button
            className="h-10 w-69 flex items-center border border-[#C54848] bg-[#222121] text-[#C54848] hover:border-[#535bf2] hover:bg-[#201E1E] hover:cursor-pointer hover:text-white transition"
            onClick={() => navigate("/login")}
          >
            <div className="flex items-center justify-center w-12 h-10 border-r border-[#C54848] hover:bg-red-600 hover:text-white transition">
              <FaUserShield className="text-white" />
            </div>
            <span className="flex-1 text-start px-2 font-serif text-lg">
              Administrador
            </span>
          </button>

          {/* Botão Professor */}
          <button
            className="flex items-center border border-[#C54848] bg-[#222121] text-[#C54848] hover:border-[#535bf2] hover:bg-[#201E1E] hover:cursor-pointer hover:text-white transition"
            onClick={() => navigate("/login-image")}
          >
            <div className="flex items-center justify-center w-12 h-10 border-r border-[#C54848] hover:bg-red-600 hover:text-white transition">
              <FaChalkboardTeacher className="text-white" />
            </div>
            <span className="flex-1 text-start px-2 font-serif text-lg">
              Professor
            </span>
          </button>
        </div>
      </Card>
    </div>
  );
}

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

    {/* coluna com label (faixa superior) + input (faixa inferior) */}
    <div className="flex-1 flex flex-col">
      {/* label com borda inferior */}
      <div className="h-5 flex items-center px-1 bg-[#222121] border-b border-[#C54848]">
        <span className="text-[10px] text-gray-200 font-serif">{label}</span>
      </div>
      {/* input separado abaixo */}
      <input
        type={type}
        className="h-5 w-full bg-[#222121] px-1 text-[12px] text-white placeholder-gray-400 focus:outline-none"
      />
    </div>
  </div>
);


export function Login() {
  const navigate = useNavigate();

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

          {/* botão com raio 30 em cima e 20 embaixo */}
          <a href="/home"><button
            className="x-auto mt-2 w-[109px] h-[37px] bg-[#C54848] hover:bg-red-700 hover:cursor-pointer text-white font-serif text-[15px] rounded-t-[30px] rounded-b-[20px] transition"
            onClick={() => navigate("/dashboard")}
          >
            Entrar
          </button></a>

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
    </div>
  );
}

// Página: Trocar Senha
export function ChangePassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 text-white">
      <Card>
        <h2 className="text-xl font-bold mb-6">Trocar senha</h2>
        <input
          type="password"
          placeholder="Nova senha"
          className="w-full p-2 rounded bg-neutral-800 mb-4 border border-neutral-700 focus:outline-red-600"
        />
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 w-full rounded-xl">
          Salvar
        </button>
      </Card>
    </div>
  );
}

// App com rotas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
