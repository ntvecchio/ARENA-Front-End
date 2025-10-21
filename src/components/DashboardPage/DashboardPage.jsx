import React from 'react';
import Header from '../Header/Header.jsx';
import '../DashboardPage/DashboardPage.css';

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <Header />

      <main className="dashboard-content">
        <aside className="left-sidebar">
          <div className="profile-card">
            <div className="profile-banner"></div>
            <img
              className="profile-picture"
              src="https://placehold.co/80x80/0B3D61/white?text=J"
              alt="João Henrique"
            />
            <h3>João Henrique Alves</h3>
            <p>Jogador de Tênis de Mesa</p>
            <p className="location">São Paulo - SP</p>
            <div className="profile-stats">
              <div className="stat">
                <strong>17</strong>
                <span>Jogos Ganhos</span>
              </div>
              <div className="stat">
                <strong>4.059</strong>
                <span>seguidores</span>
              </div>
            </div>
          </div>
        </aside>

        <section className="feed-column">
          <div className="create-post-card">
            <div className="create-post-input">
              <img src="https://placehold.co/40x40/E86F3B/white?text=J" alt="Seu Perfil" />
              <input type="text" placeholder="Comece uma publicação" />
            </div>
            <div className="create-post-actions">
              <button><i className="fas fa-video"></i> Vídeo</button>
              <button><i className="fas fa-camera"></i> Foto</button>
              <button><i className="fas fa-pen-alt"></i> Escrita</button>
            </div>
          </div>

          <div className="feed-post">
            <div className="post-header">
              <img src="https://placehold.co/40x40/338A6A/white?text=A" alt="Ana Carolina" />
              <div className="post-author">
                <strong>Ana Carolina Oliveira</strong>
                <span>Nadadora • 2 h</span>
              </div>
              <button className="follow-button">Seguindo</button>
            </div>
            <div className="post-content">
              <img
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinyrgb&w=1260&h=750&dpr=1"
                alt="Post de natação"
              />
            </div>
            <div className="post-actions">
              <button><i className="fas fa-thumbs-up"></i> Gostei</button>
              <button><i className="fas fa-comment"></i> Comentar</button>
              <button><i className="fas fa-share"></i> Compartilhar</button>
              <button><i className="fas fa-paper-plane"></i> Enviar</button>
            </div>
          </div>
        </section>

        <aside className="right-sidebar">
          <div className="friends-section">
            <h4>Amigos Online</h4>
            <div className="friends-list">
              <div className="friend"><img src="https://placehold.co/40x40/E86F3B/white?text=A" alt="Ana" /><span>Ana</span></div>
              <div className="friend"><img src="https://placehold.co/40x40/0B3D61/white?text=L" alt="Lucas" /><span>Lucas</span></div>
              <div className="friend"><img src="https://placehold.co/40x40/338A6A/white?text=R" alt="Rafaela" /><span>Rafaela</span></div>
              <div className="friend"><img src="https://placehold.co/40x40/555/white?text=P" alt="Pedro" /><span>Pedro</span></div>
            </div>
          </div>

          <div className="achievements-section">
            <h4>Conquistas Recentes</h4>
            <div className="marquee">
              <p>
                🏆 Ana bateu seu próprio recorde nos 100m livres! • 
                ⚽ Lucas marcou 3 gols no campeonato municipal! • 
                🥇 Rafaela venceu o torneio estadual de natação! • 
                🏋️ João aumentou seu PR em 10kg no supino! • 
                🚴 Pedro completou 50km de ciclismo!
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default DashboardPage;
