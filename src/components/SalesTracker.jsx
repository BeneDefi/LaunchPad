import React from 'react';
import Carousel from './Carousel';
import { upcomingSales, completedSales } from '../data/salesData.js';

const SalesTracker = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold mb-10">
        <span className="text-white">Follow our latest </span>
        <span className="text-blue-400">Sales</span>
      </h1>
      
      <div className="max-w-7xl mx-auto">
        <Carousel sales={upcomingSales} />
        <Carousel sales={completedSales} />
      </div>
    </div>
  );
};

export default SalesTracker;