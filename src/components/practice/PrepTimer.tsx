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
    <div className="bg-google-yellow-50 border-2 border-google-yellow-300 rounded-google-xl p-google-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-google-md">
          <Clock className="text-google-yellow-600" size={24} />
          <div>
            <h3 className="text-google-title-1 font-medium text-text-primary">
              Preparation Time
            </h3>
            <p className="text-google-body-2 text-text-secondary">
              Take a moment to think about your answer
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-google-md">
          <span className="text-google-display-1 font-google-display text-google-yellow-600 tabular-nums">
            {formatTime(time)}
          </span>
          {!isRunning && time === 30 && (
            <button
              onClick={start}
              className="google-button-primary bg-google-yellow-500 hover:bg-google-yellow-600"
              aria-label="Start preparation timer"
            >
              <Play size={20} />
              <span>Start</span>
            </button>
          )}
        </div>
      </div>
      {isRunning && (
        <div className="mt-google-md">
          <div className="w-full bg-google-yellow-200 rounded-full h-2">
            <div
              className="bg-google-yellow-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(time / 30) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

