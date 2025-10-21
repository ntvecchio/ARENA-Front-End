import React from 'react';
import Header from '../../components/Header/Header'; // Importa o Header reutilizável
import '../ChatPage/ChatPage.css'; // Estilos específicos para a página de chat

// Componente para a barra lateral de conversas
function ChatSidebar() {
  return (
    <aside className="chat-sidebar">
      <div className="sidebar-header">
        <h3>Conversas</h3>
        <button className="new-chat-btn" title="Nova Conversa"><i className="fas fa-edit"></i></button>
      </div>
      <ul className="conversations-list">
        <li className="conversation-item active">
          <img src="https://placehold.co/50x50/343a40/white?text=RB" alt="Renato Britto" />
          <span>Renato Britto</span>
          <span className="unread-count">1</span>
        </li>
        <li className="conversation-item">
          <img src="https://placehold.co/50x50/17a2b8/white?text=BD" alt="Bianca De Andrade" />
          <span>Bianca De Andrade</span>
          <span className="unread-count">1</span>
        </li>
        <li className="conversation-item active-chat"> {/* Simula a conversa ativa */}
          <img src="https://placehold.co/50x50/ffc107/white?text=AC" alt="Ana Carolina Oliveira" />
          <span>Ana Carolina Oliveira</span>
        </li>
        <li className="conversation-item">
          <img src="https://placehold.co/50x50/e86f3b/white?text=GC" alt="Guilherme Costas" />
          <span>Guilherme Costas</span>
        </li>
        <li className="conversation-item">
          <img src="https://placehold.co/50x50/6f42c1/white?text=JN" alt="Juliana Nogueira" />
          <span>Juliana Nogueira</span>
        </li>
        <li className="conversation-item">
          <img src="https://placehold.co/50x50/dc3545/white?text=KQ" alt="Kaike Queiroz" />
          <span>Kaike Queiroz</span>
        </li>
      </ul>
    </aside>
  );
}

// Componente para a janela de mensagens
function ChatWindow() {
  return (
    <section className="chat-window">
      <div className="chat-header">
        <img src="https://placehold.co/50x50/ffc107/white?text=AC" alt="Ana Carolina Oliveira" />
        <h3>Ana Carolina Oliveira</h3>
        <div className="chat-actions">
          <button title="Chamada de Vídeo"><i className="fas fa-video"></i></button>
          <button title="Chamada de Voz"><i className="fas fa-phone"></i></button>
          <button title="Detalhes"><i className="fas fa-info-circle"></i></button>
        </div>
      </div>
      <div className="chat-messages">
        {/* Mensagens recebidas (cinza claro) */}
        <div className="message received">
          <div className="message-bubble">Parabéns pela sua vitória!</div>
        </div>
        {/* Mensagens enviadas (azul escuro) */}
        <div className="message sent">
          <div className="message-bubble">Muito obrigada pelo carinho Ana</div>
        </div>
        <div className="message received">
          <div className="message-bubble">Espero que venha muitas outras depois</div>
        </div>
        <div className="message received">
          <div className="message-bubble">Por que você merece de verdade</div>
        </div>
      </div>
      <div className="chat-input-area">
        <button className="icon-btn"><i className="fas fa-grin"></i></button>
        <button className="icon-btn"><i className="fas fa-paperclip"></i></button>
        <input type="text" placeholder="Mensagem" />
        <button className="icon-btn"><i className="fas fa-microphone"></i></button>
      </div>
    </section>
  );
}

// A Página principal do Chat
function ChatPage() {
  return (
    <div className="chat-page-container">
      <Header /> {/* Inclui o cabeçalho */}
      <main className="chat-main-content">
        <ChatSidebar />
        <ChatWindow />
      </main>
    </div>
  );
}

export default ChatPage;
