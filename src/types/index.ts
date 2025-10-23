// Category type
export type Category = {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
};

// Practice session type
export type PracticeSession = {
  category: string;
  question: string;
  duration: number;
  timestamp: number;
};

// App context type
export type AppContextType = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  practiceHistory: PracticeSession[];
  addPracticeSession: (session: Omit<PracticeSession, 'timestamp'>) => void;
  currentStreak: number;
  resetProgress: () => void;
};

// Question type
export type Question = {
  id: string;
  category: string;
  text: string;
};

