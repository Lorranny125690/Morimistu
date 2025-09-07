import React, { useState } from "react";
import {
  FaBirthdayCake,
} from "react-icons/fa";
import { FiBookOpen, FiEdit3, FiCalendar } from "react-icons/fi";

import hero from "./assets/woman.png";
import image2 from "./assets/siymbol.png";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

/* ================= CONSTANTES ================= */
const navLinks = [
  { name: "Início", href: "#" },
  { name: "Alunos", href: "#" },
  { name: "Turmas", href: "#" },
  { name: "Campeonatos", href: "#" },
];

const cards = [
  {
    icon: <FiBookOpen className="mb-3 h-10 w-10 text-[#453E7D]" />,
    title: "Gerenciar graduações",
  },
  {
    icon: <FiEdit3 className="mb-3 h-10 w-10 text-[#453E7D]" />,
    title: "Consultar frequência",
  },
  {
    icon: <FaBirthdayCake className="mb-3 h-10 w-10 text-[#453E7D]" />,
    title: "Aniversariante do mês",
  },
];

function Hero() {
  return (
    <section className="relative overflow-visible">
      {/* Background SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#20164a"
            d="M0,192L60,176C120,160,240,128,360,106.7C480,85,600,75,720,90.7C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 py-24 items-stretch min-h-[680px]">
        {/* Texto */}
        <div className="flex flex-col justify-between h-full py-10">
          <h1 className="text-5xl font-bold leading-tight md:w-[554px] text-center md:text-left">
            Para <span className="text-white">muitos</span> o chão é o{" "}
            <span className="text-red-500">fim</span>, para nós é <br />
            só o <span className="text-indigo-400">começo</span>
          </h1>

          <div className="mt-6 md:mt-0 text-center md:text-left">
            <p className="text-[25px] text-white">
              No jiu-jitsu, a perseverança transforma esforço <br /> em vitória.
              No nosso serviço, ela garante <br /> evolução e conquistas duradouras.
            </p>
            <button className="mt-6 flex items-center gap-2 w-fit px-6 py-2 bg-[#29235F]/70 rounded-full text-sm hover:bg-[#3b3b4d] transition mx-auto md:mx-0">
              <FiCalendar /> Ver o dia
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center md:justify-end items-end">
          <img
            src={hero}
            alt="silhueta praticante de jiu-jitsu"
            className="relative z-20 scale-135 -mb-1"
          />
        </div>
      </div>
    </section>
  );
}

function QuoteBox() {
  return (
    <section className="h-[600px] grid md:grid-cols-2 bg-[#D9D9D9] text-black shadow-[inset_0_40px_50px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center overflow-hidden">
        <img src={image2} alt="jiujitsu" className="scale-50 object-contain" />
      </div>
      <div className="flex justify-center items-center text-center md:text-left px-4 md:px-0">
        <p className="text-[25px] text-[#6B61BD] leading-relaxed">
          Treine com quem entende que cada queda é apenas um passo para a
          evolução. "O tatame é mais do que técnica: é respeito, foco e
          transformação." Do primeiro treino ao faixa preta, cada jornada é única
        </p>
      </div>
    </section>
  );
}

function Cards() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 bg-[#0D0C15]">
      <h2 className="text-center text-4xl font-serif mb-20">Escolha sua jornada</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {cards.map((card, i) => (
          <div
            key={i}
            className="hover:cursor-pointer flex items-center justify-center flex-col h-[300px] w-[286px] bg-[#CCC8F3] p-6 text-center 
                      shadow-[-8px_8px_0px_#6b61bd] hover:scale-110 hover:shadow-[-12px_12px_0px_#4c3fa1] transition-all duration-300"
          >
            {card.icon}
            <p className="text-[#453E7D] text-[30px] font-[200]">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= MAIN ================= */
export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0C15] text-white font-sans">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <QuoteBox />
      <Cards />
      <Footer />
    </div>
  );
}
