import { HeaderMobile } from '@/components/headerMobile';
import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Choice } from '../components/choose';
import { CiSearch } from 'react-icons/ci';
import logo from "../../../assets/logo.svg";
import { IoMdAdd } from 'react-icons/io';

export const StudentList = () => {
  return (
    <div className="bg-[#021C41] text-white min-h-screen font-['Josefin-slab']">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#021C41]">
        {/* Campo de pesquisa */}
        <div className="flex items-center relative lg:w-[400px]">
          <CiSearch size={10} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#00AAFF]" />
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
      <div className="overflow-x-auto p-4">
        <table className="w-full text-[10px] table-auto bg-[#02385A] rounded-md">
          <thead>
            <tr>
              <th className="py-2">Foto</th>
              <th className="px-1 py-2">Nome</th>
              <th className="px-1 py-2">Número</th>
              <th className="px-1 py-2">Faixa</th>
              <th className="px-1 py-2">Grau</th>
              <th className="px-1 py-2">Status</th>
              <th className="px-1 py-2">Operação</th>
              <th className="px-1 py-2">Conferir</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#2E3B49]">
              <td className="px-2 py-2">
                <img
                  src="https://i.pinimg.com/736x/04/eb/92/04eb92665e15580e037b6b77c09ed458.jpg"
                  alt="Aluno"
                  className="rounded-full h-5 w-5"
                />
              </td>
              <td className="px-1 py-2">Deadlock</td>
              <td className="px-1 py-2">0000-0000</td>
              <td className="px-5">
                <div className="bg-red-600 h-3 w-3 text-white rounded-sm"/>
              </td>
              <td className="px-3 py-2">1°</td>
              <td className="px-4 py-2">Ativa</td>
              <td className="py-2 px-1 text-center">
                <div className="flex items-center justify-center gap-3">
                  <FaEdit className="cursor-pointer hover:text-blue-500 transition" />
                  <FaTrash className="cursor-pointer hover:text-red-500 transition" />
                </div>
              </td>
              <td className="px-4 py-2">
                <button className="flex items-center justify-center bg-[#076185] text-white py-1 px-1 h-6 w-6 rounded-full">
                  <FaEye />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <HeaderMobile/>
    </div>
  );
};
