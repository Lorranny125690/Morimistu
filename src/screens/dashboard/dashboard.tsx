import React from "react";
import {
  FiBookOpen,
  FiEdit3,
  FiUsers,
  FiCalendar,
  FiDownload,
  FiPieChart,
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
}
const mockStats: Stats = {
  totalStudents: 214,
  studentsEligible: 12,
  avgAttendancePercent: 86,
  activeClasses: 8,
};

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
    className="bg-white rounded-2xl p-5 shadow-md flex flex-col justify-between min-h-[120px]"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-sm text-[#6b61bd] font-medium">{title}</span>
        <span className="text-2xl font-bold text-[#20164a]">{value}</span>
      </div>
      <div className={`p-3 rounded-lg ${accent} bg-opacity-10`}>{icon}</div>
    </div>
  </motion.div>
);

/* ---------------- Dashboard Page ---------------- */
export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0C15] text-white font-sans px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/90 w-10 h-10 flex items-center justify-center shadow-sm">
            <FiPieChart className="text-[#6B61BD]" />
          </div>
          <h2 className="text-xl font-semibold text-white">Dashboard</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/90 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
            <FiCalendar className="text-[#6B61BD]" />
            <input
              className="bg-transparent outline-none w-36 text-sm text-black"
              placeholder="Buscar..."
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Alunos cadastrados"
          value={mockStats.totalStudents}
          icon={<FiUsers className="text-2xl text-[#6B61BD]" />}
          accent="bg-[#6B61BD]/30"
        />
        <StatCard
          title="Aptos à graduação"
          value={mockStats.studentsEligible}
          icon={<FiBookOpen className="text-2xl text-[#6B61BD]" />}
          accent="bg-[#4c3fa1]/30"
        />
        <StatCard
          title="Média de frequência"
          value={`${mockStats.avgAttendancePercent}%`}
          icon={<FiEdit3 className="text-2xl text-[#6B61BD]" />}
          accent="bg-[#8b76d6]/30"
        />
        <StatCard
          title="Turmas ativas"
          value={mockStats.activeClasses}
          icon={<FaBirthdayCake className="text-2xl text-[#6B61BD]" />}
          accent="bg-[#6b61bd]/30"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column (charts) */}
        <div className="lg:col-span-2 grid grid-rows-2 gap-6">
          {/* Frequência semanal */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#20164a] font-semibold">
                Frequência semanal
              </h4>
              <span className="text-sm text-gray-500">Últimas 4 semanas</span>
            </div>
            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <LineChart data={attendanceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="presences"
                    stroke="#6B61BD"
                    strokeWidth={3}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Atividades por mês */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#20164a] font-semibold">Atividades por mês</h4>
              <span className="text-sm text-gray-500">Ano atual</span>
            </div>
            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <BarChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#6B61BD"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right column */}
        <aside className="space-y-6">
          {/* Aptos à graduação */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#20164a] font-semibold">Aptos à graduação</h4>
              <span className="text-sm text-gray-500">
                {mockStats.studentsEligible} encontrados
              </span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#F2EBFF] rounded-full flex items-center justify-center text-[#6B61BD]">
                    A
                  </div>
                  <div>
                    <div className="font-medium">Ana Silva</div>
                    <div className="text-xs text-gray-500">
                      Faixa: Azul — Presenças: 32
                    </div>
                  </div>
                </div>
                <button className="text-sm text-[#6B61BD]">Conferir</button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#F2EBFF] rounded-full flex items-center justify-center text-[#6B61BD]">
                    B
                  </div>
                  <div>
                    <div className="font-medium">Bruno Costa</div>
                    <div className="text-xs text-gray-500">
                      Faixa: Cinza — Presenças: 31
                    </div>
                  </div>
                </div>
                <button className="text-sm text-[#6B61BD]">Conferir</button>
              </li>
            </ul>
          </div>

          {/* Aniversariantes */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#20164a] font-semibold">
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

          {/* Quick actions */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#20164a] font-semibold">Ações rápidas</h4>
              <FiDownload className="text-gray-500" />
            </div>
            <div className="grid gap-2">
              <button className="w-full text-left px-3 py-2 rounded-md bg-[#F5F7FF]">
                Cadastrar aluno
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md bg-[#F5F7FF]">
                Registrar presença (massa)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md bg-[#F5F7FF]">
                Gerar relatório
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
