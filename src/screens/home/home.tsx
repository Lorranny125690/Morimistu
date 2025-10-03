import { Hero } from "./components/hero.tsx";
import { QuoteBox } from "./components/quotebox.tsx";
import { Cards } from "./components/card.tsx";
import logo from "../../assets/logo.svg";
import { cards } from "./components/cards.tsx";
import { PiStudentFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { HeaderMobile } from "@/components/headerMobile.tsx";

export function HomeMobile() {

  return (
    <div className="min-h-screen bg-[#201E33] text-white flex flex-col font-['Josefin Slab'] overflow-x-hidden">
      {/* Header */}
      <div className="p-4">
        <div className="flex justify-end gap-2 items-center">
          <p className="text-xs">Nome do usuário</p>
          <img src={logo} alt="avatar" className="w-8 h-8 rounded-full" />
        </div>

        <div className="px-2 mt-4 mb-8">
          <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold">
            Bom dia.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-xl font-light">
            Escolha sua jornada para hoje:
          </motion.p>
        </div>

        {/* Opções de ação */}
        <div className="ml-2 flex justify-center items-center flex-row gap-6">
          {cards.map((card, i) => (
            <motion.a key={i} href={card.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="flex items-center justify-center flex-col h-[122px] w-[110px] bg-[#CCC8F3] text-center shadow-[-8px_8px_0px_#6b61bd] hover:shadow-[-12px_12px_0px_#4c3fa1] transition-all duration-300 cursor-pointer">
                {card.icon}
                <p className="text-[#453E7D] w-[76px] text-[10px] font-[200]">{card.title}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Cards numéricos */}
      <div className="space-y-6 grid grid-cols-2 mt-10 gap-4 px-4">
        {[{title:'Número de alunos', value:72},{title:'Número de equipes', value:18},{title:'Número de turmas', value:12},{title:'Número de professores', value:6}].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#322F50] rounded-[28px] h-[176px] flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex w-36 items-center justify-between gap-2">
              <p className="text-[20px] h-12 w-26 font-regular">{card.title}</p>
              <div className="rounded-full flex items-center justify-center h-8 w-8 bg-white">
                <PiStudentFill className="text-[#322F50]" size={20} />
              </div>
            </div>
            <div className="flex w-full px-4 justify-start items-start">
              <p className="text-[70px] font-bold">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navegação inferior */}
        <HeaderMobile/>
    </div>
  );
}


export function Home() {
  return (
    <div>
      {/* Mobile */}
      <div className="block lg:hidden">
        <HomeMobile />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="min-h-screen bg-[#0D0C15] text-white font-serif">
          <Hero />
          <QuoteBox />
          <Cards />
        </div>
      </div>
    </div>
  );
}
