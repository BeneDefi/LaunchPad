import React from 'react';

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex justify-between mt-4 w-full">
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-md font-bold text-lg">
          {days}
        </div>
        <div className="text-gray-400 text-xs mt-1">d</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-md font-bold text-lg">
          {hours}
        </div>
        <div className="text-gray-400 text-xs mt-1">h</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-md font-bold text-lg">
          {minutes}
        </div>
        <div className="text-gray-400 text-xs mt-1">m</div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-md font-bold text-lg">
          {seconds}
        </div>
        <div className="text-gray-400 text-xs mt-1">s</div>
      </div>
    </div>
  );
};

export default CountdownTimer;