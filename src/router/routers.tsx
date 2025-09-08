import { Home } from "@/screens/home/home";
import { Login } from "@/screens/auth/login";
import { SelectLogin } from "@/screens/auth/userType";
import { ChangePassword } from "@/teste";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Routers;
