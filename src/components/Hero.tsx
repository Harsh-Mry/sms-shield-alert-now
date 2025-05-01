
import { Shield, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pt-16">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 hero-gradient opacity-30"></div>
        <div className="absolute inset-y-0 right-0 w-full h-full bg-gradient-to-l from-white via-transparent to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full border border-shield-teal/30 bg-shield-teal/10 px-3 py-1 text-sm font-medium text-shield-teal">
                <Shield className="mr-1 h-4 w-4" /> SMS Shield Protection
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Protect yourself from{" "}
              <span className="bg-gradient-to-r from-shield-blue to-shield-purple bg-clip-text text-transparent">
                SMS scams
              </span>
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-gray-700">
              Our advanced AI detects suspicious messages to keep you safe from phishing
              attempts, identity theft, and financial fraud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-shield-purple hover:bg-shield-purple/90">
                Check SMS Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-shield-teal text-shield-teal hover:bg-shield-teal/10"
              >
                How It Works
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className={`absolute inset-0 bg-shield-teal rounded-full blur-3xl opacity-20 ${isAnimating ? 'scale-110 opacity-30' : ''} transition-all duration-1000`}></div>
              <div className="relative bg-white shadow-xl rounded-lg p-6 border border-gray-100 shield-shadow">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium">SMS Protection</h3>
                  <span className="inline-flex items-center text-green-600">
                    <ShieldCheck className="h-5 w-5 mr-1" /> Active
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-md border border-green-100">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Safe Message</p>
                      <p className="text-xs text-gray-500">Friend Message</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-md border border-red-100">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Blocked Scam</p>
                      <p className="text-xs text-gray-500">Phishing Attempt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-md border border-yellow-100">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Suspicious Message</p>
                      <p className="text-xs text-gray-500">Unknown Sender</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>Protected by SMS Shield</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
