import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useAuth, AuthProvider } from "@/context/authContext";

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

/* -----------------------------------------------------------
   AppContent — controla layout e regras de acesso
----------------------------------------------------------- */
function AppContent() {
  const location = useLocation();
  const { authState, authReady } = useAuth();
  const token = authState?.token;

  if (!authReady) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-lg">
        Carregando...
      </div>
    );
  }

  const noHeaderRoutes = ["/", "/login", "/password", "/code", "/email"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  // Rotas privadas
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

  if (privateRoutes.includes(location.pathname) && !token) {
    return <Navigate to="/" replace />;
  }

  if ((location.pathname === "/" || location.pathname === "/login") && token) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0C15] text-white">
      {showHeader && <HeaderExport />}

      <main className="flex-grow">
        <Routes>
          {/* Públicas */}
          <Route path="/" element={<SelectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/code" element={<Code />} />
          <Route path="/email" element={<Email />} />

          {/* Privadas */}
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/championship" element={<Championship />} />
          <Route path="/add_student" element={<StudentScreen />} />
          <Route path="/add_classes" element={<AddClass />} />

          {/* Fallback */}
          <Route
            path="*"
            element={<Navigate to={token ? "/home" : "/login"} replace />}
          />
        </Routes>
      </main>

      {showHeader && <Footer />}
    </div>
  );
}

/* -----------------------------------------------------------
   Routers — encapsula tudo com AuthProvider e BrowserRouter
----------------------------------------------------------- */
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
