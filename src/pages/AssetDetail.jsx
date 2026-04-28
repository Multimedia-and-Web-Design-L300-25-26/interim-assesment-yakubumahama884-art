import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { getCryptoById } from '../data/cryptoData';

const AssetDetail = () => {
  const { id } = useParams();
  const crypto = getCryptoById(id);

  if (!crypto) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A0B0D] mb-4">Crypto not found</h1>
          <Link to="/explore">
            <Button variant="primary">Back to Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isPositive = crypto.changePercent24h >= 0;

  // Generate mock chart data
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    price: crypto.price * (0.95 + Math.random() * 0.1),
  }));

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/explore" className="inline-flex items-center text-gray-600 hover:text-[#0052FF] mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Explore
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-700">
              {crypto.symbol.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0A0B0D]">{crypto.name}</h1>
              <p className="text-gray-500">{crypto.symbol}</p>
            </div>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-4xl font-bold text-[#0A0B0D]">
              ${crypto.price.toLocaleString()}
            </span>
            <span className={`text-xl font-medium ${isPositive ? 'text-[#16C784]' : 'text-[#EA4335]'}`}>
              {isPositive ? '+' : ''}{crypto.changePercent24h.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-[#0A0B0D] mb-4">Price Chart</h2>
              <div className="h-80 flex items-end justify-between space-x-1">
                {chartData.map((point, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-[#0052FF] rounded-t"
                    style={{
                      height: `${(point.price / (crypto.price * 1.05)) * 100}%`,
                      minHeight: '4px',
                    }}
                    title={`$${point.price.toLocaleString()}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>24h ago</span>
                <span>Now</span>
              </div>
            </Card>
          </div>

          {/* Actions Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-[#0A0B0D] mb-4">Trade {crypto.symbol}</h2>
              <div className="space-y-4">
                <Button variant="primary" className="w-full">Buy {crypto.symbol}</Button>
                <Button variant="outline" className="w-full">Sell {crypto.symbol}</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-[#0A0B0D] mb-4">Market Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Market Cap</span>
                  <span className="font-medium">${(crypto.marketCap / 1e9).toFixed(2)}B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">24h Volume</span>
                  <span className="font-medium">${(crypto.volume24h / 1e9).toFixed(2)}B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">24h Change</span>
                  <span className={`font-medium ${isPositive ? 'text-[#16C784]' : 'text-[#EA4335]'}`}>
                    {isPositive ? '+' : ''}{crypto.changePercent24h.toFixed(2)}%
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Description */}
        <Card className="p-6 mt-8">
          <h2 className="text-lg font-semibold text-[#0A0B0D] mb-4">About {crypto.name}</h2>
          <p className="text-gray-600 leading-relaxed">{crypto.description}</p>
        </Card>
      </div>
    </div>
  );
};

export default AssetDetail;

