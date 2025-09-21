import { motion } from "framer-motion";
import image2 from "../../../assets/siymbol.png";

export function QuoteBox() {
  return (
    <motion.section
      className="h-[600px] grid md:grid-cols-2 bg-[#D9D9D9] text-black shadow-[inset_0_40px_50px_rgba(0,0,0,0.25)]"
    >
      <div className="flex justify-center overflow-hidden">
        <motion.img
          src={image2}
          alt="jiujitsu"
          className="scale-50 object-contain"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="flex justify-center items-center text-center md:text-left px-4 md:px-0">
        <p className="text-[25px] text-[#6B61BD] leading-relaxed">
          Treine com quem entende que cada queda é apenas um passo para a
          evolução. "O tatame é mais do que técnica: é respeito, foco e
          transformação." Do primeiro treino ao faixa preta, cada jornada é única
        </p>
      </div>
    </motion.section>
  );
}