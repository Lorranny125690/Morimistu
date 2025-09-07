import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SelectLogin, ChangePassword } from "./teste";
import { Home } from "./home";
import { Login } from "./screens/auth/login";

function App() {
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

export default App;
