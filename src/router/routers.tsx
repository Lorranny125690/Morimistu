import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "@/screens/home/home";
import { Login } from "@/screens/auth/login";
import { SelectLogin } from "@/screens/auth/userType";
import { HeaderExport } from "@/components/index";
import { Footer } from "@/components/footer";
import { Dashboard } from "@/screens/dashboard/dashboard";
import { StudentScreen } from "@/screens/student/screens/add";
import { Notification } from "@/screens/student/screens/notification";
import { Classes } from "@/screens/classes/classes";
import { Championship } from "@/screens/championship/champion";
import { AddClass } from "@/screens/classes/add";
import { Student } from "@/screens/student";
import { Password } from "@/screens/auth/changePassword";
import { Code } from "@/screens/auth/code";
import { Email } from "@/screens/auth/emailVerification";
import { AuthProvider } from "@/context/authContext";

function AppContent() {
  const location = useLocation();

  const noHeaderRoutes = ["/", "/login", "/change-password", "/add_student", "/student_profile", "/add_classes", "/password", "/code", "/email"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0C15] text-white">
      {/* Header condicional */}
      {showHeader && <HeaderExport/>}

      {/* Conteúdo principal que cresce */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<SelectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_student" element={<StudentScreen />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/championship" element={<Championship/>}/>
          <Route path="/add_classes" element={<AddClass/>}/>
          <Route path="/password" element={<Password/>}/>
          <Route path="/code" element={<Code/>}/>
          <Route path="/email" element={<Email/>}/>
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
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default Routers;
