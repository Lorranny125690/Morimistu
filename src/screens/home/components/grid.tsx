import { motion } from "framer-motion";
import { turmasRecentes, alunosGraduar, alunosAniversariando } from "./list";

interface ListaCarrosselProps {
  titulo: string;
  itens: { id: number; nome: string; imagem: string }[];
}

function ScreenCard({ titulo, itens }: ListaCarrosselProps) {
  return (
    <section className="flex flex-col items-center bg-[#0D0C15] py-16">
      <h2 className="w-full max-w-7xl text-3xl font-semibold mb-8 text-white text-start">
        {titulo}
      </h2>

      <div className="w-full max-w-7xl">
        <div
          tabIndex={0}
          className="flex gap-6 overflow-y-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 hide-scrollbar"
          role="region"
          aria-label={`Carrossel de ${titulo}`}
        >
          {itens.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="w-[328px] h-[292px] snap-start flex-shrink-0 bg-[#1A1824]/90 w-[260px] rounded-2xl overflow-hidden
                         shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="bg-white text-black text-center py-3 text-lg font-semibold">
                {item.nome}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-500 text-sm select-none animate-pulse">
        ↔ role para ver mais
      </p>
    </section>
  );
}

export const TurmasRecentes = () => (
  <ScreenCard titulo="Turmas Recentes" itens={turmasRecentes} />
);

export const AlunosAptosGraduar = () => (
  <ScreenCard titulo="Alunos Aptos a Graduar" itens={alunosGraduar} />
);

export const AlunosAniversariando = () => (
  <ScreenCard titulo="Aniversariantes do Mês" itens={alunosAniversariando} />
);