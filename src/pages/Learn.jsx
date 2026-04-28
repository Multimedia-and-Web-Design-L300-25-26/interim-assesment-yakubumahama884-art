import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Learn = () => {
  const articles = [
    {
      id: 1,
      title: 'What is Bitcoin?',
      description: 'Learn about the first decentralized cryptocurrency and how it works.',
      category: 'Beginner',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'What is Ethereum?',
      description: 'Discover the blockchain platform that powers smart contracts and decentralized apps.',
      category: 'Beginner',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'How to Buy Cryptocurrency',
      description: 'A step-by-step guide to buying your first Bitcoin or Ethereum.',
      category: 'Getting Started',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Understanding Blockchain Technology',
      description: 'Deep dive into the technology behind cryptocurrency.',
      category: 'Intermediate',
      readTime: '12 min read',
    },
    {
      id: 5,
      title: 'What are Smart Contracts?',
      description: 'Learn about self-executing contracts and their applications.',
      category: 'Intermediate',
      readTime: '8 min read',
    },
    {
      id: 6,
      title: 'Crypto Security Best Practices',
      description: 'How to keep your cryptocurrency safe from hackers and scams.',
      category: 'Security',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0A0B0D] mb-4">
            Learn about cryptocurrency
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about crypto, from the basics to advanced topics.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Beginner', 'Getting Started', 'Intermediate', 'Security'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-[#0052FF] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} hover className="p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#0052FF]/10 text-[#0052FF] text-xs font-medium rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-400 text-sm">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A0B0D] mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{article.description}</p>
              <Link to="/signin">
                <Button variant="ghost" size="sm" className="w-full justify-start pl-0">
                  Read More →
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="p-8 bg-[#0052FF] text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to start trading?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Join millions of users and start your crypto journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="secondary" size="lg">Create Account</Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0052FF]">
                  Explore Assets
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learn;

