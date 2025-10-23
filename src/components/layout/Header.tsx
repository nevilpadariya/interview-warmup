import { Link } from 'react-router-dom';
import { Home, BarChart3 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-google-blue hover:text-blue-700 transition-colors"
          >
            <span className="text-2xl">🎤</span>
            <span>Interview Warmup</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Home"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/results"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Progress"
            >
              <BarChart3 size={20} />
              <span className="hidden sm:inline">Progress</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

