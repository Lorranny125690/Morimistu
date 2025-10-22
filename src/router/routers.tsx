import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";
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
  const { authState } = useAuth();
  const token = authState?.token;

  // rotas públicas (sem header/footer)
  const noHeaderRoutes = ["/", "/login", "/password", "/code", "/email"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  // rotas que exigem token
  const privateRoutes = [
    "/home",
    "/dashboard",
    "/student",
    "/notification",
    "/classes",
    "/championship",
    "/add_student",
    "/add_classes",
  ];

  // se for rota privada e não tiver token → login
  if (privateRoutes.includes(location.pathname) && !token) {
    return <Navigate to="/" replace />;
  }

  // se estiver logado e tentar ir pra login/seleção → home
  if ((location.pathname === "/login" || location.pathname === "/") && token) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0C15] text-white">
      {showHeader && <HeaderExport />}

      <main className="flex-grow">
        <Routes>
          {/* públicas */}
          <Route path="/" element={<SelectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/code" element={<Code />} />
          <Route path="/email" element={<Email />} />

          {/* privadas */}
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/championship" element={<Championship />} />
          <Route path="/add_student" element={<StudentScreen />} />
          <Route path="/add_classes" element={<AddClass />} />
        </Routes>
      </main>

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
