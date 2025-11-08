import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/image4.png";
import { IoMdArrowRoundBack } from "react-icons/io";

type FormData = {
  photo: string;
  nome: string;
  contato: string;
  email: string;
  cpf: string;
  nascimento: string;
  matricula: string;
  frequencia: string;
  faixa: string;
  idade: number;
  genero?: string;
  grau?: string;
};

export function StudentScreen() {
  const [formData, setFormData] = useState<FormData>({
    photo:
      "https://i.pinimg.com/1200x/b7/61/28/b76128b44ffbef517719785ede8c1abe.jpg",
    nome: "",
    contato: "",
    email: "",
    cpf: "",
    nascimento: "",
    matricula: "",
    frequencia: "",
    faixa: "",
    idade: 0,
    genero: "",
    grau: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateAge = (nascimento: string) => {
    if (!nascimento) return 0;
    const today = new Date();
    const birth = new Date(nascimento);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  useEffect(() => {
    if (formData.nascimento) {
      const idadeCalculada = calculateAge(formData.nascimento);
      setFormData((prev) => ({ ...prev, idade: idadeCalculada }));
    } else {
      setFormData((prev) => ({ ...prev, idade: 0 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.nascimento]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#41414B] flex-col px-4">

      {/* Botão Voltar */}
      <div className="w-full px-6 flex justify-start max-w-7xl mb-6">
        <button
          onClick={() => navigate(-1)}
          className="hover:cursor-pointer text-gray-300 hover:text-white transition"
        >
          <IoMdArrowRoundBack size={28} />
        </button>
      </div>

      {/* Container principal */}
      <div className="relative w-full max-w-7xl min-h-[700px] bg-white flex items-center justify-center shadow-xl overflow-hidden mx-2 md:mx-auto">
        <div
          className="absolute top-0 left-0 w-full h-[40%] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-white" />

        <motion.div
          className="relative flex gap-12 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card Perfil */}
          <div className="flex flex-col justify-center items-center bg-white shadow-lg space-y-6 p-6 w-[90%] max-w-[220px] md:w-[200px] h-auto md:h-[410px] border border-gray-100">
            <div className="flex flex-col items-center">
              <img
                src={formData.photo}
                alt={formData.nome}
                className="w-[94px] h-[94px] rounded-[50px]"
              />
              <h2
                id="poppins"
                className="font-regular text-black text-[15px] mt-4"
              >
                {formData.nome || "Nome do aluno"}
              </h2>
              <p id="poppins" className="text-gray-400 text-[10px]">
                {formData.faixa || "Faixa não selecionada"}
              </p>
            </div>

            <div
              id="poppins"
              className="flex flex-col gap-4 text-[10px] text-gray-600"
            >
              {[
                { label: "Frequência", value: formData.frequencia },
                { label: "Nome", value: formData.nome },
                { label: "Idade", value: formData.idade },
                { label: "CPF", value: formData.cpf },
              ].map((item) => (
                <div
                  id="poppins"
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <p className="w-[50px] flex justify-center items-center text-black">
                    {item.label}
                  </p>
                  <div className="w-[1px] h-6 bg-[#A5A1C9]/70" />
                  <span className="text-[#A5A1C9]/70">{item.value || "-"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Formulário */}
          <div className="bg-white shadow-lg flex flex-col items-center w-[679px] h-[410px] border border-gray-100 justify-between">
            <div className="flex flex-col w-full">
              <div className="border-b-2 border-gray-200 py-5 mb-4 flex items-center">
                <h3 className="px-4 text-gray-700 font-medium text-[10px]">
                  Dados
                </h3>
                <h3 className="hover:cursor-pointer text-gray-400 font-regular text-[10px]">
                  Enturmar
                </h3>
              </div>

              {/* Formulário: GRID com 3 colunas (direita pequena para Grau) */}
              <form
                className="px-6 md:px-10 gap-6"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 80px",
                  gridAutoRows: "min-content",
                  alignItems: "start",
                  gap: "16px",
                }}
              >
                {/* Row 1 */}
                <div>
                  <label className="block text-[10px] text-black">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">
                    Data de nascimento
                  </label>
                  <input
                    type="date"
                    name="nascimento"
                    value={formData.nascimento}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Grau</label>
                  <select
                    name="grau"
                    value={formData.grau}
                    onChange={handleChange}
                    className="w-16 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] bg-white focus:ring-2 focus:ring-blue-400 shadow-sm"
                  >
                    <option value=""> </option>
                    <option value="1º Grau">1º</option>
                    <option value="2º Grau">2º</option>
                    <option value="3º Grau">3º</option>
                    <option value="4º Grau">4º</option>
                    <option value="5º Grau">5º</option>
                  </select>
                </div>

                {/* Row 2 */}
                <div>
                  <label className="block text-[10px] text-black">Contato</label>
                  <input
                    type="text"
                    name="contato"
                    value={formData.contato}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">
                    Matrícula (opcional)
                  </label>
                  <input
                    type="text"
                    name="matricula"
                    value={formData.matricula}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div />

                <div>
                  <label className="block text-[10px] text-black">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Frequência</label>
                  <input
                    type="text"
                    name="frequencia"
                    value={formData.frequencia}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div />

                {/* Row 4 */}
                <div>
                  <label className="block text-[10px] text-black">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Faixa</label>
                  <select
                    name="faixa"
                    value={formData.faixa}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] bg-white focus:ring-2 focus:ring-blue-400 shadow-sm"
                  >
                    <option value="">Escolher faixa</option>
                    <option value="Faixa branca">Faixa branca</option>
                    <option value="Faixa cinza">Faixa cinza</option>
                    <option value="Faixa amarela">Faixa amarela</option>
                    <option value="Faixa laranja">Faixa laranja</option>
                    <option value="Faixa verde">Faixa verde</option>
                    <option value="Faixa azul">Faixa azul</option>
                    <option value="Faixa roxa">Faixa roxa</option>
                    <option value="Faixa marrom">Faixa marrom</option>
                    <option value="Faixa preta">Faixa preta</option>
                  </select>
                </div>

                {/* Row 5 - Gênero occupies left column, keep two empty columns to match spacing */}
                <div style={{ gridColumn: "1 / 2" }}>
                  <label className="block text-[10px] text-black">Gênero</label>
                  <select
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
                    className="w-50 h-6 text-[12px] text-black border-gray-300 border rounded-[2px] px-2 mt-[6px] bg-white focus:ring-2 focus:ring-blue-400 shadow-sm"
                  >
                    <option value="">Escolher gênero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                </div>
              </form>

              {/* Rodapé com botões — alinhado à direita, espelhando a imagem */}
              <div className="w-full px-10 h-[1px] flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="cursor-pointer text-gray-400 text-sm hover:text-gray-600 mr-6"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={() => console.log("confirmar", formData)}
                  className="bg-[#4963F5] cursor-pointer hover:bg-[#345ed3] text-white text-sm rounded-full px-5 py-2 shadow-md"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
