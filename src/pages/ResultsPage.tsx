import { useApp } from '@/context/AppContext';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Clock, Target, Trash2, Home } from 'lucide-react';

export const ResultsPage = () => {
  const { practiceHistory, currentStreak, resetProgress } = useApp();
  const navigate = useNavigate();

  // Calculate statistics
  const totalQuestions = practiceHistory.length;
  const totalTime = practiceHistory.reduce((sum, session) => sum + session.duration, 0);
  const totalMinutes = Math.floor(totalTime / 60);

  // Category breakdown
  const categoryStats = practiceHistory.reduce((acc, session) => {
    acc[session.category] = (acc[session.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general':
        return 'bg-google-blue-500';
      case 'technical':
        return 'bg-google-green-500';
      case 'behavioral':
        return 'bg-google-yellow-500';
      default:
        return 'bg-surface-4';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'general':
        return '💼';
      case 'technical':
        return '💻';
      case 'behavioral':
        return '🤝';
      default:
        return '❓';
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
      resetProgress();
    }
  };

  if (totalQuestions === 0) {
    return (
      <div className="min-h-screen bg-surface-1">
        <div className="max-w-4xl mx-auto px-google-md sm:px-google-lg lg:px-google-xl py-google-3xl">
          <div className="google-card-elevated p-google-3xl text-center">
            <div className="bg-google-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-google-lg">
              <BarChart3 className="text-google-blue-500" size={48} />
            </div>
            <h1 className="text-google-headline-1 font-google-display text-text-primary mb-google-md">
              No Practice History Yet
            </h1>
            <p className="text-google-body-1 text-text-secondary mb-google-xl">
              Start practicing to see your progress and statistics here!
            </p>
            <button
              onClick={() => navigate('/')}
              className="google-button-primary"
            >
              <Home size={20} />
              <span>Go to Home</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-1">
      <div className="max-w-6xl mx-auto px-google-md sm:px-google-lg lg:px-google-xl py-google-3xl">
        {/* Header */}
        <div className="mb-google-xl">
          <h1 className="text-google-display-1 font-google-display text-text-primary mb-google-sm">Your Progress</h1>
          <p className="text-google-body-1 text-text-secondary">
            Track your interview practice journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-google-lg mb-google-xl">
          <div className="google-card-elevated p-google-xl">
            <div className="flex items-center space-x-google-md">
              <div className="bg-google-blue-100 rounded-full p-google-md">
                <Target className="text-google-blue-500" size={28} />
              </div>
              <div>
                <p className="text-google-body-2 text-text-secondary">Total Questions</p>
                <p className="text-google-display-2 font-google-display text-text-primary">{totalQuestions}</p>
              </div>
            </div>
          </div>

          <div className="google-card-elevated p-google-xl">
            <div className="flex items-center space-x-google-md">
              <div className="bg-google-green-100 rounded-full p-google-md">
                <Clock className="text-google-green-500" size={28} />
              </div>
              <div>
                <p className="text-google-body-2 text-text-secondary">Time Practiced</p>
                <p className="text-google-display-2 font-google-display text-text-primary">{totalMinutes} min</p>
              </div>
            </div>
          </div>

          <div className="google-card-elevated p-google-xl">
            <div className="flex items-center space-x-google-md">
              <div className="bg-google-yellow-100 rounded-full p-google-md">
                <BarChart3 className="text-google-yellow-500" size={28} />
              </div>
              <div>
                <p className="text-google-body-2 text-text-secondary">Current Streak</p>
                <p className="text-google-display-2 font-google-display text-text-primary">{currentStreak}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="google-card-elevated p-google-xl mb-google-xl">
          <h2 className="text-google-headline-2 font-google-display text-text-primary mb-google-lg">
            Category Breakdown
          </h2>
          <div className="space-y-google-lg">
            {Object.entries(categoryStats).map(([category, count]) => {
              const percentage = (count / totalQuestions) * 100;
              return (
                <div key={category}>
                  <div className="flex items-center justify-between mb-google-sm">
                    <div className="flex items-center space-x-google-md">
                      <span className="text-2xl">{getCategoryIcon(category)}</span>
                      <span className="text-google-title-1 font-medium text-text-primary capitalize">
                        {category}
                      </span>
                    </div>
                    <span className="text-google-body-2 text-text-secondary">
                      {count} questions ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-3 rounded-full h-3">
                    <div
                      className={`${getCategoryColor(category)} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="google-card-elevated p-google-xl mb-google-xl">
          <h2 className="text-google-headline-2 font-google-display text-text-primary mb-google-lg">
            Recent Practice Sessions
          </h2>
          <div className="space-y-google-md">
            {practiceHistory.slice(0, 10).map((session, index) => (
              <div
                key={index}
                className="flex items-start space-x-google-md p-google-md bg-surface-1 rounded-google-lg hover:bg-surface-2 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">
                  {getCategoryIcon(session.category)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-google-body-1 font-medium text-text-primary mb-google-xs">
                    {session.question}
                  </p>
                  <div className="flex items-center space-x-google-md text-google-body-2 text-text-secondary">
                    <span className="capitalize">{session.category}</span>
                    <span>•</span>
                    <span>{Math.floor(session.duration / 60)}m {session.duration % 60}s</span>
                    <span>•</span>
                    <span>{formatDate(session.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reset Progress Button */}
        <div className="flex justify-center">
          <button
            onClick={handleReset}
            className="google-button-danger"
          >
            <Trash2 size={20} />
            <span>Reset All Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
};

