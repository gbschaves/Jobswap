const CadastroVaga = () => {
  return (
    <div className="auth-container">
      <h2>Cadastrar Nova Vaga</h2>
      <form>
        <input type="text" placeholder="Título da Vaga" required />
        <textarea placeholder="Descrição da Vaga" required />
        <input type="text" placeholder="Localização" required />
        <input type="text" placeholder="Salário" required />
        <button type="submit" className="button">
          Cadastrar Vaga
        </button>
      </form>
    </div>
  );
};

export default CadastroVaga;
