import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "@/screens/home/home";
import { Student } from "@/screens/student/screens/student";
import { Login } from "@/screens/auth/login";
import { SelectLogin } from "@/screens/auth/userType";
import { ChangePassword } from "@/teste";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"; // importa o footer
import { useState } from "react";
import { Dashboard } from "@/screens/dashboard/dashboard";
import { StudentScreen } from "@/screens/student/screens/add";
import { Notification } from "@/screens/student/screens/notification";
import { Classes } from "@/screens/classes/classes";
import { Championship } from "@/screens/championship/champion";

function AppContent() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const noHeaderRoutes = ["/", "/login", "/change-password", "/add_student"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0C15] text-white">
      {/* Header condicional */}
      {showHeader && <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}

      {/* Conteúdo principal que cresce */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<SelectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_student" element={<StudentScreen />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/championship" element={<Championship/>}/>
        </Routes>
      </main>

      {/* Footer só aparece nas rotas com header */}
      {showHeader && <Footer />}
    </div>
  );
}

function Routers() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default Routers;
