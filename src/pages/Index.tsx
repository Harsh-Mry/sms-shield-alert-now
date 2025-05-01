
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SMSChecker } from "@/components/SMSChecker";
import { Statistics } from "@/components/Statistics";
import { Examples } from "@/components/Examples";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <SMSChecker />
      <Statistics />
      <Examples />
      <Footer />
    </div>
  );
};

export default Index;
