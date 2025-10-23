import { useTimer } from '@/hooks/useTimer';
import { Clock, Play } from 'lucide-react';
import { useEffect } from 'react';

interface PrepTimerProps {
  onComplete: () => void;
}

export const PrepTimer: React.FC<PrepTimerProps> = ({ onComplete }) => {
  const { time, isRunning, start, formatTime } = useTimer({
    initialTime: 30,
    countDown: true,
  });

  useEffect(() => {
    if (time === 0 && !isRunning) {
      onComplete();
    }
  }, [time, isRunning, onComplete]);

  return (
    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Clock className="text-yellow-600" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Preparation Time
            </h3>
            <p className="text-sm text-gray-600">
              Take a moment to think about your answer
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-yellow-600 tabular-nums">
            {formatTime(time)}
          </span>
          {!isRunning && time === 30 && (
            <button
              onClick={start}
              className="flex items-center space-x-2 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              aria-label="Start preparation timer"
            >
              <Play size={20} />
              <span>Start</span>
            </button>
          )}
        </div>
      </div>
      {isRunning && (
        <div className="mt-4">
          <div className="w-full bg-yellow-200 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(time / 30) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

