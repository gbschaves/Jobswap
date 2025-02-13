import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JobsTinder from "./components/JobsTinder";
import Perfil from "./components/Perfil";
import CadastroVaga from "./components/CadastroVaga";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobsTinder />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastro-vaga" element={<CadastroVaga />} />;
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
