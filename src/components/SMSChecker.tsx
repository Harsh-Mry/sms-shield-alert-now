
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { checkSMS } from '@/utils/smsUtils';
import { useToast } from '@/components/ui/use-toast';

export const SMSChecker = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<null | {
    isSpam: boolean;
    confidence: number;
    category?: string;
    explanation: string;
  }>(null);
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const handleCheck = () => {
    if (!message.trim()) {
      toast({
        title: "Empty message",
        description: "Please enter an SMS message to check.",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    
    setTimeout(() => {
      const result = checkSMS(message);
      setResult(result);
      setIsChecking(false);
    }, 1500);
  };

  const handleClear = () => {
    setMessage('');
    setResult(null);
  };

  return (
    <section id="sms-checker" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4">Check Your SMS</h2>
          <p className="text-gray-600">
            Paste any suspicious SMS message below and our AI will analyze it for potential threats.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <label htmlFor="sms-input" className="block mb-2 text-sm font-medium text-gray-700">
                SMS Message
              </label>
              <Textarea
                id="sms-input"
                placeholder="Paste your suspicious SMS message here..."
                className="min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
              <Button 
                onClick={handleCheck} 
                disabled={isChecking}
                className="bg-shield-purple hover:bg-shield-purple/90"
              >
                {isChecking ? (
                  <>
                    <Shield className="mr-2 h-4 w-4 animate-pulse" /> Analyzing...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" /> Check Message
                  </>
                )}
              </Button>
            </div>

            {result && (
              <div className={`mt-8 p-4 rounded-lg border ${
                result.isSpam 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center mb-2">
                  {result.isSpam ? (
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  )}
                  <h3 className="text-lg font-medium">
                    {result.isSpam ? 'Potential Scam Detected' : 'Message Appears Safe'}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        result.isSpam ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Safe</span>
                    <span>{result.confidence}% {result.isSpam ? 'Suspicious' : 'Safe'}</span>
                  </div>
                </div>

                {result.category && (
                  <div className="mb-2">
                    <span className="text-sm font-medium">Category: </span>
                    <span className="text-sm">{result.category}</span>
                  </div>
                )}
                
                <p className="text-sm">{result.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
