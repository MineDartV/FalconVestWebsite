import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-dark-800 mb-2">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-dark-600">Here's what's happening with your investments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-dark-700">Total Portfolio</h3>
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-dark-800">$0.00</p>
              <p className="text-sm text-green-600 mt-2">+0.00% this month</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-dark-700">Active Investments</h3>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-dark-800">0</p>
              <p className="text-sm text-dark-500 mt-2">No active investments yet</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-dark-700">Total Returns</h3>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-dark-800">$0.00</p>
              <p className="text-sm text-dark-500 mt-2">All-time returns</p>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/pricing" className="group p-6 border-2 border-dark-200 rounded-lg hover:border-primary-400 transition-all text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 group-hover:bg-primary-400 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-800 mb-2">New Investment</h3>
                <p className="text-sm text-dark-600">Start investing today</p>
              </Link>

              <Link to="/how-it-works" className="group p-6 border-2 border-dark-200 rounded-lg hover:border-primary-400 transition-all text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-800 mb-2">View Reports</h3>
                <p className="text-sm text-dark-600">Investment analytics</p>
              </Link>

              <Link to="/profile" className="group p-6 border-2 border-dark-200 rounded-lg hover:border-primary-400 transition-all text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-800 mb-2">Settings</h3>
                <p className="text-sm text-dark-600">Manage your profile</p>
              </Link>

              <Link to="/contact" className="group p-6 border-2 border-dark-200 rounded-lg hover:border-primary-400 transition-all text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-100 group-hover:bg-orange-600 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-800 mb-2">Get Help</h3>
                <p className="text-sm text-dark-600">Contact support</p>
              </Link>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-dark-800 mb-4">Getting Started</h2>
            <p className="text-dark-600 mb-6">
              Welcome to FalconVest! You're all set up and ready to start your investment journey. Here are some next steps:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-400 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-800">Complete your profile</h3>
                  <p className="text-sm text-dark-600">Add more details to personalize your experience</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-dark-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-dark-600 text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-800">Explore investment options</h3>
                  <p className="text-sm text-dark-600">Browse our curated investment opportunities</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-dark-200 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-dark-600 text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-800">Make your first investment</h3>
                  <p className="text-sm text-dark-600">Start building your portfolio with as little as $100</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
