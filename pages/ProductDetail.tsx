import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate finding product
    const found = PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setActiveImage(found.images[0]);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-paper-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <Link to="/products" className="text-paper-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/products" className="text-gray-500 hover:text-paper-600 inline-flex items-center text-sm font-medium transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Products
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-100">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-contain p-4 animate-fade-in"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all bg-gray-50 ${
                      activeImage === img ? 'border-paper-600 ring-2 ring-paper-100' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm font-semibold text-paper-600 tracking-wider uppercase bg-paper-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                {product.currency === 'USD' ? '$' : ''}{product.price.toFixed(2)}
              </span>
              <span className={`text-sm px-2 py-1 rounded border ${
                product.stockStatus === 'In Stock' 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : product.stockStatus === 'Low Stock'
                  ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                  : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}>
                {product.stockStatus}
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Check size={18} className="text-paper-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-gray-100 pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link 
                   to="/contact"
                   state={{ productSubject: `Inquiry about ${product.name}` }}
                   className="flex-1 flex items-center justify-center bg-paper-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-paper-700 transition-all shadow-md hover:shadow-lg"
                 >
                   <ShoppingBag size={20} className="mr-2" />
                   Order Inquiry
                 </Link>
                 <button className="flex-1 flex items-center justify-center bg-white text-gray-700 border border-gray-300 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors">
                   Download Spec Sheet
                 </button>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                For bulk orders or custom branding, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;