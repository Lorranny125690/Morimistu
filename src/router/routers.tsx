import { Home } from "@/screens/home/home";
import { Login } from "@/screens/auth/login";
import { SelectLogin } from "@/screens/auth/userType";
import { ChangePassword } from "@/teste";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import { useState } from "react";
import { Student } from "@/screens/student/student";

function LayoutWithHeader({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
    </>
  );
}

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route
          path="/home"
          element={
            <LayoutWithHeader>
              <Home />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/student"
          element={
            <LayoutWithHeader>
              <Student />
            </LayoutWithHeader>
          }
        />
      </Routes>
    </Router>
  );
}

export default Routers;
