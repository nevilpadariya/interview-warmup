import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getCategoryColor = () => {
    switch (category.id) {
      case 'general':
        return 'bg-google-blue-500';
      case 'technical':
        return 'bg-google-green-500';
      case 'behavioral':
        return 'bg-google-yellow-500';
      default:
        return 'bg-surface-4';
    }
  };

  const getCategoryTextColor = () => {
    switch (category.id) {
      case 'general':
        return 'text-google-blue-500';
      case 'technical':
        return 'text-google-green-500';
      case 'behavioral':
        return 'text-google-yellow-500';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <Link
      to={`/practice/${category.id}`}
      className="group block google-card-elevated hover:shadow-google-3 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    >
      <div className={`${getCategoryColor()} h-2`} />
      <div className="p-google-xl">
        <div className="flex items-center justify-between mb-google-md">
          <span className="text-4xl" aria-hidden="true">
            {category.icon}
          </span>
          <ArrowRight className={`${getCategoryTextColor()} group-hover:translate-x-1 transition-transform duration-200`} size={24} />
        </div>
        <h3 className="text-google-headline-2 font-google-display text-text-primary mb-google-sm">
          {category.title}
        </h3>
        <p className="text-google-body-2 text-text-secondary leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

