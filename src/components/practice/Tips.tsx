import { Lightbulb } from 'lucide-react';

interface TipsProps {
  category: string;
}

export const Tips: React.FC<TipsProps> = ({ category }) => {
  const getTips = () => {
    switch (category) {
      case 'general':
        return [
          'Be authentic and genuine in your responses',
          'Use specific examples from your experience',
          'Keep your answers concise and focused',
          'Show enthusiasm for the role and company',
        ];
      case 'technical':
        return [
          'Explain your thought process clearly',
          'Use technical terminology appropriately',
          'Provide real-world examples when possible',
          'Admit when you don\'t know something',
        ];
      case 'behavioral':
        return [
          'Use the STAR method (Situation, Task, Action, Result)',
          'Focus on your specific contributions',
          'Highlight positive outcomes and learnings',
          'Be honest about challenges and how you overcame them',
        ];
      default:
        return [];
    }
  };

  const tips = getTips();

  return (
    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-6 shadow-md">
      <div className="flex items-center space-x-3 mb-4">
        <Lightbulb className="text-indigo-600" size={24} />
        <h3 className="text-xl font-semibold text-gray-900">
          Tips for {category.charAt(0).toUpperCase() + category.slice(1)} Questions
        </h3>
      </div>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

