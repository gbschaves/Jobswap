import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <div className="auth-container">
      <h2>Meu Perfil</h2>
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/100"
          alt="Foto de Perfil"
          className="profile-picture"
        />
        <p>Nome: João Silva</p>
        <p>Email: joao.silva@example.com</p>
        <p>Telefone: (11) 99999-9999</p>
      </div>
      <Link to="/cadastro-vaga" className="button">
        Cadastrar Nova Vaga
      </Link>
    </div>
  );
};

export default Perfil;