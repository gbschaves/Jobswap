import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          Minha Plataforma
        </Link>
        <Link to="/perfil" className="profile-icon">
          <img
            src="https://via.placeholder.com/40"
            alt="Perfil"
            className="profile-image"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;