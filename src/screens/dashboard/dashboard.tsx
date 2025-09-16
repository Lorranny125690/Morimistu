import React from "react";
import {
  FiBookOpen,
  FiEdit3,
  FiUsers,
  FiCalendar,
  FiDownload,
  FiPieChart,
  FiUserCheck,
  FiClock,
} from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { motion } from "framer-motion";

/* ---------------- Mock Data ---------------- */
interface AttendanceData {
  name: string;
  presences: number;
}
const attendanceData: AttendanceData[] = [
  { name: "Semana 1", presences: 120 },
  { name: "Semana 2", presences: 140 },
  { name: "Semana 3", presences: 110 },
  { name: "Semana 4", presences: 160 },
];

interface SalesData {
  name: string;
  value: number;
}
const salesData: SalesData[] = [
  { name: "Jan", value: 400 },
  { name: "Fev", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Abr", value: 600 },
];

interface Stats {
  totalStudents: number;
  studentsEligible: number;
  avgAttendancePercent: number;
  activeClasses: number;
  totalTeachers: number;
  futureClasses: number;
}
const mockStats: Stats = {
  totalStudents: 214,
  studentsEligible: 12,
  avgAttendancePercent: 86,
  activeClasses: 8,
  totalTeachers: 5,
  futureClasses: 14,
};

interface Student {
  name: string;
  faixa: string;
  presences: number;
}
const advancedStudents: Student[] = [
  { name: "Carlos Oliveira", faixa: "Roxa", presences: 45 },
  { name: "Fernanda Souza", faixa: "Marrom", presences: 52 },
  { name: "Lucas Mendes", faixa: "Preta", presences: 60 },
];

/* ---------------- Components ---------------- */
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent: string;
}
const StatCard: React.FC<StatCardProps> = ({ title, value, icon, accent }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-gradient-to-br from-white to-[#F8F9FF] rounded-2xl p-6 shadow-lg flex flex-col justify-between border border-gray-100"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-sm text-[#6b61bd] font-medium tracking-wide">
          {title}
        </span>
        <span className="text-3xl font-extrabold text-[#20164a] mt-1">
          {value}
        </span>
      </div>
      <div className={`p-3 rounded-xl ${accent} bg-opacity-20 shadow-inner`}>
        {icon}
      </div>
    </div>
  </motion.div>
);

/* ---------------- Dashboard Page ---------------- */
export const Dashboard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0D0C15] via-[#161422] to-[#1E1A30]">
    <div className="max-w-6xl mx-auto min-h-screen text-white font-sans px-6 py-10 space-y-12">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center shadow-md">
            <FiPieChart className="text-[#6B61BD] text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-white">Painel de Controle</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/90 rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
            <FiCalendar className="text-[#6B61BD]" />
            <input
              className="bg-transparent outline-none w-40 text-sm text-black placeholder-gray-500"
              placeholder="Buscar..."
            />
          </div>
        </div>
      </header>

      {/* Seção 1 - Estatísticas rápidas */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-200">
          📊 Resumo Rápido
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <StatCard
            title="Alunos registrados"
            value={mockStats.totalStudents}
            icon={<FiUsers className="text-lg text-white" />}
            accent="bg-[#6B61BD]"
          />
          <StatCard
            title="Aptos à graduação"
            value={mockStats.studentsEligible}
            icon={<FiBookOpen className="text-lg text-white" />}
            accent="bg-[#6B61BD]"
          />
          <StatCard
            title="Média de frequência"
            value={`${mockStats.avgAttendancePercent}%`}
            icon={<FiEdit3 className="text-lg text-white" />}
            accent="bg-[#6B61BD]"
          />
          <StatCard
            title="Turmas ativas"
            value={mockStats.activeClasses}
            icon={<FiUserCheck className="text-lg text-white" />}
            accent="bg-[#6B61BD]"
          />
          <StatCard
            title="Professores"
            value={mockStats.totalTeachers}
            icon={<FiUsers className="text-lg text-white" />}
            accent="bg-[#6B61BD]"
          />
          <StatCard
            title="Aulas futuras"
            value={mockStats.futureClasses}
            icon={<FiClock className="text-lg text-white" />}
            accent="bg-[#6B61BD]"
          />
        </div>
      </section>

      {/* Seção 2 - Gráficos */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-200">📈 Gráficos</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frequência semanal */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#20164a] text-lg font-semibold">
                Frequência semanal
              </h4>
              <span className="text-sm text-gray-500">Últimas 4 semanas</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={attendanceData}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="presences"
                  stroke="#6B61BD"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Atividades por mês */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#20164a] text-lg font-semibold">
                Atividades por mês
              </h4>
              <span className="text-sm text-gray-500">Ano atual</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={salesData}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Bar dataKey="value" fill="#6B61BD" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Seção 3 - Listas e Tabelas */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-200">
          📋 Listas & Detalhes
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Aptos à graduação */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h4 className="text-[#20164a] text-lg font-semibold mb-4">
              Aptos à graduação
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                <span>Ana Silva — Faixa Azul</span>
                <button className="text-sm text-[#6B61BD] hover:underline">
                  Conferir
                </button>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                <span>Bruno Costa — Faixa Cinza</span>
                <button className="text-sm text-[#6B61BD] hover:underline">
                  Conferir
                </button>
              </li>
            </ul>
          </div>

          {/* Aniversariantes */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#20164a] text-lg font-semibold">
                Aniversariantes (mês)
              </h4>
              <FaBirthdayCake className="text-[#6B61BD]" />
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>🎂 João Pedro — 03 Mai</li>
              <li>🎂 Marina — 09 Mai</li>
              <li>🎂 Carla Mendes — 12 Mai</li>
            </ul>
          </div>

          {/* Ações rápidas */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#20164a] text-lg font-semibold">
                Ações rápidas
              </h4>
              <FiDownload className="text-gray-500" />
            </div>
            <div className="grid text-slate-500 gap-3">
              <button className="w-full text-left px-4 py-2 rounded-md bg-[#F5F7FF] hover:bg-[#E9ECFF] transition">
                ➕ Cadastrar aluno
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md bg-[#F5F7FF] hover:bg-[#E9ECFF] transition">
                📝 Registrar presença
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md bg-[#F5F7FF] hover:bg-[#E9ECFF] transition">
                📊 Gerar relatório
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 - Tabela avançados */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-200">
          🥋 Alunos — Faixa Roxa ou superior
        </h3>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-[#F8F9FF]">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Nome</th>
                <th className="px-6 py-3 text-left font-semibold">Faixa</th>
                <th className="px-6 py-3 text-left font-semibold">Presenças</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {advancedStudents.map((student, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-3">{student.name}</td>
                  <td className="px-6 py-3">{student.faixa}</td>
                  <td className="px-6 py-3">{student.presences}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
    </div>
  );
};
