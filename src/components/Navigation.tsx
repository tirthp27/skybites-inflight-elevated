import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, ShoppingCart, Phone, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "AIRPORT LOCATION", path: "/locations" },
    { name: "OUR SERVICES", path: "/services" },
    { name: "CUSTOM ORDER", path: "/request" },
    { name: "ONLINE SHOP", path: "/shop" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/locations"
              className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              AIRPORT LOCATION
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              OUR SERVICES
            </Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            <span className="text-xs text-yellow-400 font-medium mt-1 tracking-wider">
              INFLIGHT CHEF DELIGHT
            </span>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/request"
              className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              CUSTOM ORDER
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1"
            >
              <span>ONLINE SHOP</span>
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-white text-emerald-800 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  2
                </span>
              </div>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-yellow-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-emerald-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Top Right Action Buttons */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <Button
          variant="default"
          size="sm"
          className="bg-white text-emerald-800 hover:bg-gray-100 font-medium"
        >
          CHEF AI
        </Button>
        <div className="flex items-center space-x-1">
          <Phone className="w-4 h-4 text-white" />
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="text-white text-sm">📧</span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;