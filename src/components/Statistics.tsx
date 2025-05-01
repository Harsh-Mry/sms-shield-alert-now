
import { Shield, MessageSquare, Phone } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      value: "91%",
      label: "of scams start with SMS",
      icon: MessageSquare,
      color: "text-shield-purple"
    },
    {
      value: "$54B",
      label: "lost to SMS scams yearly",
      icon: Phone,
      color: "text-shield-teal"
    },
    {
      value: "82%",
      label: "protection with SMS Shield",
      icon: Shield,
      color: "text-shield-blue"
    }
  ];

  return (
    <section className="py-16 bg-shield-dark text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">SMS Scams Are Everywhere</h2>
          <p className="text-gray-300">
            The threat is real and growing every day. SMS Shield gives you the protection you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 bg-white/10 p-4 rounded-full">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
