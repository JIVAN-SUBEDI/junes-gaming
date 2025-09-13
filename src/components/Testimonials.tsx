import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      avatar: "AR",
      review: "June's Gaming has been incredible! Fast transactions and excellent customer service. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      avatar: "SC",
      review: "The best gaming points provider I've used. Their rates are competitive and the cash-out process is seamless.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      avatar: "MJ",
      review: "Professional service with quick responses. June's Gaming makes casino gaming so much more convenient.",
      rating: 5
    },
    {
      name: "Emma Davis",
      avatar: "ED",
      review: "Reliable and trustworthy. I've been using their services for months and never had any issues. Great team!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ⭐ Happy Customers
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our satisfied customers have to say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming group hover:-translate-y-2"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-gaming-gold fill-gaming-gold" 
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground mb-6 text-center italic">
                  "{testimonial.review}"
                </p>

                {/* Avatar and name */}
                <div className="flex items-center justify-center space-x-3">
                  <Avatar className="border-2 border-primary/50">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;