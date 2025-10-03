import { Hero } from "./components/hero.tsx";
import { QuoteBox } from "./components/quotebox.tsx";
import { Cards } from "./components/card.tsx";
import logo from "../../assets/logo.svg";
import { cards } from "./components/cards.tsx";
import { IoHomeSharp, IoTrophy } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export function HomeMobile() {
  const navLinks = [
    {
      icon: <IoHomeSharp size={24}/>,
      href: ["/home"],
      activeClass: "text-white border-b",
    },
    {
      icon: <PiStudentFill size={24} />,
      href: ["/student", "/notification"],
      activeClass: "text-white border-b",
    },
    {
      icon: <SiGoogleclassroom size={24} />,
      href: ["/classes"],
      activeClass: "text-red-400 border-b",
    },
    {
      icon: <IoTrophy size={24} />,
      href: ["/championship"],
      aactiveClass: "text-red-400 border-b",
    },
    {
      icon: <RiDashboardHorizontalFill size={24} />,
      href: ["/dashboard"],
      activeClass: "text-red-400 border-b",
    },
    {
      icon: <FaUser size={24} />,
      href: ["/dashboard"],
      activeClass: "text-red-400 border-b",
    },
  ];

  const renderLinks = () =>
    navLinks.map((link) => {
      const hrefs = Array.isArray(link.href) ? link.href : [link.href];
      const isActive = hrefs.includes(location.pathname);

      return (
        <a
          key={hrefs[0]}
          href={hrefs[0]} // sempre usa o primeiro como destino
          className={isActive ? link.activeClass : "hover:text-gray-300"}
        >
          {link.icon}
        </a>
      );
    });

  return (
    <div 
      className="min-h-screen bg-[#201E33] text-white flex flex-col font-['Josefin Slab'] overflow-x-hidden"
    >
      {/* Header */}
      <div className="p-4">
        <div className="flex justify-end gap-2 items-center">
          <p className="text-xs">Nome do usuário</p>
          <img src={logo} alt="avatar" className="w-8 h-8 rounded-full" />
        </div>

        <div className="px-2 mt-4 mb-8">
          <h1 className="text-2xl font-bold">Bom dia.</h1>
          <p className="text-xl font-light">Escolha sua jornada para hoje:</p>
        </div>

        {/* Opções de ação */}
        <div className="ml-2 flex justify-center items-center flex-row gap-6">
          {cards.map((card, i) => (
            <a key={i} href={card.href}>
              <div
                className="hover:cursor-pointer flex items-center justify-center flex-col h-[122px] w-[110px] bg-[#CCC8F3] text-center shadow-[-8px_8px_0px_#6b61bd] hover:scale-110 hover:shadow-[-12px_12px_0px_#4c3fa1] transition-all duration-300"
              >
                {card.icon}
                <p className="text-[#453E7D] w-[76px] text-[10px] font-[200]">
                  {card.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Cards numéricos */}
      <div className="space-y-6 grid grid-cols-2 mt-10 gap-4 px-4">
        <div className="bg-[#322F50] rounded-[28px] h-[176px] flex flex-col justify-center items-center">
          <div className="flex w-36 items-center justify-between gap-2">
            <p className="text-[20px] h-12 w-26 font-regular">Número de alunos</p>
            <div className=" rounded-full flex items-center justify-center h-8 w-8 bg-white">
              <PiStudentFill className="text-[#322F50]" size={20}/>
            </div>
          </div>
          <div className="flex w-full px-4 justify-start items-start">
            <p className="text-[70px] font-bold">72</p>
          </div>
        </div>

        <div className="bg-[#322F50] rounded-[28px] h-[176px] flex flex-col justify-center items-center">
          <div className="flex w-36 items-center justify-between gap-2">
            <p className="text-[20px] h-12 w-26 font-regular">Número de equipes</p>
            <div className=" rounded-full flex items-center justify-center h-8 w-8 bg-white">
              <PiStudentFill className="text-[#322F50]" size={20}/>
            </div>
          </div>
          <div className="flex w-full px-4 justify-start items-start">
            <p className="text-[70px] font-bold">18</p>
          </div>
        </div>

        <div className="bg-[#322F50] rounded-[28px] h-[176px] flex flex-col justify-center items-center">
          <div className="flex w-36 items-center justify-between gap-2">
            <p className="text-[20px] h-12 w-26 font-regular">Número de turmas</p>
            <div className=" rounded-full flex items-center justify-center h-8 w-8 bg-white">
              <PiStudentFill className="text-[#322F50]" size={20}/>
            </div>
          </div>
          <div className="flex w-full px-4 justify-start items-start">
            <p className="text-[70px] font-bold">12</p>
          </div>
        </div>

        <div className="bg-[#322F50] rounded-[28px] h-[176px] flex flex-col justify-center items-center">
          <div className="flex w-36 items-center justify-between gap-2">
            <p className="text-[20px] h-12 w-26 font-regular">Número de professores</p>
            <div className=" rounded-full  flex items-center justify-center h-8 w-8 bg-white">
              <PiStudentFill className="text-[#322F50]" size={20}/>
            </div>
          </div>
          <div className="flex w-full px-4 justify-start items-start">
            <p className="text-[70px] font-bold">6</p>
          </div>
        </div>
      </div>

      {/* Navegação inferior */}
      <div className="h-[86px] text-white/20 fixed bottom-0 left-0 w-full bg-[#7B73C3]/20 flex justify-around items-center">
        {renderLinks()}
      </div>
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
