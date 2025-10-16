import React, { useState } from 'react';
// 1. Trocamos o 'Link' pelo 'useNavigate'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  // 2. Inicializamos a função de navegação
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Aqui você faria validação do login, autenticação, etc.
  console.log('Dados do formulário de login:', formData);
  
  // Redireciona para o dashboard
  navigate('/dashboard');
};

  // 3. Criamos uma função para lidar com o clique no botão de cadastro
  const handleRegisterClick = () => {
    navigate('/cadastro'); // Navega para a página de cadastro
  };

  return (
    <div className="login-container">
      {/* PAINEL ESQUERDO */}
      <div className="left-panel">
        <div className="runner-graphic">
          {/* Seus textos ou a imagem dos corredores podem ir aqui */}
        </div>
      </div>

      {/* PAINEL DIREITO */}
      <div className="right-panel">
        <div className="login-form">

          <h2>Entre na sua conta</h2>

          {/* O formulário de login com sua lógica de estado */}
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
              <a href="#" className="forgot-password">esqueci minha senha</a>
            </div>

            <button type="submit" className="btn btn-primary">ENTRAR</button>
          </form>

          <div className="separator">
            <span>OU</span>
          </div>
          
          {/* 4. Agora temos um <button> que chama nossa função de navegação */}
          <button type="button" className="btn btn-secondary" onClick={handleRegisterClick}>
            CADASTRAR-SE
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

