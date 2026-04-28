import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CryptoCard from '../components/crypto/CryptoCard';
import { cryptoData } from '../data/cryptoData';

const Home = () => {
  const [stats, setStats] = useState({ users: 0, countries: 0, trades: 0 });
  
  useEffect(() => {
    const target = { users: 108, countries: 190, trades: 450 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        users: Math.floor(target.users * progress),
        countries: Math.floor(target.countries * progress),
        trades: Math.floor(target.trades * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const popularAssets = cryptoData.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0052FF]/5 via-white to-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0052FF]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-[#0052FF]/10 text-[#0052FF] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#16C784] rounded-full mr-2 animate-pulse" />
              Crypto is up
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0B0D] mb-6 leading-tight">
              Jump start your<br />
              <span className="text-[#0052FF]">crypto portfolio</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Link to="/explore">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white border-2 border-gray-200">Explore Assets</Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div>
                <p className="text-2xl font-bold text-[#0A0B0D]">{stats.users}M+</p>
                <p className="text-sm text-gray-500">verified users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0A0B0D]">{stats.countries}</p>
                <p className="text-sm text-gray-500">countries</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0A0B0D]">${stats.trades}B+</p>
                <p className="text-sm text-gray-500">trade volume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Assets Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0A0B0D]">Popular Assets</h2>
            <Link to="/explore" className="text-[#0052FF] font-medium hover:underline flex items-center">
              See all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularAssets.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A0B0D] mb-4 text-center">Create your portfolio today</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">Whether you are new to crypto or a seasoned trader, Coinbase has the tools you need.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0052FF] to-[#0052FF]/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A0B0D] mb-3">Buy and Sell</h3>
              <p className="text-gray-600">Instantly buy Bitcoin, Ethereum, and other cryptocurrencies with your debit card or bank account.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#16C784] to-[#16C784]/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A0B0D] mb-3">Track Performance</h3>
              <p className="text-gray-600">Watch your portfolio grow in real-time with detailed price charts and performance metrics.</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7931A] to-[#F7931A]/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0A0B0D] mb-3">Secure Storage</h3>
              <p className="text-gray-600">Your crypto is protected by industry-leading security features and insurance coverage.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Earn Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0052FF]/5 to-[#16C784]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0B0D] mb-4">Earn rewards on your crypto</h2>
              <p className="text-lg text-gray-600 mb-8">Simply hold crypto in your Coinbase account and earn rewards. It is that easy.</p>
              <Link to="/signup">
                <Button variant="primary" size="lg">Start Earning</Button>
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                { coin: 'USDT', apy: '4.5% APY', color: 'bg-[#26A17B]' },
                { coin: 'USDC', apy: '4.0% APY', color: 'bg-[#2775CA]' },
                { coin: 'ETH', apy: '3.5% APY', color: 'bg-[#627EEA]' },
                { coin: 'SOL', apy: '4.2% APY', color: 'bg-[#14C683]' },
              ].map((item, i) => (
                <Card key={i} className="p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {item.coin.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A0B0D]">{item.coin}</p>
                      <p className="text-sm text-gray-500"> Rewards</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-[#16C784]">{item.apy}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0052FF] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start your crypto journey today</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Join millions of users and start trading. It is free to sign up.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="bg-white text-[#0052FF] hover:bg-gray-100">Create Free Account</Button>
            </Link>
            <Link to="/explore">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0052FF]">Explore Assets</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

