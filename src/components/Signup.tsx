import { useState } from "react";
import { UserType } from "../types";

const Signup = () => {
  const [userType, setUserType] = useState<UserType>("employer");
  const [isCompanyRepresentative, setIsCompanyRepresentative] = useState(false);

  return (
    <div className="auth-container">
      <h2>Cadastro</h2>
      <form>
        <div className="user-type-selector">
          <button type="button" onClick={() => setUserType("employer")}>
            Empregador
          </button>
          <button type="button" onClick={() => setUserType("provider")}>
            Prestador
          </button>
        </div>

        {/* Campos comuns */}
        <input type="file" accept="image/*" />
        <input type="text" placeholder="Nome completo" required />
        <input type="text" placeholder="CPF" required />
        <input type="tel" placeholder="Telefone" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Biografia" required />
        <input type="text" placeholder="GitHub" />
        <input type="text" placeholder="LinkedIn" />

        {/* Campos específicos */}
        {userType === "employer" ? (
          <div className="employer-fields">
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="employerType"
                  onChange={() => setIsCompanyRepresentative(false)}
                />
                Independente
              </label>
              <label>
                <input
                  type="radio"
                  name="employerType"
                  onChange={() => setIsCompanyRepresentative(true)}
                />
                Representante
              </label>
            </div>

            {isCompanyRepresentative && (
              <>
                <input type="text" placeholder="Nome da empresa" />
                <input type="text" placeholder="CNPJ" />
                <input type="url" placeholder="Site" />
                <textarea placeholder="Descrição da empresa" />
              </>
            )}
          </div>
        ) : (
          <div className="provider-fields">
            <input type="text" placeholder="Endereço" required />
            <input type="text" placeholder="Cargo" required />

            <select>
              <option value="">Tipo de contrato</option>
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
            </select>

            <input type="text" placeholder="Competências" />
            <textarea placeholder="Experiências" />

            <select>
              <option value="">Disponibilidade</option>
              <option value="full">Integral</option>
              <option value="part">Meio período</option>
              <option value="flex">Horário flexível</option>
            </select>

            <div className="radio-group">
              <label>
                <input type="radio" name="workPreference" value="remote" />
                Remoto
              </label>
              <label>
                <input type="radio" name="workPreference" value="office" />
                Presencial
              </label>
              <label>
                <input type="radio" name="workPreference" value="hybrid" />
                Híbrido
              </label>
            </div>

            <input type="number" placeholder="Salário pretendido" />
            <textarea placeholder="Conhecimentos e tecnologias" />
          </div>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Signup;
