import { Mic, Square, RotateCcw } from 'lucide-react';

interface RecordingControlsProps {
  isRecording: boolean;
  recordingTime: string;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  hasRecording: boolean;
  error: string | null;
}

export const RecordingControls: React.FC<RecordingControlsProps> = ({
  isRecording,
  recordingTime,
  onStart,
  onStop,
  onReset,
  hasRecording,
  error,
}) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Record Your Answer
      </h3>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {!isRecording && !hasRecording && (
            <button
              onClick={onStart}
              className="flex items-center space-x-2 bg-google-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="Start recording"
            >
              <Mic size={20} />
              <span>Start Recording</span>
            </button>
          )}

          {isRecording && (
            <button
              onClick={onStop}
              className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md hover:shadow-lg animate-pulse"
              aria-label="Stop recording"
            >
              <Square size={20} />
              <span>Stop Recording</span>
            </button>
          )}

          {hasRecording && !isRecording && (
            <button
              onClick={onReset}
              className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg"
              aria-label="Reset recording"
            >
              <RotateCcw size={20} />
              <span>Record Again</span>
            </button>
          )}
        </div>

        {isRecording && (
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-8 bg-red-500 rounded-full animate-pulse delay-75" />
              <div className="w-2 h-8 bg-red-500 rounded-full animate-pulse delay-150" />
            </div>
            <span className="text-2xl font-bold text-red-500 tabular-nums">
              {recordingTime}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

