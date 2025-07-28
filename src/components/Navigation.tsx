import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Airports", path: "/airports" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                isActive("/") ? "text-amber-400" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                isActive("/menu") ? "text-amber-400" : "text-white"
              }`}
            >
              Menu
            </Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ea1ba94e-1e3c-4059-bc7c-d257125aa6f2.png" 
              alt="Sky Bites" 
              className="h-12 w-auto filter brightness-0 invert"
            />
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/airports"
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                isActive("/airports") ? "text-amber-400" : "text-white"
              }`}
            >
              Airports
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                isActive("/contact") ? "text-amber-400" : "text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-black/80 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-amber-400 px-4 ${
                    isActive(item.path) ? "text-amber-400" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link to="/request" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                  >
                    Request Catering
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;