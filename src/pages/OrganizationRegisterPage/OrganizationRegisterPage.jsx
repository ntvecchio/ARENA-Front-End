import React, { useState } from 'react';
// 1. Importe o useParams para ler a URL
import { useParams } from 'react-router-dom';
import './OrganizationRegisterPage.css';

function OrganizationRegisterPage() {
  // 2. Use o useParams para pegar o tipo de perfil da URL
  const { profileType } = useParams();

  // Capitaliza a primeira letra para o título (ex: "clube" -> "Clube")
  const formattedProfileType = profileType.charAt(0).toUpperCase() + profileType.slice(1);

  const [formData, setFormData] = useState({
    nomeFantasia: '',
    razaoSocial: '',
    cnpj: '',
    uf: '',
    telefoneFixo: '',
    telefoneCelular: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Dados do formulário de ${formattedProfileType}:`, formData);
    alert('Cadastro enviado! (Verifique o console)');
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <div className="register-header">
          <div className="logo-placeholder">ARENA+</div>
        </div>

        {/* 3. Título dinâmico! */}
        <h2>Cadastro de {formattedProfileType}</h2>
        <h4>Conectando Talentos ao Futuro</h4>

        <form onSubmit={handleSubmit}>
          {/* Campos do formulário */}
          <div className="form-group">
            <label htmlFor="nomeFantasia">Nome Fantasia</label>
            <input type="text" id="nomeFantasia" name="nomeFantasia" value={formData.nomeFantasia} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="razaoSocial">Razão Social</label>
            <input type="text" id="razaoSocial" name="razaoSocial" value={formData.razaoSocial} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="uf">UF</label>
            <input type="text" id="uf" name="uf" value={formData.uf} onChange={handleInputChange} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefoneFixo">Telefone (Fixo)</label>
              <input type="tel" id="telefoneFixo" name="telefoneFixo" value={formData.telefoneFixo} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="telefoneCelular">Telefone (Celular)</label>
              <input type="tel" id="telefoneCelular" name="telefoneCelular" value={formData.telefoneCelular} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
          </div>
          <div className="terms-group">
            <input type="checkbox" id="agreedToTerms" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleInputChange} />
            <label htmlFor="agreedToTerms">Eu concordo com a Política de Privacidade e com os Termos de Uso</label>
          </div>

          <button type="submit" className="btn btn-secondary">CADASTRAR-SE</button>
        </form>
      </div>
    </div>
  );
}

export default OrganizationRegisterPage;
