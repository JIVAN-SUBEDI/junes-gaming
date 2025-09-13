import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Facebook, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const socialButtons = [
    {
      name: "Signal",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "#signal",
      color: "bg-gradient-primary"
    },
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6" />,
      href: "#telegram",
      color: "bg-blue-500"
    },
    {
      name: "Messenger", 
      icon: <Facebook className="w-6 h-6" />,
      href: "#messenger",
      color: "bg-blue-600"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Available around the clock"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Quick Response",
      description: "Usually within 5 minutes"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast Processing",
      description: "Instant transactions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connect With Us
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community and start enjoying premium gaming services today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Social Connection Buttons */}
          <Card className="bg-gradient-card border-border/50 mb-12">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialButtons.map((social, index) => (
                  <Button
                    key={index}
                    variant="gaming"
                    size="lg"
                    className="h-20 flex-col space-y-2 group"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <span className="text-lg font-semibold">{social.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-gaming-surface border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming-card text-center group"
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-3 flex justify-center group-hover:text-accent transition-colors group-hover:scale-110 transform transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;