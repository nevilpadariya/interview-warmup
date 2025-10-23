import { CategoryCard } from '@/components/home/CategoryCard';
import { categories } from '@/data/questions';
import { useApp } from '@/context/AppContext';
import { PlayCircle, Clock, CheckCircle } from 'lucide-react';

export const HomePage = () => {
  const { practiceHistory, currentStreak } = useApp();

  // Calculate stats
  const totalQuestions = practiceHistory.length;
  const totalTime = practiceHistory.reduce((sum, session) => sum + session.duration, 0);
  const totalMinutes = Math.floor(totalTime / 60);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Practice Your Interview Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prepare for your next interview with our interactive practice tool.
            Record your answers, review your performance, and build confidence.
          </p>
        </div>

        {/* Stats Section (only show if user has history) */}
        {totalQuestions > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">{totalQuestions}</p>
                  <p className="text-gray-600">Questions Practiced</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">{totalMinutes}</p>
                  <p className="text-gray-600">Minutes Practiced</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <PlayCircle className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">{currentStreak}</p>
                  <p className="text-gray-600">Current Streak</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose a Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Choose Category
              </h3>
              <p className="text-gray-600">
                Select from General, Technical, or Behavioral questions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prepare
              </h3>
              <p className="text-gray-600">
                Take 30 seconds to think about your answer
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Record
              </h3>
              <p className="text-gray-600">
                Record your answer using your microphone
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Review
              </h3>
              <p className="text-gray-600">
                Listen to your recording and improve
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

