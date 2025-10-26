import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/image4.png"
import { IoMdArrowRoundBack } from "react-icons/io";

export function StudentScreen() {

  const [formData, setFormData] = useState({
    photo: "https://i.pinimg.com/1200x/b7/61/28/b76128b44ffbef517719785ede8c1abe.jpg",
    nome: "",
    contato: "",
    email: "",
    cpf: "",
    nascimento: "",
    matricula: "",
    frequencia: "",
    faixa: "",
    idade: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateAge = (nascimento: string) => {
    const anoAtual = new Date().getFullYear();
    const dataNascimento = new Date(nascimento);
    let idade = anoAtual - dataNascimento.getFullYear();

    // Verifica se a data de aniversário já passou neste ano
    const mesAtual = new Date().getMonth();
    const mesNascimento = dataNascimento.getMonth();
    const diaAtual = new Date().getDate();
    const diaNascimento = dataNascimento.getDate();

    // Se a data de nascimento não ocorreu ainda este ano, subtrai 1 da idade
    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && diaNascimento > diaAtual)) {
      idade--;
    }

    return idade;
  };

  // Atualizar a idade sempre que o valor da data de nascimento mudar
  useEffect(() => {
    if (formData.nascimento) {
      const idadeCalculada = calculateAge(formData.nascimento);
      setFormData((prev) => ({ ...prev, idade: idadeCalculada }));
    }
  }, [formData.nascimento]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#41414B] flex-col">
      {/* Botão de Logout */}
      <div className="w-full px-6 m-[-50px] flex justify-start max-w-7xl mb-6">
        <button
          onClick={() => navigate(-1)}
          className="hover:cursor-pointer text-gray-300 hover:text-white transition"
        >
          <IoMdArrowRoundBack size={28} />
        </button>
      </div>

      {/* Container principal */}
      <div className="relative w-full max-w-7xl h-[721px] bg-white flex items-center justify-center shadow-xl overflow-hidden">
      <div
          className="absolute top-0 left-0 w-full h-[40%] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-white" />

        {/* Cards */}
        <motion.div
          className="relative flex gap-12 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card Perfil */}
          <div className="flex flex-col justify-center items-center bg-white shadow-lg space-y-6 p-6 w-[200px] h-[410px] border border-gray-100">
            {/* Foto e informações básicas */}
            <div className="flex flex-col items-center">
              <img
                src={formData.photo}
                alt={formData.nome}
                className="w-[94px] h-[94px] rounded-[50px]"
              />
              <h2 id="poppins" className="font-regular text-black text-[15px] mt-4">{formData.nome}</h2>
              <p id="poppins" className="text-gray-400 text-[10px]">{formData.faixa}</p>
            </div>

            {/* Detalhes */}
            <div id="poppins" className="flex flex-col gap-4 text-[10px] text-gray-600">
              {[
                { label: "Frequência", value: formData.frequencia },
                { label: "Nome", value: formData.nome },
                { label: "Idade", value: formData.idade },
                { label: "CPF", value: formData.cpf },
              ].map((item) => (
                <div id="poppins" key={item.label} className="flex items-center gap-3">
                  <p className="w-[50px] flex justify-center items-center text-black">{item.label}</p>
                  <div className="w-[1px] h-6 bg-[#A5A1C9]/70" />
                  <span className="text-[#A5A1C9]/70">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Formulário */}
          <div className="bg-white shadow-lg flex flex-col items-center w-[679px] h-[410px] border border-gray-100 flex flex-col justify-between">
            <div className="flex flex-col w-full">
              <div className="border-b-2 border-gray-200 py-5 mb-4 flex items-center">
                <h3 className="px-4 text-gray-700 font-medium text-[10px]">Dados</h3>
                <h3 className="hover:cursor-pointer text-gray-400 font-regular text-[10px]">Enturmar</h3>
              </div>

              <form className="px-10 grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-black">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Data de nascimento</label>
                  <input
                    type="date"
                    name="nascimento"
                    value={formData.nascimento}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Contato</label>
                  <input
                    type="text"
                    name="contato"
                    value={formData.contato}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Matrícula (opcional)</label>
                  <input
                    type="text"
                    name="matricula"
                    value={formData.matricula}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">Frequência</label>
                  <input
                    type="text"
                    name="frequencia"
                    value={formData.frequencia}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-black">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] text-black">Faixa</label>
                  <input
                    type="text"
                    name="faixa"
                    value={formData.faixa}
                    onChange={handleChange}
                    className="w-50 h-5 text-[12px] text-black border-gray-300 border rounded-[2px] py-3 px-3 mt-[2px] focus:ring-2 focus:ring-blue-400 box-border shadow-md"
                  />
                </div>
              </form>
              <div className="flex justify-end items-center mt-5 space-x-6">
              <button type="button" className="text-gray-400 text-sm hover:text-gray-600 transition">
                Cancelar
              </button>
              <button
                type="submit"
                className="hover:cursor-pointer mr-16 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full px-6 py-2 shadow-md transition"
              >
                Enturmar
              </button>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
