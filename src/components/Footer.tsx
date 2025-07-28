import { Link } from "react-router-dom";
import { Plane, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/ea1ba94e-1e3c-4059-bc7c-d257125aa6f2.png" 
                alt="Sky Bites" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium inflight catering services for private jets, commercial airlines, and charter flights worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-300 hover:text-gold-luxury transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-8900</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="mailto:catering@skybites.com" className="flex items-center space-x-2 text-gray-300 hover:text-gold-luxury transition-colors">
                <Mail className="w-4 h-4" />
                <span>catering@skybites.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-luxury transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-gold-luxury transition-colors">
                  Menu & Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-luxury transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/request" className="text-gray-300 hover:text-gold-luxury transition-colors">
                  Request Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fast Quotes</h3>
            <div className="space-y-2">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-gold-luxury transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://t.me/skybites" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-gold-luxury transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sky Bites. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-gold-luxury text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gold-luxury text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;