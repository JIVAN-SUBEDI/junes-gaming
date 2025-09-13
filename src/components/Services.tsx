import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, CreditCard, Wallet, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Points",
      description: "Get gaming points for all your favorite casino games"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Chime",
      description: "Fast and secure Chime payment processing"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "PayPal",
      description: "Convenient PayPal transactions and transfers"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cash-Out Services",
      description: "Quick and reliable cash-out solutions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services Available
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive gaming services tailored to meet all your casino needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300 flex justify-center group-hover:scale-110 transform transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;