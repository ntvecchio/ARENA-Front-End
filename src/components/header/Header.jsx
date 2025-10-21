import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../DashboardPage/DashboardPage.jsx';

function NotificationsDropdown() {
  return (
    <div className="notifications-dropdown">
      <div className="dropdown-header">
        <h3>Notificações</h3>
      </div>
      <ul className="notifications-list">
        <li>
          <img src="https://placehold.co/50x50/28a745/ffffff?text=J" alt="José Bezerra" />
          <p><strong>José Bezerra</strong> começou a seguir você</p>
        </li>
        <li>
          <img src="https://placehold.co/50x50/343a40/ffffff?text=R" alt="Renato Brito" />
          <p><strong>Renato Brito</strong> curtiu a sua publicação</p>
        </li>
        <li>
          <img src="https://placehold.co/50x50/ffc107/ffffff?text=A" alt="Ana Carolina" />
          <p><strong>Ana Carolina Oliveira</strong> publicou recentemente</p>
        </li>
      </ul>
    </div>
  );
}

function SettingsDropdown() {
  return (
    <div className="notifications-dropdown">
      <div className="dropdown-header">
        <h3>Configurações</h3>
      </div>
      <ul className="notifications-list">
        <li><i className="fas fa-user-circle"></i><p>Conta</p></li>
        <li><i className="fas fa-shield-alt"></i><p>Acesso e Segurança</p></li>
        <li><i className="fas fa-lock"></i><p>Privacidade de Conta</p></li>
        <li><i className="fas fa-globe"></i><p>Permissões do Site</p></li>
        <li><i className="fas fa-universal-access"></i><p>Acessibilidade</p></li>
      </ul>
    </div>
  );
}

function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
    setIsNotificationsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
        setIsSettingsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

          <div className="notification-icon-wrapper" ref={dropdownRef}>
            <button onClick={toggleNotifications} className="icon-button" title="Notificações">
              <i className="fas fa-bell"></i>
            </button>
            {isNotificationsOpen && <NotificationsDropdown />}
          </div>
        </nav>

        <div className="notification-icon-wrapper">
          <button onClick={toggleSettings} className="icon-button" title="Configurações">
            <i className="fas fa-cog"></i>
          </button>
          {isSettingsOpen && <SettingsDropdown />}
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

export default Header;
