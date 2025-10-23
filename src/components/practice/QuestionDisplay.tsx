import { MessageSquare } from 'lucide-react';

interface QuestionDisplayProps {
  question: string;
  category: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, category }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'general':
        return 'bg-google-blue-100 border-google-blue-300';
      case 'technical':
        return 'bg-google-green-100 border-google-green-300';
      case 'behavioral':
        return 'bg-google-yellow-100 border-google-yellow-300';
      default:
        return 'bg-surface-2 border-surface-4';
    }
  };

  return (
    <div className={`${getCategoryColor()} border-2 rounded-google-xl p-google-xl shadow-google-2`}>
      <div className="flex items-start space-x-google-md">
        <MessageSquare className="text-text-secondary flex-shrink-0 mt-1" size={28} />
        <div>
          <h2 className="text-google-headline-1 font-google-display text-text-primary leading-relaxed">
            {question}
          </h2>
        </div>
      </div>
    </div>
  );
};

