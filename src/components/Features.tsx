
import { MessageSquare, Shield, ShieldCheck, Search } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Advanced Spam Detection",
      description: "Our AI engine identifies spam patterns with 99.7% accuracy, protecting you from the latest scam techniques.",
      icon: ShieldCheck,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Real-Time Analysis",
      description: "Instantly analyze any suspicious SMS message and get immediate feedback on potential threats.",
      icon: Search,
      color: "bg-teal-100 text-teal-700"
    },
    {
      title: "Message History",
      description: "Keep track of previously scanned messages and build a personal database of known scams.",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Fraud Prevention",
      description: "Stay one step ahead of scammers with proactive alerts and educational resources about common tactics.",
      icon: Shield,
      color: "bg-amber-100 text-amber-700"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How SMS Shield Protects You</h2>
          <p className="text-lg text-gray-600">
            Our suite of protection tools keeps your personal information safe from scammers and fraudsters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-lg p-6 glass-card hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
