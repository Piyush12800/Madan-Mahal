import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase().trim();
    if (!lowerQuery) return PRODUCTS;

    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.fullDescription.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Product Catalog
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Browse our complete collection of sustainable paper products designed for every need.
          </p>

          <div className="relative max-w-lg mx-auto animate-fade-in-up group" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-paper-600 transition-colors duration-300" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-paper-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-paper-600 transition-colors duration-200"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="min-h-[400px]">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="h-[450px] animate-fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 max-w-sm mb-6">
                We couldn't find any products matching "{searchQuery}". Try using different keywords or categories.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-paper-600 font-semibold hover:text-paper-700 hover:underline transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Products;