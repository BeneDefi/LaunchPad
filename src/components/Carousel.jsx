import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SalesCard from './SalesCard';

const Carousel = ({ sales, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(sales.length / visibleItems);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const startIdx = currentIndex * visibleItems;
  const visibleSales = sales.slice(startIdx, startIdx + visibleItems);

  if (visibleSales.length < visibleItems && sales.length > visibleItems) {
    const itemsNeeded = visibleItems - visibleSales.length;
    visibleSales.push(...sales.slice(0, itemsNeeded));
  }

  return (
    <div className="relative my-8">
      {title && (
        <h2 className="text-white text-xl mb-4">{title}</h2>
      )}
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="overflow-hidden mx-12">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(0%)`,
          }}
        >
          {visibleSales.map((sale) => (
            <div 
              key={sale.id} 
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <SalesCard sale={sale} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button 
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;