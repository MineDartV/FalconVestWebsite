import React from 'react';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for individual investors getting started with AI-powered insights",
      features: [
        "Real-time market data",
        "Basic AI recommendations",
        "5 stock watchlists",
        "Email alerts",
        "Mobile app access",
        "Community support"
      ],
      highlighted: false,
      buttonText: "Start Free Trial",
      gradient: "from-dark-100 to-dark-50"
    },
    {
      name: "Professional",
      price: "149",
      description: "For serious investors who want comprehensive AI analysis and advanced features",
      features: [
        "Everything in Starter",
        "Advanced AI predictions",
        "Unlimited watchlists",
        "SMS + Push notifications",
        "Risk management tools",
        "Portfolio analytics",
        "Priority support",
        "API access"
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
      gradient: "from-primary-600 to-accent-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for institutional investors and trading firms",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated account manager",
        "White-label options",
        "Advanced API access",
        "Custom integrations",
        "24/7 phone support",
        "Training & onboarding"
      ],
      highlighted: false,
      buttonText: "Contact Sales",
      gradient: "from-dark-100 to-dark-50"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-dark-600">
              Choose the plan that fits your investment strategy. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative ${plan.highlighted ? 'md:-mt-8' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`card-dark p-8 h-full flex flex-col ${
                  plan.highlighted 
                    ? 'border-2 border-primary-500/50 shadow-2xl shadow-primary-500/20' 
                    : ''
                }`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-dark-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      {plan.price !== "Custom" ? (
                        <>
                          <span className="text-5xl font-bold text-white">${plan.price}</span>
                          <span className="text-dark-600 ml-2">/month</span>
                        </>
                      ) : (
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start space-x-3">
                        <FiCheck className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-primary-400' : 'text-accent-400'
                        }`} />
                        <span className="text-dark-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-xl hover:shadow-primary-500/30'
                        : 'bg-dark-200 text-white hover:bg-dark-300'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-dark-600">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Can I try FalconVest before committing?",
                  a: "Yes! All plans come with a 14-day free trial. No credit card required to start."
                },
                {
                  q: "Can I change or cancel my plan?",
                  a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can also pay by invoice."
                },
                {
                  q: "Is my data secure?",
                  a: "Yes. We use bank-level encryption and security protocols to protect your data. We never sell or share your personal information."
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes. If you're not satisfied within the first 30 days, we'll provide a full refund, no questions asked."
                }
              ].map((faq, idx) => (
                <div key={idx} className="card-dark p-6">
                  <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                  <p className="text-dark-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center card-dark p-12">
            <h2 className="mb-6">Still Have Questions?</h2>
            <p className="text-dark-600 mb-8">
              Our team is here to help you choose the right plan for your investment goals
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Contact Sales <FiArrowUpRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
