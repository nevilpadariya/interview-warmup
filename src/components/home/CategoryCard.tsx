import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/practice/${category.id}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
    >
      <div className={`${category.color} h-2`} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl" aria-hidden="true">
            {category.icon}
          </span>
          <ArrowRight className="text-gray-400 group-hover:text-google-blue transition-colors" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {category.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

