import { motion } from "framer-motion";
import { cards } from "./cards";

export function Cards() {
  return (
    <section id="cards" className="min-h-screen flex flex-col justify-center items-center py-12 bg-[#0D0C15]">
      <motion.h2
        className="text-center text-4xl font-serif mb-20"
      >
        Escolha sua jornada
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {cards.map((card, i) => (
          <a href="/student"><motion.div
            key={i}
            className="hover:cursor-pointer flex items-center justify-center flex-col h-[300px] w-[286px] bg-[#CCC8F3] p-6 text-center 
                      shadow-[-8px_8px_0px_#6b61bd] hover:scale-110 hover:shadow-[-12px_12px_0px_#4c3fa1] transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {card.icon}
            <p className="text-[#453E7D] text-[30px] font-[200]">{card.title}</p>
          </motion.div></a>
        ))}
      </div>
    </section>
  );
}