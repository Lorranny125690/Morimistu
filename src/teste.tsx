import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FaUserShield, FaChalkboardTeacher, FaUser, FaLock } from "react-icons/fa";
import image from "./assets/logo.png"

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
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
