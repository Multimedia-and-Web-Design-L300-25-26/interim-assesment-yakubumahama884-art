import React, { useState } from 'react';
import Card from '../components/common/Card';
import CryptoRow from '../components/crypto/CryptoRow';
import { cryptoData } from '../data/cryptoData';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCryptos = cryptoData.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0A0B0D] mb-4">Explore Crypto</h1>
          <p className="text-gray-600 mb-6">
            Discover and track hundreds of cryptocurrencies
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 outline-none transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Crypto List */}
        <Card className="overflow-hidden">
          <div className="hidden md:flex items-center justify-between py-4 px-4 bg-gray-50 border-b border-gray-100">
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-500">Asset</span>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-medium text-gray-500">Price</span>
            </div>
            <div className="flex-1 text-right">
              <span className="text-sm font-medium text-gray-500">24h Change</span>
            </div>
          </div>
          {filteredCryptos.length > 0 ? (
            filteredCryptos.map((crypto, index) => (
              <CryptoRow key={crypto.id} crypto={crypto} index={index} />
            ))
          ) : (
            <div className="py-12 text-center text-gray-500">
              No cryptocurrencies found matching "{searchTerm}"
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Explore;

