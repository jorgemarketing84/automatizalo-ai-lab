
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-gradient">automatízalo</span>
            </Link>
            <p className="mt-4 text-sm text-automatizalo-gray max-w-xs">
              Cutting-edge AI and automation tools to help you work smarter, grow faster, and stay ahead of the future.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-automatizalo-gray hover:text-automatizalo-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-automatizalo-gray hover:text-automatizalo-purple transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-automatizalo-gray hover:text-automatizalo-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-automatizalo-gray hover:text-automatizalo-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-automatizalo-dark">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-automatizalo-dark">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/solutions#chatbots" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/solutions#lead-generation" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/solutions#content-creation" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/solutions#ai-agents" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-automatizalo-dark">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-automatizalo-gray hover:text-automatizalo-purple transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-automatizalo-gray">
            &copy; {currentYear} Automatízalo. All rights reserved.
          </p>
          <p className="text-sm text-automatizalo-gray mt-4 md:mt-0">
            Designed with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
