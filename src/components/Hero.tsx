import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Facebook } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              June's Gaming
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            All casino needs at one place.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gaming"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Join Us on Signal
            </Button>
            
            <Button
              variant="gaming-secondary"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Telegram
            </Button>
            
            <Button
              variant="gaming-secondary"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Messenger
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gaming-success rounded-full animate-pulse"></div>
              <span>Professional Gaming Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gaming-success rounded-full animate-pulse"></div>
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gaming-success rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;