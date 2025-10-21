import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ProfileSelectionPage from './pages/ProfileSelectionPage.jsx';
import AthleteRegisterPage from './pages/AthleteRegisterPage/AthleteRegisterPage.jsx';
import OrganizationRegisterPage from './pages/OrganizationRegisterPage/OrganizationRegisterPage.jsx';
import DashboardPage from './components/DashboardPage/DashboardPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import ChatPage from './pages/ChatPage/ChatPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<ProfileSelectionPage />} />
      <Route path="/cadastro/atleta" element={<AthleteRegisterPage />} />
      <Route path="/cadastro/:profileType" element={<OrganizationRegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
      <Route path="/mensagens" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
