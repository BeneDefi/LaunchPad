import React from 'react';
import CountdownTimer from './CountdownTimer';

const SalesCard = ({ sale }) => {
  const getStatusClass = () => {
    switch (sale.status) {
      case 'Upcoming':
        return 'bg-purple-400';
      case 'Live':
        return 'bg-blue-400';
      case 'Success':
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getCurrencyIcon = () => {
    switch (sale.currency) {
      case 'ETH':
        return '₿';
      case 'BNB':
        return '⛛';
      case 'PLS':
        return '⚡';
      case 'FTM':
        return '⚛';
      default:
        return '$';
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-sm mx-2 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src={sale.logo} alt={sale.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-medium">{sale.name}</span>
        </div>
        <div className={`${getStatusClass()} text-white text-sm py-1 px-3 rounded-full`}>
          {sale.status}
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {sale.status !== 'Success' ? (
          <div className="flex items-center text-blue-300">
            <span className="mr-2">{getCurrencyIcon()}</span>
            <span>{sale.raised} {sale.currency} Raised</span>
          </div>
        ) : (
          <div className="flex items-center text-blue-300">
            {sale.currency === 'PLS' || sale.currency === 'FTM' ? (
              <span className="mr-2">⚡</span>
            ) : (
              <span className="mr-2">⛛</span>
            )}
            <span>{sale.raised} {sale.currency} Raised</span>
          </div>
        )}
      </div>
      
      <div className="bg-gray-700 h-2 rounded-full w-full mb-4">
        <div 
          className="bg-blue-500 h-2 rounded-full" 
          style={{ 
            width: sale.status === 'Success' ? '100%' : 
                  sale.raised === '0' ? '0%' : '20%' 
          }}
        ></div>
      </div>
      
      {sale.countdownDays !== undefined && 
       sale.countdownHours !== undefined && 
       sale.countdownMinutes !== undefined && 
       sale.countdownSeconds !== undefined ? (
        <CountdownTimer 
          days={sale.countdownDays}
          hours={sale.countdownHours}
          minutes={sale.countdownMinutes}
          seconds={sale.countdownSeconds}
        />
      ) : (
        <div className="text-white text-center mt-4">Sale Ended!</div>
      )}
    </div>
  );
};

export default SalesCard;