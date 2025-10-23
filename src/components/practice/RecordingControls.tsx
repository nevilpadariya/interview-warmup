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
    <div className="google-card-elevated p-google-xl">
      <h3 className="text-google-title-1 font-medium text-text-primary mb-google-md">
        Record Your Answer
      </h3>

      {error && (
        <div className="mb-google-md p-google-md bg-google-red-50 border border-google-red-200 rounded-google-md">
          <p className="text-google-body-2 text-google-red-700">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-google-md">
          {!isRecording && !hasRecording && (
            <button
              onClick={onStart}
              className="google-button-primary"
              aria-label="Start recording"
            >
              <Mic size={20} />
              <span>Start Recording</span>
            </button>
          )}

          {isRecording && (
            <button
              onClick={onStop}
              className="google-button-danger animate-pulse"
              aria-label="Stop recording"
            >
              <Square size={20} />
              <span>Stop Recording</span>
            </button>
          )}

          {hasRecording && !isRecording && (
            <button
              onClick={onReset}
              className="google-button-secondary"
              aria-label="Reset recording"
            >
              <RotateCcw size={20} />
              <span>Record Again</span>
            </button>
          )}
        </div>

        {isRecording && (
          <div className="flex items-center space-x-google-md">
            <div className="flex space-x-google-xs">
              <div className="w-2 h-8 bg-google-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-8 bg-google-red-500 rounded-full animate-pulse delay-75" />
              <div className="w-2 h-8 bg-google-red-500 rounded-full animate-pulse delay-150" />
            </div>
            <span className="text-google-display-2 font-google-display text-google-red-500 tabular-nums">
              {recordingTime}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

