import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import './AthleteRegisterPage.css';

function AthleteRegisterPage() {
  const navigate = useNavigate();
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log('Cadastro atleta:', formData);
    alert('Cadastro enviado! (Verifique o console)');
    navigate('/dashboard');
  };

  return (
    <div className="register-page">
      <Header />
      <div className="register-container">
        <div className="register-form-wrapper">
          <div className="register-header">
            <div className="logo-placeholder">ARENA+</div>
          </div>

          <h2>Conectando Talentos ao Futuro</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleInputChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Gênero</label>
                <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
            </div>

            <div className="terms-group">
              <input type="checkbox" id="agreedToTerms" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleInputChange} required />
              <label htmlFor="agreedToTerms">Eu concordo com a Política de Privacidade e com os Termos de Uso</label>
            </div>

            <button type="submit" className="btn btn-secondary">CADASTRAR-SE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AthleteRegisterPage;
