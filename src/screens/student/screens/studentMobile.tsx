import { HeaderMobile } from '@/components/headerMobile';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Choice } from '../components/choose';
import { CiSearch } from 'react-icons/ci';
import logo from "../../../assets/logo.svg";
import { IoMdAdd } from 'react-icons/io';
import { motion } from 'framer-motion';

const students = [
  { id: 1, name: 'Deadlock', number: '0000-0000', belt: '1°', status: 'Ativa', photo: 'https://i.pinimg.com/736x/04/eb/92/04eb92665e15580e037b6b77c09ed458.jpg' },
  { id: 2, name: 'Deadlock', number: '0000-0000', belt: '1°', status: 'Ativa', photo: 'https://i.pinimg.com/736x/04/eb/92/04eb92665e15580e037b6b77c09ed458.jpg' },
  { id: 3, name: 'Deadlock', number: '0000-0000', belt: '1°', status: 'Ativa', photo: 'https://i.pinimg.com/736x/04/eb/92/04eb92665e15580e037b6b77c09ed458.jpg' },
];

export const StudentList = () => {
  return (
    <div className="bg-[#021C41] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#021C41]">
        {/* Campo de pesquisa */}
        <div className="flex px-2 items-center relative lg:w-[400px]">
          <CiSearch size={10} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#00AAFF]" />
          <input
            type="text"
            placeholder="Pesquisar aluno"
            className="w-42 h-6 pl-6 pr-3 rounded-[20px] bg-[#02385A]/70 text-[#00AAFF] text-[10px] placeholder-[#00AAFF] focus:outline-none"
          />
        </div>

        {/* Nome do usuário e avatar */}
        <div className="flex gap-2 items-center">
          <p className="text-xs">Nome do usuário</p>
          <img src={logo} alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
      </header>
      
      {/* Menu de navegação */}
      <div className='flex flex-row items-center justify-between'>
        <Choice />
        <div className='mr-5 gap-2 h-5 flex flex-row'>
          <div className='flex items-center text-[8px] justify-center rounded-xl bg-blue-500 h-5 w-13'>
            Filtrar por
          </div>
          <div className='flex items-center justify-center rounded-sm bg-blue-500 h-5 w-5'>
            <IoMdAdd size={10}/>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center mt-5 overflow-x-auto">
      <table className="w-[85vw] max-w-[600px] min-w-[350px] text-[10px] border-b-[#55ACBF] border-collapse bg-[#02385A] rounded-md landscape:w-[70vw] landscape:max-w-[700px]">
            <thead className="bg-[#02385A] text-white/70 font-semibold">
              <tr>
                <th className="border-b border-[#55ACBF] py-2 px-2 text-left">Foto</th>
                <th className="border-b border-[#55ACBF] py-2 px-2 text-left">Nome</th>
                <th className="border-b border-[#55ACBF] py-2 px-2 text-left">Número</th>
                <th className="border-b border-[#55ACBF] py-2 text-center">Faixa</th>
                <th className="border-b border-[#55ACBF] py-2 text-center">Grau</th>
                <th className="border-b border-[#55ACBF] py-2 text-center">Operação</th>
                <th className="border-b border-[#55ACBF] py-2 text-center">Conferir</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <motion.tr
                  key={student.id}
                  className="hover:bg-[#2E3B49]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <td className="border-t border-[#55ACBF] py-2">
                    <img src={student.photo} alt="Aluno" className="rounded-full h-5 mx-auto" />
                  </td>
                  <td className="border-t border-[#55ACBF] py-2 px-2">{student.name}</td>
                  <td className="border-t border-[#55ACBF] py-2 px-2">{student.number}</td>
                  <td className="border-t border-[#55ACBF] py-2 text-center">
                    <div className="bg-red-600 h-3 w-3 mx-auto rounded-sm" />
                  </td>
                  <td className="border-t border-[#55ACBF] py-2 text-center">{student.belt}</td>
                  <td className="border-t border-[#55ACBF] py-2 text-center">
                    <div className="flex justify-center gap-3">
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <FaEdit className="cursor-pointer hover:text-blue-500 transition" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <FaTrash className="cursor-pointer hover:text-red-500 transition" />
                      </motion.div>
                    </div>
                  </td>
                  <td className="border-t border-[#55ACBF] py-2 text-center">
                    <button className="flex items-center justify-center bg-[#076185] text-white h-6 w-6 rounded-full mx-auto">
                      <FaEye />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      {/* Footer */}
      <HeaderMobile/>
    </div>
  );
};
