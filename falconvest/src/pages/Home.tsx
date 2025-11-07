import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiBarChart2, FiCpu, FiTrendingUp, FiShield } from 'react-icons/fi';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-dark-100 border border-primary-500/30 rounded-full">
              <span className="text-primary-400 font-semibold text-sm">🚀 Powered by Advanced AI Technology</span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white via-dark-900 to-dark-700 bg-clip-text text-transparent">
              AI-Powered Stock Market Intelligence
            </h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-dark-600">
              Harness the power of artificial intelligence to make smarter investment decisions and maximize your portfolio returns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                Start Free Trial <FiArrowUpRight className="ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl -rotate-1"></div>
            <div className="relative card-dark shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-dark-100 to-dark-50 flex items-center justify-center border-b border-dark-200">
                <div className="text-center p-8">
                  <div className="relative inline-block">
                    <FiBarChart2 className="w-20 h-20 text-primary-400 mx-auto mb-4 glow-primary" />
                    <div className="absolute inset-0 bg-primary-500/20 blur-xl"></div>
                  </div>
                  <p className="text-dark-600 text-lg font-medium">Interactive AI Dashboard</p>
                  <p className="text-dark-500 text-sm mt-2">Real-time market analysis and predictions</p>
                </div>
              </div>
              {/* Mock stats bar */}
              <div className="bg-dark-100 p-4 flex justify-around items-center">
                <div className="text-center">
                  <p className="text-primary-400 font-bold text-2xl">94.2%</p>
                  <p className="text-dark-600 text-xs">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-accent-400 font-bold text-2xl">$2.4M+</p>
                  <p className="text-dark-600 text-xs">Assets Managed</p>
                </div>
                <div className="text-center">
                  <p className="text-primary-400 font-bold text-2xl">10K+</p>
                  <p className="text-dark-600 text-xs">Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-dark-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100 to-dark-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/20">
              Features
            </span>
            <h2 className="mb-4">Advanced AI for Smarter Investing</h2>
            <p className="max-w-2xl mx-auto text-dark-600">
              FalconVest combines cutting-edge machine learning with financial expertise to give you an edge in the stock market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCpu className="w-8 h-8 text-primary-400" />,
                title: "AI-Powered Analysis",
                description: "Our algorithms analyze millions of data points to identify profitable trading opportunities.",
                gradient: "from-primary-500/10 to-accent-500/10"
              },
              {
                icon: <FiTrendingUp className="w-8 h-8 text-accent-400" />,
                title: "Real-time Insights",
                description: "Get instant alerts and recommendations based on market movements and trends.",
                gradient: "from-accent-500/10 to-primary-500/10"
              },
              {
                icon: <FiShield className="w-8 h-8 text-primary-400" />,
                title: "Risk Management",
                description: "Advanced risk assessment tools to help protect your investments.",
                gradient: "from-primary-500/10 to-accent-500/10"
              }
            ].map((feature, index) => (
              <div key={index} className="card-dark p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-dark-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-dark-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-6 text-white">Ready to Transform Your Investment Strategy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of investors who trust FalconVest for intelligent stock market insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
              Start Your Free Trial <FiArrowUpRight className="ml-2" />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 inline-flex items-center justify-center">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
