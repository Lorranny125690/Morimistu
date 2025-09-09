import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "@/screens/home/home";
import { Student } from "@/screens/student/student";
import { Login } from "@/screens/auth/login";
import { SelectLogin } from "@/screens/auth/userType";
import { ChangePassword } from "@/teste";
import { Header } from "@/components/header";
import { useState } from "react";

function AppContent() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Defina quais rotas NÃO devem exibir o Header
  const noHeaderRoutes = ["/", "/login", "/change-password"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#0D0C15] text-white">
      {showHeader && <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}

      <main>
        <Routes>
          <Route path="/" element={<SelectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </main>
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
