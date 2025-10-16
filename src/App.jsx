import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ProfileSelectionPage from './pages/ProfileSelectionPage.jsx';
import AthleteRegisterPage from './pages/AthleteRegisterPage/AthleteRegisterPage.jsx';
import OrganizationRegisterPage from './pages/OrganizationRegisterPage/OrganizationRegisterPage.jsx';
import DashboardPage from './components/DashboardPage/DashboardPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Rota 1: Página de Login */}
      <Route path="/" element={<LoginPage />} />

      {/* Rota 2: Página de Seleção de Perfil */}
      <Route path="/cadastro" element={<ProfileSelectionPage />} />
      
      {/* Rota 3: Rota específica para o formulário do atleta */}
      <Route path="/cadastro/atleta" element={<AthleteRegisterPage />} />
      
      {/* Rota 4: Rota dinâmica para os outros perfis (Clube, Treinador, etc.) */}
      {/* O :profileType é um parâmetro que vai mudar de acordo com a URL */}
      <Route path="/cadastro/:profileType" element={<OrganizationRegisterPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;

