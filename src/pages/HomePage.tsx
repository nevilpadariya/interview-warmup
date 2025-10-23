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
    <div className="min-h-screen bg-surface-1">
      <div className="max-w-7xl mx-auto px-google-md sm:px-google-lg lg:px-google-xl py-google-3xl">
        {/* Hero Section */}
        <div className="text-center mb-google-4xl">
          <h1 className="text-google-display-1 font-google-display text-text-primary mb-google-lg">
            Practice Your Interview Skills
          </h1>
          <p className="text-google-body-1 text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Prepare for your next interview with our interactive practice tool.
            Record your answers, review your performance, and build confidence.
          </p>
        </div>

        {/* Stats Section (only show if user has history) */}
        {totalQuestions > 0 && (
          <div className="google-card-elevated p-google-xl mb-google-3xl">
            <h2 className="text-google-headline-2 font-google-display text-text-primary mb-google-lg">Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-google-lg">
              <div className="flex items-center space-x-google-md">
                <div className="bg-google-blue-100 rounded-full p-google-md">
                  <CheckCircle className="text-google-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-google-display-2 font-google-display text-text-primary">{totalQuestions}</p>
                  <p className="text-google-body-2 text-text-secondary">Questions Practiced</p>
                </div>
              </div>
              <div className="flex items-center space-x-google-md">
                <div className="bg-google-green-100 rounded-full p-google-md">
                  <Clock className="text-google-green-500" size={24} />
                </div>
                <div>
                  <p className="text-google-display-2 font-google-display text-text-primary">{totalMinutes}</p>
                  <p className="text-google-body-2 text-text-secondary">Minutes Practiced</p>
                </div>
              </div>
              <div className="flex items-center space-x-google-md">
                <div className="bg-google-yellow-100 rounded-full p-google-md">
                  <PlayCircle className="text-google-yellow-500" size={24} />
                </div>
                <div>
                  <p className="text-google-display-2 font-google-display text-text-primary">{currentStreak}</p>
                  <p className="text-google-body-2 text-text-secondary">Current Streak</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Cards */}
        <div className="mb-google-4xl">
          <h2 className="text-google-headline-1 font-google-display text-text-primary mb-google-xl text-center">
            Choose a Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-google-xl">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="google-card-elevated p-google-xl md:p-google-3xl">
          <h2 className="text-google-headline-1 font-google-display text-text-primary mb-google-xl text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-google-xl">
            <div className="text-center">
              <div className="bg-google-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-google-md">
                <span className="text-google-title-1 font-medium text-google-blue-500">1</span>
              </div>
              <h3 className="text-google-title-1 font-medium text-text-primary mb-google-sm">
                Choose Category
              </h3>
              <p className="text-google-body-2 text-text-secondary">
                Select from General, Technical, or Behavioral questions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-google-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-google-md">
                <span className="text-google-title-1 font-medium text-google-green-500">2</span>
              </div>
              <h3 className="text-google-title-1 font-medium text-text-primary mb-google-sm">
                Prepare
              </h3>
              <p className="text-google-body-2 text-text-secondary">
                Take 30 seconds to think about your answer
              </p>
            </div>
            <div className="text-center">
              <div className="bg-google-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-google-md">
                <span className="text-google-title-1 font-medium text-google-yellow-500">3</span>
              </div>
              <h3 className="text-google-title-1 font-medium text-text-primary mb-google-sm">
                Record
              </h3>
              <p className="text-google-body-2 text-text-secondary">
                Record your answer using your microphone
              </p>
            </div>
            <div className="text-center">
              <div className="bg-google-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-google-md">
                <span className="text-google-title-1 font-medium text-google-red-500">4</span>
              </div>
              <h3 className="text-google-title-1 font-medium text-text-primary mb-google-sm">
                Review
              </h3>
              <p className="text-google-body-2 text-text-secondary">
                Listen to your recording and improve
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

