import { AiFillEdit } from "react-icons/ai";

const alunoInfo = {
  nome: "Manoel Gomes da Silva",
  matricula: "20231031020358",
  contato: "(88) 8860–8045",
  dataNascimento: "20/05/2000",
  cpf: "00000000–00",
  email: "email@gmail.com",
  apelido: "caneta azul",
  faixa: "preta",
  cargo: "aluno",
  genero: "M",
};

export function ProfileMobile () {
  return(
    <div className="min-h-screen bg-[#011023]">
      <header className="p-8 flex flex-row justify-end items-center mb-6">
        <AiFillEdit size={20}/>
      </header>

      <div className="flex flex-row items-center justify-center gap-5 mb-13">
        <img className="h-34 w-34 cover rounded-4xl" src="https://i.pinimg.com/736x/27/ca/57/27ca572a2787b088c8e148c9b4f73e84.jpg" alt="no tenemos" />
        <div className="flex flex-col text-center">
          <p className="font-bold text-[28px]">Laura Matos</p>
          <p className="font-medium text-[24px]">Faixa azul</p>
          <p className="font-thin text-[20px]">16 anos</p>
          <p className="font-regular text-[16px]">Grau 1</p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center mt-8 gap-9">
        <div className="bg-[#052659]/60 w-[16vh] h-[10.7vh] rounded-lg">
          <div className="flex flex-row items-center justify-start">
            <p className="px-2 text-[16px]">Frequência</p>
          </div>
          <p className="px-2 text-[64px] leading-none">15</p>
        </div>
        <div className="bg-[#052659]/60 w-[16vh] h-[10.7vh] rounded-lg">
          <div className="flex flex-row items-center justify-start px-2 gap-2">
            <p className="text-[16px]">Turmas</p>
          </div>
          <p className="px-2 text-[64px] leading-none">02</p>
        </div>
      </div>

      <div className="px-12 py-8">
        <h3 className="text-[28px] font-bold mb-2">Informações</h3>
        <div className="h-0.5 bg-white mb-2"/>
        {Object.entries(alunoInfo).map(([chave, valor]) => (
            <p key={chave}>
              <span className="font-[16px] capitalize">{chave}:</span> {valor}
            </p>
          ))}
      </div>
    </div>
  )
}