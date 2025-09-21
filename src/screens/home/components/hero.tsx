import { motion } from "framer-motion";
import hero from "../../../assets/woman.png";
import { MdCalendarMonth } from "react-icons/md";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollToCards = () => {
    const section = document.getElementById("cards");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1], // curva suave tipo iOS
          }}
          className="flex flex-col justify-between h-full py-10"
        >
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
            <motion.button
              className="hover:cursor-pointer text-lg mt-6 flex items-center gap-2 w-40 h-15 px-6 py-2 bg-[#29235F]/70 rounded-full hover:bg-[#3b3b4d] transition mx-auto md:mx-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToCards}
            >
              <MdCalendarMonth/>
              Ver o dia
            </motion.button>
          </div>
        </motion.div>

        {/* Imagem com fade + parallax */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1], // curva mais elegante
          }}
          className="flex justify-center md:justify-end items-end"
        >
          <img
            src={hero}
            alt="silhueta praticante de jiu-jitsu"
            className="relative z-20 scale-135 -mb-1"
          />
        </motion.div>
      </div>
    </section>
  );
}