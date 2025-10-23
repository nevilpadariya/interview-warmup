import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppContextType, PracticeSession } from '@/types';

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRACTICE_HISTORY: 'interview-warmup-history',
  CURRENT_STREAK: 'interview-warmup-streak',
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [practiceHistory, setPracticeHistory] = useState<PracticeSession[]>([]);
  const [currentStreak, setCurrentStreak] = useState<number>(0);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(STORAGE_KEYS.PRACTICE_HISTORY);
      const storedStreak = localStorage.getItem(STORAGE_KEYS.CURRENT_STREAK);

      if (storedHistory) {
        setPracticeHistory(JSON.parse(storedHistory));
      }
      if (storedStreak) {
        setCurrentStreak(parseInt(storedStreak, 10));
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  // Save practice history to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEYS.PRACTICE_HISTORY,
        JSON.stringify(practiceHistory)
      );
    } catch (error) {
      console.error('Error saving practice history:', error);
    }
  }, [practiceHistory]);

  // Save current streak to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_STREAK, currentStreak.toString());
    } catch (error) {
      console.error('Error saving current streak:', error);
    }
  }, [currentStreak]);

  const addPracticeSession = (session: Omit<PracticeSession, 'timestamp'>) => {
    const newSession: PracticeSession = {
      ...session,
      timestamp: Date.now(),
    };

    setPracticeHistory((prev) => [newSession, ...prev]);
    setCurrentStreak((prev) => prev + 1);
  };

  const resetProgress = () => {
    setPracticeHistory([]);
    setCurrentStreak(0);
    try {
      localStorage.removeItem(STORAGE_KEYS.PRACTICE_HISTORY);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_STREAK);
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };

  const value: AppContextType = {
    selectedCategory,
    setSelectedCategory,
    practiceHistory,
    addPracticeSession,
    currentStreak,
    resetProgress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

