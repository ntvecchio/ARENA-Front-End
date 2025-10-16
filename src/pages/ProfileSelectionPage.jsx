import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileSelectionPage.css';
import './LoginPage/LoginPage.css'; // Reutilizando estilos

function ProfileSelectionPage() {
  const navigate = useNavigate();

  // Esta é a função corrigida e simplificada.
  // Ela funciona para QUALQUER perfil que você passar para ela.
  const handleProfileSelect = (profileType) => {
    // Nós usamos "template literals" (crases ``) para construir a URL dinamicamente.
    // A variável profileType será substituída pelo valor do botão clicado ('clube', 'treinador', etc.)
    navigate(`/cadastro/${profileType}`);
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="runner-graphic">
          <h1>Bem-vindo ao Arena+</h1>
          <p>Escolha seu perfil e comece sua jornada esportiva</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="profile-selection-form">
          <div className="logo-container">ARENA+</div>
          <h2>Qual perfil você se encaixa:</h2>

          <div className="profile-options">
            {/* Cada botão chama a mesma função, mas com um parâmetro diferente */}
            <button className="profile-option" onClick={() => handleProfileSelect('atleta')}>
              <span className="profile-icon"><i className="fas fa-person-running"></i></span>
              Atleta
            </button>

            <button className="profile-option" onClick={() => handleProfileSelect('clube')}>
              <span className="profile-icon"><i className="fas fa-shield-alt"></i></span>
              Clube
            </button>

            <button className="profile-option" onClick={() => handleProfileSelect('treinador')}>
              <span className="profile-icon"><i className="fas fa-whistle"></i></span>
              Treinador
            </button>

            <button className="profile-option" onClick={() => handleProfileSelect('empresa')}>
              <span className="profile-icon"><i className="fas fa-building"></i></span>
              Empresa/Ongs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelectionPage;

