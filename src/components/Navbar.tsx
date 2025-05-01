
import { useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white sticky top-0 z-40 w-full border-b border-gray-200">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-shield-purple" />
          <span className="text-xl font-bold bg-gradient-to-r from-shield-blue to-shield-purple bg-clip-text text-transparent">SMS Shield</span>
        </div>
        
        <nav className="hidden md:flex ml-auto items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-shield-purple transition-colors">
            Home
          </a>
          <a href="#sms-checker" className="text-sm font-medium hover:text-shield-purple transition-colors">
            Check SMS
          </a>
          <a href="#" className="text-sm font-medium hover:text-shield-purple transition-colors">
            How It Works
          </a>
          <a href="#" className="text-sm font-medium hover:text-shield-purple transition-colors">
            Resources
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <Button variant="ghost">Login</Button>
          <Button className="bg-shield-purple hover:bg-shield-purple/90">
            Sign Up Free
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container py-4 px-4 space-y-4">
            <a href="#" className="block text-sm font-medium hover:text-shield-purple">
              Home
            </a>
            <a href="#sms-checker" className="block text-sm font-medium hover:text-shield-purple">
              Check SMS
            </a>
            <a href="#" className="block text-sm font-medium hover:text-shield-purple">
              How It Works
            </a>
            <a href="#" className="block text-sm font-medium hover:text-shield-purple">
              Resources
            </a>
            <div className="pt-2 space-y-2">
              <Button variant="ghost" className="w-full justify-center">Login</Button>
              <Button className="w-full justify-center bg-shield-purple hover:bg-shield-purple/90">
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
