import { motion } from "framer-motion";
import { cards } from "./cards";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


export function Cards() {
  return (
    <section id="cards" className="flex flex-col items-center py-12 bg-[#0D0C15] mt-10 mb-20">
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
      <motion.h2
        className="text-center text-4xl font-serif mb-10 z-10"
      >
        Escolha sua jornada
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 z-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="hover:cursor-pointer flex items-center justify-center flex-col h-[300px] w-[286px] bg-[#CCC8F3] p-6 text-center 
                      shadow-[-8px_8px_0px_#6b61bd] hover:scale-110 hover:shadow-[-12px_12px_0px_#4c3fa1] transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => scrollToSection(card.targetId)}
          >
            {card.icon}
            <p className="text-[#453E7D] text-[30px] font-[200]">{card.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}