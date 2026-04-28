import React from 'react';
import { Link } from 'react-router-dom';

const CryptoRow = ({ crypto, index }) => {
  const isPositive = crypto.changePercent24h >= 0;

  return (
    <Link 
      to={`/asset/${crypto.id}`}
      className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
    >
      <div className="flex items-center space-x-4 w-1/3">
        <span className="text-gray-400 w-6">{index + 1}</span>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">
            {crypto.symbol.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium text-[#0A0B0D]">{crypto.name}</h3>
            <p className="text-sm text-gray-500">{crypto.symbol}</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 text-center">
        <p className="font-medium text-[#0A0B0D]">${crypto.price.toLocaleString()}</p>
      </div>
      <div className="w-1/3 text-right">
        <p className={`font-medium ${isPositive ? 'text-[#16C784]' : 'text-[#EA4335]'}`}>
          {isPositive ? '+' : ''}{crypto.changePercent24h.toFixed(2)}%
        </p>
      </div>
    </Link>
  );
};

export default CryptoRow;

