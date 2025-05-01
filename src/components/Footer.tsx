
import { Shield } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shield-dark text-white pt-12 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-shield-teal" />
              <span className="text-xl font-bold">SMS Shield</span>
            </div>
            <p className="text-gray-400 mb-4">
              Protecting you from SMS scams with advanced AI detection.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-shield-teal transition-colors">SMS Analysis</a></li>
              <li><a href="#" className="hover:text-shield-teal transition-colors">Fraud Prevention</a></li>
              <li><a href="#" className="hover:text-shield-teal transition-colors">Security Resources</a></li>
              <li><a href="#" className="hover:text-shield-teal transition-colors">Premium Protection</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-shield-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-shield-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-shield-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-shield-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {currentYear} SMS Shield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
