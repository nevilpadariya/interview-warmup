import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import { Header } from '@/components/layout/Header';
import { HomePage } from '@/pages/HomePage';
import { PracticePage } from '@/pages/PracticePage';
import { ResultsPage } from '@/pages/ResultsPage';
import { RoleSelectionPage } from '@/pages/RoleSelectionPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/role" element={<RoleSelectionPage />} />
            <Route path="/practice/:category" element={<PracticePage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

