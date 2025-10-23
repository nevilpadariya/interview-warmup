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
        return 'bg-blue-500';
      case 'technical':
        return 'bg-green-500';
      case 'behavioral':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="text-blue-600" size={48} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              No Practice History Yet
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start practicing to see your progress and statistics here!
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-2 bg-google-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-xl text-gray-600">
            Track your interview practice journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Target className="text-blue-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Questions</p>
                <p className="text-3xl font-bold text-gray-900">{totalQuestions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 rounded-full p-3">
                <Clock className="text-green-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Time Practiced</p>
                <p className="text-3xl font-bold text-gray-900">{totalMinutes} min</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 rounded-full p-3">
                <BarChart3 className="text-purple-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Streak</p>
                <p className="text-3xl font-bold text-gray-900">{currentStreak}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Category Breakdown
          </h2>
          <div className="space-y-6">
            {Object.entries(categoryStats).map(([category, count]) => {
              const percentage = (count / totalQuestions) * 100;
              return (
                <div key={category}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getCategoryIcon(category)}</span>
                      <span className="font-semibold text-gray-900 capitalize">
                        {category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {count} questions ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
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
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Practice Sessions
          </h2>
          <div className="space-y-4">
            {practiceHistory.slice(0, 10).map((session, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">
                  {getCategoryIcon(session.category)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 mb-1">
                    {session.question}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
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
            className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
          >
            <Trash2 size={20} />
            <span>Reset All Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
};

