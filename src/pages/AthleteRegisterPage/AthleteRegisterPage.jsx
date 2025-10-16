import React, { useState } from 'react';
import './AthleteRegisterPage.css';

function AthleteRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    gender: '',
    birthDate: '',
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
    console.log('Dados do formulário de cadastro do atleta:', formData);
    alert('Cadastro enviado! (Verifique o console)');
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <div className="register-header">
          {/* TODO: Adicionar a logo aqui */}
          <div className="logo-placeholder">ARENA+</div>
        </div>

        <h2>Conectando Talentos ao Futuro</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nome Completo</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleInputChange} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gender">Gênero</label>
              <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Data de Nascimento</label>
              <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
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

export default AthleteRegisterPage;
