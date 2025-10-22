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
  const grayIcon = "#6c757d";

  return (
    <div className="notifications-dropdown">
      <div className="dropdown-header">
        <h3>Configurações</h3>
      </div>
      <ul className="notifications-list">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={grayIcon} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4a4 4 0 000 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <p>Conta</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={grayIcon} viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM5 11V7.3l7-3.11 7 3.11V11c0 4.41-2.93 8.41-7 9.72C7.93 19.41 5 15.41 5 11z"/>
          </svg>
          <p>Acesso e Segurança</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={grayIcon} viewBox="0 0 24 24">
            <path d="M12 17a2 2 0 002-2v-2h-4v2a2 2 0 002 2zM18 8h-1V6a5 5 0 00-10 0v2H6c-1.1 0-2 .9-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10c0-1.1-.9-2-2-2zm-6-4a3 3 0 013 3v2H9V7a3 3 0 013-3z"/>
          </svg>
          <p>Privacidade de Conta</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={grayIcon} viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-3.92 19.2c.31.05.43-.13.43-.3v-1.04c-1.77.39-2.14-.86-2.14-.86-.28-.73-.68-.93-.68-.93-.55-.37.04-.36.04-.36.61.04.93.63.93.63.54.93 1.41.66 1.75.5.05-.39.21-.66.38-.81-1.42-.16-2.91-.71-2.91-3.18 0-.7.25-1.28.66-1.73-.07-.16-.29-.83.06-1.73 0 0 .54-.17 1.76.66a6.08 6.08 0 013.2 0c1.22-.83 1.76-.66 1.76-.66.35.9.13 1.57.06 1.73.41.45.66 1.03.66 1.73 0 2.48-1.5 3.01-2.93 3.17.22.19.41.57.41 1.15v1.7c0 .17.12.36.43.3A10 10 0 0012 2z"/>
          </svg>
          <p>Permissões do Site</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill={grayIcon} viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.59 3.42 8.41 7.86 9.28.57.11.78-.25.78-.55v-2.03c-3.2.69-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a10.92 10.92 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.82 1.19 3.07 0 4.39-2.69 5.36-5.25 5.64.41.35.77 1.04.77 2.1v3.12c0 .3.21.67.79.55A10.004 10.004 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
          <p>Acessibilidade</p>
        </li>
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
