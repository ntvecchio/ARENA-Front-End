import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileSelectionPage.css';
import './LoginPage/LoginPage.css';

function ProfileSelectionPage() {
  const navigate = useNavigate();

  const handleProfileSelect = (profileType) => {
    navigate(`/cadastro/${profileType}`);
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="runner-graphic">
          <h1>Bem-vindo ao Arena+</h1>
        </div>
      </div>

      <div className="right-panel">
        <div className="profile-selection-form">
          <div className="logo-container">ARENA+</div>
          <h2>Qual perfil você se encaixa:</h2>

          <div className="profile-options">
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

