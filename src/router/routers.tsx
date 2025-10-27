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
import { AddClass } from "@/screens/classes/add_classes";
import { Student } from "@/screens/student";
import { Password } from "@/screens/auth/changePassword";
import { Code } from "@/screens/auth/code";
import { Email } from "@/screens/auth/emailVerification";
import { useEffect, useState, type JSX } from "react";

/* -----------------------------------------------------------
   AppContent — controla layout e regras de acesso
----------------------------------------------------------- */
function AppContent() {
  const location = useLocation();
  const { authState, authReady } = useAuth();
  const token = authState?.token;

  const [cachedRoute, setCachedRoute] = useState(location.pathname);
  const [cachedElement, setCachedElement] = useState<JSX.Element | null>(null);

  // Sempre que muda de rota, guarda a rota anterior enquanto a nova carrega
  useEffect(() => {
    if (location.pathname !== cachedRoute) {
      const prev = document.querySelector("#route-container")?.cloneNode(true);
      if (prev instanceof HTMLElement) {
        prev.id = "route-cache";
        prev.style.position = "absolute";
        prev.style.inset = "0";
        prev.style.zIndex = "0";
        document.body.appendChild(prev);

        requestAnimationFrame(() => {
          setCachedRoute(location.pathname);
          setCachedElement(null);
          prev.remove();
        });
      } else {
        setCachedRoute(location.pathname);
      }
    }
  }, [location.pathname, cachedRoute]);

  if (!authReady) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-lg">
        Carregando...
      </div>
    );
  }

  const noHeaderRoutes = [
    "/",
    "/login",
    "/password",
    "/code",
    "/email",
    "/add_student",
    "/add_classes",
  ];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

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

  // Armazena a rota renderizada atual
  const currentRoutes = (
    <Routes location={location}>
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
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0C15] text-white overflow-hidden">
      {showHeader && <HeaderExport />}

      <main className="flex-grow relative" id="route-container">
        {cachedElement || currentRoutes}
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
      {/* Evita recriar AuthProvider a cada troca */}
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default Routers;
