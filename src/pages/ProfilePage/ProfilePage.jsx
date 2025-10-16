import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProfilePage.css';

// Componente Header (copiado do Dashboard para manter a consistência)
// No futuro, este header pode virar um componente reutilizável!
function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="header-logo">ARENA+</div>
        <div className="header-search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <NavLink to="/dashboard" end title="Home"><i className="fas fa-home"></i></NavLink>
          <NavLink to="/mensagens" title="Chat"><i className="fas fa-comment-dots"></i></NavLink>
          <NavLink to="/explorar" title="Explorar"><i className="fas fa-compass"></i></NavLink>
          <NavLink to="/notificacoes" title="Notificações"><i className="fas fa-bell"></i></NavLink>
        </nav>
        <div className="header-actions">
          <NavLink to="/configuracoes" title="Configurações"><i className="fas fa-cog"></i></NavLink>
        </div>
        <div className="header-profile">
          <NavLink to="/perfil">
            <img src="https://placehold.co/40x40/E86F3B/white?text=J" alt="Perfil" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}


function ProfilePage() {
  return (
    <div className="profile-page-container">
      <Header /> {/* Usando o Header aqui */}

      <main className="profile-content">
        <div className="profile-main-card">
          <div className="profile-page-banner">
             {/* A imagem de fundo (gramado) é controlada pelo CSS */}
          </div>
          <div className="profile-details">
            <div className="profile-picture-wrapper">
              <img 
                src="https://placehold.co/150x150/0B3D61/white?text=J" 
                alt="João Henrique Alves" 
                className="profile-page-picture"
              />
            </div>
            
            <div className="profile-info">
              <div className="info-header">
                <h2>João Henrique Alves</h2>
                <button className="edit-profile-btn" title="Editar Perfil">
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </div>
              <p className="profile-description">Jogador de Futebol</p>
              <p className="profile-location">São Paulo - SP</p>
            </div>

            <div className="profile-stats-grid">
              <div className="stat-item">
                <i className="fas fa-trophy"></i>
                <span>17 Jogos Ganhos</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-medal"></i>
                <span>2 medalhas de ouro</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <span>4.059 seguidores</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-medal"></i>
                <span>1 medalha de ferro</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
