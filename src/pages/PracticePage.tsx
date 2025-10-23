import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuestionDisplay } from '@/components/practice/QuestionDisplay';
import { PrepTimer } from '@/components/practice/PrepTimer';
import { RecordingControls } from '@/components/practice/RecordingControls';
import { AudioPlayer } from '@/components/practice/AudioPlayer';
import { Tips } from '@/components/practice/Tips';
import { useRecorder } from '@/hooks/useRecorder';
import { useTimer } from '@/hooks/useTimer';
import { useApp } from '@/context/AppContext';
import { questions } from '@/data/questions';
import { ArrowRight, RotateCcw } from 'lucide-react';

export const PracticePage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { addPracticeSession } = useApp();
  
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [showPrepTimer, setShowPrepTimer] = useState(true);
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());

  const {
    isRecording,
    recordedAudio,
    error,
    startRecording,
    stopRecording,
    resetRecording,
  } = useRecorder();

  const { time: recordingTime, start: startTimer, stop: stopTimer, reset: resetTimer, formatTime } = useTimer();

  // Get random question for the category
  useEffect(() => {
    if (category) {
      const categoryQuestions = questions.filter((q) => q.category === category);
      if (categoryQuestions.length > 0) {
        const randomQuestion =
          categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
        setCurrentQuestion(randomQuestion.text);
      } else {
        navigate('/');
      }
    }
  }, [category, navigate]);

  const handlePrepComplete = useCallback(() => {
    setShowPrepTimer(false);
  }, []);

  const handleStartRecording = useCallback(() => {
    startRecording();
    startTimer();
  }, [startRecording, startTimer]);

  const handleStopRecording = useCallback(() => {
    stopRecording();
    stopTimer();
  }, [stopRecording, stopTimer]);

  const handleResetRecording = useCallback(() => {
    resetRecording();
    resetTimer();
  }, [resetRecording, resetTimer]);

  const handleTryAgain = useCallback(() => {
    resetRecording();
    resetTimer();
    setShowPrepTimer(true);
    setSessionStartTime(Date.now());
  }, [resetRecording, resetTimer]);

  const handleNextQuestion = useCallback(() => {
    if (category) {
      // Save session
      addPracticeSession({
        category,
        question: currentQuestion,
        duration: Math.floor((Date.now() - sessionStartTime) / 1000),
      });

      // Reset for next question
      const categoryQuestions = questions.filter((q) => q.category === category);
      const randomQuestion =
        categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
      setCurrentQuestion(randomQuestion.text);
      resetRecording();
      resetTimer();
      setShowPrepTimer(true);
      setSessionStartTime(Date.now());
    }
  }, [category, currentQuestion, sessionStartTime, addPracticeSession, resetRecording, resetTimer]);

  if (!category || !currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen bg-surface-1">
      <div className="max-w-5xl mx-auto px-google-md sm:px-google-lg lg:px-google-xl py-google-3xl">
        {/* Category Badge */}
        <div className="mb-google-lg">
          <span className="inline-block px-google-md py-google-sm bg-white rounded-full text-google-body-2 font-medium text-text-secondary shadow-google-1">
            {category.charAt(0).toUpperCase() + category.slice(1)} Question
          </span>
        </div>

        {/* Question */}
        <div className="mb-google-xl">
          <QuestionDisplay question={currentQuestion} category={category} />
        </div>

        {/* Preparation Timer */}
        {showPrepTimer && (
          <div className="mb-google-xl">
            <PrepTimer onComplete={handlePrepComplete} />
          </div>
        )}

        {/* Recording Controls */}
        {!showPrepTimer && (
          <div className="mb-google-xl">
            <RecordingControls
              isRecording={isRecording}
              recordingTime={formatTime(recordingTime)}
              onStart={handleStartRecording}
              onStop={handleStopRecording}
              onReset={handleResetRecording}
              hasRecording={recordedAudio !== null}
              error={error}
            />
          </div>
        )}

        {/* Audio Player */}
        {recordedAudio && !isRecording && (
          <div className="mb-google-xl">
            <AudioPlayer audioUrl={recordedAudio} />
          </div>
        )}

        {/* Action Buttons */}
        {recordedAudio && !isRecording && (
          <div className="flex flex-col sm:flex-row gap-google-md mb-google-xl">
            <button
              onClick={handleTryAgain}
              className="google-button-secondary"
            >
              <RotateCcw size={20} />
              <span>Try Again</span>
            </button>
            <button
              onClick={handleNextQuestion}
              className="google-button-primary flex-1"
            >
              <span>Next Question</span>
              <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* Tips */}
        <Tips category={category} />
      </div>
    </div>
  );
};

