import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/jobs'); // Redireciona para a página do Tinder
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail"  />
        <input type="password" placeholder="Senha"  />
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem conta? <Link to="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
