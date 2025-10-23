import { MessageSquare } from 'lucide-react';

interface QuestionDisplayProps {
  question: string;
  category: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, category }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'general':
        return 'bg-blue-100 border-blue-300';
      case 'technical':
        return 'bg-green-100 border-green-300';
      case 'behavioral':
        return 'bg-purple-100 border-purple-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className={`${getCategoryColor()} border-2 rounded-2xl p-8 shadow-lg`}>
      <div className="flex items-start space-x-4">
        <MessageSquare className="text-gray-700 flex-shrink-0 mt-1" size={28} />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            {question}
          </h2>
        </div>
      </div>
    </div>
  );
};

