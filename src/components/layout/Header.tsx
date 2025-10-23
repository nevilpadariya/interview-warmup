import { Link } from 'react-router-dom';
import { Home, BarChart3 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-google-1 border-b border-surface-4">
      <div className="max-w-7xl mx-auto px-google-md sm:px-google-lg lg:px-google-xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center space-x-google-sm text-google-title-1 font-medium text-google-blue-500 hover:text-google-blue-600 transition-colors"
          >
            <span className="text-2xl">🎤</span>
            <span>Interview Warmup</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-google-sm">
            <Link
              to="/"
              className="flex items-center space-x-google-sm px-google-md py-google-sm rounded-google-md text-google-body-1 text-text-secondary hover:bg-surface-2 hover:text-text-primary transition-colors"
              aria-label="Home"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/results"
              className="flex items-center space-x-google-sm px-google-md py-google-sm rounded-google-md text-google-body-1 text-text-secondary hover:bg-surface-2 hover:text-text-primary transition-colors"
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

