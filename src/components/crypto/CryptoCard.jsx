import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const CryptoCard = ({ crypto }) => {
  const isPositive = crypto.changePercent24h >= 0;

  return (
    <Link to={`/asset/${crypto.id}`}>
      <Card hover className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-700">
              {crypto.symbol.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-[#0A0B0D]">{crypto.name}</h3>
              <p className="text-sm text-gray-500">{crypto.symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-[#0A0B0D]">${crypto.price.toLocaleString()}</p>
            <p className={`text-sm ${isPositive ? 'text-[#16C784]' : 'text-[#EA4335]'}`}>
              {isPositive ? '+' : ''}{crypto.changePercent24h.toFixed(2)}%
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CryptoCard;

