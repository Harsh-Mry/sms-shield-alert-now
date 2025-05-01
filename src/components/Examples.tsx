
import { Card, CardContent } from "@/components/ui/card";

export const Examples = () => {
  const exampleScams = [
    {
      message: "URGENT: Your account has been suspended. Click here to verify your information immediately: http://bit.ly/2xScam",
      type: "Bank Impersonation",
      warning: "Banks never ask for personal information via SMS. This link leads to a fake website designed to steal your credentials."
    },
    {
      message: "Congratulations! You've won a $1,000 Amazon gift card. Claim now: http://amaz0n-gift.scam/claim",
      type: "Prize Scam",
      warning: "If you didn't enter a contest, you can't win it. These offers are designed to collect your personal information."
    },
    {
      message: "Your package delivery was attempted but failed. Schedule a new delivery here: http://delivery-rescheduler.scam",
      type: "Delivery Notification Scam",
      warning: "Legitimate delivery services will provide specific information about your package and official tracking numbers."
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Common SMS Scams</h2>
          <p className="text-lg text-gray-600">
            Learn to recognize these common scam patterns that our system protects against.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exampleScams.map((scam, index) => (
            <Card key={index} className="overflow-hidden border-red-100 shadow-sm">
              <div className="bg-red-500 text-white px-4 py-2 text-sm font-medium">
                {scam.type}
              </div>
              <CardContent className="p-6">
                <div className="mb-4 bg-gray-50 p-4 rounded-md border border-gray-100">
                  <p className="text-sm italic">"{scam.message}"</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-red-600">Warning Signs:</h4>
                  <p className="text-sm text-gray-600">{scam.warning}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
