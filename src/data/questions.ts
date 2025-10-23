import { Question } from '@/types';

export const questions: Question[] = [
  // General Questions (10)
  {
    id: 'gen-1',
    category: 'general',
    text: 'Tell me about yourself and your background.',
  },
  {
    id: 'gen-2',
    category: 'general',
    text: 'What are your greatest strengths?',
  },
  {
    id: 'gen-3',
    category: 'general',
    text: 'What are your weaknesses and how do you address them?',
  },
  {
    id: 'gen-4',
    category: 'general',
    text: 'Where do you see yourself in five years?',
  },
  {
    id: 'gen-5',
    category: 'general',
    text: 'Why do you want to work for our company?',
  },
  {
    id: 'gen-6',
    category: 'general',
    text: 'What motivates you in your work?',
  },
  {
    id: 'gen-7',
    category: 'general',
    text: 'Describe your ideal work environment.',
  },
  {
    id: 'gen-8',
    category: 'general',
    text: 'What are your salary expectations?',
  },
  {
    id: 'gen-9',
    category: 'general',
    text: 'Why are you leaving your current position?',
  },
  {
    id: 'gen-10',
    category: 'general',
    text: 'What makes you unique compared to other candidates?',
  },

  // Technical Questions (10)
  {
    id: 'tech-1',
    category: 'technical',
    text: 'Explain the difference between var, let, and const in JavaScript.',
  },
  {
    id: 'tech-2',
    category: 'technical',
    text: 'What is the Virtual DOM in React and how does it improve performance?',
  },
  {
    id: 'tech-3',
    category: 'technical',
    text: 'Explain the concept of closures in JavaScript with an example.',
  },
  {
    id: 'tech-4',
    category: 'technical',
    text: 'What is the difference between == and === in JavaScript?',
  },
  {
    id: 'tech-5',
    category: 'technical',
    text: 'Describe the CSS box model and its components.',
  },
  {
    id: 'tech-6',
    category: 'technical',
    text: 'What are React hooks and why were they introduced?',
  },
  {
    id: 'tech-7',
    category: 'technical',
    text: 'Explain how promises work in JavaScript and the difference from async/await.',
  },
  {
    id: 'tech-8',
    category: 'technical',
    text: 'What is REST API and what are the main HTTP methods?',
  },
  {
    id: 'tech-9',
    category: 'technical',
    text: 'Explain the concept of responsive web design and how you implement it.',
  },
  {
    id: 'tech-10',
    category: 'technical',
    text: 'What is TypeScript and what advantages does it offer over JavaScript?',
  },

  // Behavioral Questions (10)
  {
    id: 'beh-1',
    category: 'behavioral',
    text: 'Tell me about a time when you faced a significant challenge at work. How did you handle it?',
  },
  {
    id: 'beh-2',
    category: 'behavioral',
    text: 'Describe a situation where you had to work with a difficult team member.',
  },
  {
    id: 'beh-3',
    category: 'behavioral',
    text: 'Give an example of a time when you had to learn a new technology quickly.',
  },
  {
    id: 'beh-4',
    category: 'behavioral',
    text: 'Tell me about a time when you failed. What did you learn from the experience?',
  },
  {
    id: 'beh-5',
    category: 'behavioral',
    text: 'Describe a situation where you had to meet a tight deadline.',
  },
  {
    id: 'beh-6',
    category: 'behavioral',
    text: 'Tell me about a time when you had to resolve a conflict within your team.',
  },
  {
    id: 'beh-7',
    category: 'behavioral',
    text: 'Give an example of when you took initiative on a project.',
  },
  {
    id: 'beh-8',
    category: 'behavioral',
    text: 'Describe a time when you received critical feedback. How did you respond?',
  },
  {
    id: 'beh-9',
    category: 'behavioral',
    text: 'Tell me about a time when you had to make a difficult decision with limited information.',
  },
  {
    id: 'beh-10',
    category: 'behavioral',
    text: 'Describe a situation where you went above and beyond your job responsibilities.',
  },
];

export const categories = [
  {
    id: 'general',
    title: 'General',
    description: 'Common interview questions about yourself and your background',
    color: 'bg-blue-500',
    icon: '💼',
  },
  {
    id: 'technical',
    title: 'Technical',
    description: 'Web development questions about React, JavaScript, and more',
    color: 'bg-green-500',
    icon: '💻',
  },
  {
    id: 'behavioral',
    title: 'Behavioral',
    description: 'STAR method questions about past experiences and challenges',
    color: 'bg-purple-500',
    icon: '🤝',
  },
];

