import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-paper-100 h-full flex flex-col hover:-translate-y-2">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            <span className="bg-white text-paper-700 p-3 rounded-full shadow-xl inline-flex items-center justify-center hover:bg-paper-50">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-xs font-bold text-paper-600 uppercase tracking-widest mb-2 opacity-75">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-paper-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-5 flex-grow leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto pt-5 border-t border-paper-100">
            <span className="text-xl font-bold bg-gradient-to-r from-paper-600 to-paper-700 bg-clip-text text-transparent">
              {product.currency === 'USD' ? '$' : ''}{product.price.toFixed(2)}
            </span>
            <span className="text-xs font-semibold text-paper-600 group-hover:text-paper-700 transition-colors">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;