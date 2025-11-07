import React from 'react';
import { FiTarget, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About FalconVest</h1>
            <p className="text-xl text-dark-600">
              We're revolutionizing the way investors approach the stock market through cutting-edge artificial intelligence and machine learning technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-semibold mb-6 border border-primary-500/20">
                Our Mission
              </span>
              <h2 className="mb-6">Empowering Investors with AI-Driven Insights</h2>
              <p className="text-dark-600 mb-4">
                At FalconVest, we believe that everyone deserves access to institutional-grade investment intelligence. Our mission is to democratize sophisticated trading strategies and market analysis through advanced AI technology.
              </p>
              <p className="text-dark-600">
                We combine decades of financial expertise with state-of-the-art machine learning algorithms to provide real-time insights that help investors make informed decisions and maximize their returns.
              </p>
            </div>
            <div className="card-dark p-8">
              <div className="space-y-6">
                {[
                  { icon: <FiTarget className="w-6 h-6" />, title: "Precision", desc: "Accurate market predictions powered by AI" },
                  { icon: <FiAward className="w-6 h-6" />, title: "Excellence", desc: "Industry-leading performance metrics" },
                  { icon: <FiUsers className="w-6 h-6" />, title: "Community", desc: "Supporting 10,000+ active investors" },
                  { icon: <FiTrendingUp className="w-6 h-6" />, title: "Growth", desc: "Consistent returns and portfolio growth" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-dark-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-dark-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">What We Do</h2>
              <p className="text-dark-600">
                FalconVest leverages cutting-edge artificial intelligence to transform how investors approach the stock market
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="card-dark p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                    <FiTrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white mb-3">Intelligent Stock Prediction</h3>
                    <p className="text-dark-600">
                      Our advanced machine learning models analyze vast amounts of market data, historical patterns, and real-time indicators to predict stock movements with high accuracy. We process millions of data points to identify profitable trading opportunities that might be missed by traditional analysis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-dark p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0">
                    <FiTarget className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white mb-3">Automation & Efficiency</h3>
                    <p className="text-dark-600">
                      FalconVest automates complex investment analysis that would typically require hours of manual research. Our platform continuously monitors markets 24/7, providing real-time insights and alerts so you can make informed decisions quickly and efficiently without being glued to your screen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-dark p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white mb-3">Data-Driven Insights</h3>
                    <p className="text-dark-600">
                      We combine technical analysis, sentiment analysis, and predictive modeling to give you a comprehensive view of market conditions. Our AI doesn't just tell you what's happening—it helps you understand why and what might happen next, empowering you to make smarter investment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              The principles that guide everything we do at FalconVest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation First",
                description: "We constantly push the boundaries of what's possible with AI and financial technology.",
                gradient: "from-primary-500/10 to-accent-500/10"
              },
              {
                title: "Transparency",
                description: "Clear communication and honest reporting are at the heart of our relationship with investors.",
                gradient: "from-accent-500/10 to-primary-500/10"
              },
              {
                title: "Security",
                description: "Your data and investments are protected by bank-level encryption and security protocols.",
                gradient: "from-primary-500/10 to-accent-500/10"
              }
            ].map((value, idx) => (
              <div key={idx} className="card-dark p-8 text-center group hover:shadow-2xl hover:shadow-primary-500/10 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform border border-dark-200`}></div>
                <h3 className="text-white mb-3">{value.title}</h3>
                <p className="text-dark-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
