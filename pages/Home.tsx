import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Truck, ChevronLeft, ChevronRight, Factory } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const FACTORY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    title: "Advanced Manufacturing",
    subtitle: "State-of-the-art machinery ensuring precision in every cut."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000",
    title: "Sustainable Processing",
    subtitle: "100% recycled water management systems."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
    title: "Large Scale Warehousing",
    subtitle: "Ready-to-ship inventory for bulk global distribution."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1606166325683-1637172b8dd6?auto=format&fit=crop&q=80&w=2000",
    title: "Quality Control",
    subtitle: "Rigorous testing standards for durability and finish."
  }
];

const Home: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FACTORY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FACTORY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? FACTORY_IMAGES.length - 1 : prev - 1));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Approx card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-paper-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#4d8960_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-2 px-4 rounded-full bg-paper-100 text-paper-700 text-sm font-bold mb-8 animate-fade-in-up border border-paper-200">
              ✨ Sustainable & High Quality
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Crafting Paper for <br/>
              <span className="bg-gradient-to-r from-paper-600 to-paper-700 bg-clip-text text-transparent">Your Brightest Ideas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '200ms' }}>
              From school notebooks to corporate registers, we manufacture premium paper products with minimal environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gradient-to-r from-paper-600 to-paper-700 hover:from-paper-700 hover:to-paper-800 md:text-xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Browse Catalog
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-paper-600 text-lg font-semibold rounded-full text-paper-700 bg-white hover:bg-paper-50 md:text-xl transition-all shadow-lg hover:shadow-xl"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-paper-50 to-white border border-paper-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-paper-200 to-paper-300 rounded-xl flex items-center justify-center text-paper-700 mb-5 group-hover:scale-110 transition-transform">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-700 leading-relaxed">We use 100% recycled materials and acid-free paper to reduce our carbon footprint.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-paper-50 to-white border border-paper-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-paper-200 to-paper-300 rounded-xl flex items-center justify-center text-paper-700 mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-700 leading-relaxed">Every notebook passes through rigorous quality checks to ensure durability.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-paper-50 to-white border border-paper-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-paper-200 to-paper-300 rounded-xl flex items-center justify-center text-paper-700 mb-5 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk Delivery</h3>
              <p className="text-gray-700 leading-relaxed">Efficient logistics network ensuring timely delivery for wholesale orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Scroll Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Products</h2>
              <p className="text-lg text-gray-600">Discover our range of premium stationery.</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-300 bg-white hover:bg-paper-50 text-paper-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-paper-500"
                aria-label="Scroll left"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-300 bg-white hover:bg-paper-50 text-paper-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-paper-500"
                aria-label="Scroll right"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {PRODUCTS.map((product) => (
              <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-start h-[450px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center font-medium text-paper-700 hover:text-paper-800 transition-colors">
              View All Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

    

      {/* Factory Carousel Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900 overflow-hidden group">
        {FACTORY_IMAGES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-20 px-4">
              <div className="text-center max-w-4xl animate-fade-in-up">
                <span className="inline-flex items-center gap-2 text-paper-400 font-semibold tracking-wider uppercase mb-3 text-sm">
                  <Factory size={16} /> Inside The Factory
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {FACTORY_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
        {/* CTA Section */}
      <section className="py-20 bg-paper-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to order in bulk?</h2>
          <p className="text-paper-200 text-lg mb-8">
            We offer special rates for schools, offices, and retailers. Get a custom quote tailored to your needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-paper-900 font-bold rounded-full hover:bg-paper-100 transition-colors shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>

  );
};

export default Home;