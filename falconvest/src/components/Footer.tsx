import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-100 text-dark-600 py-12 border-t border-dark-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo showText={true} className="h-8 w-8" />
            </div>
            <p className="mb-4 text-sm">AI-powered stock market intelligence for modern investors.</p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <a key={social} href="#" className="text-dark-500 hover:text-primary-400 transition-colors text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-400 transition-colors text-sm">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-400 transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary-400 transition-colors text-sm">How It Works</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors text-sm">About</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">Careers</a></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">Security</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors text-sm">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-200 pt-8 text-center text-dark-500 text-sm">
          <p>© {new Date().getFullYear()} FalconVest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
