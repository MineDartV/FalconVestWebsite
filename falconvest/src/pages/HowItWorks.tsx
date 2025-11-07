import React from 'react';
import { FiDatabase, FiCpu, FiActivity, FiBell, FiShield, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">How FalconVest Works</h1>
            <p className="text-xl text-dark-600">
              Our AI-powered platform analyzes markets 24/7 to deliver actionable insights directly to you
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 font-bold text-xl">
                      1
                    </div>
                    <h2 className="text-3xl">Data Collection</h2>
                  </div>
                  <p className="text-dark-600 mb-6">
                    Our AI continuously collects and processes vast amounts of market data from multiple sources including stock exchanges, financial news, social media sentiment, economic indicators, and historical trading patterns.
                  </p>
                  <div className="flex items-start space-x-3 card-dark p-4">
                    <FiDatabase className="w-6 h-6 text-primary-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Real-Time Data Feeds</h4>
                      <p className="text-dark-600 text-sm">Access to over 50,000 data points updated every second</p>
                    </div>
                  </div>
                </div>
                <div className="card-dark p-8 order-1 md:order-2">
                  <div className="aspect-square bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl flex items-center justify-center border border-dark-200">
                    <FiDatabase className="w-24 h-24 text-primary-400" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="card-dark p-8">
                  <div className="aspect-square bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-xl flex items-center justify-center border border-dark-200">
                    <FiCpu className="w-24 h-24 text-accent-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center text-accent-400 font-bold text-xl">
                      2
                    </div>
                    <h2 className="text-3xl">AI Analysis</h2>
                  </div>
                  <p className="text-dark-600 mb-6">
                    Advanced machine learning algorithms process the collected data using neural networks trained on decades of market behavior. Our AI identifies patterns, correlations, and opportunities that human analysts might miss.
                  </p>
                  <div className="flex items-start space-x-3 card-dark p-4">
                    <FiZap className="w-6 h-6 text-accent-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Lightning-Fast Processing</h4>
                      <p className="text-dark-600 text-sm">Analyze millions of scenarios in milliseconds</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 font-bold text-xl">
                      3
                    </div>
                    <h2 className="text-3xl">Prediction & Scoring</h2>
                  </div>
                  <p className="text-dark-600 mb-6">
                    Each potential trading opportunity is scored based on multiple factors including expected return, risk level, market sentiment, and timing. Our AI provides confidence ratings for every recommendation.
                  </p>
                  <div className="flex items-start space-x-3 card-dark p-4">
                    <FiActivity className="w-6 h-6 text-primary-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">94.2% Accuracy Rate</h4>
                      <p className="text-dark-600 text-sm">Proven track record of accurate market predictions</p>
                    </div>
                  </div>
                </div>
                <div className="card-dark p-8 order-1 md:order-2">
                  <div className="aspect-square bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl flex items-center justify-center border border-dark-200">
                    <FiActivity className="w-24 h-24 text-primary-400" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="card-dark p-8">
                  <div className="aspect-square bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-xl flex items-center justify-center border border-dark-200">
                    <FiBell className="w-24 h-24 text-accent-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center text-accent-400 font-bold text-xl">
                      4
                    </div>
                    <h2 className="text-3xl">Instant Alerts</h2>
                  </div>
                  <p className="text-dark-600 mb-6">
                    Receive real-time notifications about high-confidence trading opportunities, market shifts, and portfolio updates. Choose how and when you want to be notified via mobile, email, or desktop alerts.
                  </p>
                  <div className="flex items-start space-x-3 card-dark p-4">
                    <FiBell className="w-6 h-6 text-accent-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Smart Notifications</h4>
                      <p className="text-dark-600 text-sm">Only receive alerts that matter to your strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-dark-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Advanced Technology Stack</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              Built on cutting-edge AI and machine learning frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FiCpu className="w-8 h-8" />,
                title: "Deep Learning",
                description: "Neural networks with 100+ layers trained on decades of market data"
              },
              {
                icon: <FiActivity className="w-8 h-8" />,
                title: "Pattern Recognition",
                description: "Advanced algorithms identify profitable trading patterns in real-time"
              },
              {
                icon: <FiShield className="w-8 h-8" />,
                title: "Risk Analysis",
                description: "Sophisticated models assess and minimize investment risk"
              }
            ].map((tech, idx) => (
              <div key={idx} className="card-dark p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all">
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-white mb-3">{tech.title}</h3>
                <p className="text-dark-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center card-dark p-12">
            <h2 className="mb-6">Ready to Experience the Power of AI?</h2>
            <p className="text-dark-600 mb-8">
              Join thousands of investors who are already using FalconVest to make smarter investment decisions
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
