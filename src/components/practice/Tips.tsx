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
    <div className="bg-google-blue-50 border-2 border-google-blue-300 rounded-google-xl p-google-xl shadow-google-2">
      <div className="flex items-center space-x-google-md mb-google-md">
        <Lightbulb className="text-google-blue-600" size={24} />
        <h3 className="text-google-title-1 font-medium text-text-primary">
          Tips for {category.charAt(0).toUpperCase() + category.slice(1)} Questions
        </h3>
      </div>
      <ul className="space-y-google-sm">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start space-x-google-sm">
            <span className="text-google-blue-500 font-medium flex-shrink-0">•</span>
            <span className="text-google-body-2 text-text-secondary">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

