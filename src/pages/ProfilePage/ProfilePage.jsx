  import React from 'react';
  import Header from '../../components/Header/Header.jsx'; 

  import './ProfilePage.css';

  function ProfilePage() {
    return (
      <div className="profile-page-container">
        <Header />

        <main className="profile-content-wrapper">
          <div className="profile-main-card">
            <div className="profile-page-banner"></div>
            <div className="profile-details">
              <div className="profile-picture-wrapper">
                <img 
                  src="https://placehold.co/170x170/0B3D61/white?text=J" 
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
                <div className="stat-item"><i className="fas fa-trophy"></i><span>17 Jogos Ganhos</span></div>
                <div className="stat-item"><i className="fas fa-medal"></i><span>2 medalhas de ouro</span></div>
                <div className="stat-item"><i className="fas fa-users"></i><span>4.059 seguidores</span></div>
                <div className="stat-item"><i className="fas fa-medal"></i><span>1 medalha de ferro</span></div>
              </div>
            </div>
          </div>

          <div className="profile-body-grid">
            <aside className="profile-left-column">
              <div className="following-card">
                <h4>Seguindo</h4>
                <ul className="following-list">
                  <li className="user-row"><img src="https://placehold.co/40x40/000000/ffffff?text=RB" alt="Renato Britto" /><span>Renato Britto</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/ffc107/ffffff?text=AC" alt="Ana Carolina Oliveira" /><span>Ana Carolina Oliveira</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/17a2b8/ffffff?text=BA" alt="Bianca De Andrade" /><span>Bianca De Andrade</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/6f42c1/ffffff?text=JN" alt="Juliana Nogueira" /><span>Juliana Nogueira</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/28a745/ffffff?text=GC" alt="Guilherme Costas" /><span>Guilherme Costas</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/dc3545/ffffff?text=KQ" alt="Kaike Queiroz" /><span>Kaike Queiroz</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/fd7e14/ffffff?text=SM" alt="Sílvia Monteiro" /><span>Sílvia Monteiro</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/6610f2/ffffff?text=FG" alt="Felipe Golçaves" /><span>Felipe Golçaves</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/20c997/ffffff?text=AC" alt="Amanda Cristina" /><span>Amanda Cristina</span></li>
                  <li className="user-row"><img src="https://placehold.co/40x40/e83e8c/ffffff?text=JB" alt="José Bezerra" /><span>José Bezerra</span></li>
                </ul>
                <button className="view-all-btn">Ver Todos</button>
              </div>
            </aside>

            <section className="profile-right-column">
              <div className="feed-post">
                <div className="post-content"><img src="https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post de treino" /></div>
                <div className="post-actions">
                  <button><i className="fas fa-thumbs-up"></i> Gostei</button>
                  <button><i className="fas fa-comment"></i> Comentar</button>
                  <button><i className="fas fa-share"></i> Compartilhar</button>
                  <button><i className="fas fa-paper-plane"></i> Enviar</button>
                </div>
              </div>
              <div className="feed-post">
                <div className="post-text-content"><p>Quando você conhece a si mesmo e seus pontos fortes, sempre há algo que você pode fazer para elevar o padrão para todos.</p></div>
                <div className="post-actions">
                  <button><i className="fas fa-thumbs-up"></i> Gostei</button>
                  <button><i className="fas fa-comment"></i> Comentar</button>
                  <button><i className="fas fa-share"></i> Compartilhar</button>
                  <button><i className="fas fa-paper-plane"></i> Enviar</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  export default ProfilePage;

