import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Logo from '../../assets/ovn.png'

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
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
    console.log('Dados do login:', formData);
    navigate('/dashboard');
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-panel">
          <div className="runner-graphic"></div>
        </div>

        <div className="right-panel">
          <div className="login-form">
            <div className="logo-container">
              <img src={Logo} alt="Logo do site" className="login-logo" />
            </div>
            <h2>Entre na sua conta</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="options-row">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="remember">Lembre-me</label>
                </div>
                <a href="#" className="forgot-password">Esqueci minha senha</a>
              </div>

              <button type="submit" className="btn btn-primary">ENTRAR</button>
            </form>

            <div className="separator"><span>OU</span></div>

            <button type="button" className="btn btn-secondary" onClick={handleRegisterClick}>
              CADASTRAR-SE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
